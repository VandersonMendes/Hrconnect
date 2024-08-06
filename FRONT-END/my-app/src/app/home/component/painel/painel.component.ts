import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { ModalComponent } from './modal/modal.component';
import { UserData } from 'src/app/interfaces/dataUser';
@Component({
  selector: 'app-painel',
  standalone: true,
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
  imports: [CommonModule, ModalComponent],
})
export class PainelComponent implements OnInit{
  constructor(private themeService: ThemeService) {
    themeService.isDarkMode$.subscribe((isDark: any) => {
      this.isToggleChangeTheme = isDark
    })
  }

  isToggleChangeTheme: boolean = false;
  modalDeletar: boolean = false
  isToggleModalAddedTaks: boolean = false;
  protected dataUser: UserData[] = []

  ngOnInit(): void {
  }
  IsModalDeletar() {
    this.modalDeletar = !this.modalDeletar
  }
  addedTaks() {
    this.isToggleModalAddedTaks = !this.isToggleModalAddedTaks
  }
  modalAddedTaks(){
    this.isToggleModalAddedTaks = !this.isToggleModalAddedTaks
  }
  modalEventClose(){
    this.isToggleModalAddedTaks = false
  }
  
}