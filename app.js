
let yenisatir = "\r\n";

let metin = "1 - Bakiyeyi Görüntüle " + yenisatir +
            "2 - Para Yatırma " + yenisatir +
            "3 - Para Çekme " + yenisatir + 
            "4 - Çıkış" + yenisatir + yenisatir + 
            " Lütfen Bir Seçim Yapınız:";

let bakiye = 0;

function giris(){

    let secim = prompt(metin);

    if (secim == "1") {

        alert("Bakiyeniz: " + bakiye);
        giris();
    }

    else if (secim == "2") {

        let paragiris = Number(prompt("Yükleyeceğiniz Tutarı Giriniz: "));

        bakiye = bakiye + paragiris;
        giris();
    }

    else if (secim == "3") {
        
        let paracikis = Number(prompt("Çekeceğiniz Tutarı Giriniz:"));

        if (paracikis <= bakiye){
            bakiye = bakiye - paracikis;
        }

        else {
            alert("Bakiyeniz Yetersiz..." + yenisatir + 
                 "Bakiyeniz : " + bakiye + yenisatir + "Çekmek İstediğiniz Tutar: " + paracikis);
        }

        giris();
    }

    else if (secim == "4") {
        
    }

    else {
        alert("Lütfen Geçerli Bir Değer Giriniz...");
        giris();
    }
}