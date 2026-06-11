const divListaFilmes = document.querySelector("#filmes")
const btnAcao = document.querySelector("btn_acao")
const btnComedia = document.querySelector("btn_comedia")
const btnAnimacao = document.querySelectorAll("btn_animacao")
const btnAventura = document.querySelector("btn_aventura")
const btnTerror = document.querySelector("btn_terror")

//AÇÃO
function filtrarFilmesAcao() {
  divListaFilmes.innerHTML = "";
  
    const FilmeAcao = filmes.filter((filmes)=> {
        return filmes.genero === "Ação"
    })
    filmes.forEach((filmes) => { 
    divListaFilmes.innerHTML += ` <li>
    <b>${filmes.titulo}</b> <br> 
    ${filmes.sinopse} <br> 
    Gênero: <i>${filmes.genero}</i>
    </li>` 
})
}

//COMEDIA
const btnComedia = document.querySelector("btn_comedia")
function filtrarFilmesComedia() {
  divListaFilmes.innerHTML = "";

  const FilmeComedia = filmes.filter((filmes)=> {
    return filmes.genero === "Comédia"
  })
  filmes.forEach((filmes) => { 
    divListaFilmes.innerHTML += 
    `<li>
    <b>${filmes.titulo}</b> <br>
    ${filmes.sinopse} <br>
    Gênero: <i>${filmes.genero}</i>
    </li>`
  })
}


//ANIMACAO
const btnAnimacao = document.querySelector("btn_animacao")
function filtrarFilmesAnimacao() {
  divListaFilmes.innerHTML = "";

  const FilmeAnimacao = filmes.filter((filmes) => {
    return filmes.genero === "Animação"
  })
  filmes.forEach((filmes) => {
    divListaFilmes +=
    `<li>
    <b>${filmes.titulo}</b> <br>
    ${filmes.sinopse} <br>
    Gênero: <i>${filmes.genero}</i>
    </li>`
  })
}

//AVENTURA
const btnAventura = document.querySelector ("btn_aventura")
function filtrarFilmesAventura() {
  cdivListaFilmes.innerHTML = "";

  const FilmeAnimacao = filmes.filter((filmes) => {
    return filmes.genero === "Aventura"
  })
  filmes.forEach((filmes) => {
    divListaFilmes +=
    `<li>
    <b>${filmes.titulo}</b> <br>
    ${filmes.sinopse} <br>
    Gênero: <i>${filmes.genero}</i>
    </li>`
  })
}

//TERROR
const btnTerror = document.querySelector ("btn_terror")
function filtrarFilmesTerros() {
  divListaFilmes.innerHTML = "";

  const FilmeAnimacao = filmes.filter((filmes) => {
    return filmes.genero === "Terror"
  })
  filmes.forEach((filmes) => {
    divListaFilmes +=
    `<li>
    <b>${filmes.titulo}</b> <br>
    ${filmes.sinopse} <br>
    Gênero: <i>${filmes.genero}</i>
    </li>`
  })
}

