export class Eventos {
    constructor() {
        this.eventos = [];
    }
    adicionar(evento) {
        this.eventos.push(evento);
    }
    listar() {
        return this.eventos;
    }
}
