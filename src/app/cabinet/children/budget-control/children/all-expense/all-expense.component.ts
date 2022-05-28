import {Component} from "@angular/core";
import {ExpenseService} from "../../../../services/expense-service";

@Component({
    selector: 'all-expense',
    templateUrl: './all-expense.component.html',
    styleUrls: ['./all-expense.component.styles/all-expense.style.component.css']
})

export class AllExpenseComponent {
    constructor(public expenseService: ExpenseService) {
    }
}