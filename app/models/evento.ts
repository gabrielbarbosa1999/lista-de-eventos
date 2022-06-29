export class Evento {
    private _data: Date;
    private _nome: String;

    constructor(data: Date, nome: String) {
        this._data = data;
        this._nome = nome;
    }

    get data(): Date{
        return this._data;
    }

    get nome(): String {
        return this._nome;
    }
}