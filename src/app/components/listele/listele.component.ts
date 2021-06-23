import { Dosya } from './../../models/dosya';
import { favori } from './../../models/favori';
import { favoriServis } from './../../services/favoriServis';
import { urunkayit } from './../../models/urunkayit';
import { urunkayitServis } from './../../services/urunkayitServis';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listele',
  templateUrl: './listele.component.html',
  styleUrls: ['./listele.component.css'],
})
export class ListeleComponent implements OnInit {
  kayitlar: any;
  uid: string;
  rol: string;
  seckayit: favori = new favori();
  constructor(
    public Fbservis: urunkayitServis,
    public Fbservis2: favoriServis,
    public router: Router
  ) {}

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem('user'));
    this.uid = user.uid;
    this.KayitListele();
    this.rol = user.displayName;
    this.rolBak();
  }
  rolBak() {
    if (this.rol == 'admin') {
      this.router.navigate(['/adminEkle']);
    }
    if (this.rol == 'isletme') {
      this.router.navigate(['/isletme/urunlistele']);
    }
  }

  KayitListele() {
    this.Fbservis.KayitListele()
      .snapshotChanges()
      .subscribe((data) => {
        this.kayitlar = [];
        data.forEach((satir) => {
          var y = { ...satir.payload.toJSON(), key: satir.key };
          this.kayitlar.push(y as Dosya);
        });
      });
  }

  KayitListeleFiltreli(marka: string) {
    this.Fbservis.KayitListeleFiltreli(marka)
      .snapshotChanges()
      .subscribe((data) => {
        this.kayitlar = [];
        data.forEach((satir) => {
          var y = { ...satir.payload.toJSON(), key: satir.key };
          this.kayitlar.push(y as urunkayit);
        });
      });
  }

  favoriEkle() {
    this.seckayit.kullaniciID = this.uid;
    this.Fbservis2.KayitEkle(this.seckayit).then(
      (s) => {},
      (err) => {}
    );
  }
}
