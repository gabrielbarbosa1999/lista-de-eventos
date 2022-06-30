export class EventosView {
    private elemento: HTMLElement;
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
    
    templete(): string {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Data/<th>
                        <th>Nome/<th>
                    <tr>
                <thead>
                <tbody>
                </tbody>
            <table>
        `;
    }

    update(): void {
        this.elemento.innerHTML =  this.templete();
    }
}