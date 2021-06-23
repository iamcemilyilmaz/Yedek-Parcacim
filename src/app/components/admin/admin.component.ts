import { Router } from '@angular/router';
import { adminServis } from './../../services/adminServis';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sonuc:boolean=false;
  durum:string="";
  constructor(
    public Fbservis:adminServis,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  GirisYap(mail: string, parola: string) {
    this.sonuc = true;
    this.Fbservis.OturumAc(mail, parola).then(d => {
    
      this.durum = "Giriş Başarılı";
      localStorage.setItem("user", JSON.stringify(d.user));
      this.router.navigate(['/adminEkle']);
    }, err => {
      this.durum = "Giriş Başarısız";
    });
  }
}
