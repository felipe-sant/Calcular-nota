import Faculdade from "../class/faculdade"
import Menu from "./menu"

class MenuPrincipal extends Menu {
    private faculdade: Faculdade

    constructor(faculdade: Faculdade) {
        super()
        this.faculdade = faculdade
    }

    public mostrarMenu(): void {
        console.log("--".repeat(20))
        console.log('Menu Principal -', this.faculdade.getNome())
        console.log("==".repeat(20))
        console.log('1 - Listar Alunos')
        console.log('2 - Editar Aluno')
        console.log('3 - Verificar Média dos Alunos')
        console.log('0 - Sair')
        console.log("==".repeat(20))
    }
}

export default MenuPrincipal