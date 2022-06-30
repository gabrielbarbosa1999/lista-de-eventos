import { DiasDaSemana } from "../enums/dia-da-semana.js";
import { Evento } from "../models/evento.js";
import { Eventos } from "../models/eventos.js";
import { EventosView } from "../view/eventos-view.js";
import { MensagemView } from "../view/mensagem-view.js";
export class EventoController {
    constructor() {
        this.eventos = new Eventos();
        this.eventoView = new EventosView('#lista', true);
        this.mensagemView = new MensagemView('#mensagemAlert', true);
        this.inputData = document.querySelector('#data');
        this.inputNome = document.querySelector('#nome');
        this.eventoView.update(this.eventos);
    }
    adicionar() {
        const evento = Evento.criaDe(this.inputData.value, this.inputNome.value);
        if (!this.ehDiaUltil(evento.data)) {
            this.mensagemView.update("Apenas evento em dias ulteis são aceitas");
            return;
        }
        this.eventos.adicionar(evento);
        console.log(this.eventos.listar());
        this.limparForumlario();
        this.atualizaView();
    }
    ehDiaUltil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limparForumlario() {
        this.inputData.value = '';
        this.inputNome.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.eventoView.update(this.eventos);
        this.mensagemView.update('Evento adicionado com sucesso!');
    }
}
