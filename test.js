const assert = require("assert");
const message = require("./app");

assert.strictEqual(
    message,
    "CI/CD Pipeline Application is Running!"
);

console.log("All tests passed successfully!");