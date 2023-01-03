import { Component, ViewChild } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('#email') email: any
  value: any = {
    email: ""
  }


  listOfData = [
    {
      checkOptionsOne : [
        { label: 'email', value: 'John Brown',},  
        { label: 'Phone No', value: 9928398293 },
        { label: 'Message', value: 'Message' }],
      value: 'sudesh',
      email: 'John Brown',
      phoneNO : 9928398293
    },
    {
      checkOptionsOne : [
        { label: 'email', value: 'sudesh',},  
        { label: 'Phone No', value: 'Pear' },
        { label: 'Message', value: 'Orange' }],
      email: 'Jim Green',
      phoneNO : 9928398293
    },
    {
      checkOptionsOne : [
        { label: 'email', value: 'sudesh',},  
        { label: 'Phone No', value: 'Pear' },
        { label: 'Message', value: 'Orange' }],
      email: 'sudesh@gmail.com ',
      phoneNO : 9928398293
    },
    {
      checkOptionsOne : [
        { label: 'email', value: 'sammer@gmail.com',},  
        { label: 'Phone No', value: '9928398293' },
        { label: 'Message', value: 'Orange' }],
      email: 'sammer@gmail.com',
      phoneNO : 9928398293
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
      
    // this.listOfData.push({ email: this.value.email  })
    this.isVisible = false;

  }

  deleteemail(i: any) {
    console.log(i);
    this.listOfData.splice(i, 1)
  }

  log(data: any[]): void {
     data.forEach(x => {
       if(x.checked){
         console.log(x.value);
      }
       
     });

    
    // console.log(res)
    
    
  }
}
