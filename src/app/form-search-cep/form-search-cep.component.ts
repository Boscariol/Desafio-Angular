import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { cepService } from '../../services/cep.service';
import { CepModel } from '../../model/cep.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-search-cep',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-search-cep.component.html',
  styleUrls: ['./form-search-cep.component.css'] // Correção aqui
})
export class FormSearchCepComponent implements  OnInit{
  formCep: FormGroup;
  submittedCepForm: any;
  cepResponse: CepType = {
    cep: '';
    logradouro: '';
    complemento: '';
    bairro: '';
    localidade: '';
    uf:'';
};

constructor(private readonly cepService: cepService, private formbuilder: FormBuilder) {
  this.formCep = this.formbuilder.group({
    cep: new FormControl (''),

  });
}
ngOnInit(): void {
  this.createFormCep(new CepModel());
}
createFormCep(CepModel: CepModel){
 this.formCep = this.formbuilder.group({
  cep: [CepModel.cep],
 });  
}

onSubmitCepForm() {

  this.submittedCepForm = this.formCep.value
  let cep = this.submittedCepForm.cep;
  cep = cep.replace(/\d/g, '');
  try {
    this.cepService.getCep(cep).subscribe((response) {
      this.cepResponse = response;

    }catch(error){
      console.error(error);
    }
  }
}
}
