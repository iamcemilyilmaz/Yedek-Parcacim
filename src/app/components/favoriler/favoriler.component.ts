import { favoriServis } from './../../services/favoriServis';
import { Component, OnInit } from '@angular/core';
import { favori } from 'src/app/models/favori';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoriler',
  templateUrl: './favoriler.component.html',
  styleUrls: ['./favoriler.component.css'],
})
export class FavorilerComponent implements OnInit {
  uid: string;
  rol: string;
  kayitlar: any;
  constructor(public Fbservis: favoriServis, public router: Router) {}

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem('user'));
    this.uid = user.uid;
    this.kayitListele();
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

  kayitListele() {
    this.Fbservis.KayitListelebyUid(this.uid)
      .snapshotChanges()
      .subscribe((data) => {
        this.kayitlar = [];
        data.forEach((satir) => {
          var y = { ...satir.payload.toJSON(), key: satir.key };
          this.kayitlar.push(y as favori);
        });
      });
  }
  kayitSil(deger: string) {
    this.Fbservis.KayitSil(deger);
  }
}
