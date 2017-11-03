export class Aluno {
    private _nome: string;
    private _cpf: string;
    private _email: string;
    private _metas: Map<string, string>;

    public constructor() {
        this.clean();
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get metas(): Map<string, string> {
        return this._metas;
    }

    set metas(value: Map<string, string>) {
        this._metas = value;
    }

    public clone(): Aluno {
        const aluno = new Aluno();
        aluno.metas = new Map<string, string>();
        aluno.copyFrom(this);
        return aluno;
    }

    public copyFrom(from: Aluno): void {
        this.nome = from.nome;
        this.cpf = from.cpf;
        this.email = from.email;
        this.copyMetasFrom(from.metas);
    }

    public copyMetasFrom(from: Map<string, string>): void {
        this.metas = new Map<string, string>();
        for (const key in from) {
            (this.metas as any)[key] = (from as any)[key];
        }
    }

    private clean(): void {
        this.nome = '';
        this.cpf = '';
        this.email = '';
        this.metas = new Map<string, string>();
    }

    public toJSON() {
        return {
            nome: this.nome,
            cpf: this.cpf,
            email: this.email,
            metas: this.metas,
        };
    }
}
