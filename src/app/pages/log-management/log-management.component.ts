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
        this.logManagementService.getListFile()
           .subscribe((data: any[]) => {
             this.datas = data;
           });
    }

    onDownload(fileName: string) {
        this.logManagementService.downloadFile(fileName);
    }

    onDelete(fileName: string) {
        this.nbDialogService.open(MyPopUpConfirmDeleteComponent)
            .onClose.subscribe(confirm => {
                if (confirm) {
                    const listFile = [fileName];
                    this.logManagementService.deleteFile(listFile).subscribe(() => {
                        this.loadData();
                    });
                }
            });
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
