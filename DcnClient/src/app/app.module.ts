import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PainelVotacaoComponent } from './painel-votacao/painel-votacao.component';
import { CadastroParticipanteComponent } from './cadastro-participante/cadastro-participante.component';
import { ContatoCadastroComponent } from './contato-cadastro/contato-cadastro.component';
import { ContatoEdicaoComponent } from './contato-edicao/contato-edicao.component';
import { AvaliadorCadastroComponent } from './avaliador-cadastro/avaliador-cadastro.component';
import { ResponsavelInscricaoComponent } from './responsavel-inscricao/responsavel-inscricao.component';
import { InicioDcnComponent } from './inicio-dcn/inicio-dcn.component';

import { ParticipanteService } from './service/participante.service';
import { ContatoService } from './service/contato.service';
import { AvaliadorService } from './service/avaliador.service';
import { ResponsavelInscricaoService } from './service/responsavel-inscricao.service';
import { InicioDcnService } from './service/inicio-dcn.service';

import {SidebarModule} from 'primeng/primeng';
import {SpinnerModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/primeng';

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
  { path: 'painelVotacao', component: PainelVotacaoComponent },
  { path: 'participantes', component: CadastroParticipanteComponent },
  { path: 'avaliadores', component: AvaliadorCadastroComponent },
  { path: 'responsaveisInscricao', component: ResponsavelInscricaoComponent },
  { path: 'inicioDcn', component: InicioDcnComponent },
  { path: 'contato', component: ContatoCadastroComponent },
  { path: 'contato/:id', component: ContatoEdicaoComponent },
  { path: '', redirectTo: '/inicioDcn', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    PainelVotacaoComponent,
    CadastroParticipanteComponent,
    ContatoCadastroComponent,
    ContatoEdicaoComponent,
    AvaliadorCadastroComponent,
    ResponsavelInscricaoComponent,
    InicioDcnComponent,
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
    MessageModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    AvaliadorService,
    ParticipanteService,
    ContatoService,
    ResponsavelInscricaoService,
    InicioDcnService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
