import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from "@angular/router";

import { Participante } from '../participante/participante';
import { ParticipanteService } from '../service/participante.service';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-cadastro-participante',
  templateUrl: './cadastro-participante.component.html',
  styleUrls: ['./cadastro-participante.component.css']
})
export class CadastroParticipanteComponent implements OnInit {

  titulo = 'Participantes';
  tituloPagina = 'DCN 4 - Cadastro Participantes';
  mensagens: Message[] = [];
  erro = '';
  participantes = [];
  
  constructor(
    private ParticipanteService: ParticipanteService, 
    private roteador: Router, 
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.mensagens = [];
    this.ParticipanteService.recuperarTodos()
      .then(
      (participantes) => {
        this.participantes = participantes;
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os contatos' });
      });
  }

  cadastrar(formulario: FormControl) {
    this.mensagens = [];
    this.ParticipanteService.salvar(formulario.value)
      .then(
      () => {
        var nome = formulario.value.nome;
        formulario.reset();
        this.carregar();
        this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Participante "' + nome + '" cadastrado' });
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar cadastrar o participante' });
      }
      ); 
  }

}