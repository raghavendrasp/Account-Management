import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpServiceConstant } from "../model/http-service-constant";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(private http: HttpClient) {}

  //Create account
  createAccount(account): Observable<Account[]> {
    return this.http
      .post<Account[]>(
        HttpServiceConstant.baseURL + "/account",
        JSON.stringify(account),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  //Get Account Details
  getAccounts(): Observable<Account[]> {
    return this.http
      .post<Account[]>(
        HttpServiceConstant.baseURL + "/getAccounts",
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getSampleUser(): Observable<any> {
    return this.http
      .post("https://reqres.in/api/users", this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
