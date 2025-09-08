import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alignment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alignment.component.html',
  styleUrl: './alignment.component.css'
})
export class AlignmentComponent {
  @Output() alignChanged = new EventEmitter<"left" | "center" | "right">()

  selectedAlign:"left"|"center"|"right" = "left";

  onChange(){
    this.alignChanged.emit(this.selectedAlign);
  }

}
