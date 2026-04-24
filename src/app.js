import express from "express"
import employeerouter from "./module/auth/employees/employees.router.js"
import leadsrouter from "./module/auth/leads/leads.router.js"
import courserouter from "./module/auth/courese/course.router.js"
import batchrouter from "./module/auth/batches/batches.router.js"
import  admissionrouter from "./module/auth/admissions/admission.routes.js"
import followupsrouter from "./module/auth/followups/followup.router.js"
import paymentrouter from "./module/auth/payment/payment.routes.js"
import lmsrouter from "./module/auth/lms/lms.routes.js"

const app = express()

app.use(express.json())

app.use("/api/employees",employeerouter)
app.use("/api/leads",leadsrouter)
app.use("/api/course",courserouter)
app.use("/api/batch",batchrouter)
app.use("/api/admission",admissionrouter)
app.use("/api/followups",followupsrouter)
app.use("/api/payment",paymentrouter)
app.use("/api/lms",lmsrouter)


export default app;