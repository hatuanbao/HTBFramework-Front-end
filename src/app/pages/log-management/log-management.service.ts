import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LogManagementService {
  
  private getListfileUrl = environment.backEndUrl + 'api/log/get-list-file';
  private downloadFileUrl = environment.backEndUrl + 'api/log/download';
  private headers: any;
  constructor(private http: HttpClient) {
  }

  getListFile() {
    return this.http
      .get(this.getListfileUrl);
  }

  downloadFile(fileName: string) {
    window.open(this.downloadFile + fileName, '_blank');
  }

//   downloadFile(fileCode: string) {
//     window.open(this.downLoadFileUrl + fileCode, '_blank');
//   }

//   deleteFile(fileCode: string) {
//       return this.http.put(this.deleteFileUrl + fileCode, null, { headers: { 'Authorization': this.headers } });
//   }

//   uploadFile(fileUpload: File) {
//     const formData = new FormData();
//     formData.append(fileUpload.name, fileUpload);
//     return this.http.post(this.uploadFileUrl, formData, { headers: { 'Authorization': this.headers } });
//   }
}
