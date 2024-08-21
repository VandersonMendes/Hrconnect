import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { ModalComponent } from './modal/modal.component';
import { UserData } from 'src/app/interfaces/dataUser';
import { ModalSidebarService } from '../../services/modalSidebar/modal-sidebar.service';
import { ContextService } from 'src/app/services/context/context.service';
import { ApiService } from 'src/app/services/serviceApi/api.service';
@Component({
  selector: 'app-painel',
  standalone: true,
  templateUrl: './painel.component.html',
  styleUrls: ['painel.component.scss'],
  imports: [CommonModule, ModalComponent],
})
export class PainelComponent implements OnInit {
  constructor(private themeService: ThemeService, private modalSidebar: ModalSidebarService, private context: ContextService, private apiService: ApiService) {
    themeService.isDarkMode$.subscribe((isDark: any) => {
      this.isToggleChangeTheme = isDark
    })
  }

  isToggleChangeTheme: boolean = false;
  modalDeletar: boolean = false
  menuHamburger: boolean = false;
  isToggleModalAddedTaks: boolean = false;
  protected status: any
  protected dataUser: UserData[] = []
  protected listTasks: any

  ngOnInit(): void {
    this.context.idUser$.subscribe((id: string) => {
      this.apiService.getTask(id).subscribe((data: any) => {
        if (data) {
          this.listTasks = data
          console.log(this.listTasks)

        }
      })
      this.apiService.getStatus(id).then((data: any) => {
        data.subscribe((data: any) => {
          this.status = data.statusCount
          console.log(this.status)

        })
      })
    })

  }
  IsModalDeletar(id: string) {
    this.modalDeletar = !this.modalDeletar
  }
  addedTaks() {
    this.isToggleModalAddedTaks = !this.isToggleModalAddedTaks
  }
  modalAddedTaks() {
    this.isToggleModalAddedTaks = !this.isToggleModalAddedTaks
  }
  modalEventClose() {
    this.isToggleModalAddedTaks = false
  }
  clickMenuSidebar() {
    this.menuHamburger = !this.menuHamburger;
    this.modalSidebar.toggleModal(this.menuHamburger);
  }
  loadNewTaks() {
    console.log('funcionou')
    this.context.idUser$.subscribe((id: string) => {
      this.apiService.getTask(id).subscribe((data: any) => {
        if (data) {
          this.listTasks = data
          console.log(this.listTasks)

        }
      })
    }
    )
  }
}