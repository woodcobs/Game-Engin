// uploading this currently for reference
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var height = 400;
var width = 400;
var stiffness = 0.5;
var b = -1;
var angularB = -7;
var dt = 0.02;

var Vector2D = function (x = 0, y = 0,) {
    this.x = x;
    this.y = y;
};

Vector2D.prototype = {
    add: function (vectorB) {
        var cX = this.x + vectorB.x;
        var cY = this.y + vectorB.y;
        return new Vector2D(cX, cY);
    },

    subtract: function (vectorB) {
        var cX = this.x - vectorB.x;
        var cY = this.y - vectorB.y;
        return new Vector2D(cX, cY);
    },

    multiply: function (vectorB) {
        var cX = this.x * vectorB.x;
        var cY = this.y * vectorB.y;
        return new Vector2D(cX, cY);
    },

    scale: function (scalar) {
        return new Vector2D(scalar * this.x, scalar * this.y);
    },

    dot: function (vectorB) {
        var cX = this.x * vectorB.x;
        var cY = this.y * vectorB.y;
        return cX + cY;
    },

    cross: function (vectorB) {
        return (this.x * vectorB.y - this.y * vectorB.x);
    },

    rotate: function (angle, vectorB) {
        var x = this.x - vectorB.x;
        var y = this.y - vectorB.y;

        var xPrime = vectorB.x + ((x * Math.cos(angle)) - (y * Math.sin(angle)));
        var yPrime = vectorB.y + ((x * Math.sin(angle)) + (y * Math.cos(angle)));

        return new Vector2D(xPrime, yPrime);
    },

    toString: function () {
        return ("(X, Y) = (" + this.x + ", " + this.y + ")");
    }
}

// Currently using this for reference
var Rect = function (x, y, w, h, m) {
    if (typeof (m) === 'undefined') {
        this.m = 1;
    }

    this.width = w;
    this.height = h;

    this.topLeft = new Vector2D(x, y);
    this.topRight = new Vector2D(x + w, y);
    this.bottomRight = new Vector2D(x + w, y + h);
    this.bottomLeft = new Vector2D(x, y + h);

    this.v = new Vector2D(0, 0);
    this.a = new Vector2D(0, 0);
    this.theta = 0;
    this.omega = 0;
    this.alpha = 0;
    this.J = this.m * (this.height * this.height + this.width * this.width) / 12000;
};

/* The Rect class only defines the four corners of the rectangle, but sometimes we need the center point so we can calulate that by finding the diagonal and cutting it in half. */
Rect.prototype.center = function () {
    var diagonal = this.bottomRight.subtract(this.topLeft);
    var midpoint = this.topLeft.add(diagonal.scale(0.5));
    return midpoint;
};

/* To rotate a rectangle we'll update both its angle and rotate all four of the corners */
Rect.prototype.rotate = function (angle) {
    this.theta += angle;
    var center = this.center();

    this.topLeft = this.topLeft.rotate(angle, center);
    this.topRight = this.topRight.rotate(angle, center);
    this.bottomRight = this.bottomRight.rotate(angle, center);
    this.bottomLeft = this.bottomLeft.rotate(angle, center);

    return this;
};

/* Simply translate all four corners */
Rect.prototype.move = function (v) {
    this.topLeft = this.topLeft.add(v);
    this.topRight = this.topRight.add(v);
    this.bottomRight = this.bottomRight.add(v);
    this.bottomLeft = this.bottomLeft.add(v);

    return this;
}

var rect = new Rect(200, 0, 100, 50);
rect.v = new Vector2D(0, 2);
var spring = new Vector2D(200, 0);

ctx.strokeStyle = 'black';

var loop = function () {
    var f = new Vector2D(0, 0);
    var torque = 0;

    /* Start Velocity Verlet by performing the translation */
    var dr = rect.v.scale(dt).add(rect.a.scale(0.5 * dt * dt));
    rect.move(dr.scale(100));

    /* Add Gravity */
    f = f.add(new Vector2D(0, rect.m * 9.81));

    /* Add damping */
    f = f.add(rect.v.scale(b));

    /* Add Spring; we calculate this separately so we can calculate a torque. */
    var springForce = rect.topLeft.subtract(spring).scale(-1 * stiffness);
    /* This vector is the distance from the end of the spring to the box's center point */
    var r = rect.center().subtract(rect.topLeft);
    /* The cross product informs us of the box's tendency to rotate. */
    var rxf = r.cross(springForce);

    torque += -1 * rxf;
    f = f.add(springForce);

    /* Finish Velocity Verlet */
    var new_a = f.scale(rect.m);
    var dv = rect.a.add(new_a).scale(0.5 * dt);
    rect.v = rect.v.add(dv);

    /* Do rotation; let's just use Euler for contrast */
    torque += rect.omega * angularB; // Angular damping
    rect.alpha = torque / rect.J;
    rect.omega += rect.alpha * dt;
    var deltaTheta = rect.omega * dt;
    rect.rotate(deltaTheta);

    draw();
};

var draw = function () {
    ctx.strokeStyle = 'black';
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(rect.topLeft.x, rect.topLeft.y);
    ctx.rotate(rect.theta);
    ctx.strokeRect(0, 0, rect.width, rect.height);
    ctx.restore();

    ctx.strokeStyle = '#cccccc';
    ctx.beginPath();
    ctx.moveTo(spring.x, spring.y);
    ctx.lineTo(rect.topLeft.x, rect.topLeft.y);
    ctx.stroke();
    ctx.closePath();
};

setInterval(loop, dt * 1000);