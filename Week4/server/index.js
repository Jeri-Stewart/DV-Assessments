const express = require("express");
const cors = require("cors");
const app = express();


//set up middleware
app.use(cors());
app.use(express.json());

// link to contorller file
const controller = require("./controller");
// destruct variables
const { getCompliment, getFortune, getInspiration, getAffirmations, getGoals, createGoal, deleteGoal, updateGoal} = controller;

// set up endpoints
app.get("/api/compliment", getCompliment);
app.get("/api/fortune/", getFortune);
app.get("/api/inspiration/", getInspiration)
app.get("/api/affirmations/", getAffirmations);
app.get("/api/goals", getGoals)
app.post("/api/goals/", createGoal)
app.put("/api/goals/:id", updateGoal)
app.delete("/api/goals/:id", deleteGoal)

app.listen(4000, () => console.log("Server running on 4000"));
