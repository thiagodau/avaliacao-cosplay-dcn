import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from "@angular/router";

import { Participante } from '../participante/participante';
import { ParticipanteService } from '../service/participante.service';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-painel-votacao',
  templateUrl: './painel-votacao.component.html',
  styleUrls: ['./painel-votacao.component.css']
})
export class PainelVotacaoComponent implements OnInit {

  titulo = 'Participantes';
  tituloPagina = 'DCN 4 - Avaliação';
  mensagens: Message[] = [];
  erro = '';
  participantes = [];
  visibleSidebar;
  visibleSidebar2;
  cc;
  
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

  avaliarCosplay(participante) {
    this.visibleSidebar = true;
    this.visibleSidebar2 = false;
    this.cc = participante.cosplay;
    if (this.cc == true) {
      this.cc = "Avaliação de Cosplay";
    }else{
      this.cc = "Avaliação de Cospobre"
    }
  }

  avaliarCospobre(participante) {
    this.visibleSidebar = false;
    this.visibleSidebar2 = true;
    this.cc = participante.cosplay;
    if (this.cc == true) {
      this.cc = "Avaliação de Cosplay";
    }else{
      this.cc = "Avaliação de Cospobre"
    }
  }

  somaCosplay;
  salvarAvaliacaoCosplay(v, v1, v2, v3){
    this.visibleSidebar = false;
    this.somaCosplay = v + v1 + v2 + v3;
    alert("Soma é de: " + this.somaCosplay)
  }

  somaCospobre;
  salvarAvaliacaoCospobre(valorCriterio1, valorCriterio2, valorCriterio3, valorCriterio4, valorCriterio5){
    this.visibleSidebar2 = false;
    this.somaCospobre = valorCriterio1 + valorCriterio2 + valorCriterio3 + valorCriterio4 + valorCriterio5;
    alert("Soma é de: " + this.somaCospobre)
  }

}