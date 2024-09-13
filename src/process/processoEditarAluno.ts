import Aluno from "../class/aluno";
import Faculdade from "../class/faculdade";
import Processo from "../class/processo";
import definirNotaAPI from "../function/definirNotaAPI";
import definirNotaAtividades from "../function/definirNotaAtividades";
import definirNotaProva1 from "../function/definirNotaProva1";
import definirNotaProva2 from "../function/definirNotaProva2";
import definirNotaProva3 from "../function/definirNotaProva3";
import pegarAluno from "../function/pegarAluno";
import Menu from "../menu/menu";
import MenuEditarAluno from "../menu/menuEditarAluno";
import limparTerminal from "../utils/limparTerminal";

class ProcessoEditarAluno extends Processo {
    private aluno: Aluno

    constructor(faculdade: Faculdade) {
        const aluno = pegarAluno(faculdade)
        const menu = new MenuEditarAluno(aluno)
        super(menu)
        this.aluno = aluno
    }

    public processar(): void {
        while (this.execucao) {
            limparTerminal()
            if (this.menu) { this.menu.mostrarMenu() }
            this.opcao = this.entrada.receberNumero("Digite a opção desejada:")
            switch (this.opcao) {
                case 1: 
                    definirNotaProva1(this.aluno)
                    this.entrada.aguardarEnter()
                    break
                case 2:
                    definirNotaProva2(this.aluno)
                    this.entrada.aguardarEnter()
                    break
                case 3:
                    definirNotaProva3(this.aluno)
                    this.entrada.aguardarEnter()
                    break
                case 4:
                    definirNotaAtividades(this.aluno)
                    this.entrada.aguardarEnter()
                    break
                case 5:
                    definirNotaAPI(this.aluno)
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

export default ProcessoEditarAluno;