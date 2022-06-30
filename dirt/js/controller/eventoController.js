import { Evento } from "../models/evento.js";
import { Eventos } from "../models/eventos.js";
import { EventosView } from "../view/eventos-view.js";
import { MensagemView } from "../view/mensagem-view.js";
export class EventoController {
    constructor() {
        this.eventos = new Eventos();
        this.eventoView = new EventosView('#lista');
        this.mensagemView = new MensagemView('#mensagemAlert');
        this.inputData = document.querySelector('#data');
        this.inputNome = document.querySelector('#nome');
        this.eventoView.update(this.eventos);
    }
    adicionar() {
        const evento = this.criarEvento();
        this.eventos.adicionar(evento);
        console.log(this.eventos.listar());
        this.eventoView.update(this.eventos);
        this.mensagemView.update('Evento adicionado com sucesso!');
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
