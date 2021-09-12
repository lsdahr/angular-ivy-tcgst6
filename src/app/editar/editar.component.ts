import { Component, OnInit } from '@angular/core';
import { ManutencaoService } from '../manutencao.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(public disciplina: ManutencaoService) { }

  ngOnInit() {
  }

  alterar(i, newP1, newP2) {

    this.disciplina.update(
      i,
      newP1,
      newP2
    );
  }

}