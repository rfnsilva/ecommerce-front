import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

import { Paypal } from '../models/Paypal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  public user: any;
  public carrinho: any;
  readonly apiURL: string;
  public id_user: string;
  public showSuccess: boolean;
  public valor_total: number = 0;
  public ids_del_produtos: string[] = [];

  public envio_paypal: Paypal[];
  public rota: Router;
  
  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(){
    let user_data = JSON.parse(window.localStorage.getItem('currentUser'));
    console.log(user_data.id)

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization', `bearer ${user_data.token}`);
    
    this.http.get(`${this.apiURL}/get_user/${user_data.id}`, { 'headers': headers })
      .subscribe(result => {
        this.user = result;
        this.carrinho = this.user.produtos;
        this.id_user = this.user.id;
        console.log(this.carrinho)
        
        for (var i = 0; i < this.carrinho.length; i++){
          this.valor_total += this.carrinho[i].valor;
          this.ids_del_produtos[i] = this.carrinho[i].id;
        }
      });
    
    this.initConfig();
  }

  private initConfig(): void {

    this.payPalConfig = {
      
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: `${this.valor_total}`,
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: `${this.valor_total}`
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: `${this.valor_total}`,
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        //console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        //console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
        let user_data = JSON.parse(window.localStorage.getItem('currentUser'));

        const headers= new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('authorization', `bearer ${user_data.token}`);
        
        this.http.post(`${this.apiURL}/comprar_produto/${this.id_user}`, this.ids_del_produtos, { 'headers': headers })
         .subscribe(result => {
           console.log('resultado: ',result)
         });
        this.http.post(`${this.apiURL}/add_vendas_admin_cliente/${this.id_user}`, this.carrinho, { 'headers': headers })
         .subscribe(result => {
           console.log(result);
         });
        
        this.r.navigate(['/confirmacao'], { queryParams: data});
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}