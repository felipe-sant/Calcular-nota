import Aluno from "./class/aluno";
import Faculdade from "./class/faculdade";
import Curso from "./enum/cursos";
import MenuPrincipal from "./menu/menuPrincipal";
import ProcessoPrincipal from "./process/processoPrincipal";

const Fatec = new Faculdade("Fatec Jacareí")

const aluno1 = new Aluno("João", Curso.adm, "123")
const aluno2 = new Aluno("Maria", Curso.ds, "456")
const aluno3 = new Aluno("José", Curso.dsm, "789")
const aluno4 = new Aluno("Ana", Curso.ads, "101")
const aluno5 = new Aluno("Carlos", Curso.log, "112")
const aluno6 = new Aluno("Mariana", Curso.automacao, "131")
const aluno7 = new Aluno("Pedro", Curso.adm, "141")
const aluno8 = new Aluno("Paula", Curso.ds, "151")
const aluno9 = new Aluno("Lucas", Curso.dsm, "161")

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7, aluno8, aluno9]
alunos.forEach(aluno => Fatec.matricularAluno(aluno))

const menuPrincipal = new MenuPrincipal(Fatec)
const processoPrincipal = new ProcessoPrincipal(Fatec, menuPrincipal)

processoPrincipal.processar()