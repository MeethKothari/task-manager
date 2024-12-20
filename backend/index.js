const express = require ("express");
const dotenv = require("dotenv");
const cors = require("cors")
const mongoose = require("mongoose");
const taskRoutes = require("./routes/task.routes")
const app = express();
dotenv.config();



// const port = process.env.PORT;
// const db_uri = process.env.DB_URI;
const port = 8082;
const db_uri = "mongodb+srv://meethukothari:ylr06RLtt0QpISnY@task-manager.b08sz.mongodb.net/task-manager?retryWrites=true&w=majority&appName=task-manager";


// mongoDB connection using mongoose
mongoose.connect(db_uri)
.then(()=>console.log(`DB connected at :${db_uri}`))
.catch((error)=>console.log("error connecting DB", {reason : error}))


app.use(cors())
app.use(express.json());
app.use("/tasks", taskRoutes)


app.listen(port, () => {
    console.log(`Backend listening at Port: ${port}`)
})