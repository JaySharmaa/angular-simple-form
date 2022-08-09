import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  formData:any = {}

  getForm(data:NgForm){
    this.formData=data
  }
}
