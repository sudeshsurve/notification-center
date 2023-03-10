import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  tableEmptyData : boolean = true
  myForm!: FormGroup;
  submitted = false
  @ViewChild('#email') email: any
  value: any = {
    email: ""
  }
  tite :string = "Conmplaints Notification Groups" 

  constructor(private fb: FormBuilder) { 
   

  }


  listOfData = [
    {
      checkOptionsOne : [
        { label: 'email', value: 'John Brown',},  
        { label: 'Whatsapp', value: 9928398293 },
        { label: 'SMS', value: 'Message' }],
      value: 'sudesh',
      email: 'John Brown',
      phoneNO : 9928398293
    },
    {
      checkOptionsOne : [
        { label: 'email', value: 'sudesh',},  
        { label: 'Whatsapp', value: 'Pear' },
        { label: 'SMS', value: 'Orange' }],
      email: 'Jim Green',
      phoneNO : 9928398293
    },
    {
      checkOptionsOne : [
        { label: 'email', value: 'sudesh',},  
        { label: 'Whatsapp', value: 'Pear' },
        { label: 'SMS', value: 'Orange' }],
      email: 'sudesh@gmail.com ',
      phoneNO : 9928398293
    },
    {
      checkOptionsOne : [
        { label: 'email', value: 'sammer@gmail.com',},  
        { label: 'Whatsapp', value: '9928398293' },
        { label: 'SMS', value: 'Orange' }],
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
  onSubmit(form:any) {
    try {
      this.submitted = true
    if(form.valid){
      this.isVisible = false;
      console.log('Button ok clicked!');
    }else{
       throw new Error("all fileds required!");
    }
    } catch (error) {
       if(error  instanceof Error){
        throw error
       }
    }
    

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
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  NumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"
  ngOnInit(): void {
    this.myForm = this.fb.group({
      whatsapp: [ null, [Validators.required , Validators.pattern(this.NumberPattern)]],
      email: [null, [Validators.required, Validators.email , Validators.pattern(this.emailPattern)]],
      message: [null, [Validators.required, Validators.pattern(this.NumberPattern)]],
    });
  }

}
