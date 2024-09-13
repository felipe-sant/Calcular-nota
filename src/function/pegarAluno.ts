import Aluno from "../class/aluno";
import Faculdade from "../class/faculdade";
import Entrada from "../io/Entrada";

function pegarAluno(faculdade: Faculdade): Aluno {
    const entrada = new Entrada()
    const matricula = entrada.receberTexto("Digite a matrícula do aluno:")
    const aluno = faculdade.buscarAluno(matricula)
    if (!aluno) throw new Error("Aluno não encontrado")
    return aluno
}

export default pegarAluno