export class Evento {
    constructor(_data, _nome) {
        this._data = _data;
        this._nome = _nome;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get nome() {
        return this._nome;
    }
}
