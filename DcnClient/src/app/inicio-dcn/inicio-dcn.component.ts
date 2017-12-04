import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { InicioDcnService } from '../service/inicio-dcn.service';
import { UserService } from '../service/user.service';

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
  visibleSidebar;

  constructor(private location: Location, 
    private rotas: ActivatedRoute, 
    private roteador: Router, 
    private inicioDcnService: InicioDcnService,
    private userService: UserService) { }

  ngOnInit() {
  }

  avaliador() {
    this.visibleSidebar = true;
  }


  outros;
  logar(e) {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if (username == '058.791.281-21' && password == 'admin') {
      this.userService.setUserLogin();
      this.roteador.navigate(['painelVotacao']);
    }

  }

  voltar() {
    this.location.back();
  }

}
