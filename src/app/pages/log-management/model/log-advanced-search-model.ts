export class LogAdvancedSearchModel {
   public fileName: string;
   public dateRange: LogAdvancedSearchDateRange;
   constructor() {
    this.fileName = '';
    this.dateRange = new LogAdvancedSearchDateRange();
   }
}

export class LogAdvancedSearchDateRange {
    public fromDate: Date;
    public toDate: Date;
    constructor() {
        this.fromDate = null;
        this.toDate = null;
    }
}
