import express from "express"
import cors from "cors"
import { prisma } from "db/client"

const port = 8000
const app = express()

app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.post("/addtodo", async (req, res) => {
    try {

        const body = req.body

        const newTodo = await prisma.todo.create({
            data: {
                userId: "asd",
                task: "asdads"
            }
        })
        res.json({
            message: newTodo.id
        })

        return

    }catch(e) {
        console.log(e)
        res.status(500).json({
            message: "something went wrong"
        })
        return
    }
})

