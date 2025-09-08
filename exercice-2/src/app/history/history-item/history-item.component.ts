import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-history-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-item.component.html',
  styleUrl: './history-item.component.css'
})
export class HistoryItemComponent {

  @Input({required: true}) time!: string;
  @Input({required: true}) expression!: string;
  @Input({required: true}) result!: number;

  @Output() delete = new EventEmitter<void>()

}
