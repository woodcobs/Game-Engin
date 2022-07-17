/* 
    This is the vector class for my physics engine. Vectors are the base to any physics engine, so here 
    we will have vector addition, vector subtraction, vector multiplication, dot product, cross product,
    and vector rotation.
*/

function Vector2D(x = 0, y = 0,) {
    this.x = x;
    this.y = y;
}


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

    dot: function (vectorB) {
        var cX = this.x + vectorB.x;
        var cY = this.y + vectorB.y;
        return cX + cY;
    },

    cross: function (vectorB) {
        var cX = this.y * vectorB.z - this.z * vectorB.y;
        var cY = this.x * vectorB.y - this.x * vectorB.y;
        return new Vector2D(cX, cY);
    },

    toString: function () {
        return ("(X, Y) = (" + this.x + ", " + this.y + ")");
    }
}

Vector2D.add = function (a, b) {
    var cX = a.x + b.x;
    var cY = a.y + b.y;
    return new Vector2D(cX, cY);
}

Vector2D.subtract = function (a, b) {
    var cX = a.x - b.x;
    var cY = a.y - b.y;
    return new Vector2D(cX, cY);
}

Vector2D.multiply = function (a, b) {
    var cX = a.x * b.x;
    var cY = a.y * b.y;
    return new Vector2D(cX, cY);
}

Vector2D.dot = function (a, b) {
    var cX = a.x * b.x;
    var cY = a.y * b.y;
    return cX + cY;
}

Vector2D.cross = function (a, b) {
    var cX = a.y * b.z - a.z * b.y;
    var cY = a.x * b.y - a.x * b.y;
    return new Vector2D(cX, cY);
}

export { Vector2D }