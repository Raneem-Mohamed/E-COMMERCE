import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivform',
  templateUrl: './reactivform.component.html',
  styleUrls: ['./reactivform.component.css'],
})
export class ReactivformComponent implements OnInit {
  postform: FormGroup;
  constructor() {
    this.postform = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
      ]),
      pass: new FormControl('', Validators.required),
      comfpass: new FormControl('', Validators.required),
    });
  }

  submitpostform(){
    console.log(this.postform)
  }

  get getformcontrols(){
    return this.postform.controls;
  }

  ngOnInit(): void {}
}
