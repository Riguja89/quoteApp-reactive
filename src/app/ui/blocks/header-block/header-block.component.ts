import { Component,ElementRef,EventEmitter, Output, ViewChild } from '@angular/core';
import { StorageService } from '../../../core/services/generals/storage.service';


@Component({
  selector: 'app-header-block',
  standalone: true,
  imports: [],
  templateUrl: './header-block.component.html',
  styleUrl: './header-block.component.css'
})
export class HeaderBlockComponent {
  @ViewChild('headerNav', { static: true }) headerNav!: ElementRef;
  @ViewChild('openButton', { static: true }) openButton!: ElementRef;
  @ViewChild('closeButton', { static: true }) closeButton!: ElementRef;

  @Output() infoEnviada = new EventEmitter<String>();
  constructor(
    private readonly store: StorageService
  ){}
  toggleNavVisibleEvent() {
    const nav = this.headerNav.nativeElement;
    const openButton = this.openButton.nativeElement;
    const closeButton = this.closeButton.nativeElement;

    nav.classList.toggle('header__nav--visible');
    closeButton.classList.toggle('header__nav--visible');
    openButton.classList.toggle('header__nav--hiden');
  }
  navigate(route: String){
    this.infoEnviada.emit(route);
  }
  logOut(){
    this.store.remove('token');
  }
}
