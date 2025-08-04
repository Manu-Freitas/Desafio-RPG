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
let localAtual = ""
let missaoAtual 


