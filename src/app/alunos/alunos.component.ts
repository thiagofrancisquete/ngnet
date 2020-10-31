import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  alunos = [
    { id: 1, nome: 'Marinho', sobrenome: 'Silva', telefone: 33020631 },
    { id: 2, nome: 'Soteldo', sobrenome: 'Santos', telefone: 33820639 },
    { id: 3, nome: 'João Paulo', sobrenome: 'Silva', telefone: 33920034 },
    { id: 4, nome: 'Pará', sobrenome: 'Pereira', telefone: 33770991 },
    { id: 5, nome: 'Madson', sobrenome: 'Souza', telefone: 33950680 },
    { id: 6, nome: 'Lucas ', sobrenome: 'Santos', telefone: 33020688 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
