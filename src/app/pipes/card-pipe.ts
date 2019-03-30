import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
    name : 'CardPipe'
 })

 export class CardPipe implements PipeTransform {
    transform(value: any) {
        return '**** **** **** ' + value;
    }
 }
