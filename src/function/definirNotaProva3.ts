import Aluno from "../class/aluno";
import Entrada from "../io/Entrada";

function definirNotaProva3(aluno: Aluno): void {
    const entrada = new Entrada()
    const nota = entrada.receberNumero("Digite a nota da Prova 3:")
    aluno.setProva3(nota)
    console.log("\nNota da Prova 3 definida com sucesso\n")
}

export default definirNotaProva3