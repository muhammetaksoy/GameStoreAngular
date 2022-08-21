import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private alert:MatSnackBar) { }

  openAlert(message:string,panelClass:string){
    this.alert.open(message,"",{
      duration:2000,
      verticalPosition:'bottom',
      horizontalPosition:'center',
      panelClass:[panelClass]
    })
  }

  successMessage(message:string){
    this.openAlert(message,"alert-success");
  }

  warningMessage(message:string){
    this.openAlert(message,"alert-warning");
  }

  deleteMessage(message:string){
    this.openAlert(message,"alert-remove");
  }
}
