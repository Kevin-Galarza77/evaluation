import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { estudiante } from '../estudiante';
import { AlertController, LoadingController } from '@ionic/angular';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  section: boolean = true;

  user: estudiante = {
    nombres: '',
    apellidos: '',
    notas: {
      nota_1: 0,
      nota_2: 0,
      nota_3: 0,
      nota_4: 0,
      nota_5: 0,
      total: 0,
    }
  }

  constructor(private estudianteService: EstudiantesService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    public dialogref: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit() { }

  async onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.section) {
        const loading = await this.loadingController.create();
        await loading.present();
        this.dialogref.close(true);
        this.estudianteService.createEstudiante(this.user).then(
          async () => {
            this.showAlert('Estudiante creado', 'Exitosamente!!');
            await loading.dismiss();
          }
        ).catch(async e => { await loading.dismiss(); console.log(e);this.showAlert('Hubo un error', 'Fracaso!!'); });
      } else {

      }
    }
  }

  async showAlert(header: any, message: any) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
