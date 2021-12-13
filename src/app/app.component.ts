import { Component } from '@angular/core';
import {AppService} from './app.service';
import {Bank} from './bank';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank Details';  
  results : Bank[];
  model= new Bank();
  input :any;
  constructor(public appService : AppService ){
    this.submit();
  }
  submit(){
    //console.log(this.model);
    this.appService.getBankDetails(this.model).subscribe(res=>{
      this.results = res;
    });
  }
  
}
