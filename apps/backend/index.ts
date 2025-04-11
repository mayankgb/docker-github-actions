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
        console.log(body)

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

app.get("/all", async(req, res) => {
    try{

        const data = await prisma.user.findMany({})

        if (data.length > 0) {
            res.json({
                data: data
            })
            return
        }

        res.json({
            message: "no data found"
        })
        return

    }catch(e){
        console.log(e)
        res.status(500).json({
            message: "something went wrong"
        })
    }
})

app.post("/create", async (req, res) => {
    
    const {username, password} = req.body

    const newUser = await prisma.user.create({
        data: {
            username: username,
            password: password
        }
    })

    res.json({
        message: newUser.id
    })
    return

})

app.listen(port)

