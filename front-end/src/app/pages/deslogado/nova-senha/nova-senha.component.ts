import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.scss']
})
export class NovaSenhaComponent implements OnInit {

  sendCode = false;

  constructor() { }

  ngOnInit(): void {
    this.enviarSenha();
  }

  enviarSenha(){
    this.sendCode = true;
  }

}
