import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EntradaPage } from '../entrada/entrada';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  entrar(){
    this.navCtrl.push(EntradaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

}
