import { Component, OnInit } from '@angular/core';
// import { format } from 'path';


@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
}

submitform(form:Object)
{
  return form;

}

usersub(form:object){
    

  console.log(form)
}


}
