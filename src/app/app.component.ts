import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCA4_hko-nWyAQsGveSleOGNQuwSmN6zJc',
      authDomain: 'recipe-book-590b0.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
