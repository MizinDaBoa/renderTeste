import express from "express"
import connectDB from "./config/db.js"
import workshopRoutes from "./routes/workshopRoutes.js"
import vehicleRoutes from "./routes/vehicleRoutes.js"
import maintenceRoutes from "./routes/maintenceRoutes.js"

connectDB()

const app = express()
app.use(express.json())

app.use("/workshop",workshopRoutes)
app.use("/vehicle",vehicleRoutes)
app.use("/maintence",maintenceRoutes)

app.listen(3000, () => console.log('Server running on port 3000'))