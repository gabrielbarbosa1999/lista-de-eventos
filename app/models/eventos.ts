import { Evento } from "./evento.js";

export class Eventos {
    private eventos: Array<Evento> = [];

    adicionar(evento: Evento) {
        this.eventos.push(evento);
    }

    listar(): readonly Evento[] {
        return this.eventos;
    }
}