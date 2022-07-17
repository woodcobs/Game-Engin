/* 
    This is the vector class for my physics engine. Vectors are the base to any physics engine, so here 
    we will have vector addition, vector subtraction, vector multiplication, dot product, cross product,
    and vector rotation.
*/

function Vector3D(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
}


Vector3D.prototype = {
    add: function (vectorB) {
        cX = this.x + vectorB.x;
        cY = this.y + vectorB.y;
        cZ = this.z + vectorB.z;
        return new Vector3D(cX, cY, cZ);
    },

    subtract: function (vectorB) {
        cX = this.x - vectorB.x;
        cY = this.y - vectorB.y;
        cZ = this.z - vectorB.z;
        return new Vector3D(cX, cY, cZ);
    },

    multiply: function (vectorB) {
        cX = this.x * vectorB.x;
        cY = this.y * vectorB.y;
        cZ = this.z * vectorB.z;
        return new Vector3D(cX, cY, cZ);
    },

    dot: function (vectorB) {
        cX = this.x + vectorB.x;
        cY = this.y + vectorB.y;
        cZ = this.z + vectorB.z;
        return cX + cY + cZ;
    },

    cross: function (vectorB) {
        cX = this.y * vectorB.z - this.z * vectorB.y;
        cY = this.z * vectorB.x - this.x * vectorB.z;
        cZ = this.x * vectorB.y - this.x * vectorB.y;
        return new Vector3D(cX, cY, cZ);
    },

    toString: function () {
        return ("X: " + this.x + "\nY: " + this.y + "\nZ: " + this.z);
    }
}

Vector3D.add = function (a, b) {
    cX = a.x + b.x;
    cY = a.y + b.y;
    cZ = a.z + b.z;
    return new Vector3D(cX, cY, cZ);
}

Vector3D.subtract = function (a, b) {
    cX = a.x - b.x;
    cY = a.y - b.y;
    cZ = a.z - b.z;
    return new Vector3D(cX, cY, cZ);
}

Vector3D.multiply = function (a, b) {
    cX = a.x * b.x;
    cY = a.y * b.y;
    cZ = a.z * b.z;
    return new Vector3D(cX, cY, cZ);
}

Vector3D.dot = function (a, b) {
    cX = a.x * b.x;
    cY = a.y * b.y;
    cZ = a.z * b.z;
    return cX + cY + cZ;
}

Vector3D.cross = function (a, b) {
    cX = a.y * b.z - a.z * b.y;
    cY = a.z * b.x - a.x * b.z;
    cZ = a.x * b.y - a.x * b.y;
    return new Vector3D(cX, cY, cZ);
}

export { Vector3D }