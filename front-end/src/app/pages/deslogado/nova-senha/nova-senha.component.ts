import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.scss']
})
export class NovaSenhaComponent implements OnInit {

  sendCode = false;
  hide = true;

  constructor() { }

  ngOnInit(): void {}

  enviarSenha(){
    this.sendCode = true;
  }

}
