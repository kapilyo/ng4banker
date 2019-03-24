import { Component, OnInit } from '@angular/core';

import {ArticlesService} from '../services/articles.service';
import {Article} from '../models/article';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  articlesArray: Article[];
  statusCode: number;

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.articleService.getAllArticles().subscribe(data => this.articlesArray = data, errorCode => this.statusCode = errorCode);
  }

}
