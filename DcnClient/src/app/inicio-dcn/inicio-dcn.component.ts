import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { InicioDcnService } from '../service/inicio-dcn.service';
import { UserService } from '../service/user.service';
import { ParticipanteService } from '../service/participante.service';
import { AvaliadorService } from '../service/avaliador.service';
import { ResponsavelInscricaoService } from '../service/responsavel-inscricao.service';

import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-inicio-dcn',
  templateUrl: './inicio-dcn.component.html',
  styleUrls: ['./inicio-dcn.component.css']
})
export class InicioDcnComponent implements OnInit {

  titulo = 'Dia da Cultura Nerd 4';
  mensagens: Message[] = [];
  avaliadores = [];
  participantesCosplay = [];
  participantesCospobre = [];
  visibleSidebar;
  responsaveis = [];

  constructor(private location: Location,
    private rotas: ActivatedRoute,
    private roteador: Router,
    private inicioDcnService: InicioDcnService,
    private ParticipanteService: ParticipanteService,
    private AvaliadorService: AvaliadorService,
    private ResponsavelInscricaoService: ResponsavelInscricaoService,
    private userService: UserService) { }

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.mensagens = [];

    this.ResponsavelInscricaoService.recuperarTodos()
      .then(
      (responsaveis) => {
        this.responsaveis = responsaveis;
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os contatos' });
      });

    this.AvaliadorService.recuperarTodos()
      .then(
      (avaliadores) => {
        this.avaliadores = avaliadores;
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os avaliadores' });
      });

      //cosplayServicePontuacao
      this.ParticipanteService.recuperarTodosCosplayMaiorPontuacao()
      .then(
      (participantesCosplay) => {
        this.participantesCosplay = participantesCosplay;
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os contatos' });
      });

      //cospobreServicePontuacao
      this.ParticipanteService.recuperarTodosCospobreMaiorPontuacao()
      .then(
      (participantesCospobre) => {
        this.participantesCospobre = participantesCospobre;
      },
      (erro) => {
        this.mensagens.push({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar carregar os contatos' });
      });

  }

  avaliador() {
    this.visibleSidebar = true;
  }

  logar(e) {
    e.preventDefault();
    console.log(e);
    var cpfLogin = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    //Verificacao de Login para Avaliadores
    for (var index = 0; index < this.avaliadores.length; index++) {
      var cpf = this.avaliadores[index].cpf;
      var senha = this.avaliadores[index].senha;

      if (cpfLogin == cpf && password == senha) {
        this.userService.setUserLogin();
        cpf = null;
        this.roteador.navigate(['painelVotacao']);
      }
    }

    //Verificacao de Login para Responsaveis Inscricao
    for (var index = 0; index < this.responsaveis.length; index++) {
      var cpf = this.responsaveis[index].cpf;
      var senha = this.responsaveis[index].senha;

      if (cpfLogin == cpf && password == senha) {
        cpf = null
        this.userService.setUserLogin();
        this.roteador.navigate(['participantes']);
      }
    }
  }

  cadastrarResponsaveis() {
    this.roteador.navigate(['responsaveisInscricao']);
  }

  cadastrarAvaliadores() {
    this.roteador.navigate(['avaliadores']);
  }

  voltar() {
    this.location.back();
  }
}