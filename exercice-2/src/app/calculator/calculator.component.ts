import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  
  @Input() num1! : number;
  @Input() num2! : number;
  @Input() operator! : string;

  @Output() calculateEvent = new EventEmitter<{num1: number, num2: number, operator: string}>()

  calculate(){
    this.calculateEvent.emit({num1: this.num1, num2: this.num2, operator: this.operator});
  }

}
