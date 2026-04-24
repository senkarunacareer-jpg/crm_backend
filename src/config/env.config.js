import dotenv from "dotenv"
dotenv.config()
export const PORT = process.env.PORT


export const denv={
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE

}