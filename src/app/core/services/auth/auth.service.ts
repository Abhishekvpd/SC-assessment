import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../utils/urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  userLogin(payload: { email: string; password: string }) {
    return this.http.post(`${baseUrl}/auth/api/token`, payload);
  }
}
