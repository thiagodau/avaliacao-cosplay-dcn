import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from "@angular/router";

import { Participante } from '../participante/participante';
import { ParticipanteService } from '../service/participante.service';
import { UserService } from '../service/user.service';
import { Avaliador } from '../avaliador/avaliador';
import { AvaliadorService } from '../service/avaliador.service';
import { AvaliacaoService } from '../service/avaliacao.service';

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
  avaliadores = [];
  presidente = [];
  avaliacoes = [];
  visibleSidebar;
  visibleSidebar2;
  cc;
  participanteSelecionado;
  visibleSidebarAvaliacao;

  constructor(
    private ParticipanteService: ParticipanteService,
    private roteador: Router,
    private confirmationService: ConfirmationService,
    private userService: UserService,
    private AvaliadorService: AvaliadorService,
    private AvaliacaoService: AvaliacaoService) { }

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
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os avaliadores' });
      });

    this.AvaliacaoService.recuperarTodos()
      .then(
      (avaliacoes) => {
        this.avaliacoes = avaliacoes;
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os contatos' });
      });
  }

  abrirValidacaoPresidente() {
    if (this.presidente != null) {
      this.visibleSidebarAvaliacao = true;
      alert("Existe presidente")
    } else {
      alert("Não existe presidente cadastrado")
    }
  }

  avaliacaoStatus = false;
  iniciarAvaliacao(event, formulario: FormControl) {
    event.preventDefault();
    var cpfAutorizacao = event.target.elements[0].value;

    //verifica se presidente existe para poder iniciar a avaliacao
    if (this.presidente != null) {
      for (var index = 0; index < this.presidente.length; index++) {
        var cpfPresidente = this.presidente[index].cpf;
        //verifica se o cpf e do presidente
        if (cpfAutorizacao == cpfPresidente) {
          alert("Autorizado")

          console.log(formulario.value)
          if (this.avaliacaoStatus == true) {  //verificar essa validacao
            alert("Avaliação já iniciada!")
          } else {
            this.AvaliacaoService.iniciar(formulario.value)
              .then(
              () => {
                formulario.reset();
                this.carregar();
                this.avaliacaoStatus = true;
              },
              (erro) => {
                this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar iniciar a avaliação' });
              }
              );
          }
        }
      }
    }
  }


  avaliarCosplay(participante) {
    if (this.avaliacoes[0] != null) {
      console.log("Avaliacao em aberto!")
      console.log(this.avaliacoes)
      this.visibleSidebar = true;
      this.visibleSidebar2 = false;
      this.cc = participante.cosplay;
      if (this.cc == true) {
        this.cc = "Avaliação de Cosplay";
      } else {
        this.cc = "Avaliação de Cospobre"
      }
      this.participanteSelecionado = participante;
    } else {
      alert("Presidente precisa iniciar a avaliação")
    }
  }

  avaliarCospobre(participante) {
    if (this.avaliacoes[0] != null) {
      console.log("Avaliacao em aberto!")
      this.visibleSidebar = false;
      this.visibleSidebar2 = true;
      this.cc = participante.cosplay;
      if (this.cc == true) {
        this.cc = "Avaliação de Cosplay";
      } else {
        this.cc = "Avaliação de Cospobre"
      }
      this.participanteSelecionado = participante;
    } else {
      alert("Presidente precisa iniciar a avaliação")
    }
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