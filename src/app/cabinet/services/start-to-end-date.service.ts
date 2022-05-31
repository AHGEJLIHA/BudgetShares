import {EventEmitter} from "@angular/core";

export class StartToEndDateService {
    private _startDateService: Date = new Date();
    public onClick:EventEmitter<Date> = new EventEmitter();

    public setStartDate(startDate: Date): void{
        this.onClick.emit(this._startDateService);
        this._startDateService = startDate;
    }

    public getStartDate(): Date{
        return this._startDateService;
    }
}