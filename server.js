import app from "./src/app.js";
import { PORT } from "./src/config/env.config.js";
import { connection } from "./src/config/db.config.js";



app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
    connection()
})
