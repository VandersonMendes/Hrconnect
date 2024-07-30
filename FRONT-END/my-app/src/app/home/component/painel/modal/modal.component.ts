import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [CommonModule]
})
export class ModalComponent {
  modal$: boolean = true;
  @Input() IsModal: boolean = false;
  constructor() {
    console.log(this.IsModal)
  }
}
