export class Evento {

    constructor(
        private _data: Date,
        private readonly _nome: String
    ){}

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    get nome(): String {
        return this._nome;
    }
}