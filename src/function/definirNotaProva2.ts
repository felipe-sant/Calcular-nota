import Aluno from "../class/aluno";
import Entrada from "../io/Entrada";

function definirNotaProva2(aluno: Aluno): void {
    const entrada = new Entrada()
    const nota = entrada.receberNumero("Digite a nota da Prova 2:")
    aluno.setProva2(nota)
    console.log("\nNota da Prova 2 definida com sucesso\n")
}

export default definirNotaProva2