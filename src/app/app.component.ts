import { Component, ViewChild } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('#email') email :any
 value :any= {
email : ""
 }
   

  listOfData = [
    {
      email: 'John Brown',   
    },
    {
      email: 'Jim Green',
    },
    {
      email: 'sudesh@gmail.com ',
    },
    {
      email: 'sammer@gmail.com',
    },
  ]
  title = 'notification-center';
  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  submit(): void {
    console.log('Button ok clicked!');
    console.log(this.email);
    
   this.listOfData.push({email : this.value.email})
    this.isVisible = false;
  
  }

  deleteemail(i:any){
    console.log(i);
  this.listOfData.splice(i , 1)
  }

 
}
