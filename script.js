
var input = document.querySelector('#text-input');
var encrypterButton = document.querySelector('#encrypt');
var unencrypterButton = document.querySelector('#unencrypt');
var barra = document.querySelector('.barra');
var clipboard = document.querySelector('.copy');
var copyText = document.querySelector('.copy-text');
var output
var band = 0;
input.focus();

function displayDark() {
    var itement = document.body;
    itement.classList.toggle("dark");
    band++;
    if(band === 2){
        band = 0;
    } else{
        band = 1;
    }
    band === 1 ? itement1.classList.add("dark") : itement1.classList.remove("dark");   
}

function showOutput() {
    const item = document.querySelector('#output');
    const herit = document.createTextNode('');

    item.innerHTML = ''
    item.appendChild(herit);
    output = herit;
}

showOutput();

function encrypter(item){
    switch(item) {
        case 'a': return 'ai'
        case 'e': return 'enter'
        case 'i': return 'imes'
        case 'o': return 'ober'
        case 'u': return 'ufat'
        default: return item
    }
}

function iteraCode(txt){
    txt = input.value.toLowerCase();
    var t = '';
    for(var i = 0; i < txt.length; i++) {
        t += encrypter(txt[i]);
    }
    return t;
}

function unencrypter(txt){
    txt = input.value.toLowerCase();
    return txt.replace(/ai|enter|imes|ober|ufat/gi, function(matched){
        switch(matched) {
            case 'ai': return 'a'
            case 'enter': return 'e'
            case 'imes': return 'i'
            case 'ober': return 'o'
            case 'ufat': return 'u'
            case ' ': return ''
            default: return matched
        }
    });
}

encrypterButton.addEventListener('click', function() {
    var txt = input.value;
    if(txt.length === 0) {
        output.nodeValue = ''
        hideResult();
    } else {
        output.nodeValue = iteraCode(txt).toLowerCase();
        showResult();
    }
});

function showResult(){
    barra.classList.add('con-output');
}

function hideResult(){
    barra.classList.remove('con-output');
}

unencrypterButton.addEventListener('click', function() {
    var valor = input.value;
    if(valor.length === 0) {
        output.nodeValue= ''
        hideResult();
    } else {
        output.nodeValue = unencrypter(valor);
        showResult();
    }
    
}); 

input.addEventListener('input', function() {
    var valor = input.value;
    if(valor.length === 0) {
        output.nodeValue= ''
        hideResult();
    }

});

var clip = navigator.clipboard;

clipboard.addEventListener('click', function(){
    var input = output.nodeValue;
    if(clip){
        clip.writeText(input);
        copyText.classList.add('active');
        setTimeout(function(){
            copyText.classList.remove('active');
        }, 2000);
    }
})