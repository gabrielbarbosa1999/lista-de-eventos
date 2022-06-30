import { EventoController } from "./controller/eventoController.js";
const controller = new EventoController();
const form = document.querySelector('#form');
if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.adicionar();
    });
}
else {
    throw Error('Não foi possivel inicializar a aplicação. Verifique se o form existe');
}
