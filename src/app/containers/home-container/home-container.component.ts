import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeBlockComponent } from '../../ui/blocks/home-block/home-block.component';
import { AsyncPipe } from '@angular/common';
import { HomeContainerFacade } from './home-container-facade';
import { IReading, IReadingToQuote } from '../../core/models/reading.model';
import { Observable } from 'rxjs';
//import { HeaderBlockComponent } from '../../ui/blocks/header-block/header-block.component';
//import { IMultipleQuote } from '../../core/models/quotes.model';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [HomeBlockComponent, AsyncPipe],
  templateUrl: './home-container.component.html'
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  public readings$: Observable<IReading[]>;
  //public multipleQuote$: Observable<IMultipleQuote>
  constructor (
    private readonly facade: HomeContainerFacade,


  ){}
  ngOnInit(): void {
    this.facade.initSubsciptions();
    this.facade.getReadings();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.readings$ = this.facade.readings$();
  //  this.multipleQuote$=this.facade.multiplesQuotes$();
  }

  recibirInfo(route: String) {
    this.facade.setRoute(route)
  }

  recibirReadingsToQuote(readingsToQuote:IReadingToQuote){
    console.log("voy al facade: " +readingsToQuote)
   // this.facade.quoteReadings(readingsToQuote)
  }

}