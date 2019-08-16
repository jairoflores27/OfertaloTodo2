import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  tab1page: {imagenes: string, titulo: string}[] = [
    {
    imagenes:  'assets/img/imagen.png',
    
    titulo: 'Compra Seguro', 
    
    },
    {
    imagenes: 'assets/img/pagofacil.png',
    titulo: 'Pasos para comprar'
    },
    {
      imagenes: 'assets/img/publicidad.png',
      titulo: 'Desde la comodidad de tu casa',
      },
    {
        imagenes:"assets/img/router.png",
        titulo:'',
      },
     
      {
        imagenes:"assets/img/celular.png",
        titulo:'',
      },
      {
        imagenes:"assets/img/play.png",
        titulo:'',
      },
      {
        imagenes:"assets/img/computadora.png",
        titulo:'',
      },
      ]
      constructor(){}
    
    }
  
