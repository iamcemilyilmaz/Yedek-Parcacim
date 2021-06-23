import { Router } from '@angular/router';
import { kullaniciServis } from './../../services/kullaniciServis';
import { kullanici } from './../../models/kullanici';
import { isletmeServis } from './../../services/isletmeServis';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kullanicilar',
  templateUrl: './kullanicilar.component.html',
  styleUrls: ['./kullanicilar.component.css']
})
export class KullanicilarComponent implements OnInit {

  durum: string;
  sonuc: boolean;
  secUye: kullanici = new kullanici();
  constructor(
    public Fbservis: kullaniciServis,
    public router: Router
  ) { }

  ngOnInit(): void {

  }
  KayitOl() {
    this.Fbservis.uyeOl(this.secUye).then(d => {
      d.user.updateProfile({
        displayName: "kullanici"
      }).then();
      this.secUye.uid = d.user.uid;

      localStorage.setItem("user", JSON.stringify(d.user));
      this.uyeEkle();
      this.durum = "Kaydınız Oluşturuldu";
      this.sonuc = true;

    }, err => {
      this.durum = "Kayıt oluşturma başarısız."
      this.sonuc = false;


    })
  }

  GirisYap(mail: string, parola: string) {
    this.Fbservis.OturumAc(mail, parola).then(d => {
      this.sonuc = true;
      this.durum = "Giriş Başarılı";
      localStorage.setItem("user", JSON.stringify(d.user));
      this.router.navigate(['/kullanici/listele']);
    }, err => {
      this.durum = "Giriş Başarısız";
    });
  }


  uyeEkle() {
    this.Fbservis.UyeEkle(this.secUye).then(d => {

    });
  }
}
