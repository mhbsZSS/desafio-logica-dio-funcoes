//Calculadora de partidas rankeadas
let vitorias = 0;
let derrotas = 0;

function calcularPartidasRankeadas(vitorias, derrotas) {
    
    let saldoDeRankeadas = (vitorias - derrotas)

    if (saldoDeRankeadas <= 10) {
        return `O herói tem saldo de ${saldoDeRankeadas} e está no nível de Ferro!`;
    } 
    else if (saldoDeRankeadas >= 11 && saldoDeRankeadas <= 20) {
        return `O herói tem saldo de ${saldoDeRankeadas} e está no nível de Bronze!`;
    } 
    else if (saldoDeRankeadas >= 21 && saldoDeRankeadas <= 50) {
        return `O herói tem saldo de ${saldoDeRankeadas} e está no nível de Prata!`;
    } 
    else if (saldoDeRankeadas >= 51 && saldoDeRankeadas <= 80) {
        return `O herói tem saldo de ${saldoDeRankeadas} e está no nível de Ouro!`;
    } 
    else if (saldoDeRankeadas >= 81 && saldoDeRankeadas <= 90) {
        return `O herói tem saldo de ${saldoDeRankeadas} e está no nível de Diamante!`;
    } 
    else if (saldoDeRankeadas >= 91 && saldoDeRankeadas <= 100) {
        return `O herói tem saldo de ${saldoDeRankeadas} e está no nível de Lendário!`;
    } 
    else {
        return `O herói tem saldo de ${saldoDeRankeadas} e está no nível de Imortal`;
    }
}

// Exemplo de uso
vitorias = 120; 
derrotas = 20;
console.log(calcularPartidasRankeadas(vitorias, derrotas)); //Saída: O herói tem saldo de 100 e está no nível de Lendário
// Exemplo de uso
vitorias = 30;
derrotas = 10;
console.log(calcularPartidasRankeadas(vitorias, derrotas)); //Saída: O herói tem saldo de 20 e está no nível de Bronze