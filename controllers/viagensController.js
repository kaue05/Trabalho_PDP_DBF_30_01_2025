const viagens = [
    {
        id: 1,
        title: "Paris",
        image_path : "torre-eiffel.webp",
        image_alt : "Paris",
        year : "2021",
        description : `Hoje foi um dia incrível em Paris! Logo pela manhã, saí do hotel e fui direto ao coração da cidade: a Torre Eiffel. É ainda mais majestosa do que eu imaginava! Subi até o segundo andar e fiquei alguns minutos apenas apreciando a vista panorâmica da cidade. O céu estava um pouco nublado, mas isso não tirou o charme de Paris; pelo contrário, pareceu até que combinava com a atmosfera.
        De lá, caminhei até o Museu do Louvre. O prédio em si já é uma obra de arte! Fiquei horas admirando as coleções, desde a Mona Lisa até as esculturas gregas. É emocionante ver de perto todas essas peças que marcaram a história da humanidade.
        Depois, segui para o charmoso bairro de Montmartre, com suas ruas estreitas e o som de músicos tocando ao vivo nas esquinas. A Basílica de Sacré-Cœur foi meu próximo destino. Subi a escadaria até o topo e a vista lá de cima me deixou sem fôlego.
        Por fim, jantei em um bistrô aconchegante. Comi um delicioso boeuf bourguignon e provei um vinho local. Estava uma delícia! O garçom era super simpático e, mesmo com meu francês básico, conseguimos trocar algumas palavras.
        Hoje foi um dia que vou guardar para sempre na memória. Amanhã tem mais, Paris ainda tem muito a me mostrar!`,
        card_description : "A cidade das luzes, arte e romance.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
    },
    {
        id: 2,
        title: "Egito",
        image_path : "egito.jpg",
        image_alt : "Egito",
        year : "2021",
        description : `O Egito é realmente fascinante! Hoje, fui visitar as famosas pirâmides de Gizé e fiquei impressionado com a grandiosidade delas. A sensação de estar diante de uma das Sete Maravilhas do Mundo Antigo é indescritível. Andei de camelo pelo deserto e tirei várias fotos com a Grande Esfinge ao fundo.
        Depois, fui ao Museu Egípcio no Cairo, onde vi a máscara de Tutancâmon e uma coleção imensa de artefatos antigos. É uma verdadeira viagem no tempo estar cercado de tantas relíquias de uma civilização tão antiga.
        À noite, fiz um cruzeiro pelo Nilo, com um jantar a bordo. As luzes refletindo no rio e a música ao vivo tornaram a experiência mágica. Foi um dia cheio de história e encantamento que vou lembrar para sempre.
        Amanhã, o plano é explorar alguns mercados tradicionais e sentir a energia das ruas do Cairo!`,
        card_description : "História milenar e mistérios das pirâmides.⠀⠀⠀⠀⠀⠀⠀"
    },
    {
        id: 3,
        title: "Amazônia",
        image_path : "amazonia.jpg",
        image_alt : "Amazônia",
        year : "2021",
        description : `Hoje foi um dia inesquecível na Amazônia! Acordei cedo para um passeio de barco pelo Rio Amazonas. O sol ainda estava nascendo, e o reflexo da luz na água era lindo. Vimos golfinhos cor-de-rosa nadando ao redor e, depois de um tempo, paramos em uma vila ribeirinha para conhecer um pouco da cultura local.
        Em seguida, fizemos uma caminhada na floresta. É incrível como a vegetação é densa e cheia de vida. O guia nos mostrou várias plantas e árvores medicinais, além de aves coloridas e até alguns macacos pulando de galho em galho.
        Durante a tarde, participei de uma cerimônia indígena, onde aprendi sobre algumas tradições locais. Senti uma conexão profunda com a natureza e com a cultura amazônica.
        Amanhã, tenho planos para uma expedição noturna pela floresta! Espero ver algumas criaturas que só aparecem à noite. A Amazônia é realmente um lugar mágico!`,
        card_description : "A exuberância da floresta e da vida selvagem."
    },
    {
        id: 4,
        title: "Tóquio",
        image_path : "toquio.jpg",
        image_alt : "Tóquio",
        year : "2022",
        description : `Hoje foi um dia maravilhoso em Tóquio! Comecei o dia visitando o Santuário Meiji, um local sereno no meio da cidade, cercado por uma floresta de árvores centenárias. Depois, segui para o bairro de Shibuya e atravessei a famosa Shibuya Crossing, cheia de gente por todos os lados! 
        Almocei em um restaurante de sushi tradicional e a comida estava impecável. À tarde, explorei o bairro de Akihabara, com suas lojas de eletrônicos e games, e me encantei com o ritmo frenético do local.
        À noite, subi até o topo da Tokyo Skytree para ver a cidade iluminada. É uma visão inesquecível! Tóquio é uma cidade cheia de contrastes e cultura vibrante.`,
        card_description : "A modernidade vibrante e as tradições milenares."
    },
    {
        id: 5,
        title: "Roma",
        image_path : "roma.jpg",
        image_alt : "Roma",
        year : "2022",
        description : `Explorar Roma foi como andar em um museu a céu aberto! Logo cedo, visitei o Coliseu e me senti transportado para a época dos gladiadores. Em seguida, caminhei pelo Fórum Romano, onde se encontram as ruínas da antiga Roma.
        Almocei uma autêntica pizza italiana em um restaurante local e, depois, fui à Fontana di Trevi para fazer o famoso pedido com a moeda. No final do dia, explorei o Vaticano e admirei a grandiosidade da Basílica de São Pedro e a beleza das obras de Michelangelo.
        Roma é realmente eterna e cheia de histórias em cada esquina.`,
        card_description : "A cidade eterna e seus monumentos imponentes."
    },
    {
        id: 6,
        title: "Nova York",
        image_path : "nova-york.jpg",
        image_alt : "Nova York",
        year : "2023",
        description : `Hoje foi um dia agitado em Nova York! Comecei visitando a Estátua da Liberdade e fiquei encantado com o símbolo icônico da cidade. Depois, fui para o Central Park, onde aproveitei para relaxar um pouco e admirar o contraste entre a natureza e os arranha-céus ao redor.
        Passei a tarde explorando a Quinta Avenida, cheia de lojas e movimento, e depois fui ao Museu de Arte Moderna (MoMA), onde vi obras famosas de artistas como Van Gogh e Picasso.
        À noite, assisti a um musical na Broadway. Foi uma experiência mágica! Nova York realmente é a cidade que nunca dorme.`,
        card_description : "A cidade que nunca dorme e suas luzes vibrantes."
    },
    {
        id: 7,
        title: "Sydney",
        image_path : "sydney.jpg",
        image_alt : "Sydney",
        year : "2023",
        description : `Em Sydney, comecei o dia visitando a icônica Opera House, uma das construções mais famosas do mundo. Depois, fui à Harbour Bridge e caminhei por sua estrutura, tendo uma vista incrível do porto e da cidade.
        Passei a tarde na Bondi Beach, onde aproveitei para relaxar na areia e até arriscar algumas ondas. O clima estava perfeito e o mar era de um azul impressionante.
        À noite, jantei em um restaurante com vista para o porto e provei alguns pratos típicos australianos. Sydney é uma cidade moderna e cheia de belezas naturais.`,
        card_description : "A mistura perfeita de cidade e natureza exuberante."
    },
    {
        id: 8,
        title: "Londres",
        image_path : "londres.jpg",
        image_alt : "Londres",
        year : "2023",
        description : `Explorar Londres foi incrível! Comecei o dia visitando o Palácio de Buckingham, onde tive a sorte de ver a troca da guarda. Em seguida, fui para a Torre de Londres, onde aprendi sobre a história dos monarcas ingleses e vi as joias da coroa.
        Passeei pelo Hyde Park e visitei o Museu Britânico, onde fiquei fascinado com a coleção de artefatos históricos de diversas culturas.
        À noite, fui até o London Eye e pude ver a cidade iluminada do alto. Londres é fascinante, com sua mistura de história e modernidade.`,
        card_description : "História, realeza e cultura vibrante.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
    },
    {
        id: 9,
        title: "Machu Picchu",
        image_path : "machu-picchu.webp",
        image_alt : "Machu Picchu",
        year : "2023",
        description : `Hoje foi um dia de aventura em Machu Picchu! Após uma subida desafiadora, cheguei ao topo e pude ver as ruínas incas em meio às montanhas. A paisagem é surreal e a energia do lugar é única.
        Passei a manhã explorando o sítio arqueológico e aprendi muito sobre a história dos incas. A vista das montanhas e do vale ao redor é de tirar o fôlego.
        Foi uma experiência inesquecível, e sinto que saio de Machu Picchu com uma conexão mais profunda com a natureza e a história da humanidade.`,
        card_description : "A mística das montanhas e a herança inca.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
    }
];

const home = function(req, res){
    res.render('index', {
    })
}

const trips = function(req, res){
    res.render('trips', {viagens})
}

const abouttrip = function(req, res){
    let id = req.params.id
    id = parseInt(id)
    console.log(id)

    viagens.map((trip, index) => {
        if(id == trip.id){
            let trip = viagens[index]
            res.render('abouttrip', {trip})
        } else {
            res.render("error");
        }
    })
}

module.exports = { home, trips, abouttrip }