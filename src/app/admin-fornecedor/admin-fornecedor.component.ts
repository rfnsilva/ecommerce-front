import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-fornecedor',
  templateUrl: './admin-fornecedor.component.html',
  styleUrls: ['./admin-fornecedor.component.scss']
})
export class AdminFornecedorComponent implements OnInit {
  title = 'fornecedores';
  profileForm = new FormGroup({
    nome: new FormControl('')
  });
  readonly apiURL : string;
  public rota: Router;
  public modal_nome: string = '';
  public modal_id: string = '';

  @Input()
  public fornecedores: any;

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
    
    this.http.get(`${this.apiURL}/get_fornecedores`, { 'headers': headers })
     .subscribe(result => {
       this.fornecedores = result;
     });
  }
  
  Adicionar(id_button: number, id: string, nome: string) {
    //edit = 1 del = 2 detalhes = 3
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));
    
    if (id_button === 2) {
      if(confirm("confirma delete da categoria: " + id)) {
        const headers= new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('authorization', `bearer ${user_data.token}`);
        
        this.http.delete(`${this.apiURL}/del_fornecedor/${id}`, { 'headers': headers })
         .subscribe(result => {
           this.fornecedores = result;
         });
      }
    }

    if (id_button === 1) {
      this.modal_nome = nome;
      this.modal_id = id;
    }

    if (id_button === 3) {
      this.modal_nome = nome;
      this.modal_id = id;
    }
  }

  editar(fornecedor: any) {
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));
    const cat_enviar = {
      nome: `${fornecedor.nome}`
    }
    
    const headers = new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')
     .set('authorization', `bearer ${user_data.token}`);
   
    this.http.put(`${this.apiURL}/edit_fornecedor/${this.modal_id}`, cat_enviar, { 'headers': headers })
     .subscribe(result => {
       this.fornecedores = result;
     });
  }

  onSubmit() {
    this.editar(this.profileForm.value);
  }

  add(fornecedor: any) {
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));
    
    const headers = new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')
     .set('authorization', `bearer ${user_data.token}`);
   
    this.http.post(`${this.apiURL}/add_fornecedor`, fornecedor, { 'headers': headers })
     .subscribe(result => {
       this.fornecedores = result;
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
