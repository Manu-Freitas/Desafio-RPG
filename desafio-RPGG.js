// nivel 1
let nome = "Clarisse";
let classe = "Guerreira";
let nivel = 18;
let vida = 100;
let ouro = 50;
let xp = 82;

console.log(`Olá! meu nome é ${nome}, da classe ${classe}, meu pai é o deus grego da guerra, o Ares, conhecido por sua brutalidade e 
sede de batalha.`);
console.log(
  `meu nível é ${nivel}, tenho ${vida} de vida, ${ouro} de ouro e ${xp} de XP.`
);

const NOME_ARMA = "Lança elétrica";
let danoBase = 92;
const NOME_ARMADURA = "Ferro celestial";
const DEFESA_BASE = 90;

console.log(`Tenho uma das armas mais poderosas e raras que um guerreiro poderia ter, uma ${NOME_ARMA} que ganhei do meu pai, ela tem  
a capacidade de manipular eletricidade para paralisar meus oponentes. `);
console.log(`O dano base da minha lança é ${danoBase},`);
console.log(`Minha armadura é de ${NOME_ARMADURA}`);
console.log(`E de defesa base ${DEFESA_BASE}`);

vida -= 40;
xp += 150;
ouro += 30;
vida += 40;
danoBase *= 2;

console.log(`Todo dia tenho um treinamento diferente, hoje tive que caçar animais grandes, consegui um javali e um lobo, não é muita coisa 
    mas vale. Com o treinamento ganhei ${xp} de experiência.`);
console.log(`Durante o treinamento acabei me machucando, mas nada sério, uma guerreira nunca cai, então comprei uma poção na caverna do 
    mago na floresta das sombras para ajudar a me recuperar, e agora estou com 
${ouro} de ouro`);
console.log(
  `Com a poção consegui me recuperar e agora estou com incríveis ${vida} de vida!`
);
console.log(`Com os treinamentos minha lança acabou desgastando a ponta, o que atrapalha na ação de seus poderes, então precisa ser afiada,
     consegui um encanto quando fui comprar a poção, para dobrar o dano da minha
arma, que agora é ${danoBase}`);

let ataqueTotal = nivel + danoBase;
let defesaTotal = danoBase + nivel / 2;

console.log(
  `Depois do treino, poção e encanto estou com ${ataqueTotal} de ataque total e ${defesaTotal} de defesa total`
);

let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log(`Agora paro e penso "tenho vida suficiente?" ${vidaSuficiente}, "tenho ataque forte?" ${ataqueForte}, "nível avançado?" 
    ${nivelAvancado}, "posso enfrentar o guardião? ${podeEnfrentarGuardiao}. Agora que
estou pronta, vou em busca da minha primeira missão, gosto de chamar de guerra!. Vou atrás da terra dos cristais onde está os cristais 
que foram roubados do meu pai. `);

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


//nivel 3
// === NOVOS ELEMENTOS PARA O CASTELO DOS CRISTAIS ===
let inventario = ["Poção de Vida", "Lança elétrica", "Armadura de ferro celestial"];
let aliados = ["Luke", "Maga suprema", "Annabeth Chase"];
let inimigosEncontrados = ["Mago terminal", "arqueiro jasmin"];
let salasCastelo = ["Sala dos cristais", "biblioteca", "Torre do mago"];
let tesouroColetado = [];

console.log("🏰 === ADENTRO O CASTELO DOS ARRAYS ===");
console.log("Após as vitórias dos níveis anteriores, chego ao castelo lendário...");
console.log("Inventário inicial: " + inventario.length + " itens mágicos");

// === CAPÍTULO 1: DESCOBERTA DAS COLEÇÕES ARCANAS ===
console.log("");
console.log("🗝️ CAPÍTULO 1: Os Baús Arcanos do Castelo");

// 3.5.1. Declaração e inicialização
let pocoesEncontradas = ["Cura total", "Força bruta", "teletransporte"];
let armadilhasAtiradas = []; // Array vazio - será preenchido na aventura

// 3.5.2. Acesso e modificação de elementos
console.log("🧪 Primeira poção encontrada: " + pocoesEncontradas[0]);
console.log("⚗️ Total de poções mágicas: " + pocoesEncontradas.length);

// Modificando elemento específico
inventario[0] = "Poção de Vida Suprema"; // Upgrade da poção!
console.log("✨ aprimoro uma poção!");

// 3.5.3. Métodos de array fundamentais
inventario.push("Anel de Proteção"); // Adiciona no final
console.log("💍 Novo item adicionado! Inventário: " + inventario);

let itemRemovido = inventario.pop(); // Remove do final
console.log("📤 Item removido: " + itemRemovido);
console.log("🎒 Inventário atual: " + inventario);

// === CAPÍTULO 2: O RITUAL DA EXPLORAÇÃO ===
console.log("");
console.log("⚔️ CAPÍTULO 2: Explorando as Masmorras de cristais");

// Explorando cada sala do castelo usando for tradicional
console.log("🗺️ Começando exploração das " + salasCastelo.length + " salas místicas...");

for (let i = 0; i < salasCastelo.length; i++) {
console.log("🚪 Sala " + (i + 1) + ": " + salasCastelo[i]);

// Lógica diferente para cada sala baseada no índice
if (i === 0) {
console.log("📚 encontro pergaminhos antigos!");
xp += 50;
} else if (i === 1) {
console.log("💎 Cristais brilhantes concedem um poder mágico inemaginável!");
tesouroColetado.push("Cristal de Poder");
} else {
console.log("⏰ O tempo muda ao redor de de mim!");
vida -= 10; // Pequeno dano temporal
}
}

