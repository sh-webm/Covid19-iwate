import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'ホーム',
      url: '/folder/ホーム',
      icon: 'home-outline'
    },
    {
      title: '基本的な感染対策',
      url: '/folder/基本的な感染対策',
      icon: 'help-buoy-outline'
    },
    {
      title: '最新の動向',
      url: '/folder/最新の動向',
      icon: 'trending-down-outline'
    },
    {
      title: '当Webサイトについて',
      url: '/folder/当webサイトについて',
      icon: 'heart'
    },
    {
      title: 'お問い合わせ',
      url: '/folder/お問い合わせ',
      icon: 'mail-outline'
    }
  ];
  public labels = [
    {
      'title': 'Github',
      'logo': 'logo-github'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
