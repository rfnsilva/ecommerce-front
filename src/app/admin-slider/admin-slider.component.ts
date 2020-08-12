import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-slider',
  templateUrl: './admin-slider.component.html',
  styleUrls: ['./admin-slider.component.scss']
})
export class AdminSliderComponent implements OnInit {
  title = 'slider';
  profileForm = new FormGroup({
    url: new FormControl('')
  });
  readonly apiURL : string;
  public rota: Router;
  public modal_url: string = '';
  public modal_id: string = '';

  @Input()
  public sliders: any;

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
    
    this.http.get(`${this.apiURL}/get_sliders`, { 'headers': headers })
     .subscribe(result => {
       this.sliders = result;
     });
  }

  Adicionar(id_button: number, id: string, url: string) {
    //edit = 1 del = 2 detalhes = 3
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));
    
    if (id_button === 2) {
      if(confirm("confirma delete da categoria: " + id)) {
        const headers= new HttpHeaders()
         .set('content-type', 'application/json')
         .set('Access-Control-Allow-Origin', '*')
         .set('authorization', `bearer ${user_data.token}`);
        
        this.http.delete(`${this.apiURL}/del_slider/${id}`, { 'headers': headers })
         .subscribe(result => {
           this.sliders = result;
         });
      }
    }

    if (id_button === 1) {
      this.modal_url = url;
      this.modal_id = id;
    }
  }

  editar(slider: any) {
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));
    const cat_enviar = {
      url: `${slider.url}`
    }
    
    const headers = new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')
     .set('authorization', `bearer ${user_data.token}`);
   
    this.http.put(`${this.apiURL}/edit_slider/${this.modal_id}`, cat_enviar, { 'headers': headers })
     .subscribe(result => {
       this.sliders = result;
     });
  }

  onSubmit() {
    this.editar(this.profileForm.value);
  }

  add(slider: any) {
    let user_data = JSON.parse(window.localStorage.getItem('currentAdmin'));
    
    const headers = new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')
     .set('authorization', `bearer ${user_data.token}`);
   
    this.http.post(`${this.apiURL}/add_slider`, slider, { 'headers': headers })
     .subscribe(result => {
       this.sliders = result;
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
