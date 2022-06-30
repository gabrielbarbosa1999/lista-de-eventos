export class Evento {

    constructor(
        private _data: Date,
        private readonly _nome: String
    ){}

    public static criaDe(dateString: String, nomeString: string): Evento {
        const exp = /-/g;
        const data = new Date(dateString.replace(exp, ','));
        const nome = nomeString;
        return new Evento(data, nome);
    }

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    get nome(): String {
        return this._nome;
    }
}