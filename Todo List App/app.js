let metin, aciklama;

// Metni Alip Kaydetme 
function metniAlma() {
    // Görev ve açıklama metinlerini al
    var gorevMetni = document.getElementById("gorevMetni").value;
    var aciklamaMetni = document.getElementById("aciklamaMetni").value;

    // Her iki giriş alanının da boş olmadığını kontrol et
    if (gorevMetni.trim() !== "" && aciklamaMetni.trim() !== "") {
        var li = document.createElement("li");

        var button = document.createElement("button");
        button.type = "button";
        button.innerText = gorevMetni;
        button.className = "btn btn-aciklama";

        // Butona tıklandığında açıklamayı gösterecek bir fonksiyon ekle
        var buttonIndex = document.querySelectorAll("ul li").length;
        button.setAttribute("onclick", `aciklamayigoster(${buttonIndex})`);
        button.id = `button${buttonIndex}`;

        var p = document.createElement("p");
        p.className = "aciklamalar";
        p.innerText = aciklamaMetni;

        li.appendChild(button);
        li.appendChild(p);

        document.querySelector("ul").appendChild(li);

        // Inputları temizle
        document.getElementById("gorevMetni").value = "";
        document.getElementById("aciklamaMetni").value = "";
    } else {
        alert("Lütfen görev ve açıklama alanlarını doldurun!");
    }
}

// Açıklamayı göster/gizle fonksiyonu
function aciklamayigoster(index) {
    var p = document.querySelectorAll(".aciklamalar")[index];
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}
