//const en = '{"Order":"Order Online", "Home":"Home", "About":"About", "Contact":"Contact"}'
//const pl = '{"Order":"Zamów Teraz", "Home":"Start", "About":"O nas", "Contact":"Kontakt"}'

var showLang = false;

function language(lang) {
    fetch("http://127.0.0.1:5500/LearnCube/JakubCV/Restaurant/" + lang + ".json")
        .then(response => response.json())
        .then(json => {
            document.getElementById("iddropbtn").innerText = json.LangButton;
            document.getElementById("idorder").innerText = json.Order;
            document.getElementById("idabout").innerText = json.About;
            document.getElementById("idcontact").innerText = json.Contact;
            if (document.getElementById("idheadline")) {
                document.getElementById("idheadline").innerText = json.Headline;
            }
        });
}

function showLangList() {
    
    if (showLang) {
        showLang = false;
        document.getElementById("iddropdown-content").style.display = 'none';
    }else{
        showLang = true;
        document.getElementById("iddropdown-content").style.display = 'block';
    }
    
}