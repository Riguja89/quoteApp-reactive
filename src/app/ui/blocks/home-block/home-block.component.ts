import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IReading,
  IReadingChecked,
  IReadingToQuote,
} from '../../../core/models/reading.model';
import { ReadingElementComponent } from '../../elements/reading-element/reading-element.component';
//import { ModalBlockComponent } from '../modal-block/modal-block.component';
//import { IMultipleQuote } from '../../../core/models/quotes.model';

@Component({
  selector: 'app-home-block',
  standalone: true,
  imports: [ReadingElementComponent],
  templateUrl: './home-block.component.html',
  styleUrl: './home-block.component.css',
})
export class HomeBlockComponent {
  @Input() readings: IReading[];
 // @Input() quotes: IMultipleQuote;
  @Output() infoEnviada = new EventEmitter<IReadingToQuote>();

  public readingsChecked: IReadingChecked[] = [];
  public showModal=false;

  recibirInfo(readingChecked: IReadingChecked) {
    if (this.readingsChecked.length) {
      const existente = this.readingsChecked.find(
        (item) => item.id == readingChecked.id
      );
      if (existente) {
        existente.amount = readingChecked.amount;
        existente.checked = readingChecked.checked;
      } else {
        this.readingsChecked.push(readingChecked);
      }
    } else {
      this.readingsChecked.push(readingChecked);
    }
  }
  sendToQuote() {
    const toQuote: IReadingToQuote={listReadingToQuoteDTO: [null]};
    toQuote.listReadingToQuoteDTO.pop();
    this.readingsChecked.map((item) =>
      item.checked == true
        ? toQuote.listReadingToQuoteDTO.push({ id: item.id, amount: item.amount })
        : null
    );
    this.infoEnviada.emit(toQuote);
  }

}
