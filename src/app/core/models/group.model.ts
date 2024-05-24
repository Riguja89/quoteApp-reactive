export interface IReadingItem{
  readingId:string;
  amount: number;
}

export interface IgrupeReadings{
  readingAmountList:IReadingItem[]
}

export interface Igroup{
  clientId: string;
  groupTuplesReadingLists: IgrupeReadings[]
}
