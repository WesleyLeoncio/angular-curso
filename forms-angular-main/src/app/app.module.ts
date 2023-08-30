import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import {FormsModule} from "@angular/forms";
import { MensagemErrorComponent } from './components/mensagem-error/mensagem-error.component';
import {MaiorIdadeDirective} from "./directive/maior-idade.directive";
import { CepFormatoDirective } from './directive/cep-formato.directive';
import { TelefoneFormatoDirective } from './directive/telefone-formato.directive';
import {HttpClientModule} from "@angular/common/http";
import { ValidadorCepDirective } from './directive/validador-cep.directive';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, CadastroComponent, SucessoCadastroComponent, MensagemErrorComponent,MaiorIdadeDirective ,CepFormatoDirective, TelefoneFormatoDirective, ValidadorCepDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