const filmes = [
  {
    "titulo": "Cidade de Deus",
    "sinopse": "A ascensão do crime organizado na favela carioca vista pelos olhos de um jovem fotógrafo.",
    "genero": "Ação"
  },
  {"titulo": "Tropa de Elite",
    "sinopse": "O cotidiano violento e os dilemas éticos do BOPE no combate ao tráfico no Rio de Janeiro.",
    "genero": "Ação"
  },
  {
    "titulo": "Relatos Selvagens",
    "sinopse": "Seis histórias de pessoas que perdem o controle e cruzam a linha da civilidade em situações extremas.",
    "genero": "Ação"
  },
  {
    "titulo": "Bacurau",
    "sinopse": "Uma pequena cidade no sertão desaparece do mapa e os moradores precisam se unir contra invasores estrangeiros.",
    "genero": "Ação"
  },
  {
    "titulo": "2 Coelhos",
    "sinopse": "Um homem cria um plano mirabolante para colocar criminosos e políticos corruptos em rota de colisão.",
    "genero": "Ação"
  },
  {
    "titulo": "Assalto ao Banco Central",
    "sinopse": "Baseado na história real de um dos maiores roubos a banco do mundo, ocorrido em Fortaleza.",
    "genero": "Ação"
  },
  {
    "titulo": "Siete Cajas",
    "sinopse": "Um jovem entregador paraguaio aceita transportar sete caixas misteriosas em troca de dinheiro.",
    "genero": "Ação"
  },
  {
    "titulo": "El Angel",
    "sinopse": "A história real de Carlos Robledo Puch, um jovem com rosto de anjo que se tornou um assassino na Argentina.",
    "genero": "Ação"
  },
  {
    "titulo": "Alemão",
    "sinopse": "Cinco policiais infiltrados no Complexo do Alemão ficam encurralados durante uma ocupação militar.",
    "genero": "Ação"
  },
  {
    "titulo": "Tropa de Elite 2",
    "sinopse": "Nascimento enfrenta o sistema político e as milícias, mostrando que o inimigo é mais complexo que o tráfico.",
    "genero": "Ação"
  },
  {
    "titulo": "O Auto da Compadecida",
    "sinopse": "As peripécias de João Grilo e Chicó para sobreviverem no sertão e enganarem a morte.",
    "genero": "Comédia"
  },
  {
    "titulo": "Minha Mãe é uma Peça",
    "sinopse": "Dona Hermínia é uma mãe hiperativa que decide sair de casa após ouvir críticas dos filhos.",
    "genero": "Comédia"
  },
  {
    "titulo": "Lisbela e o Prisioneiro",
    "sinopse": "Uma jovem apaixonada por cinema se encanta por um vigarista que chega à sua cidade.",
    "genero": "Comédia"
  },
  {
    "titulo": "O Homem que Copiava",
    "sinopse": "Um operador de fotocopiadora decide fabricar notas de dinheiro para conquistar a vizinha.",
    "genero": "Comédia"
  },
  {
    "titulo": "Um Time Show de Bola",
    "sinopse": "Um jovem mestre no pebolim vê seus bonecos ganharem vida para salvar sua cidade.",
    "genero": "Comédia"
  },
  {
    "titulo": "Que Horas Ela Volta?",
    "sinopse": "A relação entre uma empregada doméstica e seus patrões é abalada quando sua filha chega da capital.",
    "genero": "Comédia"
  },
  {
    "titulo": "Medianeras",
    "sinopse": "Dois jovens solitários vivem em Buenos Aires e lutam para se encontrar na era digital.",
    "genero": "Comédia"
  },
  {
    "titulo": "O Candidato Honesto",
    "sinopse": "Um político corrupto recebe uma praga e se torna incapaz de contar qualquer mentira.",
    "genero": "Comédia"
  },
  {
    "titulo": "Bem-vinda a Quixeramobim",
    "sinopse": "Uma influencer herda uma fazenda no interior do Ceará após a falência da família.",
    "genero": "Comédia"
  },
  {
    "titulo": "Cronicamente Inviável",
    "sinopse": "Uma comédia ácida e satírica sobre as contradições e hipocrisias da sociedade brasileira.",
    "genero": "Comédia"
  },
  {
    "titulo": "O Menino e o Mundo",
    "sinopse": "Um menino deixa sua aldeia em busca do pai e descobre um mundo dominado pela tecnologia.",
    "genero": "Animação"
  },
  {
    "titulo": "Uma História de Amor e Fúria",
    "sinopse": "Um homem imortal atravessa 600 anos da história do Brasil em busca de sua amada.",
    "genero": "Animação"
  },
  {
    "titulo": "Anina",
    "sinopse": "Uma menina recebe a punição de não poder abrir um envelope lacrado por uma semana.",
    "genero": "Animação"
  },
  {
    "titulo": "Até que a Sbórnia nos Separe",
    "sinopse": "Quando o muro que separa a Sbórnia do mundo cai, dois amigos vivem o choque cultural.",
    "genero": "Animação"
  },
  {
    "titulo": "Perlimps",
    "sinopse": "Duas criaturas rivais precisam unir forças para salvar a floresta.",
    "genero": "Animação"
  },
  {
    "titulo": "Tito e os Pássaros",
    "sinopse": "Um menino tenta encontrar a cura para uma epidemia de medo que transforma pessoas em pedra.",
    "genero": "Animação"
  },
  {
    "titulo": "Nahuel e o Livro Mágico",
    "sinopse": "Um jovem chileno deve superar o medo do mar para resgatar seu pai de um feiticeiro.",
    "genero": "Animação"
  },
  {
    "titulo": "Minhocas",
    "sinopse": "Uma minhoca jovem é levada para a superfície e precisa achar o caminho de volta para casa.",
    "genero": "Animação"
  },
  {
    "titulo": "Lino: Uma Aventura de Sete Vidas",
    "sinopse": "Um animador azarado se transforma no felino gigante que usa como fantasia.",
    "genero": "Animação"
  },
  {
    "titulo": "A Princesa e o Robô",
    "sinopse": "Um robôzinho tenta conquistar o coração de uma princesa em um reino intergaláctico.",
    "genero": "Animação"
  },
  {
    "titulo": "Diários de Motocicleta",
    "sinopse": "A jornada de dois amigos pela América do Sul que mudaria suas vidas para sempre.",
    "genero": "Aventura"
  },
  {
    "titulo": "Tainá - Uma Aventura na Amazônia",
    "sinopse": "Uma pequena indígena luta contra traficantes de animais para proteger a fauna local.",
    "genero": "Aventura"
  },
  {
    "titulo": "O Abraço da Serpente",
    "sinopse": "Cientistas buscam uma planta sagrada na Amazônia com a ajuda de um xamã solitário.",
    "genero": "Aventura"
  },
  {
    "titulo": "Menino Maluquinho: O Filme",
    "sinopse": "As aventuras de um menino criativo e amado por todos que vive a infância plenamente.",
    "genero": "Aventura"
  },
  {
    "titulo": "Cinema, Aspirinas e Urubus",
    "sinopse": "Um alemão e um brasileiro viajam pelo sertão vendendo remédios durante a 2ª Guerra.",
    "genero": "Aventura"
  },
  {
    "titulo": "Xingu",
    "sinopse": "A expedição dos irmãos Villas-Bôas para a criação da primeira grande reserva indígena.",
    "genero": "Aventura"
  },
  {
    "titulo": "Caminho das Nuvens",
    "sinopse": "Um pai de família decide pedalar do Nordeste ao Rio de Janeiro em busca de trabalho.",
    "genero": "Aventura"
  },
  {
    "titulo": "O Palhaço",
    "sinopse": "Um artista de circo viaja pelas estradas enquanto questiona sua própria felicidade.",
    "genero": "Aventura"
  },
  {
    "titulo": "O Descobrimento do Brasil",
    "sinopse": "Uma narrativa sobre o primeiro contato entre navegadores portugueses e nativos brasileiros.",
    "genero": "Aventura"
  },
  {
    "titulo": "Detetives do Prédio Azul: O Filme",
    "sinopse": "Três amigos investigam um roubo mágico para salvar o prédio de uma síndica malvada.",
    "genero": "Aventura"
  },
  {
    "titulo": "À Meia-Noite Levarei Sua Alma",
    "sinopse": "O sádico Zé do Caixão busca a mulher perfeita para dar continuidade ao seu sangue.",
    "genero": "Terror"
  },
  {
    "titulo": "A Chorona",
    "sinopse": "Um antigo ditador é assombrado pelo espírito de uma mulher que clama por justiça após massacres indígenas.",
    "genero": "Terror"
  },
  {
    "titulo": "As Boas Maneiras",
    "sinopse": "Uma enfermeira é contratada para cuidar de uma grávida misteriosa, cujo filho reserva uma surpresa lupina.",
    "genero": "Terror"
  },
  {
    "titulo": "Morto Não Fala",
    "sinopse": "Um plantonista de necrotério tem o dom de falar com os mortos, mas segredos revelados colocam sua família em perigo.",
    "genero": "Terror"
  },
  {
    "titulo": "Aterrados",
    "sinopse": "Fenômenos paranormais brutais ocorrem em um bairro de Buenos Aires, desafiando investigadores do oculto.",
    "genero": "Terror"
  },
  {
    "titulo": "O Animal Cordial",
    "sinopse": "Durante um assalto a um restaurante, o dono revela uma natureza violenta e perturbadora para controlar a situação.",
    "genero": "Terror"
  },
  {
    "titulo": "O Lobo Atrás da Porta",
    "sinopse": "O desaparecimento de uma criança revela uma rede de mentiras, traição e vingança no Rio de Janeiro.",
    "genero": "Terror"
  },
  {
    "titulo": "Vosso Reino",
    "sinopse": "Em uma comunidade religiosa isolada, um jovem começa a questionar os métodos sombrios de seu líder.",
    "genero": "Terror"
  },
  {
    "titulo": "O Nó do Diabo",
    "sinopse": "Contos de horror que atravessam séculos em uma fazenda de cana-de-açúcar, explorando o racismo estrutural.",
    "genero": "Terror"
  },
  {
    "titulo": "A Casa Lobo",
    "sinopse": "Uma animação em stop-motion perturbadora sobre uma jovem que foge de uma colônia alemã no Chile.",
    "genero": "Terror"
  }
]

