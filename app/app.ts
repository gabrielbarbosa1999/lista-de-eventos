import { EventoController } from "./controller/eventoController.js";

const form = document.querySelector('#form');
const controller = new EventoController();

form.addEventListener("submit", event => {
    event.preventDefault();
    controller.adicionar();
});