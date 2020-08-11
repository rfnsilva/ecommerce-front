import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-produto',
  templateUrl: './admin-produto.component.html',
  styleUrls: ['./admin-produto.component.scss']
})
export class AdminProdutoComponent implements OnInit {
  title = 'produtos';
  profileForm = new FormGroup({
    nome: new FormControl(''),
    valor: new FormControl(''),
    descricao: new FormControl(''),
    estoque: new FormControl(''),
    destaque: new FormControl(''),
    fornecedorId: new FormControl(''),
    marcaId: new FormControl(''),
  });
  readonly apiURL : string;
  public rota: Router;
  public modal_nome: string = '';
  public modal_id: string = '';
  public modal_valor: number;
  public modal_estoque: number;
  public modal_descricao: string;
  public modal_destaque: string;
  public modal_fornecedor: any;
  public modal_marca: any;

  @Input()
  public produtos: any;

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
    
    this.http.get(`${this.apiURL}/get_produtos`, { 'headers': headers })
     .subscribe(result => {
       this.produtos = result;
     });
  }

  Adicionar(id_button: number, id: string, nome: string, descricao: string, valor: number, destaque: string, estoque: number, fornecedor: any) {
    //edit = 1 del = 2 detalhes = 3
    
    if (id_button === 2) {
      let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));

      if(confirm("confirma delete do produto: " + id)) {
        const headers= new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('authorization', `bearer ${user_data.token}`);
        
        this.http.delete(`${this.apiURL}/del_produto/${id}`, { 'headers': headers })
         .subscribe(result => {
           this.produtos = result;
         });
      }
    }

    if (id_button === 1) {
      this.modal_nome = nome;
      this.modal_id = id;
      this.modal_valor = valor;
      this.modal_descricao = descricao;
      this.modal_destaque = destaque;
      this.modal_estoque = estoque;
      this.modal_fornecedor = fornecedor;
    }

    if (id_button === 3) {
      this.modal_nome = nome;
      this.modal_id = id;
      this.modal_valor = valor;
      this.modal_descricao = descricao;
      this.modal_destaque = destaque;
      this.modal_estoque = estoque;
      this.modal_fornecedor = fornecedor;
    }
  }

  editar(produto: any) {
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));
    const cat_enviar = {
      nome: `${produto.nome}`,
      valor: `${produto.valor}`,
      estoque: `${produto.estoque}`,
      descricao: `${produto.descricao}`,
      destaque: `${produto.destaque}`
    }
    
    const headers = new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')
     .set('authorization', `bearer ${user_data.token}`);
   
    this.http.put(`${this.apiURL}/edit_produto/${this.modal_id}`, cat_enviar, { 'headers': headers })
     .subscribe(result => {
       this.produtos = result;
     });
  }

  onSubmit() {
    this.editar(this.profileForm.value);
  }

  add(produto: any) {
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));
    
    const headers = new HttpHeaders()
     .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization', `bearer ${user_data.token}`);
    
   
    this.http.post(`${this.apiURL}/add_produto_admin`, produto, { 'headers': headers })
     .subscribe(result => {
       this.produtos = result;
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
