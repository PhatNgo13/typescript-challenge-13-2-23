import express from "express";
import mysql from "mysql";

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1878",
  database: "classicmodels",
});

app.get("/", (req, res) => {
  const q = "SELECT * FROM classicmodels.customers";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/", (req, res) => {
  const q =
    "INSERT INTO customers (`customerNumber`,`customerName`,`contactLastName`,`contactFirstName`,`phone`,`addressLine1`,`addressLine2`,`city`,`state`,`postalCode`,`country`,`salesRepEmployeeNumber`,`creditLimit`) VALUES (?)";
  const values = [
    "001",
    "Johnson's",
    "Doe",
    "John",
    "12.34.5678",
    "420 Snoop",
    null,
    "CLT",
    "NC",
    "30000",
    "USA",
    "0001",
    "100000.00",
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8000, () => {
  console.log("Connection made!");
});
