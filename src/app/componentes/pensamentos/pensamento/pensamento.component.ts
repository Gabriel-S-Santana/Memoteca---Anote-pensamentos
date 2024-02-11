import { Pensamento } from './../pensamento';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pensamento : Pensamento = {
    id: 0,
    modelo: '',
    conteudo: '',
    autoria:''
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
