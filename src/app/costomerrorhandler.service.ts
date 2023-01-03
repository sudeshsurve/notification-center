import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CostomerrorhandlerService implements ErrorHandler {

  constructor(private snackbar : MatSnackBar , private ngzone : NgZone) { }
  handleError(error: HttpErrorResponse ) {
    this.ngzone.run(()=>{
    this.snackbar.open(error.message,
      'Close', {duration:3000} )
    })
      
    
   
    
   
  }
}  
