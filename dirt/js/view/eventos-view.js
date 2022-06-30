export class EventosView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    templete() {
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
    update() {
        this.elemento.innerHTML = this.templete();
    }
}
