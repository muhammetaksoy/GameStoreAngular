import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';


@Injectable({
  providedIn: 'root'
})
export class GameListDataService {
  // if we had api's in this app. We will be doing http requests in this service.
  gameList:Game[]=[];

  constructor() { }
}
