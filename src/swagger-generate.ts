const swaggerGenerate = require("swagger-autogen")();

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/index.ts"];

swaggerGenerate(outputFile, endpointsFiles)
  .then(() => {
    console.log("Swagger documentation generated successfully!");
  })
  .catch((error: Error) => {
    console.error("Error generating Swagger documentation:", error);
  });
