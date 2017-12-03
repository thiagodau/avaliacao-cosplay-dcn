import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ResponsavelInscricao } from '../responsavelInscricao/responsavel-inscricao';

import { Observable } from "rxjs";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResponsavelInscricaoService {

  urlServicos = 'http://localhost:3000/responsaveisInscricao';

  constructor(private http: HttpClient) { }

  recuperarTodos(): Promise<ResponsavelInscricao[]> {
    return this.http.get(this.urlServicos)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  recuperar(_id: any): Promise<ResponsavelInscricao> {
    return this.http.get(this.urlServicos + '/' + _id)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  salvar(responsavelInscricao: ResponsavelInscricao): Promise<ResponsavelInscricao> {
    return this.http.post(this.urlServicos, responsavelInscricao)
      .toPromise()
      .then(resposta => Promise.resolve(resposta))
      .catch(this.lidaComErro);
  }

  atualizar(responsavelInscricao: ResponsavelInscricao): Promise<ResponsavelInscricao> {
    return this.http.put(this.urlServicos, responsavelInscricao)
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
