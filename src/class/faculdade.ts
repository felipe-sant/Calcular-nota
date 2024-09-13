import Aluno from "./aluno"

class Faculdade {
    private nome: string
    private alunos: Aluno[] = []

    constructor(nome: string) {
        this.nome = nome
    }

    getNome() { return this.nome }
    getAlunos() { return this.alunos }

    matricularAluno(aluno: Aluno) {
        this.alunos.push(aluno)
    }

    buscarAluno(matricula: string): Aluno | undefined {
        return this.alunos.find(aluno => aluno.getMatricula() === matricula)
    }

    listarAlunos() {
        this.alunos.forEach(aluno => {
            console.log(`Matrícula: ${aluno.getMatricula()}, Nome: ${aluno.getNome()}, Curso: ${aluno.getCurso()}`)
        })
    }

    calcularMediaFinal(matricula: string): number {
        let aluno = this.buscarAluno(matricula)
        if (!aluno) throw new Error("Aluno não encontrado")
        return aluno.calcularMediaFinal()
    }
}

export default Faculdade;