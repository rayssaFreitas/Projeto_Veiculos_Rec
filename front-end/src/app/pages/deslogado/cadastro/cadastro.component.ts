import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  dadosPessoais = false;
  telefone = false;
  endereco = false;
  mostraDados = false;
  criaSenha = false;
  hide = true;


  constructor() { }

  ngOnInit(): void {}

  stepDados(){
    this.dadosPessoais = true;
  }

  stepTelefone(){
    this.telefone = true;
  }

  stepEndereco(){
    this.endereco = true;
  }

  stepVerify(){
    this.mostraDados = true;
  }

  stepPassword(){
    this.mostraDados = true;
  }

}
