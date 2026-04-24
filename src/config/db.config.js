import mysql2 from "mysql2/promise"
import { denv } from "./env.config.js"
const pool =mysql2.createPool
({
    host:denv.host,
    user:denv.user,
    password:denv.password,
    database:denv.database

})
export const connection = async()=>{
    try {
        const connected = await pool.getConnection()
        if(connected)
            console.log ("database connected successfully")
             
        else throw new error(" database connection failed")
        connected.release()
    } catch (error) {
        console.log(error)
    }
}
export default pool;