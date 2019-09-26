import { filter } from 'rxjs/operators';
import { MyPopUpConfirmDeleteComponent } from './../../shared/pop-up-confirm-delete/pop-up-confirm-delete.component';
import { LogManagementService } from './log-management.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbIconLibraries } from '@nebular/theme';
import { NbDialogService } from '@nebular/theme';
import {List, Enumerable} from 'linqts';

@Component({
    selector: 'ngx-log-management',
    templateUrl: './log-management.component.html',
    styleUrls: ['./log-management.component.scss'],
    providers: [LogManagementService],
})

export class LogManagementComponent implements OnInit {
   datas: any[];
   sortAscOrder: boolean = true;
   sortByColumn: string;
   // tslint:disable-next-line: max-line-length
   constructor(private http: HttpClient, private logManagementService: LogManagementService, private chRef: ChangeDetectorRef, private iconsLibrary: NbIconLibraries, private nbDialogService: NbDialogService) {
        iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
        iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
        iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
   }
   ngOnInit() {
    this.loadData();
    }

    loadData() {
        // tslint:disable-next-line: max-line-length
        this.datas = [{"length":33023,"name":"log-20190914 - Copy (2).txt","lastModified":"2019-09-24T07:03:17.9274403+00:00"},{"length":33023,"name":"log-20190914 - Copy (3).txt","lastModified":"2019-09-24T07:03:17.9274403+00:00"},{"length":33023,"name":"log-20190914 - Copy (4).txt","lastModified":"2019-09-24T07:03:17.9274403+00:00"},{"length":33023,"name":"log-20190914 - Copy (5).txt","lastModified":"2019-09-24T07:03:17.9274403+00:00"},{"length":33023,"name":"log-20190914 - Copy (6).txt","lastModified":"2019-09-24T07:03:17.9274403+00:00"},{"length":33023,"name":"log-20190914 - Copy (7).txt","lastModified":"2019-09-24T07:03:17.9274403+00:00"},{"length":33023,"name":"log-20190914 - Copy.txt","lastModified":"2019-09-24T07:03:17.9274403+00:00"},{"length":33023,"name":"log-20190914.txt","lastModified":"2019-09-24T07:03:17.9274403+00:00"},{"length":33023,"name":"log-20190917 - Copy (2).txt","lastModified":"2019-09-24T07:03:45.6674424+00:00"},{"length":33023,"name":"log-20190917 - Copy (3).txt","lastModified":"2019-09-24T07:03:45.6674424+00:00"},{"length":33023,"name":"log-20190917 - Copy (4).txt","lastModified":"2019-09-24T07:03:45.6674424+00:00"},{"length":33023,"name":"log-20190917 - Copy (5).txt","lastModified":"2019-09-24T07:03:45.6674424+00:00"},{"length":33023,"name":"log-20190917 - Copy (6).txt","lastModified":"2019-09-24T07:03:45.6674424+00:00"},{"length":33023,"name":"log-20190917 - Copy (7).txt","lastModified":"2019-09-24T07:03:45.6674424+00:00"},{"length":33023,"name":"log-20190917 - Copy.txt","lastModified":"2019-09-24T07:03:45.6674424+00:00"},{"length":33023,"name":"log-20190917.txt","lastModified":"2019-09-24T07:03:45.6674424+00:00"},{"length":6363,"name":"log-20190918 - Copy (2).txt","lastModified":"2019-09-18T02:50:26.471685+00:00"},{"length":6363,"name":"log-20190918 - Copy (3).txt","lastModified":"2019-09-18T02:50:26.471685+00:00"},{"length":6363,"name":"log-20190918 - Copy (4).txt","lastModified":"2019-09-18T02:50:26.471685+00:00"},{"length":6363,"name":"log-20190918 - Copy (5).txt","lastModified":"2019-09-18T02:50:26.471685+00:00"},{"length":6363,"name":"log-20190918 - Copy (6).txt","lastModified":"2019-09-18T02:50:26.471685+00:00"},{"length":6363,"name":"log-20190918 - Copy (7).txt","lastModified":"2019-09-18T02:50:26.471685+00:00"},{"length":6363,"name":"log-20190918 - Copy.txt","lastModified":"2019-09-18T02:50:26.471685+00:00"},{"length":6363,"name":"log-20190918.txt","lastModified":"2019-09-18T02:50:26.471685+00:00"},{"length":2257,"name":"log-20190919 - Copy (2).txt","lastModified":"2019-09-17T07:30:13.1999873+00:00"},{"length":2257,"name":"log-20190919 - Copy (3).txt","lastModified":"2019-09-17T07:30:13.1999873+00:00"},{"length":2257,"name":"log-20190919 - Copy (4).txt","lastModified":"2019-09-17T07:30:13.1999873+00:00"},{"length":2257,"name":"log-20190919 - Copy (5).txt","lastModified":"2019-09-17T07:30:13.1999873+00:00"},{"length":2257,"name":"log-20190919 - Copy (6).txt","lastModified":"2019-09-17T07:30:13.1999873+00:00"},{"length":2257,"name":"log-20190919 - Copy (7).txt","lastModified":"2019-09-17T07:30:13.1999873+00:00"},{"length":2257,"name":"log-20190919 - Copy.txt","lastModified":"2019-09-17T07:30:13.1999873+00:00"},{"length":2257,"name":"log-20190919.txt","lastModified":"2019-09-17T07:30:13.1999873+00:00"},{"length":356035,"name":"log-20190924 - Copy (2).txt","lastModified":"2019-09-24T07:04:03.3685234+00:00"},{"length":356035,"name":"log-20190924 - Copy (3).txt","lastModified":"2019-09-24T07:04:03.3685234+00:00"},{"length":356035,"name":"log-20190924 - Copy (4).txt","lastModified":"2019-09-24T07:04:03.3685234+00:00"},{"length":356035,"name":"log-20190924 - Copy (5).txt","lastModified":"2019-09-24T07:04:03.3685234+00:00"},{"length":356035,"name":"log-20190924 - Copy (6).txt","lastModified":"2019-09-24T07:04:03.3685234+00:00"},{"length":356035,"name":"log-20190924 - Copy (7).txt","lastModified":"2019-09-24T07:04:03.3685234+00:00"},{"length":356035,"name":"log-20190924 - Copy.txt","lastModified":"2019-09-24T07:04:03.3685234+00:00"},{"length":356035,"name":"log-20190924.txt","lastModified":"2019-09-24T07:04:03.3685234+00:00"},{"length":311105,"name":"log-20190926 - Copy (2).txt","lastModified":"2019-09-26T04:54:15.9276219+00:00"},{"length":311105,"name":"log-20190926 - Copy (3).txt","lastModified":"2019-09-26T04:54:15.9276219+00:00"},{"length":311105,"name":"log-20190926 - Copy (4).txt","lastModified":"2019-09-26T04:54:15.9276219+00:00"},{"length":311105,"name":"log-20190926 - Copy (5).txt","lastModified":"2019-09-26T04:54:15.9276219+00:00"},{"length":311105,"name":"log-20190926 - Copy (6).txt","lastModified":"2019-09-26T04:54:15.9276219+00:00"},{"length":311105,"name":"log-20190926 - Copy (7).txt","lastModified":"2019-09-26T04:54:15.9276219+00:00"},{"length":311105,"name":"log-20190926 - Copy.txt","lastModified":"2019-09-26T04:54:15.9276219+00:00"},{"length":311105,"name":"log-20190926.txt","lastModified":"2019-09-26T04:54:15.9276219+00:00"}];
        // this.logManagementService.getListFile()
        //    .subscribe((data: any[]) => {
        //      this.datas = data;
        //    });
    }

    onDownload(fileName: string) {
        // this.logManagementService.downloadFile(fileName);
    }

    onDelete(fileName: string) {
        // this.nbDialogService.open(MyPopUpConfirmDeleteComponent)
        //     .onClose.subscribe(confirm => {
        //         if (confirm) {
        //             const listFile = [fileName];
        //             this.logManagementService.deleteFile(listFile).subscribe(() => {
        //                 this.loadData();
        //             });
        //         }
        //     });
    }

    onSort(sortField: string) {
        this.sortAscOrder = !this.sortAscOrder;
        this.sortByColumn = sortField;
        if (this.sortAscOrder) {
            this.datas = new List<any>(this.datas).OrderBy(x => x[this.sortByColumn]).ToArray();
        }else {
            this.datas = new List<any>(this.datas).OrderByDescending(x => x[this.sortByColumn]).ToArray();
        }
    }
}
