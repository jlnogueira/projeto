import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarNotaPage } from './adicionar-nota';

@NgModule({
  declarations: [
    AdicionarNotaPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarNotaPage),
  ],
})
export class AdicionarNotaPageModule {}
