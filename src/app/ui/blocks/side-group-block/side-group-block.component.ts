import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Igroup } from '../../../core/models/group.model';

@Component({
  selector: 'app-side-group-block',
  standalone: true,
  imports: [],
  templateUrl: './side-group-block.component.html',
  styleUrl: './side-group-block.component.css'
})
export class SideGroupBlockComponent {
  @Input() group:Igroup
  @Output() sendGroups=new EventEmitter<Igroup>();

  sendGroup(groupe: Igroup){
    this.sendGroups.emit(groupe);
  }

}
