import { Router } from '@angular/router';
import { kullanici } from './../../models/kullanici';
import { kullaniciServis } from './../../services/kullaniciServis';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-uye',
  templateUrl: './admin-uye.component.html',
  styleUrls: ['./admin-uye.component.css'],
})
export class AdminUyeComponent implements OnInit {
  kullanicilar: any;
  uid: string;
  rol: string;

  constructor(public Fbservis: kullaniciServis, public router: Router) {}

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
        this.kullanicilar = [];
        data.forEach((satir) => {
          var y = { ...satir.payload.toJSON(), key: satir.key };
          this.kullanicilar.push(y as kullanici);
        });
      });
  }

  isletmeSil(id: string) {
    this.Fbservis.KayitSil(id);
  }
}
