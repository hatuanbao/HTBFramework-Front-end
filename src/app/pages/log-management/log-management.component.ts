import { LogManagementService } from './log-management.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'ngx-log-management',
    templateUrl: './log-management.component.html',
    styleUrls: ['./log-management.component.scss'],
    providers: [LogManagementService],
})

export class LogManagementComponent implements OnInit {
   datas: any[];
   dataTable: any;
   // tslint:disable-next-line: max-line-length
   constructor(private http: HttpClient, private logManagementService: LogManagementService, private chRef: ChangeDetectorRef) {}
   ngOnInit() {
    this.logManagementService.getListFile()
       .subscribe((data: any[]) => {
         this.datas = data;
         this.chRef.detectChanges();
         // tslint:disable-next-line: ban
         const table: any = $('table');
         this.dataTable = table.DataTable({
             'paging': false,
             'bInfo': false,
             'oLanguage': {
                 'sSearch': 'Tìm kiếm',
                 'sEmptyTable': 'Không có dữ liệu',
                 'sZeroRecords': 'Không tìm thấy dữ liệu thỏa điều kiện',
             },
             'aoColumns': [
                { 'mData': 'name', 'sWidth': '20%' },
                { 'mData': 'length', 'sWidth': '30%' },
                { 'mData': 'lastModified', 'sWidth': '30%' },
                {
                    'mData': '',
                    'bSortable': false,
                    'sWidth': '20%',
                },
            ],
         });
       });
   }

   public onDownload(fileName: string) {
       alert('a')
    //    this.logManagementService.downloadFile(fileName);
   }
}
