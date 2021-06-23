import { Dosya } from './../../models/dosya';
import { isletmeServis } from './../../services/isletmeServis';
import { urunkayit } from './../../models/urunkayit';
import { urunkayitServis } from './../../services/urunkayitServis';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urunlistele',
  templateUrl: './urunlistele.component.html',
  styleUrls: ['./urunlistele.component.css'],
})
export class UrunlisteleComponent implements OnInit {
  uid: string;
  rol: string;
  kayitlar: any;
  urunSayi: number = 0;
  constructor(public Fbservis: urunkayitServis, public router: Router) {}

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem('user'));
    this.uid = user.uid;
    this.uid = user.uid;
    this.KayitListele();
    this.rol = user.displayName;
    this.rolBak();
  }
  rolBak() {
    if (this.rol == 'admin') {
      this.router.navigate(['/adminEkle']);
    }
    if (this.rol == 'kullanici') {
      this.router.navigate(['/kullanici/listele']);
    }
  }
  KayitListele() {
    this.Fbservis.KayitListelebyUid2(this.uid)
      .snapshotChanges()
      .subscribe((data) => {
        this.kayitlar = [];
        data.forEach((satir) => {
          var y = { ...satir.payload.toJSON(), key: satir.key };
          this.kayitlar.push(y as Dosya);
          this.urunSayi = this.urunSayi + 1;
        });
      });
  }
  silme(key: string) {
    location.reload();
    this.Fbservis.KayitSil(key);
  }
}
