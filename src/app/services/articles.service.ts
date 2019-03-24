import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Article} from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
    // URL for CRUD operations
   articleUrl = 'http://localhost:3000/articles';
    // Create constructor to get Http instance
   constructor(private http: Http) {
   }


   getAllArticles(): Observable<Article[]>{
      return this.http.get(this.articleUrl)
          .map(this.extractData)
          .catch(this.handleError);
   }

   //Create article
   createArticle(article: Article): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: cpHeaders });
          return this.http.post(this.articleUrl, article, options)
                 .map(success => success.status)
                 .catch(this.handleError);
      }

  private extractData(res: Response) {
    let body = res.json();
      return body;
  }
  private handleError (error: Response | any) {
    console.error(error.message || error);
      return Observable.throw(error.status);
  }

}
