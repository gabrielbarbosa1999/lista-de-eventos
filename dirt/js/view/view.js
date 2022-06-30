export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    templete(model) {
        throw Error('E necessário declarar o metodo templete na classe filhas');
    }
    update(model) {
        this.elemento.innerHTML = this.templete(model);
    }
}
