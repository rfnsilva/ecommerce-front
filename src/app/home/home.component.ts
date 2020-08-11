import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly apiURL: string;
  public produtos: any;
  public marcas: any;
  public marca: any;
  public id_marca: string;
  public rota: Router;
  public check_box: any;
  public indisponivel: boolean = true;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
    this.javascript();

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    this.http.get(`${this.apiURL}/get_produtos_destaque`, { 'headers': headers })
      .subscribe(result => {
        this.produtos = result;
      });//.pipe(delay(2000))
    
    this.http.get(`${this.apiURL}/get_marcas`, { 'headers': headers })
      .subscribe(result => {
        this.marcas = result;
      });
  }

  pre_filtrar(id: string) {
    this.id_marca = id;
  }

  filtrar() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    this.http.get(`${this.apiURL}/get_marca/${this.id_marca}`, { 'headers': headers })
      .subscribe(result => {
        this.marca = result;
        this.produtos = this.marca.produtos;
      });
  }

  add_cart(id_produto) {
    if (window.localStorage.getItem('currentUser') !== null) {
      let aux = JSON.parse(window.localStorage.getItem('currentUser'))
      let carrinho = {
        user_id: aux.id,
        produto_id: id_produto
      }

      const headers = new HttpHeaders()
       .set('content-type', 'application/json')
       .set('Access-Control-Allow-Origin', '*')
       .set('authorization', `bearer ${aux.token}`);
      
      this.http.post(`${this.apiURL}/add_cart`, carrinho, { 'headers': headers })
        .subscribe(result => {
          let prod: any = result;
          if (prod.message === 'produto ja no carrinho') {
            alert('produto ja adicionado ao carrinho, caso queira aumentar a quantidade do produto vsite a pagina do seu carrinho !')
          }
        });
    
    } else {
      alert('necessario esta logado para adicionar ao carrihno!')
    }
  }
  
  javascript() {
    $(document).ready(function(){
      $(".bg-3").click(function(){
        if($(this).hasClass("in-cart")){
          $(this).removeClass("in-cart").text("Add to cart");;
        }
        else {
          var btn = $(this);
          btn.addClass("anim").text("Adding...");
          
          setTimeout(function(){
            btn.removeClass("anim").addClass("in-cart").text("In cart");
          }, 2000)
        }
      });
    });

  }
}
