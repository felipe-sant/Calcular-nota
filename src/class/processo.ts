import Entrada from "../io/Entrada";
import Menu from "../menu/menu";

abstract class Processo {
    public execucao: boolean = true
    public entrada = new Entrada()
    public menu?: Menu
    public opcao: number = 0
    
    constructor(menu?: Menu) {
        if (menu) {
            this.menu = menu
        }
    }

    abstract processar(): void 
}

export default Processo;