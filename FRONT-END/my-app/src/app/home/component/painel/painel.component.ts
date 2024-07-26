import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-painel',
  standalone: true,
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
  imports: [CommonModule]
})
export class PainelComponent {
  modalDeletar: boolean = false
  IsModalDeletar() {
    this.modalDeletar = !this.modalDeletar
  }
}
