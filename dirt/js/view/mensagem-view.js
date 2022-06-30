import { View } from "./view.js";
export class MensagemView extends View {
    templete(model) {
        return `
            <p class="alert">${model}</p>
        `;
    }
    update(model) {
        const templete = this.templete(model);
        this.elemento.innerHTML = templete;
    }
}
