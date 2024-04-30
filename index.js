function getRank(vitorias, derrotas) {
    return vitorias - derrotas;
}

function getLevel(rank) {
    if (rank <= 10) {
        return "Ferro";
    } else if (rank >= 11 && rank <= 20) {
        return "Bronze";
    } else if (rank >= 21 && rank <= 50) {
        return "Prata";
    } else if (rank >= 51 && rank <= 80) {
        return "Ouro";
    } else if (rank >= 81 && rank <= 90) {
        return "Diamante";
    } else if (rank >= 91 && rank <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

let matches = Math.round(Math.random() * 200);
let victories = Math.round(Math.random() * matches);
let defeats = matches - victories;
let rank = getRank(victories, defeats);
let level = getLevel(rank)

console.log("O Herói tem de saldo de " + rank + " está no nível de " + level + ".");
