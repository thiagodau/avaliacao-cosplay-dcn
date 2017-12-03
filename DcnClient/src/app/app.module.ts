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
import { AvaliadorCadastroComponent } from './avaliador-cadastro/avaliador-cadastro.component';
import { ResponsavelInscricaoComponent } from './responsavel-inscricao/responsavel-inscricao.component';

import { ParticipanteService } from './service/participante.service';
import { ContatoService } from './service/contato.service';
import { AvaliadorService } from './service/avaliador.service';
import { ResponsavelInscricaoService } from './service/responsavel-inscricao.service';

import {SidebarModule} from 'primeng/primeng';
import {SpinnerModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';


import {        
  ButtonModule,
  InputTextModule,
  InputMaskModule,
  DataTableModule,
  MessagesModule,
  ConfirmDialogModule,
  ConfirmationService,
  SharedModule
} from 'primeng/primeng';
import { NavbarComponent } from './navbar/navbar.component';

const rotas: Routes = [
  { path: 'participantes', component: ParticipanteCadastroComponent },
  { path: 'avaliadores', component: AvaliadorCadastroComponent },
  { path: 'responsaveisInscricao', component: ResponsavelInscricaoComponent },
  { path: 'contato', component: ContatoCadastroComponent },
  { path: 'contato/:id', component: ContatoEdicaoComponent },
  { path: '', redirectTo: '/participantes', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ParticipanteCadastroComponent,
    ContatoCadastroComponent,
    ContatoEdicaoComponent,
    AvaliadorCadastroComponent,
    ResponsavelInscricaoComponent,
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
    SidebarModule,
    SpinnerModule,
    PasswordModule,
    CheckboxModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    AvaliadorService,
    ParticipanteService,
    ContatoService,
    ResponsavelInscricaoService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
