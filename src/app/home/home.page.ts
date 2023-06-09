import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { estudiante } from './estudiante';
import { EstudiantesService } from '../services/estudiantes.service';
import { LoadingController } from '@ionic/angular';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  estudiantes: estudiante[] = [];

  constructor(private authService: AuthService,
    private estudianteService: EstudiantesService,
    private loadingController: LoadingController,
    public dialog: MatDialog,
    private router: Router) {

     }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  ngOnInit(): void {
    this.getTodosEstudiantes();
    this.createStudent();
  }

  async getTodosEstudiantes() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.estudianteService.getEstudiantes().subscribe({
      next: async result => {
        this.estudiantes = result;
        await loading.dismiss();
      },
      error:async e =>{
        console.log(e);
        await loading.dismiss();
      }
    })
  }

  createStudent(){
    const newProduct = this.dialog.open(CreateComponent, {
      height: 'auto',
      maxHeight: '95vh',
      width: '50%',
      minWidth: '300px'
    });
    newProduct.afterClosed().subscribe(response => {
      if (response) this.getTodosEstudiantes();
    })
  }


}
