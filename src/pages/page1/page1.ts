import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
 
    }


    onLink(url: string) {
      new InAppBrowser(url, '_self');
    }
}
