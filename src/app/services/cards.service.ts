import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  Headers,
  URLSearchParams,
  RequestOptions
} from '@angular/http';
import { Observable, from } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  // URL for CRUD operations
  cardsUrl = 'http://localhost:3000/cards';
  transactionsUrl = 'http://localhost:3000/transactions';
  constructor(private http: Http) {}

  getCards(): Observable<Cards[]> {
    return this.http
      .get(this.cardsUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getAllCards(): Observable<Cards[]> {
    return this.http
      .get(this.cardsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  saveCard(card: Cards): Observable<number> {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: cpHeaders });
    return this.http
      .post(this.cardsUrl, card, options)
      .map(success => success.status)
      .catch(this.handleError);
  }


  getCardDetailsbyId(cardId: string): Observable<any[]> {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: cpHeaders });
    return this.http
      .get(this.transactionsUrl + '/' + cardId)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
