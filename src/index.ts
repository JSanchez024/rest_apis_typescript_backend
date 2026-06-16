import colors from 'colors'
import server from "./server";


const port = process.env.PORT || 4500
server.listen(port, () => {
    console.log(colors.cyan.bold(`Rest api en el puerto ${port}`))
    console.log(colors.bgBlue.white.bold(`Documentación disponible en http://localhost:${port}/docs`))
})