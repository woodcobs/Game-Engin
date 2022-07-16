/* 
    This is the vector class for my physics engine. Vectors are the base to any physics engine, so here 
    we will have vector addition, vector subtraction, vector multiplication, dot product, cross product,
    and vector rotation.
*/

function Vector(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector.add = function (a, b) {
    cX = a.x + b.x;
    cY = a.y + b.y;
    cZ = a.z + b.z;
    return Vector(cX, cY, cZ);
}

Vector.subtract = function (a, b) {
    cX = a.x - b.x;
    cY = a.y - b.y;
    cZ = a.z - b.z;
    return Vector(cX, cY, cZ);
}

Vector.multiply = function (a, b) {
    cX = a.x * b.x;
    cY = a.y * b.y;
    cZ = a.z * b.z;
    return Vector(cX, cY, cZ);
}

Vector.dot = function (a, b) {
    cX = a.x * b.x;
    cY = a.y * b.y;
    cZ = a.z * b.z;
    return cX + cY + cZ;
}

Vector.cross = function (a, b) {
    cX = a.y * b.z - a.z * b.y;
    cY = a.z * b.x - a.x * b.z;
    cZ = a.x * b.y - a.x * b.y;
    return Vector(cX, cY, cZ);
}