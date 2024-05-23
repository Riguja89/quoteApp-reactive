import { Injectable } from "@angular/core"
import { IQuote } from "../models/quotes.model"

@Injectable({
  providedIn: 'root'
})
export class ApiToQuote {
  map(payload: any): IQuote {
    console.log("payload" + payload)
    return {
      id:payload.id,
      title:payload.title,
      author:payload.author,
      originalPrice:payload.originalPrice,
      finalPrice:payload.finalPrice,
      discount:payload.discount,
      type:payload.type,
      clientStartDate:payload.clientStartDate,
      purchaseType:payload.purchaseType,
      amount:payload.amount,
    }
  }
}
