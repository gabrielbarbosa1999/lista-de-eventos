export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor);
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