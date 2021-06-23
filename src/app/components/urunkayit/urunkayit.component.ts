import { Dosya } from './../../models/dosya';
import { yuklemeService } from './../../services/yuklemeServis';
import { isletme } from './../../models/isletme';
import { isletmeServis } from './../../services/isletmeServis';
import { urunkayit } from './../../models/urunkayit';
import { urunkayitServis } from './../../services/urunkayitServis';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urunkayit',
  templateUrl: './urunkayit.component.html',
  styleUrls: ['./urunkayit.component.css'],
})
export class UrunkayitComponent implements OnInit {
  uid: string;
  rol: string;
  durum: string;
  sonuc: boolean;
  kayitlar2: any;
  files: FileList;

  seckayit: Dosya = new Dosya();

  constructor(
    public fbservis: urunkayitServis,
    public Fbservis2: isletmeServis,
    public yuklemeServis: yuklemeService,
    public router: Router
  ) {}

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem('user'));
    this.uid = user.uid;
    this.bilgiListele();
    this.rol = user.displayName;
    this.rolBak();
  }
  rolBak() {
    if (this.rol == 'admin') {
      this.router.navigate(['/adminEkle']);
    }
    if (this.rol == 'kullanici') {
      this.router.navigate(['/isletme/urunlistele']);
    }
  }
  /*urunEkle() {
    this.seckayit.isletmeid = this.uid;
    this.fbservis.KayitEkle(this.seckayit).then(s => {
      this.durum = "Ürün Eklendi";
      this.sonuc = true;
    }, err => {
      this.durum = "ürün Eklenemedi"
      this.sonuc = false;
    });
  }*/

  bilgiListele() {
    this.Fbservis2.KayitListele2(this.uid)
      .snapshotChanges()
      .subscribe((data) => {
        this.kayitlar2 = [];
        data.forEach((satir) => {
          var y = { ...satir.payload.toJSON(), key: satir.key };
          this.kayitlar2.push(y as isletme);
        });
      });
  }

  DosyaSec(e) {
    this.files = e.target.files;
  }
  DosyaYukle() {
    var file = this.files[0];
    this.seckayit.file = file;
    this.seckayit.isletmeid = this.uid;
    this.seckayit.uid = this.uid;
    this.yuklemeServis.DosyaYukleStorage(this.seckayit).subscribe(
      (p) => {
        this.durum = 'Ürün Eklendi';
        this.sonuc = true;
      },
      (err) => {
        this.durum = 'ürün Eklenemedi';
        this.sonuc = false;
      }
    );
  }
}
