export interface IReading {
  id: number;
  title: string;
  author: string;
  originalPrice: number;
  type: string;
}
export interface IReadingChecked {
  id: number;
  checked: boolean;
  amount: number;
}

export interface IReadingToQuote {
  listReadingToQuoteDTO: [{ id: number; amount: number }];
}

export interface IReadingToQuoteOptimo {
  lectures: [{ id: number; amount: number }];
  budget:number;
}
