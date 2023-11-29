import { connectDB } from "./Database/database.js";
import { app } from "./middlewares.js";


connectDB();

app.listen(process.env.PORT,()=> console.log("Listening on port:",process.env.PORT))