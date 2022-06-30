export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${elemento} não existe verifique com admisntrador`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let templete = this.templete(model);
        if (this.escapar) {
            templete = templete.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = this.templete(model);
    }
}
