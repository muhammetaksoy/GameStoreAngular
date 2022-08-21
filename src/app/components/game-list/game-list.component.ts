import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/shared/constants/AppConstants';
import { Message } from 'src/app/shared/enums/message';
import { Game } from 'src/app/shared/models/game.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { GameListDataService } from 'src/app/shared/services/game-list-data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  searchText:string='';
  titleText:string=AppConstants.GameListTitle;
  buttonText:string=AppConstants.newGameButtonTitle;
  noRecordText:string=AppConstants.noRecordText;
  GameNameText:String=AppConstants.GameNameText;
  BundleText:String=AppConstants.BundleText;
  OwnerText:String=AppConstants.OwnerText;
  gameList:Game[]=[];

  constructor(
    private gameListDataService:GameListDataService,
    private alertService:AlertService
    ) { }

  ngOnInit(): void {
    this.gameList=this.gameListDataService.gameList;
  }
  onClickDelete(item:any){
    this.gameList.splice(item, 1);
    this.alertService.deleteMessage(Message.Remove);
  }

}
