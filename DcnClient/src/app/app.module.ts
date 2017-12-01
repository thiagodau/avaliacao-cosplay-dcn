import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ParticipanteCadastroComponent } from './participante-cadastro/participante-cadastro.component';
import { ContatoCadastroComponent } from './contato-cadastro/contato-cadastro.component';
import { ContatoEdicaoComponent } from './contato-edicao/contato-edicao.component';

import { ParticipanteService } from './service/participante.service';
import { ContatoService } from './service/contato.service';

import {
  ButtonModule,
  InputTextModule,
  InputMaskModule,
  DataTableModule,
  MessagesModule,
  ConfirmDialogModule,
  ConfirmationService
} from 'primeng/primeng';
import { NavbarComponent } from './navbar/navbar.component';


const rotas: Routes = [
  { path: 'participante', component: ParticipanteCadastroComponent },
  { path: 'contato', component: ContatoCadastroComponent },
  { path: 'contato/:id', component: ContatoEdicaoComponent },
  { path: '', redirectTo: '/participante', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ParticipanteCadastroComponent,
    ContatoCadastroComponent,
    ContatoEdicaoComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    DataTableModule,
    MessagesModule,
    HttpClientModule,
    ConfirmDialogModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ParticipanteService,
    ContatoService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
