import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Avaliacao } from '../avaliacao/avaliacao';

import { Observable } from "rxjs";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AvaliacaoService {

  urlServicos = 'http://localhost:3000/avaliacoes';

  constructor(private http: HttpClient) { }

  recuperarTodos(): Promise<Avaliacao[]> {
    return this.http.get(this.urlServicos)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  buscaStatusAvaliacao(): Promise<Avaliacao[]> {
    return this.http.get(this.urlServicos + "/avaliacao")
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  recuperarTodosCosplayPontos(): Promise<Avaliacao[]> {
    return this.http.get(this.urlServicos + "/pontuacao-cosplay")
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  recuperarTodosCospobrePontos(): Promise<Avaliacao[]> {
    return this.http.get(this.urlServicos + "/pontuacao-cospobre")
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  iniciar(avaliacao: Avaliacao): Promise<Avaliacao> {
    return this.http.post(this.urlServicos, avaliacao)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  atualizar(avaliacao: Avaliacao): Promise<Avaliacao> {
    return this.http.put(this.urlServicos, avaliacao)
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
