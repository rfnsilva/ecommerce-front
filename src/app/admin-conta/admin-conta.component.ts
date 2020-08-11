import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-conta',
  templateUrl: './admin-conta.component.html',
  styleUrls: ['./admin-conta.component.scss']
})
export class AdminContaComponent implements OnInit {
  title = 'contas';
  profileForm = new FormGroup({
    nome: new FormControl('')
  });
  readonly apiURL : string;
  public rota: Router;
  public modal_fornecedor: string = '';
  public modal_id: string = '';
  public modal_valor: number;

  @Input()
  public contas: any;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
    this.javascript();
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));
    
    const headers= new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')
      .set('authorization', `bearer ${user_data.token}`);
    
    this.http.get(`${this.apiURL}/get_contas`, { 'headers': headers })
     .subscribe(result => {
       this.contas = result;
     });
  }

  detalhes(id: string, valor: number, fornecedor: string) {
    this.modal_fornecedor = fornecedor;
    this.modal_valor = valor;
    this.modal_id = id;
  }

  javascript() {
    $(document).ready(function () {
      $("#header_none").css("display", "none");
      $("#footer_none").css("display", "none");
    });
  }
}
