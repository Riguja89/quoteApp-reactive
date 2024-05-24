import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Igroup } from '../../../core/models/group.model';
import { ModalBlockComponent } from '../modal-block/modal-block.component';
import { IgroupQuote } from '../../../core/models/quote.model';

@Component({
  selector: 'app-side-group-block',
  standalone: true,
  imports: [ModalBlockComponent],
  templateUrl: './side-group-block.component.html',
  styleUrl: './side-group-block.component.css'
})
export class SideGroupBlockComponent {
  @Input() group:Igroup
  @Input() results: IgroupQuote
  @Output() sendGroups=new EventEmitter<Igroup>();
  @Output() sendClient=new EventEmitter<string>();
  public showModal=false;

  sendGroup(groupe: Igroup){
    this.sendGroups.emit(groupe);
    this.showModal = true;
  }

  sendClientId(event:Event){
    const inputElement = event.target as HTMLInputElement;
    const clientId = inputElement.value;
    this.sendClient.emit(clientId);
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }


}
