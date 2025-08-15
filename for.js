//Listar os numeros de 1 a 20
console.log("Listando de 1 a 20");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Criando um inventário para Ayla
let inventario = ["Poção de cura", "Espada de Fogo", "Mapa Antigo", "Chave Dourada", "Anel da Invisibilidade"];

//Mostrando os intens do inventario
console.log("Inventario de Ayla");
    for (let i = 0; i < inventario.length; i++) {
        console.log(`- ${inventario[i]}`);
    }