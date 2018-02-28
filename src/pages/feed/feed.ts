import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  public soma(this) {
    console.log(this.n1, this.n2);
    alert(  " SOMA "           + (parseInt(this.n1) + parseInt(this.n2)) 
          + " SOMA2 "          + (this.n1 + this.n2) 
          + " Subtração: "     + (this.n1 - this.n2)
          + " Multiplicação: " + (this.n1 * this.n2)
          + " Divisão: "       + (this.n1 / this.n2));
  }

}
