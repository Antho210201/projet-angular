import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultComponent } from './result/result.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CalculatorComponent, ResultComponent, HistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  result: number | null = null;  
  history: Operation[] = [];     
  
  onCalculate(data: {num1: number, num2: number, operator: string}) {
    let res = 0;
    switch (data.operator){
      case "+":
        res = data.num1 + data.num2;
        break;
      case "-":
        res = data.num1 - data.num2;
        break;
      case "*":
        res = data.num1 * data.num2;
        break;
      case "/":
        res = data.num1 / data.num2
        break;
    }
    this.result = res;
    this.history.unshift({
      time: new Date().toLocaleTimeString(),
      expression: `${data.num1} ${data.operator} ${data.num2}`,
      result: res
    });

  }

  onDeleteEntry(index: number){
    this.history.splice(index,1);
  }


}
