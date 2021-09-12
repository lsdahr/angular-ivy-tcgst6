import { Injectable } from '@angular/core';

interface Disciplina{
  semana: string; 
  horario: string;
  titulo: string; 
  p1: string; 
  p2: string;
  media: string;

}


@Injectable()
export class ManutencaoService {

  list: Array<Disciplina> = [];
  
  constructor() {
    if(localStorage.getItem('disciplinaList')){
      this.list = JSON.parse(localStorage.getItem('disciplinaList'));
    }
   }

  getList(){
    return this.list;
  }

  add(semana, horario, titulo, p1, p2, media: string){
    this.list.push({semana, horario, titulo, p1, p2, media});
    localStorage.setItem('disciplinaList', JSON.stringify(this.list));
  }
  
  remove(index: number){
    this.list.splice(index, 1);
    localStorage.setItem('disciplinaList', JSON.stringify(this.list));
  }

  update(index: number, newP1, newP2) {
    var newMedia: number = (Number(newP1) + Number(newP2)) / 2;
    this.list[index].p1 = newP1;
    this.list[index].p2 = newP2;
    this.list[index].media = newMedia.toString();
    localStorage.setItem('disciplinaList', JSON.stringify(this.list));
    }

}