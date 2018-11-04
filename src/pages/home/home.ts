import { TabsPage } from './../tabs/tabs';

import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { AdicionarNotaPage } from '../adicionar-nota/adicionar-nota';
import { EntradaPage } from '../entrada/entrada';
import { AuthProvider } from '../../providers/auth/auth';
import { Tarefas } from '../../models/tarefas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nota: string = '';

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,private auth: AuthProvider,public modalCtrl: ModalController) {

  }

  logIn() {
    let profileModal = this.modalCtrl.create(HomePage);
    profileModal.present();

    profileModal.onDidDismiss(data => {
      console.log(data);
    });
  }


  adicionar(){
    this.navCtrl.push(AdicionarNotaPage);
  }

  sair() {
    this.auth.logout().then(value => {
      this.navCtrl.setRoot(EntradaPage);
     });
  }

}
