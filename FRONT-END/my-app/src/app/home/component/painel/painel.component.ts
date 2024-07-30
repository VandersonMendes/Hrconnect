import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-painel',
  standalone: true,
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
  imports: [CommonModule, ModalComponent]
})
export class PainelComponent {
  modalDeletar: boolean = false
  constructor(private themeService: ThemeService) {
    themeService.isDarkMode$.subscribe((isDark: any) => {
      this.isToggleChangeTheme = isDark
    })
  }
  isToggleChangeTheme: boolean = false;
  isToggleModalAddedTaks: boolean = false
  IsModalDeletar() {
    this.modalDeletar = !this.modalDeletar
  }
  addedTaks() {
    this.isToggleModalAddedTaks = !this.isToggleModalAddedTaks
  }
  modalAddedTaks(){
    this.isToggleModalAddedTaks = !this.isToggleModalAddedTaks
  }

}