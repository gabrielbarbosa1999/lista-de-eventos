export class Evento {
    constructor(_data, _nome) {
        this._data = _data;
        this._nome = _nome;
    }
    static criaDe(dateString, nomeString) {
        const exp = /-/g;
        const data = new Date(dateString.replace(exp, ','));
        const nome = nomeString;
        return new Evento(data, nome);
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get nome() {
        return this._nome;
    }
}
