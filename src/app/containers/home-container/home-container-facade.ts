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
import * as GroupActions from '../../core/store/actions/group.actions';
import * as ResponseActions from '../../core/store/actions/response.actions';
import {
  IReadingItem,
  Igroup,
  IgrupeReadings,
} from '../../core/models/group.model';
import { selectGroup } from '../../core/store/selectors/quote.selector';

@Injectable({
  providedIn: 'root',
})
export class HomeContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) // private readonly quoteService: QuoteService
  {}

  //#region observables
  readings$(): Observable<IReading[]> {
    return this.store.select(selectReadings);
  }

  group$(): Observable<Igroup>{
   return this.store.select(selectGroup);
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


  sendGroups(group :Igroup){
    this.store.dispatch(ResponseActions.loadResponses({group}));
  }

  addReadingsToGroup(readingsToQuote: IReadingToQuote): void {
    //const actualgroup: Igroup = this.store.select(selectGroup)
    // const group: Igroup = {
    //   clientId: 'micliente de prueba',
    //   groupTuplesReadingList: [
    //     {
    //       readingAmountList: readingsToQuote.listReadingToQuoteDTO.map((r) => {
    //         return {
    //           readingId: r.id,
    //           amount: r.amount,
    //         };
    //       }),
    //     },
    //   ],
    // };
    const lisItems: IgrupeReadings = {
      readingAmountList:readingsToQuote.listReadingToQuoteDTO.map((r) => {
        return {
          readingId: r.id,
          amount: r.amount,
        };
      }),
    };

    this.store.dispatch(GroupActions.addReadingsToGroup({lisItems}));
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
