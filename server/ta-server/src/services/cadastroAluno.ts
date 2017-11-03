import { Aluno } from '../models/Aluno';

export class CadastroAluno {
    private _alunos: Aluno[];

    public constructor() {
        this._alunos = [];
    }

    get alunos(): Aluno[] {
        return this._alunos;
    }

    public cadastrar(aluno: Aluno): boolean {
        if (!this.findByCpf(aluno.cpf)) {
            const e = new Aluno();
            e.copyFrom(aluno);
            this._alunos.push(e);
            return true;
        }

        return false;
    }

    public atualizar(aluno: Aluno): boolean {
        const e = this.findByCpf(aluno.cpf);
        if (e) {
            e.copyFrom(aluno);
            return true;
        }

        return false;
    }

    private findByCpf(cpf: string): Aluno | undefined {
        return this._alunos.find(value => value.cpf === cpf);
    }
}
