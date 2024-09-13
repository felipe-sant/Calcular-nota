import Aluno from "../class/aluno";
import Entrada from "../io/Entrada";

function definirNotaAtividades(aluno: Aluno): void {
    const entrada = new Entrada()
    const nota = entrada.receberNumero("Digite a nota do trabalho:")
    aluno.setAtividades(nota)
    console.log("\nNota do trabalho definida com sucesso\n")
}

export default definirNotaAtividades