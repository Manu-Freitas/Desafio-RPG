// nivel 2
let nome = "Clarisse";
let classe = "Guerreira";
let nivel = 18;
let vida = 100;
let ouro = 50;
let xp = 82;

console.log(`Olá! meu nome é ${nome}, da classe ${classe}, meu pai é o deus grego da guerra, o Ares, conhecido por sua brutalidade e sede de batalha.`);
console.log(`meu nível é ${nivel}, tenho ${vida} de vida, ${ouro} de ouro e ${xp} de XP.`);

const NOME_ARMA = "Lança elétrica";
let danoBase= 92;
const NOME_ARMADURA = "Ferro celestial"
const DEFESA_BASE = 90;

console.log(`Tenho uma das armas mais poderosas e raras que um guerreiro poderia ter, uma ${NOME_ARMA} que ganhei do meu pai, ela tem  a capacidade de manipular eletricidade para paralisar meus oponentes. `);
console.log(`O dano base da minha lança é ${danoBase}`);
console.log(`Minha armadura é de ${NOME_ARMADURA}`);
console.log(`E de defesa base é ${DEFESA_BASE}`);

vida -= 40;
xp += 150;
ouro += 30;
vida += 40;
danoBase*= 2;

console.log(`Todo dia tenho um treinamento diferente, hoje tive que caçar animais grandes, consegui um javali e um lobo, não é muita coisa mas vale. Com o treinamento ganhei ${xp} de experiência.`);
console.log(`Durante o treinamento acabei me machucando, mas nada sério, uma guerreira nunca cai, então comprei uma poção na caverna do mago na floresta das sombras para ajudar a me recuperar, e agora estou com 
             ${ouro} de ouro`);
console.log(`Com a poção consegui me recuperar e agora estou com incríveis ${vida} de vida!`);
console.log(`Com os treinamentos minha lança acabou desgastando a ponta, o que atrapalha na ação de seus poderes, então precisa ser afiada, consegui um encanto quando fui comprar a poção, para dobrar o dano da minha
             arma, que agora é ${danoBase}`);

let ataqueTotal = nivel + danoBase
let defesaTotal = danoBase + (nivel / 2)

console.log(`Depois do treino, poção e encanto estou com ${ataqueTotal} de ataque total e ${defesaTotal} de defesa total`)

let vidaSuficiente = vida > 70
let ataqueForte = ataqueTotal > 60
let nivelAvancado = nivel >= 10
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)

console.log(`Agora paro e penso "tenho vida suficiente?" ${vidaSuficiente}, "tenho ataque forte?" ${ataqueForte}, "nível avançado?" ${nivelAvancado}, "posso enfrentar o guardião? ${podeEnfrentarGuardiao}. Agora que
             estou pronta, vou em busca da minha primeira missão, gosto de chamar de guerra!. Vou atrás da terra dos cristais onde está os cristais que foram roubados do meu pai. `)


// nivel 2
let vidaMaxima = 100;
let manaAtual = 70;
let manaMaxima = 100;

// Novos atributos para batalha
let forca = 95; //maximo 100;
let defesa = 95; //maximo 100;
let agilidade = 75; //maximo 100;
let combatesVencidos = 93; //maximo 100;

// Estado atual da historia
let localAtual = "Terra dos cristais";
let missaoAtual = "Recuperar os cristais roubados";

console.log(`🌅 Prólogo: Depois do meu treinamento, fui chamada pelo meu pai para a minha primeira guerra!, ${missaoAtual} na 
    ${localAtual} que é onde cheguei agora.`);

// Capítulo 1: condicionais simples na narrativa
console.log("🌅 CAPÍTULO 1: O Aviso dos Moradores");

//Verificação baseada no nível do personagem
if (nivel < 70) {
  console.log(
    "⚠️ Um morador da aldeia dos rejeitados que fica ao lado da Terra dos Cristais adverte: 'Você é muito jovem para uma missão tão importante, todos nós que tentamos recuperar nossos cristais roubados fomos expulsos e estamos condenados a morte!, não vá.'"
  );
  console.log("Mas decido prosseguir mesmo assim...");
}

