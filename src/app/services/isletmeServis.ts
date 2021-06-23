import { isletme } from './../models/isletme';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
    providedIn: 'root'
})
export class isletmeServis {
    /* kayitlar başlangıç */
    private dbKayit = '/isletme';

    kayitRef: AngularFireList<isletme> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth
    ) {
        this.kayitRef = db.list(this.dbKayit);

    }
    uyeOl(uye: isletme) {
        return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
    }
    UyeEkle(uye: isletme) {
        return this.kayitRef.push(uye);

    }
    KayitListele2(id: string) {
        return this.db.list("isletme", q => q.orderByChild("uid").equalTo(id));
    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: isletme) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: isletme) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    /* kayitlar bitiş */
    OturumAc(mail, parola) {
        return this.afAuth.signInWithEmailAndPassword(mail, parola);
    }
    OturumKapat() {
        return this.afAuth.signOut();
    }
}
