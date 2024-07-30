import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/theme/theme.service';
@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [CommonModule]
})
export class ModalComponent {
  // modal$: boolean = true;
  @Input() IsModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter();
  constructor(private themeService: ThemeService) {
        themeService.isDarkMode$.subscribe((isDark: any) => {
      this.isToggleChangeTheme = isDark
    })
  }
  closeModal(){
    this.closeModalEvent.emit(false)
  }
  addTaks(){
    console.log('add taks')
  }
    isToggleChangeTheme: boolean = false;
  isClickChangeTheme(): void {
    this.isToggleChangeTheme = !this.isToggleChangeTheme;
    this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
  }
}
