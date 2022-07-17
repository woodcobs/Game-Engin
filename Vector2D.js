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
        cX = this.x + vectorB.x;
        cY = this.y + vectorB.y;
        return new Vector2D(cX, cY);
    },

    subtract: function (vectorB) {
        cX = this.x - vectorB.x;
        cY = this.y - vectorB.y;
        return new Vector2D(cX, cY);
    },

    multiply: function (vectorB) {
        cX = this.x * vectorB.x;
        cY = this.y * vectorB.y;
        return new Vector2D(cX, cY);
    },

    dot: function (vectorB) {
        cX = this.x + vectorB.x;
        cY = this.y + vectorB.y;
        return cX + cY;
    },

    cross: function (vectorB) {
        cX = this.y * vectorB.z - this.z * vectorB.y;
        cY = this.x * vectorB.y - this.x * vectorB.y;
        return new Vector2D(cX, cY);
    },

    toString: function () {
        return ("X: " + this.x + "\nY: " + this.y);
    }
}

Vector2D.add = function (a, b) {
    cX = a.x + b.x;
    cY = a.y + b.y;
    return new Vector2D(cX, cY);
}

Vector2D.subtract = function (a, b) {
    cX = a.x - b.x;
    cY = a.y - b.y;
    return new Vector2D(cX, cY);
}

Vector2D.multiply = function (a, b) {
    cX = a.x * b.x;
    cY = a.y * b.y;
    return new Vector2D(cX, cY);
}

Vector2D.dot = function (a, b) {
    cX = a.x * b.x;
    cY = a.y * b.y;
    return cX + cY;
}

Vector2D.cross = function (a, b) {
    cX = a.y * b.z - a.z * b.y;
    cY = a.x * b.y - a.x * b.y;
    return new Vector2D(cX, cY);
}
