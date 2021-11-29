// PERFIL: ADMINISTRADOR/PROGRAMADOR DE SERVICIOS
// HINT: Programador Experto | Arquitecto de Software
// * Definifinir y Documentar los servicios disponibles
// * Usar librerías de terceros (mssql, mysql, mongo, pypal, ...)
// * Proveer funcionalidad segura (validaciones, errores, ...)

// Los servicios (en este caso) son funciones que resuelven la lógica de los datos
// Están pensados para ser consumidos en algún lugar del proyecto
// Sobre todo en las rutas que devuelvan los resultados a los usuarios

const frutas = [
    {
        id: 1,
        name: "Manzana"
    },
    {
        id: 2,
        name: "Mango"
    },
    {
        id: 3,
        name: "Pera"
    },
]

function getFrutasAll() {
    return frutas
}

function getFrutaFirst() {
    return frutas[0]
}

module.exports = { 
    getFrutasAll, 
    getFrutaFirst
}