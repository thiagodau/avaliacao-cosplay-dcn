import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Participante } from '../participante/participante';

import { Observable } from "rxjs";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ParticipanteService {

  urlServicos = 'http://localhost:3000/participantes';

  constructor(private http: HttpClient) { }

  recuperarTodos(): Promise<Participante[]> {
    return this.http.get(this.urlServicos)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  salvar(participante: Participante): Promise<Participante> {
    return this.http.post(this.urlServicos, participante)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }
  
  avaliacao(participante: Participante): Promise<Participante> {
    return this.http.put(this.urlServicos, participante)
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
