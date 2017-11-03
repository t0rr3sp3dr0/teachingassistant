import { Request, Response } from 'express';
import { CadastroAluno } from '../services/cadastroAluno';
import { Aluno } from '../models/Aluno';

const cadastro = new CadastroAluno;

export const getAlunos = (req: Request, res: Response) => res.send(JSON.stringify(cadastro.alunos));

export const postAluno = (req: Request, res: Response) => {
    const aluno = cadastro.cadastrar(req.body as Aluno);
    if (aluno) {
        res.status(200).send({
            'success': 'O aluno foi cadastrado com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'O aluno não pode ser cadastrado'
        });
    }
};

export const putAluno = (req: Request, res: Response) => {
    const aluno = cadastro.atualizar(req.body as Aluno);
    if (aluno) {
        res.status(200).send({
            'success': 'O aluno foi atualizado com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'O aluno não pode ser atualizado'
        });
    }
};
