import colors from 'colors'
import server, {connectDB} from "./server";


const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(colors.cyan.bold(`Rest api en el puerto ${port}`))
    console.log(colors.bgBlue.white.bold(`Documentación disponible en http://localhost:${port}/docs`))
})