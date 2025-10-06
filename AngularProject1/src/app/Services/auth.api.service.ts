import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private http : HttpClient) { }

  private baseUrl = 'https://localhost:7071/auth';
  addUser(userData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post(`${this.baseUrl}/Register`, userData, { headers });
}
}
