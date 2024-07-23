
/*  Sayıların Asal Olup Olmadığının Kontrol Metodu.  */

function asalmi(sayi)
{
    let sonuc = true;

    for(let i = 2; i <= Math.floor(sayi/2); i++)
    {
        if(sayi%i == 0) 
        { 
            sonuc = false; break; 
        }
    }

    return sonuc;
}



/*  Tek sayının Asal Olup Olmadığının Kontrol Metodu.  */

function asal_sayi_bul() 
{
    let sayi = document.getElementById("sayiGiris").value;

    let sonuc = asalmi(sayi);

    if(sonuc) 
    { 
        document.getElementById("cevap1").innerHTML = "ASAL SAYI";
    }
    else 
    {
        document.getElementById("cevap1").innerHTML = "ASAL SAYI DEĞİL";
    }
}




/*  İkiz Asalların Olup Olmadığının Kontrol Metodu.  */

function ikizleribul()
{
    let sayi1 = document.getElementById("ikizsayi1").value;
    let sayi2 = document.getElementById("ikizsayi2").value;

    if(sayi1 - sayi2 == 2 || sayi1 - sayi2 == -2)
    {
        let sayi1asalmi = asalmi(sayi1);                // sayıların asal olması kontorlü
        let sayi2asalmi = asalmi(sayi2);

        if(sayi1asalmi && sayi2asalmi)
        {
            document.getElementById("cevap2").innerHTML = "İKİZ ASALLAR";
        }

        else if (sayi1asalmi == false && sayi2asalmi)
        {
            document.getElementById("cevap2").innerHTML = "Birinci sayı asal değil...";
        }

        else if (sayi1asalmi && sayi2asalmi == false)
        {
            document.getElementById("cevap2").innerHTML = "İkinci sayı asal değil...";
        }

        else
        {
            document.getElementById("cevap2").innerHTML = "Sayılar asal değil...";
        }
    }

    else
    {
        document.getElementById("cevap2").innerHTML = "Sayıların farkı 2 değil...";
    }
}




/*  Mersenne Asalların Kontrol Metodu.  */

function mersennebul()
{
    let sayi = document.getElementById("asalsayi").value;

    let sonuc = asalmi(sayi);

    if(sonuc)
    {
        let mersenne = 2**sayi - 1;

        sonuc = asalmi(mersenne);

        if(sonuc)
        {
            document.getElementById("cevap3").innerHTML = "MERSENNE ASALI";
        }

        else
        {
            document.getElementById("cevap3").innerHTML = "Mersenne asalı değil...";
        }

    }

    else
    {
        document.getElementById("cevap3").innerHTML = "Sayı, asal değil...";
    }
}


/* Mükemmel Sayıları Kontrol Metodu */

function mukemmelbul()
{
    let sayi = document.getElementById("mukemmel").value;

    let toplam = 0;

    for(let i = 1; i <= Math.floor(sayi/2); i++)
    {
        if(sayi%i == 0) 
        { 
            toplam+=i;
        }
    }

    if (toplam == sayi)
    {
        document.getElementById("cevap4").innerHTML = "MÜKEMMEL SAYI";
    }

    else
    {
        document.getElementById("cevap4").innerHTML = "Mükemmel sayı değil...";
    }

}
