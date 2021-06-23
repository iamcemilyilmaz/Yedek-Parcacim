import { AdminUrunComponent } from './components/admin-urun/admin-urun.component';
import { AdminisletmeComponent } from './components/adminisletme/adminisletme.component';
import { AdminUyeComponent } from './components/admin-uye/admin-uye.component';
import { AdminEkleComponent } from './components/admin-ekle/admin-ekle.component';
import { AdminComponent } from './components/admin/admin.component';
import { FavorilerComponent } from './components/favoriler/favoriler.component';
import { ListeleComponent } from './components/listele/listele.component';
import { UrunsilComponent } from './components/urunsil/urunsil.component';
import { UrunlisteleComponent } from './components/urunlistele/urunlistele.component';
import { UrunkayitComponent } from './components/urunkayit/urunkayit.component';
import { KullanicilarComponent } from './components/kullanicilar/kullanicilar.component';
import { IsletmeComponent } from './components/isletme/isletme.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AnasayfaComponent },
  { path: 'isletme', component: IsletmeComponent },
  { path: 'kullanicilar', component: KullanicilarComponent },
  { path: 'isletme/urunkayit', component: UrunkayitComponent },
  { path: 'isletme/urunlistele', component: UrunlisteleComponent },
  { path: 'kullanici/listele', component: ListeleComponent },
  { path: 'kullanici/favoriler', component: FavorilerComponent },
  { path: 'isletme/urunsil', component: UrunsilComponent },
  { path: 'admin', component:AdminComponent },
  { path: 'adminEkle', component:AdminEkleComponent },
  { path: 'adminKullanici', component:AdminUyeComponent },
  { path: 'admin-isletme', component:AdminisletmeComponent },
  { path: 'adminUrun', component:AdminUrunComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
