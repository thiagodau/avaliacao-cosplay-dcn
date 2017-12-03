import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from "@angular/router";

import { ResponsavelInscricao } from '../responsavelInscricao/responsavel-inscricao';
import { ResponsavelInscricaoService } from '../service/responsavel-inscricao.service';

import { Message } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-responsavel-cadastro',
  templateUrl: './responsavel-inscricao.component.html',
  styleUrls: ['./responsavel-inscricao.component.css']
})
export class ResponsavelInscricaoComponent implements OnInit {

  tituloPagina = 'DCN 4 - Cadastro de Responsável por Inscrição';
  mensagens: Message[] = [];
  erro = '';
  responsaveisInscricao = [];
  
  constructor(private responsavelInscricaoService: ResponsavelInscricaoService, private roteador: Router, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.mensagens = [];
    this.responsavelInscricaoService.recuperarTodos()
      .then(
      (responsaveisInscricao) => {
        this.responsaveisInscricao = responsaveisInscricao;
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os Responsaveis Inscricao' });
      });
  }

  cadastrar(formulario: FormControl) {
    this.mensagens = [];
    this.responsavelInscricaoService.salvar(formulario.value)
      .then(
      () => {
        var nome = formulario.value.nome;
        formulario.reset();
        this.carregar();
        this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Responsável "' + nome + '" cadastrado' });
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar cadastrar o avaliador' });
      }
      );
  }

  remover(responsavelInscricao) {
    this.confirmationService.confirm({
      message: 'Deseja realmente remover o avaliador "' + responsavelInscricao.nome + '"?',
      header: 'Confirmação',
      icon: 'fa fa-trash',
      accept: () => {
        this.responsavelInscricaoService.remover(responsavelInscricao._id)
          .then(() => {
            this.carregar();
            this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Responsavel ' + responsavelInscricao.nome + ' removido' });
          },
          (erro) => {
            this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar remover o responsavel' });
          });
      },
      reject: () => { }
    });
  }

}