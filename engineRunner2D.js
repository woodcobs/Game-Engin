// uploading this currently for reference
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var height = 880;
var width = 560;
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

var Circle = function() {

}

// Currently using this for reference
// x and y represent the starting coordinates of the top left of this object.
// width represents the width of the object
// height represents the height of the rectangle
// m represents the mass of the object
var Rect = function (x, y, w, h, mass = 1) { 

    this.width = w;
    this.height = h;
    this.mass = mass;

    this.topLeft = new Vector2D(x, y);
    this.topRight = new Vector2D(x + w, y);
    this.bottomRight = new Vector2D(x + w, y + h);
    this.bottomLeft = new Vector2D(x, y + h);

    this.velocity = new Vector2D(0, 0); // initial velocity
    this.acceleration = new Vector2D(0, 0); //initial acceleration
    this.theta = 0; // angle
    this.omega = 0;
    this.alpha = 0;
    this.J = this.mass * (this.height * this.height + this.width * this.width) / 12000;
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

height = 880,
    width = 560,
    x = 200,
    y = 0,
    vy = 0,
    ay = 0,
    m = 0.1,    // Ball mass in kg
    r = 10,     // Ball radius in cm, or pixels.
    dt = 0.02,  // Time step.
    e = -0.5,   // Coefficient of restitution ("bounciness")
    rho = 1.2,  // Density of air. Try 1000 for water.
    C_d = 0.2, // Coeffecient of drag for a ball
    A = Math.PI * r * r / 10000 // Frontal area of the ball; divided by 10000 to compensate for the 1px = 1cm relation
    ;

ctx.fillStyle = 'red';

function loop()
{ 
    var fy = 0;
    
    /* Weight force, which only affects the y-direction (because that's the direction gravity points). */
    fy += m * 9.81;
    
    /* Air resistance force; this would affect both x- and y-directions, but we're only looking at the y-axis in this example. */
    fy += -1 * 0.5 * rho * C_d * A * vy * vy;
    
    /* Verlet integration for the y-direction */
    dy = vy * dt + (0.5 * ay * dt * dt);
    /* The following line is because the math assumes meters but we're assuming 1 cm per pixel, so we need to scale the results */
    y += dy * 100;
    new_ay = fy / m;
    avg_ay = 0.5 * (new_ay + ay);
    vy += avg_ay * dt;
    
    /* Let's do very simple collision detection */
    if (y + r > height && vy > 0)
    {
        /* This is a simplification of impulse-momentum collision response. e should be a negative number, which will change the velocity's direction. */
        vy *= e; 
        /* Move the ball back a little bit so it's not still "stuck" in the wall. */
        y = height - r;                        
    }
    
    draw();
}

function draw()
{
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
}
   
/* A real project should use requestAnimationFrame, and you should time the frame rate and pass a variable "dt" to your physics function. This is just a simple brute force method of getting it done. */
setInterval(loop, dt * 1000);