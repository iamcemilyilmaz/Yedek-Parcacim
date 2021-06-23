import { kullanici } from './../models/kullanici';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
    providedIn: 'root'
})
export class kullaniciServis {
    /* kayitlar başlangıç */
    private dbKayit = '/kullanicilar';

    kayitRef: AngularFireList<kullanici> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth
    ) {
        this.kayitRef = db.list(this.dbKayit);

    }
    uyeOl(uye: kullanici) {
        return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
    }
    UyeEkle(uye: kullanici) {
        return this.kayitRef.push(uye);

    }
    KayitListele2(id: string) {
        return this.db.list("isverenUye", q => q.orderByChild("uid").equalTo(id));
    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: kullanici) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: kullanici) {
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
