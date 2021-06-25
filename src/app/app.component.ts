import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder,  private appService: AppService){

  }

  ngOnInit(){
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      nip: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      address: ['', [Validators.maxLength(20)]],
      web: ['', [Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)]],
    })
  }

  onSubmit(){
    const dataV = this.form.value;
    this.appService.submitFormPost(dataV).subscribe(response=>{
      console.log(response)
    })
    //Enviar
  }
  
}
