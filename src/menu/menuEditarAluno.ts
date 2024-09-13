import Aluno from "../class/aluno";
import Menu from "./menu";

class MenuEditarAluno extends Menu {
    private aluno: Aluno

    constructor(aluno: Aluno) {
        super()
        this.aluno = aluno
    }

    public mostrarMenu(): void {
        console.log("--".repeat(20))
        console.log('Editar Aluno -', this.aluno.getNome())
        console.log("=-".repeat(20))
        console.log('1 - Editar nota da prova 1')
        console.log('2 - Editar nota da prova 2')
        console.log('3 - Editar nota da prova 3')
        console.log('4 - Editar nota das atividades')
        console.log('5 - Editar nota do API')
        console.log('0 - Sair')
        console.log("=-".repeat(20))
    }
}

export default MenuEditarAluno