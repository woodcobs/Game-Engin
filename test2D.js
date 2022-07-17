import { Vector2D } from './Vector2D.js'

var testDefault = function () {
    console.log("Test Default Vector:\n")
    var vect2d = new Vector2D();
    console.log(vect2d.toString());
}

var testInstance = function () {
    // Create 2 test Vectors
    console.log("Test Instance Methods: ")
    var v1 = new Vector2D(1, 1);
    var v2 = new Vector2D(2, 2);
    console.log("\nv1: \n" + v1.toString());
    console.log("\nv2: \n" + v2.toString());


    console.log("\nTest add:");
    var v1Plusv2 = v1.add(v2);
    console.log("    Expected: (X, Y) = (3, 3)");
    console.log("      Actual: " + v1Plusv2.toString());

    console.log("\nTest subtract:");
    var v1Minusv2 = v1.subtract(v2);
    console.log("    Expected: (X, Y) = (-1, -1)");
    console.log("      Actual: " + v1Minusv2.toString());

    console.log("\nTest multiply:");
    var v1Multv2 = v1.multiply(v2);
    console.log("    Expected: (X, Y) = (2, 2)");
    console.log("      Actual: " + v1Multv2.toString());

    console.log("\nTest dot:");
    var v1Dotv2 = v1.dot(v2);
    console.log("    Expected: 4");
    console.log("      Actual: " + v1Dotv2.toString());

    console.log("\nTest cross:");
    var v1Crossv2 = v1.cross(v2);
    console.log("    Expected: (X, Y) = (0, 0)");
    console.log("      Actual: " + v1Crossv2.toString());

}

var testStatic = function () {
    // Create 2 test Vectors
    console.log("Test Static Methods: ")
    var v1 = new Vector2D(1, 1);
    var v2 = new Vector2D(2, 2);
    console.log("\nv1: \n" + v1.toString());
    console.log("\nv2: \n" + v2.toString());

    console.log("\nTest add:");
    var v1Plusv2 = Vector2D.add(v1, v2);
    console.log("    Expected: (X, Y) = (3, 3)");
    console.log("      Actual: " + v1Plusv2.toString());

    console.log("\nTest subtract:");
    var v1Minusv2 = Vector2D.subtract(v1, v2);
    console.log("    Expected: (X, Y) = (-1, -1)");
    console.log("      Actual: " + v1Minusv2.toString());

    console.log("\nTest multiply:");
    var v1Multv2 = Vector2D.multiply(v1, v2);
    console.log("    Expected: (X, Y) = (2, 2)");
    console.log("      Actual: " + v1Multv2.toString());

    console.log("\nTest dot:");
    var v1Dotv2 = Vector2D.dot(v1, v2);
    console.log("    Expected: 4");
    console.log("      Actual: " + v1Dotv2.toString());

    console.log("\nTest cross:");
    var v1Crossv2 = Vector2D.cross(v1, v2);
    console.log("    Expected: (X, Y) = (0, 0)");
    console.log("      Actual: " + v1Crossv2.toString());

}
testDefault();
console.log("\n---------------------------\n");
testInstance();
console.log("\n---------------------------\n");
testStatic();