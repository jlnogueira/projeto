import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { transition } from '@angular/core/src/animation/dsl';



@IonicPage()
@Component({
  selector: 'page-adicionar-nota',
  templateUrl: 'adicionar-nota.html',
})
export class AdicionarNotaPage {
  photo: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {

  }
  takePicture() {
    this.photo = '';

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 55,
      targetHeight: 55,
    }

    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;

      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarNotaPage');
  }


}
