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
  global: any;
  userlist: any;
  total: any;
  update: any;
  locatelist: any;
  
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,public db: AngularFireDatabase) {
    db.list('/notify').valueChanges().subscribe(data => {
      console.log(data);
      this.notify = data;
      this.notify.reverse();
    });
  }
  setlocate() {
    this.locatelist = [
      { 'name': 'アフガニスタン', 'value': 'Afghanistan' },
      { 'name': 'アルジェニア', 'value': 'Algeria' },
      { 'name': 'アンドラ', 'value': 'Andorra' }
    ]
  }
  async getglobal() {
    await this.http.get('https://covid19.mathdro.id/api')
    .subscribe(res => {
      console.log(res);
      this.global = res;
    }, error => {
        
      });
  }
  /*async load() {
    this.setlocate();
    await this.http.get('//app.sabae.cc/api/covid19japan.json')
      .subscribe(res => {
        console.log(res);
        this.covid = res;
        this.iwate = res["area"][2];
        console.log(this.iwate);
      }, error => {
          
        });
  }*/
  async load() {
    await this.http.get('https://covid19-japan-web-api.now.sh/api/v1/prefectures')
      .subscribe(res => {
        console.log(res);
        this.iwate = res[2];
      }, error => {
          
      });
      await this.http.get('https://covid19-japan-web-api.now.sh/api/v1/total')
      .subscribe(res => {
        console.log("jp total");
        console.log(res);
        this.total = res;
        this.update = res["date"];
      }, error => {
          
        });
}
  async ngOnInit() {
    //絶対消すな！！！
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    //
    await this.load();
    await this.getglobal();
    console.log(this.notify);
  }

}
