import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeBlockComponent } from '../../ui/blocks/home-block/home-block.component';
import { AsyncPipe } from '@angular/common';
import { HomeContainerFacade } from './home-container-facade';
import { IReading, IReadingToQuote } from '../../core/models/reading.model';
import { Observable } from 'rxjs';
import { SideGroupBlockComponent } from '../../ui/blocks/side-group-block/side-group-block.component';
import { Igroup } from '../../core/models/group.model';
//import { HeaderBlockComponent } from '../../ui/blocks/header-block/header-block.component';
//import { IMultipleQuote } from '../../core/models/quotes.model';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [HomeBlockComponent, SideGroupBlockComponent, AsyncPipe],
  templateUrl: './home-container.component.html'
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  public readings$: Observable<IReading[]>;
  public group$: Observable<Igroup>;
  //public multipleQuote$: Observable<IMultipleQuote>
  constructor (
    private readonly facade: HomeContainerFacade,


  ){}
  ngOnInit(): void {
    this.facade.initSubsciptions();
    this.facade.getReadings();
   // this.facade.getGroup();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.readings$ = this.facade.readings$();
    this.group$ = this.facade.group$();
  //  this.multipleQuote$=this.facade.multiplesQuotes$();
  }

  recibirInfo(route: String) {
    this.facade.setRoute(route)
  }

  sendGroup(group: Igroup){
    console.log(group)
    this.facade.sendGroups(group)

  }

  recibirReadingsToQuote(readingsToQuote:IReadingToQuote){
    this.facade.addReadingsToGroup(readingsToQuote)
  }

}
