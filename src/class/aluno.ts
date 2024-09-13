import Curso from "../enum/cursos"

class Aluno {
    private matricula: string
    private nome: string
    private curso: Curso

    private prova1: number
    private prova2: number
    private prova3: number
    private atividades: number
    private api: number

    constructor(nome: string, curso: Curso, matricula: string) {
        this.matricula = matricula
        this.nome = nome
        this.curso = curso
        this.prova1 = 0
        this.prova2 = 0
        this.prova3 = 0
        this.atividades = 0
        this.api = 0
    }

    calcularMediaFinal(): number {
        return ((this.prova1 * 0.1) + (this.prova2 * 0.1) + (this.prova3 * 0.3) + (this.atividades * 0.2) + (this.api * 0.3))
    }

    getMatricula() { return this.matricula }
    getNome() { return this.nome }
    getCurso() { return this.curso }
    getProva1() { return this.prova1 }
    getProva2() { return this.prova2 }
    getProva3() { return this.prova3 }
    getAtividades() { return this.atividades }
    getApi() { return this.api }

    setProva1(prova1: number) { this.prova1 = prova1 }
    setProva2(prova2: number) { this.prova2 = prova2 }
    setProva3(prova3: number) { this.prova3 = prova3 }
    setAtividades(atividades: number) { this.atividades = atividades }
    setApi(api: number) { this.api = api }
}

export default Aluno;