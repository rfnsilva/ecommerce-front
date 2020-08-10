import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss']
})
export class ConfirmacaoComponent implements OnInit {
  public dados_confirmacao: any;

  constructor(private aroute: ActivatedRoute) { }

  ngOnInit(): void {
      this.aroute.queryParams.subscribe(params => {
        this.dados_confirmacao = params;
    });
  }

}
