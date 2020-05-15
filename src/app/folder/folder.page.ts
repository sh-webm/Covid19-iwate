import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  notify: any;
  covid: any;
  iwate: any;
  update: any;
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,public db: AngularFireDatabase) {
    db.list('/notify').valueChanges().subscribe(data => {
      console.log(data);
      this.notify = data;
      this.notify.reverse();
    });
  }
  async load() {
    await this.http.get('https://app.sabae.cc/api/covid19japan.json')
      .subscribe(res => {
        console.log(res);
        this.covid = res;
        this.iwate = res["area"][2];
        this.update = res["lastUpdate"];
        console.log(this.iwate);
      }, error => {
          
        });
}
  async ngOnInit() {
    //絶対消すな！！！
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    //
    this.load();
    console.log(this.notify);
  }

}
