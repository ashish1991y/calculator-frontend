import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface OperationRequestBody {
  firstValue: number;
  secondValue: number;
  operator: string;
}

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private readonly httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    const result = new HttpHeaders();
    result.set('Content-Type', 'application/json');
    this.httpHeaders = result;
  }

  public performOperation(requestBody: OperationRequestBody): Observable<any> {
    const url = 'http://localhost:8082/hcl/v1/calculate';
    return this.http.post<any>(url, requestBody, {headers: this.httpHeaders});
  }
}
