import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LogManagementService {
  private getListfileUrl = environment.backEndUrl + 'api/log/get-list-file';
  private downloadFileUrl = environment.backEndUrl + 'api/log/download?fileName=';
  constructor(private http: HttpClient) {
  }

  getListFile() {
    return this.http
      .get(this.getListfileUrl);
  }

  downloadFile(fileName: string) {
    window.location.assign(this.downloadFileUrl + fileName);
  }
}
