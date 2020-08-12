import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'home';
  profileForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });
  readonly apiURL : string;
  public rota: Router;
  public mode: any;

  @Input()
  public ctrl: boolean = true;
  @Input()
  public ctrl_admin: boolean = true;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
    this.javascript();

    if (window.localStorage.getItem('currentUser')) {
      this.ctrl = false;
    }
  }

  //light mode
  pre_mode() {
    if (this.mode === true) {
      $('#mode_1').addClass('mode_1');
      $('#mode_2').addClass('mode_2');
      $('#mode_3').addClass('mode_3');
      $('#mode_4').addClass('mode_4');
      $('#mode_5').addClass('mode_5');
      $('.produto_item').addClass('mode_6');
      $('#mode_7').addClass('mode_7');
      $('#mode_8').addClass('mode_8');
      $('#model_9').addClass('model_9');
      $('#mode_10').addClass('mode_10');
    } else {
      $('#mode_1').removeClass('mode_1');
      $('#mode_2').removeClass('mode_2');
      $('#mode_3').removeClass('mode_3');
      $('#mode_4').removeClass('mode_4');
      $('#mode_5').removeClass('mode_5');
      $('.produto_item').removeClass('mode_6');
      $('#mode_7').removeClass('mode_7');
      $('#mode_8').removeClass('mode_8');
      $('#model_9').removeClass('model_9');
      $('#mode_10').removeClass('mode_10');
    }
  }

  onSubmit() {
    this.login(this.profileForm.value);
  }

  login(user: any) {
    this.http.post(`${this.apiURL}/login`, user)
      .subscribe(result => {
        window.localStorage.setItem('currentUser', JSON.stringify(result));
        this.ctrl = false;
        this.r.navigate(['/home']);
      });
  }

  onSubmit_2() {
    this.register(this.profileForm.value);
  }

  register(user: any) {
    this.http.post(`${this.apiURL}/register`, user)
      .subscribe(result => {
        window.localStorage.setItem('currentUser', JSON.stringify(result));
        this.ctrl = false;
        this.r.navigate(['/home']);
      });
  }
  
  onSubmit_1() {
    this.login_admin(this.profileForm.value);
  }

  login_admin(user: any) {
    this.http.post(`${this.apiURL}/login_admin`, user)
      .subscribe(result => {
        window.localStorage.setItem('currentAdmin', JSON.stringify(result));
        this.r.navigate(['/home_admin']);
      });
  }

  onSubmit_3() {
    this.register_admin(this.profileForm.value);
  }

  register_admin(user: any) {
    this.http.post(`${this.apiURL}/register_admin`, user)
      .subscribe(result => {
        window.localStorage.setItem('currentAdmin', JSON.stringify(result));
        this.r.navigate(['/home_admin']);
      });
  }

  logout() {
    this.ctrl = true;
    window.localStorage.clear();
  }

  javascript() {
    // Toggle Animation by Class
    $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
    });
  }
}
