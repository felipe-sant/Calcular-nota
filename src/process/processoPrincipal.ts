import Faculdade from "../class/faculdade";
import Processo from "../class/processo";
import pegarAluno from "../function/pegarAluno";
import Menu from "../menu/menu";
import MenuEditarAluno from "../menu/menuEditarAluno";
import limparTerminal from "../utils/limparTerminal";
import ProcessoEditarAluno from "./processoEditarAluno";

class ProcessoPrincipal extends Processo {
    public faculdade: Faculdade

    constructor(faculdade: Faculdade, menu: Menu) {
        super(menu)
        this.faculdade = faculdade
    }

    public processar(): void {
        while (this.execucao) {
            limparTerminal()
            if (this.menu) { this.menu.mostrarMenu() }
            this.opcao = this.entrada.receberNumero("Digite a opção desejada:")
            switch (this.opcao) {
                case 1:
                    limparTerminal()
                    this.faculdade.listarAlunos()
                    this.entrada.aguardarEnter()
                    break
                case 2:
                    const processoEditarAluno = new ProcessoEditarAluno(this.faculdade)
                    processoEditarAluno.processar()
                    break
                case 3:
                    const aluno = pegarAluno(this.faculdade)
                    const media = aluno.calcularMediaFinal()
                    limparTerminal()
                    console.log("Aluno:", aluno.getNome())
                    console.log("Prova 1:", aluno.getProva1())
                    console.log("Prova 2:", aluno.getProva2())
                    console.log("Prova 3:", aluno.getProva3())
                    console.log("Atividades:", aluno.getAtividades())
                    console.log("API:", aluno.getApi())
                    console.log("--".repeat(20))
                    console.log("Média Final:", media)
                    this.entrada.aguardarEnter()
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log("Opção inválida")
                    this.entrada.aguardarEnter()
            }
        }
    }
}

export default ProcessoPrincipal;