pecas = [];
jogador = [];
bot = new Array(4);

let quem = 0, v11 = 6, v22 = 6, qle = 0, qld = 0, led = 43, ldd = 49, tole = 45, told = 55, localdrop = 0, sese = 0;
function load() {
    bot[0] = [];
    bot[1] = [];
    bot[2] = [];
    document.querySelector(".passar").addEventListener("click", () => {
        document.querySelector(".cademe").innerHTML = "voce passou a jogada";
        document.querySelector(".cademe").style.display = "block";
        quem = 0;
        document.querySelector(".passar").style.display = "none";
        setTimeout(jogar, 2500);
        return;
    });
    document.querySelector(".mostrar").addEventListener("click", mostrapecasbot);
    document.querySelector(".cobrir").addEventListener("click", cobrepecasbot);
    //document.querySelector(".dropdireito").addEventListener("drop",()=>{});
    Definepecas();
}
document.addEventListener("DOMContentLoaded", load);
function Definepecas() {
    var r1 = 0, r2 = 0, pr = 0;
    while (1) {
        var va1 = String(r1),
            va2 = String(r2);
        peca = {
            pec: 'pec/' + va1 + va2 + '.png',
            val1: r1,
            val2: r2,
            psi: 0
        }
        pecas.push(peca);
        r2++;
        if (r2 == 7) {
            pr += 1;
            r2 = pr;
            r1 = pr;

        }
        if ((va1 + va2) === '66') {
            return Distribuipeca();
        }

    }
}
function cobrepecasbot() {
    for (var q = 0; q < 3; q++) {
        var pecm = document.querySelectorAll(".bot" + String(q) + " .pec");
        for (var i = 0; i < bot[q].length; i++) {
            pecm[i].style.backgroundImage = "url('pec/padr.png')";
        }
    }
    document.querySelector(".cobrir").style.display = "none";
    document.querySelector(".mostrar").style.display = "block"
}
function mostrapecasbot() {
    for (var q = 0; q < 3; q++) {
        var pecm = document.querySelectorAll(".bot" + String(q) + " .pec");
        for (var i = 0; i < pecm.length; i++) {
            pecm[i].style.backgroundImage = "url('" + bot[q][i].pec + "')";
        }
    }
    document.querySelector(".cobrir").style.display = "block";
    document.querySelector(".mostrar").style.display = "none"
}
function Distribuipeca() {
    var pobj = [];
    var ori = document.querySelector(".pec");
    ori.remove();
    var locopy, numdecopy = 0;
    for (var i = 0; i < 28;) {
        var n = Math.floor(Math.random() * 28);
        var rep = 0;
        for (var r = 0; r < pobj.length; r++) {
            if (n == pobj[r]) {
                rep = 1;
            }
        }
        if (rep == 0) {
            pobj[i] = n;
            i++;
        }
    }
    while (numdecopy < 28) {
        if (numdecopy < 7) {
            locopy = document.querySelector(".jogador");
            pecas[pobj[numdecopy]].psi = numdecopy;
            jogador.push(pecas[pobj[numdecopy]]);
        }
        if (numdecopy > 6 && numdecopy <= 13) {
            locopy = document.querySelector(".bot0");
            pecas[pobj[numdecopy]].psi = numdecopy;
            bot[0].push(pecas[pobj[numdecopy]]);
        }
        if (numdecopy > 13 && numdecopy <= 20) {
            locopy = document.querySelector(".bot1");
            pecas[pobj[numdecopy]].psi = numdecopy;
            bot[1].push(pecas[pobj[numdecopy]]);
        }
        if (numdecopy > 20) {
            locopy = document.querySelector(".bot2");
            pecas[pobj[numdecopy]].psi = numdecopy;
            bot[2].push(pecas[pobj[numdecopy]]);
        }
        var copy = ori.cloneNode(true);
        locopy.appendChild(copy);
        if (numdecopy < 7) {
            document.querySelectorAll(".pec")[numdecopy].style.backgroundImage = "url('" + pecas[pobj[numdecopy]].pec + "')";
        } else {
            document.querySelectorAll(".pec")[numdecopy].style.backgroundImage = "url('pec/padr.png')";
        }
        numdecopy++;
    }
    return QuemComes();
}
function QuemComes() {
    var al = document.querySelector(".cademe");
    for (var i = 0; i < 7; i++) {
        if ((jogador[i].val1 + jogador[i].val2) == 12) {
            document.querySelector(".cobrejo1").style.display = "block";
            al.innerHTML = "Voce Começa<br>arraste ou de dois click ";
            al.style.display = "block";
            sese = i;
            setTimeout(() => {
                al.style.display = "none";
                quem = 3;
                return jogar();
            }, 2500);
            return;
        }
    }
    for (var q = 0; q < 3; q++) {
        for (var i = 0; i < 7; i++) {
            if (bot[q][i].val2 == 6 && bot[q][i].val1 == 6) {
                var nus = (q == 0) ? "Dois" : (q == 1) ? "Tres" : "Quatro";
                document.querySelector(".cobrejo1").style.display = "block";
                al.innerHTML = "jogador " + nus + " Começa";
                al.style.display = "block";
                sese = i;
                quem = q;
                setTimeout(() => {
                    al.style.display = "none";
                    return jogar();
                }, 2500);
                return;
            }
        }
    }
}
function Jogoblock() {
    var n = 0;
    for (var i = 0; i < jogador.length; i++) {
        if (v11 == jogador[i].val1 || v22 == jogador[i].val2 || v11 == jogador[i].val2 || v22 == jogador[i].val1) {
            n += 1;
            break;
        }
    }
    for (var q = 0; q < 3; q++) {
        for (var i = 0; i < bot[q].length; i++) {
            if (v11 == bot[q][i].val1 || v22 == bot[q][i].val2
                || v11 == bot[q][i].val2 || v22 == bot[q][i].val1) {
                n += 1;
                break;
            }
        }
    }
    return n;
}
function Fimdojogo() {
    document.querySelector("footer").style.display = "block";
    document.querySelectorAll("button")[2].style.display = "block";
    document.querySelectorAll("button")[2].addEventListener("click", () => {
        setTimeout(() => {
            return document.location.reload(true);
        }, 500);
    });
}
function ganho() {
    if (jogador.length == 0) {
        return 3;
    }
    if (bot[0].length == 0) {
        return 0;
    }
    if (bot[1].length == 0) {
        return 1;
    }
    if (bot[2].length == 0) {
        return 2;
    }
    return -1;

}
function jogar() {
    document.querySelector(".cobrejo1").style.display = "block";
    document.querySelector(".passar").style.display = "none";
    var al = document.querySelector(".cademe");
    var gan = ganho();
    if (gan >= 0) {
        switch (gan) {
            case 3:
                al.innerHTML = "Voce ganhou";
                al.style.display = "block";
                return Fimdojogo();
            default:
                var nus = (gan == 0) ? "Dois" : (gan == 1) ? "Tres" : "Quatro";
                al.innerHTML = "jogador " + nus + " Ganhou";
                al.style.display = "block";
                return Fimdojogo();
        }
    }
    if (Jogoblock() == 0) {
        al.innerHTML = "jogo bloqueado";
        al.style.display = "block";
        document.querySelector(".cobrejo1").style.display = "block";
        return Fimdojogo();
    }
    if(sese<0){
    var nus = (quem == 3) ? "Q?" : (quem == 0) ? "Dois" : (quem == 1) ? "Tres" : "Quatro";
    if (nus === "Q?") {
        al.innerHTML = "Sua vez<br>arraste ou de dois click na peça";
    } else {
        al.innerHTML = "Vez do Jogador " + nus;
    }
    al.style.display = "block";
}
    switch (quem) {
        case 3:
          setTimeout( AddeventJogador,1000);
            break;
        default:
            setTimeout(()=>{al.style.display = "none"},1000);
            setTimeout(botjog, 3000);
            break;
    }
}
function botjog() {
    document.querySelector(".cobrejo1").style.display = "block";
    var el = document.querySelectorAll(".bot" + String(quem) + " .pec");
    if (sese >= 0) {
        mesa(1, 0, bot[quem][sese].val1, bot[quem][sese].val2, bot[quem][sese].pec);
        el[sese].remove();
        bot[quem].splice(sese, 1);
        sese = -3;
        quem +=1;
        return jogar();
    }
    for (var i = 0; i <= bot[quem].length; i++) {
        if (i == bot[quem].length) {
            quem+=1;
            return jogar();
        }
        if (v11 == bot[quem][i].val1) {
            v11 = bot[quem][i].val2;
            mesa(1, 0, bot[quem][i].val1, bot[quem][i].val2, bot[quem][i].pec);
            el[i].remove();
            bot[quem].splice(i, 1);
            quem +=1;
            return jogar();
        }
        if (v11 == bot[quem][i].val2) {
            v11 = bot[quem][i].val1;
            mesa(1, 1, bot[quem][i].val1, bot[quem][i].val2, bot[quem][i].pec);
            el[i].remove();
            bot[quem].splice(i, 1);
            quem +=1;
            return jogar();
        }
        if (v22 == bot[quem][i].val2) {
            v22 = bot[quem][i].val1;
            mesa(2, 1, bot[quem][i].val1, bot[quem][i].val2, bot[quem][i].pec);
            el[i].remove();
            bot[quem].splice(i, 1);
            quem +=1;
            return jogar();
        }
        if (v22 == bot[quem][i].val1) {
            v22 = bot[quem][i].val2;
            mesa(2, 0, bot[quem][i].val1, bot[quem][i].val2, bot[quem][i].pec);
            el[i].remove();
            bot[quem].splice(i, 1);
            quem +=1;
            return jogar();
        }
    }
}
function remo(posi) {
    var el = document.querySelectorAll(".jogador .pec");
    jogador.splice(posi, 1);
    el[posi].remove();
    quem = 0;
    return jogar();
}
function chamarjogo(el) {
    el.style.border = "0px solid black";
    el.addEventListener("dblclick", function () {
        el.style.border = "0.5px solid black";
        jogadorjoga();
    });
}//
function AddeventJogador() {
    var al = document.querySelector(".cademe");
    setTimeout(()=>{al.style.display = "none"},1000);
    if (sese < 0) {
        document.querySelector(".passar").style.display = "block";
    }
    document.querySelector(".cobrejo1").style.display = "none";
    var el = document.querySelectorAll(".jogador .pec");
    document.addEventListener("dragstart", (e) => {
        e.target.classList.add("dragging");
    });
    document.addEventListener("dragend", (e) => {
        e.target.classList.remove("dragging");
        if (localdrop) {
            e.target.removeEventListener("dblclick", chamarjogo);
            e.target.style.border = "0.5px solid black";
            if (localdrop == 2) {
                let aux = v11;
                v11 = -1;
                jogadorjoga();
                v11 = aux;
                localdrop = 0;
                return;
            } else {
                let aux = v22;
                v22 = -1;
                jogadorjoga();
                v22 = aux;
                localdrop = 0;
                return;
            }
        }
    });
    document.querySelector(".dropdireito").addEventListener("dragenter", () => {
        localdrop = 2;
    });
    document.querySelector(".dropesquerdo").addEventListener("dragenter", () => {
        localdrop = 1;
    });
    for (var i = 0; i < jogador.length; i++) {
        el[i].draggable = "true";
        chamarjogo(el[i]);
    }
}
function jogadorjoga() {
    var el = document.querySelectorAll(".jogador .pec");
    var al = document.querySelector(".cademe");
    if (sese >= 0) {
        if (el[sese].style.border == "0.5px solid black") {
            mesa(1, 0, jogador[sese].val1, jogador[sese].val2, jogador[sese].pec);
            quem=0;
            var aux=sese;
            sese=-3;
            return remo(aux);
        } else {
            al.innerHTML = "peça invalida";
            al.style.display = "block";
            for (var i = 0; i < el.length; i++) {
                if (el[i].style.border == "0.5px solid black") {
                    el[i].style.border = "0px"
                }
            }
            setTimeout(() => { al.style.display = "none" }, 2500);
        }
    } else {
        for (var i = 0; i < el.length; i++) {
            if (el[i].style.border == "0.5px solid black") {
                if (v11 == jogador[i].val1 || v22 == jogador[i].val2 || v11 == jogador[i].val2 || v22 == jogador[i].val1) {
                    if (v11 == jogador[i].val1) {
                        v11 = jogador[i].val2;
                        mesa(1, 0, jogador[i].val1, jogador[i].val2, jogador[i].pec);
                        return remo(i);
                    } if (v11 == jogador[i].val2) {
                        v11 = jogador[i].val1;
                        mesa(1, 1, jogador[i].val1, jogador[i].val2, jogador[i].pec);
                        return remo(i);
                    } if (v22 == jogador[i].val1) {
                        v22 = jogador[i].val2;
                        mesa(2, 0, jogador[i].val1, jogador[i].val2, jogador[i].pec);
                        return remo(i);
                    } if (v22 == jogador[i].val2) {
                        v22 = jogador[i].val1;
                        mesa(2, 1, jogador[i].val1, jogador[i].val2, jogador[i].pec);
                        return remo(i);
                    }
                } else {
                    al.innerHTML = "peça invalida";
                    al.style.display = "block";
                    el[i].style.border = "0px"
                    setTimeout(() => { al.style.display = "none" }, 3000);
                    return;
                }
            }
        }
    }
}
function mesa(l, lv, vl1, vl2, styl) {
    var le = document.querySelectorAll(".eme");
    var ld = document.querySelectorAll(".emd");
    if (vl1 == 6 && vl2 == 6) {
        document.querySelector(".emc").style.backgroundImage = "url('" + styl + "')";
    } else {
        if (vl1 == vl2) {
            lv = 2;
        }
        if (l == 1) {
            le[qle].style.backgroundImage = "url('" + styl + "')";
            if (led >= 3) {
                if (lv == 0) {
                    le[qle].style.transform = "rotate(90deg)";
                    le[qle].style.left = String(led) + "%";
                    led -= 4;
                } if (lv == 1) {
                    le[qle].style.transform = "rotate(270deg)";
                    le[qle].style.left = String(led) + "%";
                    led -= 4;
                } if (lv == 2) {
                    led += 1;
                    le[qle].style.transform = "rotate(0deg)";
                    le[qle].style.left = String(led) + "%";
                    led -= 3;
                }
            } else {
                if (lv == 2 && tole != 45) {
                    le[qle].style.transform = "rotate(90deg)";
                    le[qle].style.top = String(tole) + "%";
                    le[qle].style.left = "3.5%";
                    tole -= 4.5;
                } else {
                    if (lv == 2) {
                        lv = 0;
                    }
                }
                if (lv == 0) {
                    le[qle].style.transform = "rotate(180deg)";
                    le[qle].style.top = String(tole) + "%"
                    le[qle].style.left = "3.5%";
                    tole -= 5.5;
                } if (lv == 1) {
                    le[qle].style.transform = "rotate(0deg)";
                    le[qle].style.top = String(tole) + "%";
                    le[qle].style.left = "3.5%";
                    tole -= 5.5;
                }
            }
            qle += 1;
            clonarpecamesa(1);
        } else {
            ld[qld].style.backgroundImage = "url('" + styl + "')";
            if (ldd <= 93) {
                if (lv == 0) {
                    ld[qld].style.transform = "rotate(270deg)";
                    ld[qld].style.left = String(ldd) + "%";
                    ldd += 4;
                } if (lv == 1) {
                    ld[qld].style.transform = "rotate(90deg)";
                    ld[qld].style.left = String(ldd) + "%";
                    ldd += 4;
                } if (lv == 2) {
                    ldd -= 1;
                    ld[qld].style.transform = "rotate(0deg)";
                    ld[qld].style.left = String(ldd) + "%";
                    ldd += 3;
                }
            } else {
                if (lv == 2 && told != 55) {
                    ld[qld].style.transform = "rotate(90deg)";
                    ld[qld].style.top = String(told) + "%";
                    ld[qld].style.left = "93%";
                    told -= 5;
                } else {
                    if (lv == 2) {
                        lv = 0;
                    }
                }
                if (lv == 0) {
                    ld[qld].style.transform = "rotate(-1deg)";
                    ld[qld].style.top = String(told) + "%"
                    ld[qld].style.left = "93%";
                    told += 6;
                } if (lv == 1) {
                    ld[qld].style.transform = "rotate(184deg)";
                    ld[qld].style.top = String(told) + "%";
                    ld[qld].style.left = "93%";
                    told += 6;
                }
            }
            qld += 1;
            clonarpecamesa(2);
        }
    }
}
function clonarpecamesa(p) {
    locopy = document.querySelector(".mesa");
    var ld = (p == 1) ? ".eme" : ".emd";
    ori = document.querySelector(ld);
    var copy = ori.cloneNode(true);
    locopy.appendChild(copy);
}
