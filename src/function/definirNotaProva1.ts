import Aluno from "../class/aluno";
import Entrada from "../io/Entrada";

function definirNotaProva1(aluno: Aluno): void {
    const entrada = new Entrada()
    const nota = entrada.receberNumero("Digite a nota da Prova 1:")
    aluno.setProva1(nota)
    console.log("\nNota da Prova 1 definida com sucesso\n")
}

export default definirNotaProva1