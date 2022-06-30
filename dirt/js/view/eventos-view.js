export class EventosView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    templete(model) {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Nome</th>
                    <tr>
                <thead>
                <tbody>
                    ${model.listar().map(eventos => {
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(eventos.data)}</td>
                            <td>${eventos.nome}</td>
                        </tr>
                        `;
        })}
                </tbody>
            </table>
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.templete(model);
    }
}
