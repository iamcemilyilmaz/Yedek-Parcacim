import { favori } from './../models/favori';
import { urunkayit } from './../models/urunkayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class favoriServis {
    /* kayitlar başlangıç */
    private dbKayit = '/favori';

    kayitRef: AngularFireList<favori> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth
    ) {
        this.kayitRef = db.list(this.dbKayit);

    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: favori) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: favori) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    KayitListelebyUid(id: string) {
        return this.db.list("favori", q => q.orderByChild("kullaniciID").equalTo(id));
    }
    /* kayitlar bitiş */
}
