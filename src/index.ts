import readline from 'readline'
import ViaCep from "./Models/ViaCep";

const read = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

read.question("Qual CEP você deseja consultar??: ", answer => {
    ViaCep.get(answer).then(response => console.log(response))
    read.close()
})


