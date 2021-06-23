import { isletme } from './../../models/isletme';
import { isletmeServis } from './../../services/isletmeServis';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-isletme',
  templateUrl: './isletme.component.html',
  styleUrls: ['./isletme.component.css']
})
export class IsletmeComponent implements OnInit {

  durum: string;
  sonuc: boolean;
  secUye: isletme = new isletme();
  constructor(
    public Fbservis: isletmeServis,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  KayitOl() {
    this.Fbservis.uyeOl(this.secUye).then(d => {
      d.user.updateProfile({
        displayName: "isletme"
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

  uyeEkle() {
    this.Fbservis.UyeEkle(this.secUye).then(d => {

    });
  }
  GirisYap(mail: string, parola: string) {
    this.Fbservis.OturumAc(mail, parola).then(d => {
      this.sonuc = true;
      this.durum = "Giriş Başarılı";
      localStorage.setItem("user", JSON.stringify(d.user));
      this.router.navigate(['/isletme/urunkayit']);
    }, err => {
      this.durum = "Giriş Başarısız";
    });
  }

}
