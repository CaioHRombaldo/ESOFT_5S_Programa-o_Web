import app from './app'

function main() {
    try {
        app.listen(3000, 'localhost', async() => {
            console.log("Iniciando Servidor")
        })
    } catch(err){
        console.error('Erro ao Iniciar Servidor ', err)
    }

}

main()
