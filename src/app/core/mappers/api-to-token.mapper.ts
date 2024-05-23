import { Injectable } from "@angular/core";
import { IUserModel } from "../models/user.mode";

@Injectable({
  providedIn: 'root'
})
export class ApiToTokenMapper {
  map(payload: any): String {
    console.log("payload" + payload)
    return payload.token
  }
}
