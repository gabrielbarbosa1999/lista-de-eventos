import { Evento } from "./evento.js";

export class Eventos {
    private eventos: Array<Evento> = [];

    adicionar(evento: Evento) {
        this.eventos.push(evento);
    }

    listar(): ReadonlyArray<Evento> {
        return this.eventos;
    }
}