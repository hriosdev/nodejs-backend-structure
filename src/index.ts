import express from "express";

const port = process.env.PORT || 5000;
const environment = process.env.ENVIRONMENT || "dev";
const app = express();

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Run the server
app.listen(port, () => {
  console.log(`Server running in '${environment}' at http://localhost:${port}`);
});

