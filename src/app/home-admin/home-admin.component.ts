import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  public estoque: any;
  public sum_vendas: number;
  public contas: any;
  public vendas: any;
  public top_vendas: any;
  public sum: number;
  readonly apiURL: string;
  public rota: Router;

  
  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
    this.javascript();
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization', `bearer ${user_data.token}`);
    
    this.http.get(`${this.apiURL}/get_qtd_produtos`, { 'headers': headers })
      .subscribe(result => {
        this.estoque = result;
      });
    
    this.http.get(`${this.apiURL}/get_sum_contas`, { 'headers': headers })
      .subscribe(result => {
        this.contas = result;
        this.sum = this.contas[0].sum;
      });
    
    this.http.get(`${this.apiURL}/get_qtd_vendas`, { 'headers': headers })
      .subscribe(result => {
        this.vendas = result;
      });
    
    this.http.get(`${this.apiURL}/get_top_vendas`, { 'headers': headers })
      .subscribe(result => {
        this.top_vendas = result;
      });
  }

  javascript() {
    $(document).ready(function () {
      $("#header_none").css("display", "none");
      $("#footer_none").css("display", "none");
    });
  }

}
