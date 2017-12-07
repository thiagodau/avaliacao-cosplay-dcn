import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from "@angular/router";

import { AvaliadorService } from '../service/avaliador.service';

import { Message } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-avaliador-cadastro',
  templateUrl: './avaliador-cadastro.component.html',
  styleUrls: ['./avaliador-cadastro.component.css']
})
export class AvaliadorCadastroComponent implements OnInit {

  titulo = 'Avaliadores';
  tituloPagina = 'DCN 4 - Cadastro de Avaliador';
  mensagens: Message[] = [];
  erro = '';
  avaliadores = [];
  
  constructor(private avaliadorService: AvaliadorService, private roteador: Router, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.mensagens = [];
    this.avaliadorService.recuperarTodos()
      .then(
      (avaliadores) => {
        this.avaliadores = avaliadores;
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os avaliadores' });
      });
  }


  
  cadastrar(formulario: FormControl) {
    this.mensagens = [];
    this.avaliadorService.salvar(formulario.value)
      .then(
      () => {
        var nome = formulario.value.nome;
        formulario.reset();
        this.carregar();
        this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Avaliador "' + nome + '" cadastrado' });
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar cadastrar o avaliador' });
      }
      );
  }

  remover(avaliador) {
    this.confirmationService.confirm({
      message: 'Deseja realmente remover o avaliador "' + avaliador.nome + '"?',
      header: 'Confirmação',
      icon: 'fa fa-trash',
      accept: () => {
        this.avaliadorService.remover(avaliador._id)
          .then(() => {
            this.carregar();
            this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Avaliador ' + avaliador.nome + ' removido' });
          },
          (erro) => {
            this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar remover o avaliador' });
          });
      },
      reject: () => { }
    });
  }

}