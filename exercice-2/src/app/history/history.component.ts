import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HistoryItemComponent } from './history-item/history-item.component';


@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, HistoryItemComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  
  @Input() history!: Operation[];
  @Output() deleteEntry = new EventEmitter<number>();


}
