import { Injectable } from '@angular/core';
import { IgroupQuote } from '../models/quote.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToResponses {
  map(payload: any): IgroupQuote {
    console.log(payload);
    return {
      nameClien: payload[0].nameCliente,
      totalGroup: payload[0].totalGroupQuote,
      discountGroup: payload[0].totalGroupDiscount,
      resumeList: payload[0].resumeQuoteList.map(resume=>{
        return {
          nameClient:resume.nameClient,
          startDate:resume.startDateClient,
          quoteType:resume.quoteType,
          discount:resume.totaDiscount,
          total:resume.resumeTotal,
          itemList:resume.itemList.map(item=>{
            return {
              id:item.readingId,
              title:item.readingTitle,
              author:item.readingAuthor,
              type:item.readingType,
              finalPrice:item.finalPrice,
              originalPrice:item.originalPrice,
              discount:item.discount,
              amount:item.amount
            }
          })
        }
      }),
    }
  }
}