// Verificação de recursos especiais
if (ouro >= 100) {
  console.log(
    "💰 Minhas moedas se movem junto comigo ao caminhar fazendo um barulho de sino para avisando a todos que estão lá... "
  );
}

// Verificação de classe específica
if (classe === "Guerreira") {
  console.log(
    "⚔️ O espírito de guerreira herdado pelo meu pai corre em mim... "
  );
}

// Capítulo 2: Escolha Estratégica
console.log("🛡️ CAPÍTULO 2: Caminhando para a guerra");

// Escolha baseada em recursos
if (ouro >= 50) {
  console.log(
    "🧪 Com uma quantidade boa de ouro compro mais poções com os moradores da aldeia para me ajudar na missão!"
  );
  forca += 7;
  defesa += 10;
  ouro -= 30;
  console.log("Minha força e defesa aumentaram! Ouro: " + ouro);
} else {
  console.log("💰 Não há ouro suficiente, devo então seguir como estou! ");
  console.log("Agilidade +5");
  agilidade += 5;
}

// Sistema de recompensas narrativo
if (xp >= 100) {
  console.log("Estou melhorando cada vez mais!");
  nivel++;
  xp = 0;
  vida = vidaMaxima;
} else {
  console.loog("Estou tentando melhorar cada vez mais...");
  console.log("XP: " + xp + "/100");
}

// CAPÍTULO 3: A Batalha Decisiva
console.log("⚔️ CAPÍTULO 3: A luta ");
let poderInimigo = 30;

console.log(
  "Chego a Terra dos Cristais e me deparo com o Guardião, ele já estava a minha espera, sem falar muito já começo uma luta, eu preciso dos cristais!"
);

// Sistema de combate inteligente baseado na situação
if (vida <= 20) {
  console.log("🆘 Estou com pouca vida!, vou usar tudo o que tenho");
  console.log("Ataque final com toda a minha força!");
  poderInimigo -= forca * 2;
} else if (manaAtual >= 30 && classe === "guerreira") {
  console.log("Uso toda a minha força de guerreiro com ajuda da minha lança!");
  console.log("Lance eletrizante!");
  poderInimigo -= forca + 20;
  manaAtual -= 30;
} else if (agilidade >= 20) {
  console.log("🏃‍♂️ De forma agil faço um ataque preciso!");
  poderInimigo -= forca;
} else {
  console.log("🛡️ Luta defensiva e bem pensada!");
  poderInimigo -= forca / 2;
  vida += 10; // Recupera um pouco de vida
}

console.log("📜 === Cntinuação da minha jornada ===");
console.log(
  "Venço o Guardião, e entro na Terra dos cristais, correndo em direção ao castelo, onde fica todos os cristais roubados pelo mago verde."
);

// PRÓLOGO - Conexão com o Nível 1
console.log("Após a luta para entrar na " + localAtual + ", eu");
console.log("da classe " + classe + " me deparo com o mago...");
console.log(
  "Ele me olha com cara de ódio mortal enquanto segura uma varinha mágica em suas mãos, aponta ela para mim e lança um feitiço, mas esqueçe que estou com uma armadura encantada, ela me proteje contra feitiços. Pego minha lança e corro em direção a ele, o acerto no peito, como treinei a vida toda, ele cai e o baú atrás dele se abre e lá estão os cristais! "
);

// [Aqui você implementa os 3 capítulos com os conceitos das etapas anteriores]

// EPÍLOGO - Resultado final
if (poderInimigo <= 0) {
  console.log("🎉 VITÓRIA MAGNÍFICA! " + nome + " REINA!");
  xp += 100;
  combatesVencidos++;
  console.log("A história de " + nome + " só cresce...");
} else {
  console.log(
    "⚔️ A missão foi dificil, mas como filha de Ares" +
      nome +
      " sobrevive para gerrear novamente!"
  );
}

console.log("🏁 FIM DO CAPÍTULO - Aguarde o próximo nível da aventura!");


