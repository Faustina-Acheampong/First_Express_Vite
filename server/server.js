const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({flowers: ["Rose", "Tulip", "Daisy", "Orchid", "Iris"] });
});

const person = {
    name: "Edgar Johnson",
    age: 30,
    gender: "Male",
    occupation: "Software Developer",
    email: "edgar.johnson@gmail.com",
    telephone: "123-456-7890"
};

app.get("/api/person", (req, res) => {
    res.json(person);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
    
    