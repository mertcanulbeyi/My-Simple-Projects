// !Metni Alıp Kaydetme Olayı

function metniAlma() {

    const gorevMetni = document.getElementById("gorevMetni").value.trim();
    const aciklamaMetni = document.getElementById("aciklamaMetni").value.trim();


    if (gorevMetni && aciklamaMetni) {
        const li = document.createElement("li");


        const button = document.createElement("button");
        button.type = "button";
        button.innerText = gorevMetni;
        button.className = "btn btn-aciklama";
        button.setAttribute("data-index", document.querySelectorAll("ul li").length);


        const p = document.createElement("p");
        p.className = "aciklamalar editable";
        p.innerText = aciklamaMetni;
        p.style.display = "none"; 


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



// ! Açıklamayı göster/gizle olayı

document.querySelector("ul").addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-aciklama")) {
        aciklamayigoster(event);
    } 
    
    if (event.target.classList.contains("editable")) {
        event.target.contentEditable = true;
        event.target.focus();
        event.target.addEventListener("blur", function() {
            event.target.contentEditable = false;
        });
    }
});



function aciklamayigoster(event) {
    const button = event.target;
    const index = button.getAttribute("data-index");
    const p = document.querySelectorAll(".aciklamalar")[index];

    p.style.display = p.style.display === "none" ? "block" : "none";
}



// ! Inputlar Arası Gezinme...

document.querySelector("#gorevMetni").addEventListener("keyup", run);
document.querySelector("#aciklamaMetni").addEventListener("keyup", run2);

function run(e) {
    if (e.key === "Enter" || e.key === "ArrowDown") {
        document.querySelector("#aciklamaMetni").focus();       
    }
}

function run2(e) {
    if (e.key === "Enter") {
        metniAlma();
    }
    else if (e.key === "ArrowUp")  document.querySelector("#gorevMetni").focus();  
}
