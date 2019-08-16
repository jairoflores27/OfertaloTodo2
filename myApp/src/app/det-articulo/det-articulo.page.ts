import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-det-articulo',
  templateUrl: './det-articulo.page.html',
  styleUrls: ['./det-articulo.page.scss'],
})
export class DetArticuloPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Articulo añadido al carrito',    
      message: 'Se agregado un nuevo articulo al carrito de compra.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