console.log("📊 Exploração completa! XP: " + xp + " | Vida: " + vida);

// === CAPÍTULO 3: A UNIÃO DOS ALIADOS ===
console.log("");
console.log("🤝 CAPÍTULO 3: Reunindo os Aliados Arcanos");

// Recrutando aliados com for tradicional
console.log("🏹 convoco meus aliados para a luta final:");

for (let i = 0; i < aliados.length; i++) {
let aliado = aliados[i];
console.log("⚡ Aliado " + (i + 1) + ": " + aliado + " se junta à missão!");

// Cada posição no array determina habilidade especial
if (i === 0) { // Primeiro aliado - Líder mágico
console.log("🔮 Como líder mágico, " + aliado + " multiplica o poder da equipe!");
ouro += 50;
} else if (i === 1) { // Segundo aliado - Defensor
console.log("🛡️ Como defensor principal, " + aliado + " fortalece a resistência!");
vidaMaxima += 30;
} else { // Demais aliados - Especialistas
console.log("🏹 Como especialista, " + aliado + " aprimora táticas de combate!");
xp += 40;
}
}

console.log("🎖️ Equipe completa! Ouro: " + ouro + " | Vida máxima: " + vidaMaxima);

// === CAPÍTULO 4: A BATALHA FINAL DOS ARRAYS ===
console.log("");
console.log("🐉 CAPÍTULO 4: Confronto com as Criaturas do Castelo");

// Sistema de batalha usando arrays e for tradicional
let inimigosBatalha = ["Guardião dos Cristal", "Senhor dos baus", "Dragão das masmorras"];
let danoRecebido = [];

console.log("💀 " + nome + " enfrenta " + inimigosBatalha.length + " inimigos épicos!");

// Batalha usando for tradicional para controle preciso
for (let i = 0; i < inimigosBatalha.length; i++) {
let inimigo = inimigosBatalha[i];
let dano = Math.floor(Math.random() * 30) + 10; // Dano entre 10 e 39

console.log("⚔️ Rodada " + (i + 1) + " - Enfrentando: " + inimigo);
console.log("💥 " + nome + " causa " + dano + " de dano!");

danoRecebido.push(dano); // Armazena dano para cálculos posteriores

// Lógica especial para cada rodada baseada no índice
if (i === 0) {
console.log("💎 Primeira vitória! Cristais fragmentados concedem bônus!");
tesouroColetado.push("Fragmento de Cristal");
} else if (i === 1) {
console.log("🌑 Segunda batalha! As sombras drenam energia, mas resisto!");
vida -= 15;
} else {
console.log("🔥 Batalha final! O dragão recua! Vitória épica alcançada!");
xp += 100;
tesouroColetado.push("Escama Dragônica");
}
}

// Calculando estatísticas da batalha usando for tradicional
let danoTotal = 0;
for (let i = 0; i < danoRecebido.length; i++) {
danoTotal += danoRecebido[i];
console.log("📊 Rodada " + (i + 1) + " - Dano: " + danoRecebido[i]);
}

console.log("⚡ Dano total causado: " + danoTotal);
console.log("🏆 Tesouros coletados: " + tesouroColetado.length + " itens épicos!");

// === EPÍLOGO: O MESTRE DOS ARRAYS ===
console.log("");
console.log("👑 === EPÍLOGO: " + nome + " - CONQUISTADOR DO CASTELO ===");

// Estatísticas finais da jornada
console.log("📈 Estatísticas Finais da Aventura:");
console.log("• Nível alcançado: " + nivel);
console.log("• Experiência total: " + xp);
console.log("• Vida restante: " + vida + "/" + vidaMaxima);
console.log("• Ouro acumulado: " + ouro);
console.log("• Itens no inventário: " + inventario.length);
console.log("• Aliados conquistados: " + aliados.length);
console.log("• Tesouros épicos: " + tesouroColetado.length);

// === 10 LINHAS ÉPICAS DE CONTINUAÇÃO ===
console.log("");
console.log("🌟 A LENDA CONTINUA...");
console.log("Após conquistar o Castelo dos cristais, emergo transformado.");
console.log("Vejo o sol amarelo novamente, e sinto a brisa do vento");
console.log("Respiro aliviada pela vitória e sigo em direção a minha cidade");
console.log("Passo pela a aldeia dos excluidos e sou recebida com festa de comemoração pela minha vitória e libertação deles");
console.log("Depois de aproveitar a festa vou embora com meus aliados");
console.log("Chegamos em nossa cidade e não vemos ninguém, só o barulho das árvores balançando com o vento");
console.log("Casas destruidas e pessoas desaparecidas, o que aconteceu?");
console.log("E percebemos que temos mais um problema para resolver, um bebê sozinho chorando, porque só ele ficou?")
console.log("Nossa missão não acaba aqui!")

console.log("");
console.log("🎯 FIM DO NÍVEL 3 | AGUARDE FUTURAS AVENTURAS NA ACADEMIA DOS CÓDIGOS! 🎯");

// EXEMPLO DE DESAFIO EXTRA: Sistema de Raridade
let itensRaros = [];
let itensComuns = [];
                        
// Classificando itens por raridade usando loops clássicos
for (let i = 0; i < inventario.length; i++) {
        let item = inventario[i];
                            
if (item.includes("Suprema") || item.includes("Flamejante")) {
        itensRaros.push(item);
    } else {
        itensComuns.push(item);
    }
}
                        
console.log("💎 Itens Raros: " + itensRaros);
console.log("🔧 Itens Comuns: " + itensComuns);
                        