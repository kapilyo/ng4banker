// json-server --watch db.json
import { Component, OnInit } from '@angular/core';
import { Cards } from '../models/cards';
import { CardsService } from '../services/cards.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-cards-dashboard',
  templateUrl: './cards-dashboard.component.html',
  styleUrls: ['./cards-dashboard.component.css']
})
export class CardsDashboardComponent implements OnInit {
  cardsArray: Cards[];
  statusCode: number;
  enableAddCard = false;
  cardForm;
  transaction: any = {};
  selectedCard: Cards;
  selectedCardIndex = 0;
0
  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.cardsService
      .getCards()
      .subscribe(
        data => this.cardsArray = data,
        errorCode => (this.statusCode = errorCode)
      );
  }

  AddCard() {
    this.enableAddCard = !this.enableAddCard;
    if (this.enableAddCard) {
        this.cardForm = new FormGroup({
          card_service: new FormControl('', Validators.required),
          card_type: new FormControl('', Validators.required),
          card_name: new FormControl('', Validators.required),
          card_num: new FormControl('', Validators.required)
        });
    }
}

  onCardSubmit(cardData) {
      const maxCard = this.cardsArray.length - 1;
      const maxCardId = this.cardsArray[maxCard].card_id;
      cardData.card_id = maxCardId + 1;

      this.cardsService.saveCard(cardData).subscribe(data => console.log(data), errorCode => console.log(errorCode));
  }

  onSelectCard(card: Cards, i: number) {
    this.selectedCardIndex = i;
    this.selectedCard = card;
    this.cardsService.getCardDetailsbyId(card.card_id).subscribe(data => this.transaction = data, errorCode => console.log(errorCode));
  }
}
