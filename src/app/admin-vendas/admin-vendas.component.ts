import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-vendas',
  templateUrl: './admin-vendas.component.html',
  styleUrls: ['./admin-vendas.component.scss']
})
export class AdminVendasComponent implements OnInit {
  title = 'vendas';
  profileForm = new FormGroup({
    id_cliente: new FormControl(''),
    id_produto: new FormControl(''),
    valor: new FormControl(''),
  });
  readonly apiURL : string;
  public rota: Router;
  public modal_id_produto: string = '';
  public modal_id_cliente: string = '';
  public modal_id_vendas: string = '';
  public modal_valor: number;

  @Input()
  public vendas: any;

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
    
    this.http.get(`${this.apiURL}/get_vendas`, { 'headers': headers })
     .subscribe(result => {
       this.vendas = result;
     });
  }

  Adicionar(id_button: number, id: string, id_cliente: string, id_produto: string, valor: number) {
    //edit = 1 del = 2 detalhes = 3
    
    if (id_button === 2) {
      let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));

      if(confirm("confirma delete do produto: " + id)) {
        const headers= new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('authorization', `bearer ${user_data.token}`);
        
        this.http.delete(`${this.apiURL}/del_venda/${id}`, { 'headers': headers })
         .subscribe(result => {
           this.vendas = result;
         });
      }
    } else{
      this.modal_id_produto = id_produto;
      this.modal_id_cliente = id_cliente;
      this.modal_valor = valor;
      this.modal_id_vendas = id;
    }
  }

  add(venda: any) {
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));
    
    const headers = new HttpHeaders()
     .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization', `bearer ${user_data.token}`);
    
   
    this.http.post(`${this.apiURL}/add_vendas_admin`, venda, { 'headers': headers })
     .subscribe(result => {
       this.vendas = result;
     });
  }

  onSubmit1() {
    this.add(this.profileForm.value);
  }
  
  javascript() {
    $(document).ready(function () {
      $("#header_none").css("display", "none");
      $("#footer_none").css("display", "none");
    });
  }

}
