import { isletmeServis } from './../../services/isletmeServis';
import { isletme } from './../../models/isletme';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminisletme',
  templateUrl: './adminisletme.component.html',
  styleUrls: ['./adminisletme.component.css'],
})
export class AdminisletmeComponent implements OnInit {
  isletmeler: any;
  uid: string;
  rol: string;

  constructor(public Fbservis: isletmeServis, public router: Router) {}

  ngOnInit(): void {
    this.KayitListele();
    var user: any = JSON.parse(localStorage.getItem('user'));
    this.uid = user.uid;
    this.rol = user.displayName;
    this.rolBak();
  }
  rolBak() {
    if (this.rol == 'isletme') {
      this.router.navigate(['/isletme/urunlistele']);
    }
    if (this.rol == 'kullanici') {
      this.router.navigate(['/kullanici/listele']);
    }
  }

  KayitListele() {
    this.Fbservis.KayitListele()
      .snapshotChanges()
      .subscribe((data) => {
        this.isletmeler = [];
        data.forEach((satir) => {
          var y = { ...satir.payload.toJSON(), key: satir.key };
          this.isletmeler.push(y as isletme);
        });
      });
  }

  isletmeSil(id: string) {
    this.Fbservis.KayitSil(id);
  }
}
