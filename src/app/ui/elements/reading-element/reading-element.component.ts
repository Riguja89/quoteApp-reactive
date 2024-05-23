import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { IReading, IReadingChecked } from '../../../core/models/reading.model';


@Component({
  selector: 'app-reading-element',
  standalone: true,
  imports: [],
  templateUrl: './reading-element.component.html',
  styleUrl: './reading-element.component.css',
})
export class ReadingElementComponent {
  @Input() reading: IReading;
  @Output() infoEnviada = new EventEmitter<IReadingChecked>();
  public disabled: boolean = true;
  public readinChecked: IReadingChecked = { id: 0, checked: false, amount: 1 };

  checkedUnchecked(event: Event) {
    const target = event.target as HTMLInputElement;
    const targetAmount = document.getElementById('amount') as HTMLInputElement;
    if (target.name == 'check') {
      this.readinChecked.id = this.reading.id;
      this.readinChecked.checked = target.checked;
      this.readinChecked.amount = parseInt(targetAmount.value);
      this.disabled = !this.disabled;
    }
    if (target.name == 'amount') {
      this.readinChecked.amount=parseInt(target.value)?parseInt(target.value):1;
    }
    console.log(this.readinChecked);
    this.infoEnviada.emit(this.readinChecked);
  }
}
