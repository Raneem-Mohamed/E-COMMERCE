import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent implements OnInit {
@Input() cardtitle:any;

   
  constructor() { }

  ngOnInit(): void {
    console.log(this.cardtitle)
  }

}
