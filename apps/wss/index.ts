import { WebSocketServer } from "ws";
import { prisma } from "db/client";

const wss = new WebSocketServer({port: 8080})


wss.on("connection", function connection(ws) {
    ws.on("error", () => console.log("adssd"))

    ws.on("message", async (message: any) => {
        try{
            const data = JSON.parse(message)

            if (data.type === "create") {
                const newUser = await prisma.user.create({
                    data: {
                        username: data.username,
                        password: data.password
                    }
                })
                ws.send(JSON.stringify({
                    newUserId: newUser.id
                }))
            }

        }catch(e) {
            console.log(e)
            ws.send(JSON.stringify({
                message: "something went wrong"
            }))
        }
    })

    ws.on("close", () => {
        console.log("close")
    })
})