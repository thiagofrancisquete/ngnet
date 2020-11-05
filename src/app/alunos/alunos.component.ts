import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  public alunoSelecionado: Aluno;

  public alunoForm: FormGroup;
  modalRef: BsModalRef;

  alunos = [
    { id: 1, nome: 'Marinho', sobrenome: 'Silva', telefone: 33020631 },
    { id: 2, nome: 'Soteldo', sobrenome: 'Santos', telefone: 33820639 },
    { id: 3, nome: 'João Paulo', sobrenome: 'Silva', telefone: 33920034 },
    { id: 4, nome: 'Pará', sobrenome: 'Pereira', telefone: 33770991 },
    { id: 5, nome: 'Madson', sobrenome: 'Souza', telefone: 33950680 },
    { id: 6, nome: 'Lucas ', sobrenome: 'Santos', telefone: 33020688 },
  ];

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.buildForm();
  }

  buildForm() {
    this.alunoForm = this.fb.group({
      nome: [''],
      sobrenome: [''],
      telefone: [''],
    });
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  voltar() {
    this.alunoSelecionado = null;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit(): void {}
}
