import Aluno from "../class/aluno";
import Entrada from "../io/Entrada";

function definirNotaAPI(aluno: Aluno): void {
    const entrada = new Entrada()
    const nota = entrada.receberNumero("Digite a nota da API:")
    aluno.setApi(nota)
    console.log("\nNota da API definida com sucesso\n")
}

export default definirNotaAPI