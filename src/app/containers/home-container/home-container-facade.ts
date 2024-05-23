import { Observable, Subscription, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  IReading,
  IReadingToQuote,
  IReadingToQuoteOptimo,
} from '../../core/models/reading.model';
import { ReadingsService } from '../../core/services/readings.service';
import { Router } from '@angular/router';
//import { QuoteService } from '../../core/services/quote.service';
//import { IMultipleQuote } from '../../core/models/quotes.model';
import { AppState } from '../../core/store/store';
import { Store } from '@ngrx/store';
import { selectReadings } from '../../core/store/selectors/quote.selector';
import * as QuoteActions from '../../core/store/actions/quote.actions';

@Injectable({
  providedIn: 'root',
})
export class HomeContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly store:Store<AppState>,
    private readonly readingsService: ReadingsService,
    private readonly router: Router,
   // private readonly quoteService: QuoteService
  ) {}

  //#region observables
  readings$(): Observable<IReading[]> {
    return this.store.select(selectReadings);
  }

 // isLoading$(): Observable<boolean> {
  //  return this.store.select(selec);
 // }

 // multiplesQuotes$(): Observable<IMultipleQuote> {
  //  return this.appState.quotes.MultiplesQuotes.$();
  //}
  //#endregion

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  getReadings(): void {
    this.store.dispatch(QuoteActions.loadReadings());
  }
  //#endregion
  setRoute(route: String) {
    console.log(route);
    this.router.navigate([route]);
  }

  // quoteReadings(readingsToQuote: IReadingToQuote): void {
  //   this.quoteService
  //     .quoteReadings(readingsToQuote)
  //     .pipe(
  //       tap((result) => {
  //         this.appState.quotes.MultiplesQuotes.set(result);
  //         console.log(result);
  //         //this.router.navigate(['/admin/home']);
  //       })
  //     )
  //     .subscribe();
  // }

  // quoteReadingsOptimo(readingsToQuote: IReadingToQuoteOptimo): void {
  //   this.quoteService
  //     .quoteReadingsOptimo(readingsToQuote)
  //     .pipe(
  //       tap((result) => {
  //         this.appState.quotes.MultiplesQuotes.set(result);
  //         console.log(result);
  //         //this.router.navigate(['/admin/home']);
  //       })
  //     )
  //     .subscribe();
  // }
}
