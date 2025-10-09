//import { clear } from "console"
import fastify from "fastify"
import { env } from "./shared/env/environments"

const app = fastify()
//exemplo de rota get
// app.get("/hello", () => {
// return "Bem Vindo"
// })

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("http server running!")
  })
