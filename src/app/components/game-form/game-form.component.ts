import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/shared/constants/AppConstants';
import { Message } from 'src/app/shared/enums/message';
import { AlertService } from 'src/app/shared/services/alert.service';
import { GameListDataService } from 'src/app/shared/services/game-list-data.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent {

  GameFormTitle: string = AppConstants.GameFormTitle;
  GameNameText: String = AppConstants.GameNameText;
  BundleText: String = AppConstants.BundleText;
  OwnerText: String = AppConstants.OwnerText;
  SaveButtonTitle: String = AppConstants.SaveButtonTitle;
  IsRequired: String = AppConstants.isRequired;
  NotValid: String = AppConstants.NotValid;
  gameAddForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gameListDataService: GameListDataService,
    private router: Router,
    private alertService: AlertService
  ) {
    this.gameAddForm = this.fb.group({
      name: ['', Validators.required],
      bundle: ['', [Validators.required, Validators.pattern(/^([A-Za-z]{1}[A-Za-z\d_]*\.)+[A-Za-z][A-Za-z\d_]*$/)]],
      owner: ['', [Validators.required, Validators.email]],
      file: [null, [Validators.required]]
    });
  }

  get gameAddFormControl() {
    return this.gameAddForm.controls;
  }

  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.gameAddForm.patchValue({
        file: file
      });
    }
  }

  onClickSave() {
    if (this.gameAddForm.valid) {
      this.gameListDataService.gameList.push(this.gameAddForm.value);
      this.alertService.successMessage(Message.Success);
      this.router.navigateByUrl("");
    }
    else {
      this.alertService.warningMessage(Message.NotRequired);
    }
  }

}
