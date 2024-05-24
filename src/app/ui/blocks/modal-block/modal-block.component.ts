import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IgroupQuote } from '../../../core/models/quote.model';

@Component({
  selector: 'app-modal-block',
  standalone: true,
  imports: [],
  templateUrl: './modal-block.component.html',
  styleUrl: './modal-block.component.css'
})
export class ModalBlockComponent {
  @Input() showModal: boolean;
  @Input() results:IgroupQuote;
  @Output() closeModal = new EventEmitter<boolean>();

  closeModal2(){
    this.closeModal.emit()
  }
}
