import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlignmentComponent } from './alignment/alignment.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, AlignmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) font!: string;
  @Input({required: true}) size!: number;
  @Input({required: true}) align!: "left" | "center" | "right";

  get TextStyle() {
    return {
      "font-family": this.font,
      "font-size.px": this.size,
      "text-align": this.align
    }
  }

  updateAlign(newAlign: "left" | "center" | "right"){
    this.align = newAlign;
  }
  
}
