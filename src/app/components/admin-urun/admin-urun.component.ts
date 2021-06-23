import { Router } from '@angular/router';
import { Dosya } from './../../models/dosya';
import { urunkayit } from './../../models/urunkayit';
import { urunkayitServis } from './../../services/urunkayitServis';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-urun',
  templateUrl: './admin-urun.component.html',
  styleUrls: ['./admin-urun.component.css'],
})
export class AdminUrunComponent implements OnInit {
  urunler: any;
  uid: string;
  rol: string;
  constructor(public Fbservis: urunkayitServis, public router: Router) {}

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
        this.urunler = [];
        data.forEach((satir) => {
          var y = { ...satir.payload.toJSON(), key: satir.key };
          this.urunler.push(y as Dosya);
        });
      });
  }

  isletmeSil(id: string) {
    this.Fbservis.KayitSil(id);
  }
}
