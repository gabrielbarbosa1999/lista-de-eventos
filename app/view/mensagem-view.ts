import { View } from "./view.js";

export class MensagemView extends View<string> {
    
    templete(model: string): string {
        return `
            <p class="alert">${model}</p>
        `;
    }
    
}