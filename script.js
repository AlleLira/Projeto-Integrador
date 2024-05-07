
document.addEventListener('DOMContentLoaded', function() {
    var currentUrl = window.location.href;
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link){
        if (link.href === currentUrl){
            link.classList.add('active');
        }
    });
});



window.onload = function() {
    loadVideo('kx_r8NXD6GA');
};

function loadVideo(videoId) {
    document.getElementById('videoPlayer').src = 'https://www.youtube.com/embed/' + videoId;
};

function mudarConteudo(conteudo) {
    var novoConteudo = "";

 
    if (conteudo === "portugues") {
        novoConteudo = `<div id="conteudo">
        <div class="info1">
        <h2>Português</h2>
        <p>Parte I <br>
            Capítulos desse volume:
            Texto, Linguagem e comunicaçâo, Géneros textuais, <br> lingua e sim, Classes gramaticais: Substantivos, Verbos</p>
        </div>
        <div class="info2">
        <h2>Português</h2>
        <p>Parte II <br>
            Capítulos desse volume:
            Sintaxe do periodo simples:Termos de oraçâo, funções <br> sintáticas, coordenação, 
            subordinação, puntuação da lingua portuguesa.
        </p>
        </div>
        <div class="info3">
        <h2>Redação</h2>
        <p>Único <br>
            Capítulo desse volume:
            Géneros textuais e orais, redação dissertativa, <br> argumentativa, leitura e compreensão de texto e como <br> fazer a redação do enem.
        </p>
        </div>`;
    } else if (conteudo === "matematica") {
        novoConteudo = `<div id="conteudo">
        <div class="info1">
        <h2>Matemática</h2>
        <p>Parte I <br>
            Capítulos desse volume:<br>
            Álgebra, Geometria, Cálculo, Trigonometria, Estatística</p>
        </div>
        <div class="info2">
        <h2>Matemática</h2>
        <p>Parte II <br>
            Capítulos desse volume:<br>
            operações básicas (aritmética), análise combinatória, razão e proporção, <br> 
            geometria plana e espacial, equações e funções, porcentagem, estatística e probabilidade.
        </p>
        </div>`;
    } else if (conteudo === "história") {
        novoConteudo = `<div id="conteudo">
        <div class="info1">
        <h2>História</h2>
        <p>Parte I <br>
            Capítulos desse volume:<br>
            História do Brasil: Segundo Reinado, Primeira República, <br>
            Período colonial, Era Vargas, Ditadura Militar, Patrimônio histórico e cultural.</p>
        </div>
        <div class="info2">
        <h2>Matemática</h2>
        <p>Parte II <br>
            Capítulos desse volume:<br>
            História Geral:Nazismo e fascismo, Antiguidade Clássica: Grécia e Roma, <br> 
            Revolução Industrial, Primeira e Segunda Guerra Mundial, Idade Média.
        </p>
        </div>`;
    } else if (conteudo === "geografia") {
        novoConteudo = `<div id="conteudo">
        <div class="info1">
        <h2>Geografia</h2>
        <p>Parte I <br>
            Capítulos desse volume:<br>
            Questões ambientais, Agropecuária, Fases do capitalismo,<br>
            Urbanização, Indústria, Migrações.</p>
        </div>
        <div class="info2">
        <h2>Geografia</h2>
        <p>Parte II <br>
            Capítulos desse volume:<br>
            Comércio, Geologia e relevo, População, Hidrografia.    
        </p>
        </div>`;
    } else if (conteudo === "biologia") {
        novoConteudo = `<div id="conteudo">
        <div class="info1">
        <h2>Biologia</h2>
        <p>Parte I <br>
            Capítulos desse volume:<br>
            Ecologia: relações ecológicas, poluição, <br> 
            cadeias e teias alimentares, corredores ecológicos.</p>
        </div>
        <div class="info2">
        <h2>Biologia</h2>
        <p>Parte II <br>
            Capítulos desse volume:<br>
            Fisiologia humana: sistema digestório,  sistema imunológico, <br>
            sistema cardiovascular, sistema respiratório.    
        </p>
        </div>
        <div class="info3">
        <h2>Biologia</h2>
        <p>Parte III <br>
            Capítulos desse volume:<br>
            Biotecnologia, Biologia celular, Botânica. <br> 
        </p>
        </div>`;
    } else if (conteudo === "fisica") {
        novoConteudo = `<div id="conteudo">
        <div class="info1">
        <h2>Física</h2>
        <p>Parte I <br>
            Capítulos desse volume:<br>
            Usinas de eletricidade e instalações elétricas residenciais, ondulatória, <br> 
            calorimetria, hidrostática, óptica.</p>
        </div>
        <div class="info2">
        <h2>Física</h2>
        <p>Parte II <br>
            Capítulos desse volume:<br>
            Eletrodinâmica, cinemática, dinâmica,  <br>
            magnetismo, termodinâmica.   
        </p>
        </div>`;
    } else if (conteudo === "quimica") {
        novoConteudo = `<div id="conteudo">
        <div class="info1">
        <h2>Química</h2>
        <p>Parte I <br>
            Capítulos desse volume:<br>
            Química Geral: Propriedades da matéria (densidade, pontos de fusão e ebulição), Fenômenos físicos e químicos,<br> 
            Separação de misturas, Mol, Estequiometria, Balanceamento de equações.</p>
        </div>
        <div class="info2">
        <h2>Química</h2>
        <p>Parte II <br>
            Capítulos desse volume:<br>
            Química Inorgânica: Funções inorgânicas, Ácidos, Bases, Óxidos, Sais <br>
            Reações inorgânicas, Neutralização, Dupla troca.
        </p>
        </div>`;
    } else {
        novoConteudo = "Conteúdo não encontrado";
    }

    document.getElementById("conteudo").innerHTML = novoConteudo;
}


function validarForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var senha = document.getElementById("senha").value;
    var cep = document.getElementById("cep").value;
    var logradouro = document.getElementById("logradouro").value;
    var numero = document.getElementById("numero").value;
    var cidade = document.getElementById("cidade").value;
    var uf = document.getElementById("uf").value;

    if (nome === "" || email === "" || dataNascimento === "" || senha === "" || cep === "" || logradouro === "" || numero === "" || cidade === "" || uf === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false; 
    }
   
    if (!validarEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false; 
    }


    return true;
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}