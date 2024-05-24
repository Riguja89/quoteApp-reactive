import { environment } from "../../../environments/environment.development";

export const URL_RESOURCES = {
  user: `${environment.apiUrl}/user`,
  userParams: (params:string) => `${environment.apiUrl}/user/${params}`,
  login: `${environment.apiUrlAuth}/authenticate`,
  register: `${environment.apiUrlAuth}/register`,
  reading:`${environment.apiUrlReading}`,
  response:`${environment.apiUrlResponse}`,
  registReading:`${environment.apiUrlQuotes}/calculateIndividualQuote`,
  calculateQuote:`${environment.apiUrlQuotes}/CalculateMultipleQuote`,
  calculateOptima:`${environment.apiUrlQuotes}/CalculateOptimalQuote`,
}
