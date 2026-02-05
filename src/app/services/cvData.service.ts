import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CVDataService {
  private apiUrl = 'http://localhost:3000/api/cv-data';

  constructor(private http: HttpClient) {}

  loadJsonCV(cvJson: any): Observable<any> {
    return this.http.post(this.apiUrl, cvJson);
  }
}