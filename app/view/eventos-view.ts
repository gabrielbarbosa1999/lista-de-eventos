import { Eventos } from "../models/eventos.js";
import { View } from "./view.js";

export class EventosView extends View<Eventos> {
    protected templete(model: Eventos): string {
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
                            <td>${this.formatar(eventos.data)}</td>
                            <td>${eventos.nome}</td>
                        </tr>
                        `;
                    })}
                </tbody>
            </table>
        `;
    }

    private formatar(data: Date) {
        return new Intl.DateTimeFormat().format(data);
    }
}