import fastify from "fastify";
import cors from '@fastify/cors'

const app = fastify()

app.register(cors)

app.get('/', () => {

})

app.listen({
    port: 3333
}).then(() => {
    console.log("Server running!")
})