import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

interface Arvot {
  value: string;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  arvot: Arvot[] = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},
  ];
  firstFormGroup = this._formBuilder.group({
    rotu: ['', Validators.required],
    ika: ['', Validators.required],
    viat: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    eka: ['', Validators.required],
    toka: ['', Validators.required],
    kolmas: ['', Validators.required],
    neljas: ['', Validators.required],
    viides: ['', Validators.required],
    kuudes: ['', Validators.required],
    seiska: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {}

  saveInfo() {
    console.log(this.firstFormGroup.value, this.secondFormGroup.value);
  }
}
