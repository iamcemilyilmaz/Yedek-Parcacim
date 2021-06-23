import { urunkayit } from './../models/urunkayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class urunkayitServis {
    /* kayitlar başlangıç */
    private dbKayit = '/Dosyalar';

    kayitRef: AngularFireList<urunkayit> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth
    ) {
        this.kayitRef = db.list(this.dbKayit);

    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: urunkayit) {
        return this.kayitRef.push(kayit);
    }
    KayitDuzenle(kayit: urunkayit) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    KayitListeleFiltreli(marka: string) {
        return this.db.list("Dosyalar", q => q.orderByChild("aracmarka").equalTo(marka));
    }
    KayitListelebyUid2(id: string) {
        return this.db.list("Dosyalar", q => q.orderByChild("isletmeid").equalTo(id));
    }
    /* kayitlar bitiş */
}
