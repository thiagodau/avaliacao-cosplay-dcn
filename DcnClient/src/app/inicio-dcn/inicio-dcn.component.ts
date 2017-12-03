import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { InicioDcnService } from '../service/inicio-dcn.service';

import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-inicio-dcn',
  templateUrl: './inicio-dcn.component.html',
  styleUrls: ['./inicio-dcn.component.css']
})
export class InicioDcnComponent implements OnInit {

  titulo = 'Dia da Cultura Nerd 4';
  mensagens: Message[] = [];
  visibleSidebar;

  constructor(private location: Location, private rota: ActivatedRoute, private roteador: Router, private inicioDcnService: InicioDcnService) { }

  ngOnInit() {
  }

  avaliador(){
    this.visibleSidebar = true;
    
  }

  voltar() {
    this.location.back();
  }

}
