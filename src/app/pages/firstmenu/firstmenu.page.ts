import { Component, OnInit } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-firstmenu',
  templateUrl: './firstmenu.page.html',
  styleUrls: ['./firstmenu.page.scss'],
})
export class FirstmenuPage implements OnInit {

  constructor(private platform: Platform, private menu: MenuController) { }

  ngOnInit() {
    this.platform.url();
    const pathname  =window.location.pathname
    if (pathname == '/firstmenu/secondpage') {
      this.menu.close();
      this.menu.enable(true, 'secondmenu');
      this.menu.open('secondmenu');
    }
    if (pathname == '/firstmenu/firstpage') {
      this.menu.enable(true, 'firstmenu');
      this.menu.open('firstmenu');
    }
    this.platform.pause.subscribe(() => {
      console.log('App was paused');
      alert('app is paused');
    })
    this.platform.resume.subscribe(() => {
      console.log("App was resumed");
      alert('app is resumed');
    })
  }

}
