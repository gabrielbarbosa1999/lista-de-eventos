import { DiasDaSemana } from "../enums/dia-da-semana.js";
import { Evento } from "../models/evento.js";
import { Eventos } from "../models/eventos.js";
import { EventosView } from "../view/eventos-view.js";
import { MensagemView } from "../view/mensagem-view.js";

export class EventoController {
    private inputData: HTMLInputElement;
    private inputNome: HTMLInputElement;
    private eventos = new Eventos();
    private eventoView = new EventosView('#lista', true);
    private mensagemView = new MensagemView('#mensagemAlert', true);

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputNome = document.querySelector('#nome') as HTMLInputElement;
        this.eventoView.update(this.eventos);
    }

    public adicionar() {
        const evento = Evento.criaDe(
            this.inputData.value,
            this.inputNome.value
        );
        if(!this.ehDiaUltil(evento.data)) {
            this.mensagemView.update("Apenas evento em dias ulteis são aceitas");
            return;
        }
        this.eventos.adicionar(evento);
        console.log(this.eventos.listar());
        this.limparForumlario();
        this.atualizaView();
    }

    private ehDiaUltil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    private limparForumlario() {
        this.inputData.value = '';
        this.inputNome.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.eventoView.update(this.eventos);
        this.mensagemView.update('Evento adicionado com sucesso!')
    }
}