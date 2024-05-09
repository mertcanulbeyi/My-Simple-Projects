
let sor1, sor2, sor3, sor4, sor5, sor6, sor7, toppuan;

let sonBaslik = document.querySelector("h4#sonbaslik");  // sonbaşlığı çektik

let sonMetin = document.querySelector("p#sonucmetni");

const newsatir = "\r\n";





// Sonuç Metinleri

let sonucMetni1 = "Kendi ihtiyaçlarınızı ve çıkarlarınızı göz ardı ederek başkalarına yardım etmeye kendini adamış bir bireysiniz. " +
" Çevrenizdeki insanların duygularına karşı derin bir empati ve şefkat duygusu besliyorsunuz ve onların iyilikleri için her zaman çaba gösteriyorsunuz.";



let sonucMetni2 = "Yardım etmeye her zaman isteklisiniz ve bunu düzenli olarak yapıyorsunuz, kendi çıkarlarınızı göz ardı ederek başkalarına yardım etmeyi önemsiyorsunuz." + 
" Çevrenizdeki insanların duygularına karşı hassasiyet gösteriyorsunuz ve onlara her zaman destek oluyorsunuz." +
" Topluma katkıda bulunmaya ve onu geliştirmeye çalışıyorsunuz, eylemlerinizin başkalarının hayatlarını nasıl etkilediğinin farkındasınız." +
" Adil ve eşitlikçi bir toplum için aktif bir şekilde mücadele ediyorsunuz ve bu konuda önemli bir rol oynuyorsunuz." +
" Karşılaştığınız tüm sorunlara çözüm bulmak için yapıcı ve çözüm odaklı bir yaklaşım benimsiyorsunuz ve bu konuda oldukça başarılısınız.";


let sonucMetni3 = "Yardım etmeye isteklisiniz ve bunu ara sıra yapıyorsunuz, ancak daha fazla çaba gösterebilirsiniz. " +
"Çevrenizdeki insanların duygularına karşı hassasiyet gösteriyorsunuz ve onlara destek olmak için çaba gösteriyorsunuz. " +
"Topluma katkıda bulunmaya isteklisiniz ve bunu genellikle tutarlı bir şekilde yapıyorsunuz, ancak daha büyük bir etki yaratmak için daha fazlasını yapabilirsiniz. " +
"Adil ve eşitlikçi bir toplum için ara sıra mücadele ediyorsunuz ve bu konuda daha aktif bir rol oynayabilirsiniz. " + 
"Karşılaştığınız çoğu sorunu çözmek için yapıcı ve çözüm odaklı bir yaklaşım benimsiyorsunuz, ancak bazı durumlarda daha fazla beceri ve deneyime ihtiyacınız olabilir. ";


let sonucMetni4 = "Bazen yardım etmeye eğilimlisiniz, ancak bunu sadece kendi çıkarlarınız doğrultusunda yapıyorsunuz. " +	
"Bazı Duyarlılık: Çevrenizdeki insanların duygularına karşı biraz hassasiyet gösteriyorsunuz, ancak her zaman onların ihtiyaçlarını karşılayamıyorsunuz. " +
"Topluma katkıda bulunmaya isteklisiniz, ancak bunu her zaman tutarlı bir şekilde yapamıyorsunuz ve eylemlerinizin etkisi sınırlı kalıyor. " +
"Adil ve eşitlikçi bir toplum için ara sıra mücadele ediyorsunuz, ancak bu konuda yeterince aktif değilsiniz. " +
"Karşılaştığınız bazı sorunları çözmek için çaba gösteriyorsunuz, ancak her zaman başarılı olamıyorsunuz ve daha fazla gelişmeye ihtiyacınız var. ";


let sonucMetni5 = "Kendi çıkarlarınızı her şeyin üzerinde tutuyorsunuz ve başkalarına yardım etme konusunda isteksizsiniz. " +
"Çevrenizdeki insanların duygularına karşı duyarsızsınız ve onların ihtiyaçlarını göz ardı ediyorsunuz. " +
"Toplum için herhangi bir fayda sağlama konusunda isteksizsiniz ve eylemlerinizin başkalarını nasıl etkilediğine aldırış etmiyorsunuz. " +
"Adil ve eşitlikçi bir toplum için mücadele etmiyorsunuz ve mevcut adaletsizlikleri kabulleniyorsunuz. " +
"Karşılaştığınız sorunlara çözüm bulmak yerine, yıkıcı ve problem yaratan bir yaklaşım benimsiyorsunuz. ";



let sonucMetni6 = "Bütün teste cevap vermediğini görüyorum, bence gözden kaçırmışsındır. Yoksa cevap veremeyecek durumda değilsin veya sorulardan korkmadın değil mi? ";



// Hesaplama İşlemi

function hesapla()
{
    toppuan = 0;

    // Cevapları aldık 
    sor1 = parseInt(document.f.soru1.value); sor2 = parseInt(document.f.soru2.value);
    sor3 = parseInt(document.f.soru3.value); sor4 = parseInt(document.f.soru4.value);
    sor5 = parseInt(document.f.soru5.value); sor6 = parseInt(document.f.soru6.value);
    sor7 = parseInt(document.f.soru7.value);

    toppuan = 0 +sor1 + sor2 + sor3 + sor4 + sor5 + sor6 + sor7;



    // Alınan Puana GÖre Başlıkları Ayarladık

    if (toppuan > 30)
    { sonBaslik.textContent = "Çok İyisin...";
      sonMetin.textContent = sonucMetni1; }

    else if (toppuan > 24)
    { sonBaslik.textContent = "İyisin..."; 
      sonMetin.textContent = sonucMetni2; }

    else if (toppuan > 17)
    { sonBaslik.textContent = "İyilik Seviyen Orta Diyebilirim...";
      sonMetin.textContent = sonucMetni3 + newsatir + newsatir + newsatir ; }

    else if (toppuan > 12)
    { sonBaslik.textContent = "Gelişmen Lazım...";
      sonMetin.textContent = sonucMetni4 + newsatir + newsatir + newsatir ; }

    else if (toppuan > 6)
    { sonBaslik.textContent = "Böyle Olmaz Kanka..."; 
      sonMetin.textContent = sonucMetni5 + newsatir + newsatir + newsatir ; }

    else 
    { sonBaslik.textContent = "Demek Bütün Teste Cevap Vermiyorsun..."; 
      sonMetin.textContent = sonucMetni6 + newsatir + newsatir + newsatir ; }

}