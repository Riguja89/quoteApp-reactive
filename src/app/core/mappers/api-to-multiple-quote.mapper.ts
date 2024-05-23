import { Injectable } from "@angular/core"
import { IMultipleQuote, IQuote } from "../models/quotes.model"

@Injectable({
  providedIn: 'root'
})
export class ApiToMultipleQuote {
  map(payload: any): IMultipleQuote {
    console.log("payload" + payload)
    return {
      lectures:payload.lectures,
      totalPay:payload.totalPay,
      totalDiscounts:payload.totalDiscounts,
      msg:payload.msg
    }
  }
}
