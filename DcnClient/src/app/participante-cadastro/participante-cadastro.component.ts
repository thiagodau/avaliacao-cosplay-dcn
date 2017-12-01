import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from "@angular/router";

import { ParticipanteService } from '../service/participante.service';

import { Message } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-participante-cadastro',
  templateUrl: './participante-cadastro.component.html',
  styleUrls: ['./participante-cadastro.component.css']
})
export class ParticipanteCadastroComponent implements OnInit {

  titulo = 'Participantes';
  tituloPagina = 'DCN 4';
  mensagens: Message[] = [];
  erro = '';
  participantes = [];
  
  constructor(private ParticipanteService: ParticipanteService, private roteador: Router, private confirmationService: ConfirmationService) { }

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
  
}