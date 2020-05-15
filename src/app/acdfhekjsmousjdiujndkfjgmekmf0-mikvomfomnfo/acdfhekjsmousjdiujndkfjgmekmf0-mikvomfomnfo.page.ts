import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-acdfhekjsmousjdiujndkfjgmekmf0-mikvomfomnfo',
  templateUrl: './acdfhekjsmousjdiujndkfjgmekmf0-mikvomfomnfo.page.html',
  styleUrls: ['./acdfhekjsmousjdiujndkfjgmekmf0-mikvomfomnfo.page.scss'],
})
export class ACDFHEKJSMOUSJDIUJNDKFJGMEKMF0MIKVOMFOMNFOPage implements OnInit {
  href: any;
  title: any;
  pass: any;
  pass3: any;
  pass2: any;
  pass4: any;
  ary: any;
  constructor(public db:AngularFireDatabase) { }

  ngOnInit() {
  }
  setting() {
    if (this.pass === 'uuparupaandmoffu' && this.pass2 === '04030403' && this.pass3 === 'uuparupa555' && this.pass4 === '114514') {
      console.log('correct password!');
      console.log(this.href + this.title + this.pass);
      this.db.list('/notify').valueChanges().subscribe(data => {
        console.log(data);
        this.ary = data;
     });
      //初回のみ
      //this.ary = [];
      //
      const senddict = {
        'href': this.href,
        'title':this.title
      }
      console.log(senddict);
      //this.ary.push(senddict);
      console.log(this.ary);
      const itemRef = this.db.list('notify');
      itemRef.push(senddict);
    } else {
      console.log("password don't match!");
    }
}
}
