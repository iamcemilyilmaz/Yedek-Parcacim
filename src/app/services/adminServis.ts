import { admin } from './../models/admin';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
    providedIn: 'root'
})
export class adminServis {
    /* kayitlar başlangıç */
    private dbKayit = '/admin';

    kayitRef: AngularFireList<admin> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth
    ) {
        this.kayitRef = db.list(this.dbKayit);

    }
    uyeOl(uye: admin) {
        return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
    }
    UyeEkle(uye: admin) {
        return this.kayitRef.push(uye);

    }
    KayitListele2(id: string) {
        return this.db.list("isletme", q => q.orderByChild("uid").equalTo(id));
    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: admin) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: admin) {
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
