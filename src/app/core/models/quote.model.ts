export interface IItem{
  id: string;
  title: string;
  author:string;
  type:string;
  finalPrice:number;
  originalPrice:number;
  discount:number;
  amount:number;
}

export interface Iresume{
  nameClient:string;
  startDate:string;
  quoteType:string;
  discount:number;
  total:number;
  itemList:IItem[];
}

export interface IgroupQuote {
  nameClien: string;
  totalGroup:number;
  discountGroup:number;
  resumeList:Iresume[];
}
