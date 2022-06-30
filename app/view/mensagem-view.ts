import { View } from "./view.js";

export class MensagemView extends View {
    
    templete(model: string): string {
        return `
            <p class="alert">${model}</p>
        `;
    }

    update(model: string): void {
        const templete = this.templete(model);
        this.elemento.innerHTML = templete;
    }
}