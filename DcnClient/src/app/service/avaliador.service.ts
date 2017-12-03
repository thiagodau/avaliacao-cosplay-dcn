import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Avaliador } from '../avaliador/avaliador';

import { Observable } from "rxjs";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AvaliadorService {

  urlServicos = 'http://localhost:3000/avaliadores';

  constructor(private http: HttpClient) { }

  recuperarTodos(): Promise<Avaliador[]> {
    return this.http.get(this.urlServicos)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  recuperar(_id: any): Promise<Avaliador> {
    return this.http.get(this.urlServicos + '/' + _id)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  salvar(avaliador: Avaliador): Promise<Avaliador> {
    return this.http.post(this.urlServicos, avaliador)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  atualizar(avaliador: Avaliador): Promise<Avaliador> {
    return this.http.put(this.urlServicos, avaliador)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  remover(_id: any): Promise<void> {
    return this.http.delete(this.urlServicos + '/' + _id)
      .toPromise()
      .then(() => null)
      .catch(this.lidaComErro);
  }

  private lidaComErro(erro: any): Promise<any> {
    console.error('Ocorreu um erro', erro);
    return Promise.reject(erro.message || erro);
  }

}
