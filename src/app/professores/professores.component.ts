import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  public professorSelecionado: Professor;

  public professorForm: FormGroup;

  professores = [
    { id: 1, nome: 'cuca', disciplina: 'Historia' },
    { id: 2, nome: 'Klopp', disciplina: 'Fisica' },
    { id: 3, nome: 'Simeone', disciplina: 'Quimica' },
    { id: 4, nome: 'Guardiola', disciplina: 'Artes' },
  ];

  constructor(private fb: FormBuilder) {}

  buildForm() {
    this.professorForm = this.fb.group({
      nome: [''],
      disciplina: [''],
    });
  }

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  professorSubmit() {
    console.log(this.professorForm.value);
  }

  voltar() {
    this.professorSelecionado = null;
  }

  ngOnInit(): void {
    this.buildForm();
  }
}
