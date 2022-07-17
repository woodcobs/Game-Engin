import { Vector3D } from './Vector3D.js'

var testDefault = function () {
    console.log("Test Default Vector:\n")
    var vect3d = new Vector3D();
    console.log(vect3d.toString());
}

var testInstance = function () {
    // Create 2 test Vectors
    console.log("Test Instance Methods: ")
    var v1 = new Vector3D(1, 1, 1);
    var v2 = new Vector3D(2, 2, 2);
    console.log("\nv1: \n" + v1.toString());
    console.log("\nv2: \n" + v2.toString());


    console.log("\nTest add:");
    var v1Plusv2 = v1.add(v2);
    console.log("    Expected: (X, Y, Z) = (3, 3, 3)");
    console.log("      Actual: " + v1Plusv2.toString());

    console.log("\nTest subtract:");
    var v1Minusv2 = v1.subtract(v2);
    console.log("    Expected: (X, Y, Z) = (-1, -1, -1)");
    console.log("      Actual: " + v1Minusv2.toString());

    console.log("\nTest multiply:");
    var v1Multv2 = v1.multiply(v2);
    console.log("    Expected: (X, Y, Z) = (2, 2, 2)");
    console.log("      Actual: " + v1Multv2.toString());

    console.log("\nTest dot:");
    var v1Dotv2 = v1.dot(v2);
    console.log("    Expected: 6");
    console.log("      Actual: " + v1Dotv2.toString());

    console.log("\nTest cross:");
    var v1Crossv2 = v1.cross(v2);
    console.log("    Expected: (X, Y, Z) = (0, 0, 0)");
    console.log("      Actual: " + v1Crossv2.toString());

}

var testStatic = function () {
    // Create 2 test Vectors
    console.log("Test Static Methods: ")
    var v1 = new Vector3D(1, 1, 1);
    var v2 = new Vector3D(2, 2, 2);
    console.log("\nv1: \n" + v1.toString());
    console.log("\nv2: \n" + v2.toString());

    console.log("\nTest add:");
    var v1Plusv2 = Vector3D.add(v1, v2);
    console.log("    Expected: (X, Y, Z) = (3, 3, 3)");
    console.log("      Actual: " + v1Plusv2.toString());

    console.log("\nTest subtract:");
    var v1Minusv2 = Vector3D.subtract(v1, v2);
    console.log("    Expected: (X, Y, Z) = (-1, -1, -1)");
    console.log("      Actual: " + v1Minusv2.toString());

    console.log("\nTest multiply:");
    var v1Multv2 = Vector3D.multiply(v1, v2);
    console.log("    Expected: (X, Y, Z) = (2, 2, 2)");
    console.log("      Actual: " + v1Multv2.toString());

    console.log("\nTest dot:");
    var v1Dotv2 = Vector3D.dot(v1, v2);
    console.log("    Expected: 6");
    console.log("      Actual: " + v1Dotv2.toString());

    console.log("\nTest cross:");
    var v1Crossv2 = Vector3D.cross(v1, v2);
    console.log("    Expected: (X, Y, Z) = (0, 0, 0)");
    console.log("      Actual: " + v1Crossv2.toString());

}
testDefault();
console.log("\n---------------------------\n");
testInstance();
console.log("\n---------------------------\n");
testStatic();