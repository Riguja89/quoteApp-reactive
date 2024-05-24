export interface IReading {
  id: string;
  title: string;
  author: string;
  originalPrice: number;
  type: string;
}
export interface IReadingChecked {
  id: string;
  checked: boolean;
  amount: number;
}

export interface IReadingToQuote {
  listReadingToQuoteDTO: [{ id: string; amount: number }];
}

export interface IReadingToQuoteOptimo {
  lectures: [{ id: string; amount: number }];
  budget:number;
}
