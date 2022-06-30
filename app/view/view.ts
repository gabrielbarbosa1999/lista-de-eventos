export class View<T> {
    protected elemento: HTMLElement;
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    templete(model: T): string {
        throw Error('E necessário declarar o metodo templete na classe filhas');
    }

    update(model: T): void {
        this.elemento.innerHTML =  this.templete(model);
    }
}