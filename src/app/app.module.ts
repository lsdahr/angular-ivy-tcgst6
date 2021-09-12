import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ManutencaoService } from './manutencao.service';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { AulasComponent } from './aulas/aulas.component';
import { NotasComponent } from './notas/notas.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
                    {path: '', component: HomeComponent},
                    {path: 'disciplina', component: DisciplinaComponent},
                    {path: 'aulas', component: AulasComponent},
                    {path: 'notas', component: NotasComponent},
                    {path: 'editar', component: EditarComponent}]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, NavbarComponent, DisciplinaComponent, AulasComponent, NotasComponent, EditarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ManutencaoService]
})
export class AppModule { }
