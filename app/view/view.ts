export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${elemento} não existe verifique com admisntrador`);
        }
        if(escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract templete(model: T): string;

    public update(model: T): void  {
        let templete = this.templete(model);
        if(this.escapar) {
            templete = templete.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML =  this.templete(model);
    }
}