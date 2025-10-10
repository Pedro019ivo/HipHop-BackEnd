//import { clear } from "console"
import fastify from "fastify"
import { env } from "./shared/env/environments"
import { appRoutes } from "./shared/routes/app.routes"

const app = fastify()
//exemplo de rota get
// app.get("/hello", () => {
// return "Bem Vindo"
// })

app.register(appRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("http server running!")
  })
