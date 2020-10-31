import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  professores = [
    { id: 1, nome: 'cuca', disciplina: 'Historia' },
    { id: 2, nome: 'Klopp', disciplina: 'Fisica' },
    { id: 3, nome: 'Simeone', disciplina: 'Quimica' },
    { id: 4, nome: 'Guardiola', disciplina: 'Artes' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
