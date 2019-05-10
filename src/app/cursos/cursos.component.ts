import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {
  titulo: string;
  constructor() {
    this.titulo = 'Matemáticas';
    console.log('se ha cargado el componente:cursos.component.ts');
  }

  ngOnInit() {
    console.log('Oninit ejecutado');
  }
  ngDoCheck() {
    console.log('DoCheck ejecutado');
  }
  ngOnDestroy() {
    console.log('OnDestroy ejecutado');
  }
  cambiarTitulo() {
    this.titulo = 'Nuevo titulo del componente';
  }
}
