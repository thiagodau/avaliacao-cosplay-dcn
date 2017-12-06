import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from "@angular/router";

import { Participante } from '../participante/participante';
import { ParticipanteService } from '../service/participante.service';
import { UserService } from '../service/user.service';
import { Avaliador } from '../avaliador/avaliador';
import { AvaliadorService } from '../service/avaliador.service';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

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
  presidente = [];
  visibleSidebar;
  visibleSidebar2;
  cc;
  participanteSelecionado;

  constructor(
    private ParticipanteService: ParticipanteService,
    private roteador: Router,
    private confirmationService: ConfirmationService,
    private userService: UserService,
    private AvaliadorService: AvaliadorService) { }

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

    this.AvaliadorService.recuperarPresidente()
      .then(
      (avaliadores) => {
        this.presidente = avaliadores;
        //alert(this.presidente[0].presidente)
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os avaliadores' });
      });
  }

  iniciarAvaliacao(){
     alert("Avaliacao Iniciada")
  }

  avaliarCosplay(participante) {
    this.visibleSidebar = true;
    this.visibleSidebar2 = false;
    this.cc = participante.cosplay;
    if (this.cc == true) {
      this.cc = "Avaliação de Cosplay";
    } else {
      this.cc = "Avaliação de Cospobre"
    }
    this.participanteSelecionado = participante;
  }

  avaliarCospobre(participante) {
    this.visibleSidebar = false;
    this.visibleSidebar2 = true;
    this.cc = participante.cosplay;
    if (this.cc == true) {
      this.cc = "Avaliação de Cosplay";
    } else {
      this.cc = "Avaliação de Cospobre"
    }
    this.participanteSelecionado = participante;
  }

  somaCosplay;
  salvarAvaliacaoCosplay(v, v1, v2, v3, participante) {
    this.visibleSidebar = false;
    this.somaCosplay = v + v1 + v2 + v3;
    this.participanteSelecionado.pontos = this.somaCosplay + this.participanteSelecionado.pontos;

    participante = this.participanteSelecionado;
    console.log(this.participanteSelecionado._id, this.participanteSelecionado.nome, this.participanteSelecionado.pontos)
    this.ParticipanteService.avaliacao(participante)
      .then(
      (participante) => {
        this.carregar();
        this.participanteSelecionado = null;
        this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Participante "' + participante.nome + '" avaliado' });
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar avaliar o contato' });
      });
  }

  somaCospobre;
  salvarAvaliacaoCospobre(valorCriterio1, valorCriterio2, valorCriterio3, valorCriterio4, valorCriterio5, participante) {
    this.visibleSidebar2 = false;
    this.somaCospobre = valorCriterio1 + valorCriterio2 + valorCriterio3 + valorCriterio4 + valorCriterio5;
    this.participanteSelecionado.pontos = this.somaCospobre + this.participanteSelecionado.pontos;

    participante = this.participanteSelecionado;
    //console.log(this.participanteSelecionado._id, this.participanteSelecionado.nome, this.participanteSelecionado.pontos)
    this.ParticipanteService.avaliacao(participante)
      .then(
      (participante) => {
        this.carregar();
        this.participanteSelecionado = null;
        this.mensagens.push({ severity: 'success', summary: 'Sucesso', detail: 'Participante "' + participante.nome + '" avaliado' });
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar avaliar o contato' });
      });
  }

}