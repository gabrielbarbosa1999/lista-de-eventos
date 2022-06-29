import { Evento } from "../models/evento.js";
import { Eventos } from "../models/eventos.js";
export class EventoController {
    constructor() {
        this.eventos = new Eventos;
        this.inputData = document.querySelector('#data');
        this.inputNome = document.querySelector('#nome');
    }
    adicionar() {
        const evento = this.criarEvento();
        this.eventos.adicionar(evento);
        console.log(this.eventos.listar());
        this.limparForumlario();
    }
    criarEvento() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const nome = this.inputNome.value;
        return new Evento(data, nome);
    }
    limparForumlario() {
        this.inputData.value = '';
        this.inputNome.value = '';
        this.inputData.focus();
    }
}
