import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.javascript();
  }

  javascript() {
  }

  change_image(image){
    console.log(image)
    var image_container = <HTMLImageElement>(document.getElementById("main-image"));
    image_container.src = image.src;
  }
}