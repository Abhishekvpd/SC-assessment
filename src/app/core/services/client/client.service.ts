import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../utils/urls';
import { MarketPlace } from '../../utils/models';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getBatchLists() {
    return this.http.get<MarketPlace>(`${baseUrl}/client/csvbatch/list`);
  }

  getTemplateLists() {
    return this.http.get<MarketPlace>(`${baseUrl}/client/templates/list`);
  }

  handleExport() {
    return this.http.get(`${baseUrl}/client/templates/export/1`);
  }
}
