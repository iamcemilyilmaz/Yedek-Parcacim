import { Router } from '@angular/router';
import { admin } from './../../models/admin';
import { adminServis } from './../../services/adminServis';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ekle',
  templateUrl: './admin-ekle.component.html',
  styleUrls: ['./admin-ekle.component.css'],
})
export class AdminEkleComponent implements OnInit {
  secUye: admin = new admin();
  sonuc: boolean = false;
  durum: string = '';
  uid: string;
  rol: string;
  constructor(public Fbservis: adminServis, public router: Router) {}

  ngOnInit(): void {
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

  uyeEkle() {
    this.Fbservis.UyeEkle(this.secUye).then((d) => {});
  }
  KayitOl() {
    this.Fbservis.uyeOl(this.secUye).then(
      (d) => {
        d.user
          .updateProfile({
            displayName: 'admin',
          })
          .then();
        this.secUye.uid = d.user.uid;

        localStorage.setItem('user', JSON.stringify(d.user));
        this.uyeEkle();
        this.durum = 'Kaydınız Oluşturuldu';
        this.sonuc = true;
      },
      (err) => {
        this.durum = 'Kayıt oluşturma başarısız.';
        this.sonuc = true;
      }
    );
  }
}
