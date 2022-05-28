import {Component} from "@angular/core";
import {ProfitService} from "../../../../services/profit-service";

@Component({
    selector: 'all-profit',
    templateUrl: './all-profit.component.html',
    styleUrls: ['./all-profit.component.styles/all-profit.style.component.css']
})

export class AllProfitComponent{
    constructor(public profitService: ProfitService) {
    }


}