//matrice contenant le tableau
let mat = new Array();
let matP = new Array();
let matrice = new Array();
let Vx = new Array();
let Vy = new Array();
let icr = 0;
let tabLign = new Array();
let tabCol;
//nombre de ligne et colonne
let rows;
let cols;
//variable stockant le tableau contenant le sujet
let table = '';
let tablecol = '';
let tablelin = '';
let table2 = '';
let click = 0;
let po = 0;
//exemple 1
// var DT = [
//     [9, 12, 9, 6, 9, 10],
//     [7, 3, 7, 7, 5, 5],
//     [6, 5, 9, 11, 3, 11],
//     [6, 8, 11, 2, 2, 10]
// ];
// let DTL = [50, 60, 20, 90];
// let DTC = [40, 30, 70, 20, 40, 20];

//exemple 2
// var DT = [
//     [24, 22, 61, 49, 83, 35],
//     [23, 39, 78, 28, 65, 42],
//     [67, 56, 92, 24, 53, 54],
//     [71, 43, 91, 67, 40, 49]
// ];
// let DTL = [18, 32, 14, 9];
// let DTC = [9, 11, 28, 6, 14, 5];

//exemple 3
// var DT = [
//     [45, 60, 15, 30, 45, 40],
//     [35, 15, 10, 35, 25, 5],
//     [20, 15, 45, 55, 10, 55],
//     [30, 40, 55, 10, 10, 50]
// ];
// let DTL = [25, 30, 10, 45];
// let DTC = [20, 15, 35, 10, 20, 10];
//exemple 4
var DT = [
    [45, 60, 45, 30, 45, 50],
    [35, 15, 35, 35, 25, 25],
    [30, 25, 45, 55, 15, 55],
    [30, 40, 55, 10, 10, 50]
];
let DTL = [25, 30, 10, 45];
let DTC = [20, 15, 35, 10, 20, 10];


//lettre
let lettre = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

//indice colonne et ligne

let colTemp = new Array();
let ligTemp = new Array();

//variable stockant le tableau creé
let tab = document.getElementById("table");

//fonction creation des inputs
function tabledinam() {
    //Creer table, entrer valeur
    rows = document.getElementById("ligne").value;
    cols = document.getElementById("colone").value;
    let i = 0;
    let tete = '<tr><th id="stl"></th>';
    for (let e = 1; e <= cols; e++) {
        tete += '<th>' + e + '</th>';
    }
    table += tete + '</tr>';
    for (let r = 0; r < rows; r++) {
        table += '<tr><td id="stl">' + lettre[r] + '</td>';
        for (let c = 1; c <= cols; c++) {
            i++;
            table += '<td>' + '<input type="number" style="width: 45px;text-align: center;background-color: white;color: black;border: 1px solid grey;" id="' + i + '" >' + '</td>';
        }
        table += '</tr>';
    }
    //Quantite dispo (magasin)
    for (let r = 0; r < rows; r++) {
        tablelin += '<tr><td>' + '<input type="number" style="width: 45px;text-align: center;background-color: white;color: black;border: 1px solid red;" id="l' + r + '" >' + '</td></tr>';
    }
    //Quantite demandee 
    for (let c = 1; c <= cols; c++) {
        tablecol += '<td>' + '<input type="number" style="width: 45px;text-align: center;background-color: white;color: black;border: 1px solid red;" id="c' + c + '" >' + '</td>';
    }
    document.querySelector("#content1").innerHTML = '<div style="display:block;"><div style="display:inline-block;"><table id="table">' + table + '</table></div>' +
        '<div style="display:inline-block;position:relative;margin-top:22px"><table id="tablelIn">' + tablelin + '</table></div></div>' +
        '<table id="tableCol" style="margin-left:15px"><tr>' + tablecol + '</tr></table>';
}


function defaultDATA() {
    if (rows == 4 && cols == 6) {
        tab = document.getElementById("table");
        tab1 = document.querySelector("#tablelIn");
        tab2 = document.querySelector("#tableCol");
        //remplire taleau
        for (let r = 1; r <= rows; r++) {
            let s = r - 1;
            for (c = 1; c <= cols; c++) {
                let e = c - 1;
                tab.rows[r].cells[c].children[0].value = DT[s][e];
            }
        }
        for (let l = 0; l < rows; l++) {
            tab1.rows[l].cells[0].children[0].value = DTL[l];
        }
        for (let l = 0; l < cols; l++) {
            tab2.rows[0].cells[l].children[0].value = DTC[l];
        }

    }
}

function defaultDATA1() {
    let tab = document.getElementById("table3");
    let atab = document.getElementById("table");
    let tab1 = document.querySelector("#difflIn");
    let tab2 = document.querySelector("#diffCol");
    //remplire taleau
    for (let r = 1; r <= rows; r++) {
        for (c = 1; c <= cols; c++) {
            tab.rows[r].cells[c].children[0].value = atab.rows[r].cells[c].children[0].value;
        }
    }
    for (let l = 0; l < rows; l++) {
        tab1.rows[l].cells[0].children[0].value = '';
    }
    for (let l = 0; l < cols; l++) {
        tab2.rows[0].cells[l].children[0].value = '';
    }
}

function save() {

    tab = document.getElementById("table");
    tab1 = document.querySelector("#tablelIn");
    tab2 = document.querySelector("#tableCol");
    let i = 0;
    tabCol = new Array();
    for (let r = 1; r <= rows; r++) {
        let s = r - 1;
        mat[s] = new Array();
        matrice[s] = new Array();
        for (c = 1; c <= cols; c++) {
            let e = c - 1;
            i++;
            let f = document.getElementById(i).value;
            mat[s][e] = f;
            matrice[s][e] = f;
        }
    }
    for (let l = 0; l < rows; l++) {
        tabLign[l] = document.getElementById("l" + l).value;
    }
    for (let l = 1; l <= cols; l++) {
        tabCol[l - 1] = document.getElementById("c" + l).value;
    }

}

function initColTemp() {
    for (let index = 0; index < rows; index++) {
        colTemp[index] = new Array();
    }
}

function initMatP() {
    for (let index = 0; index < rows; index++) {
        matP[index] = new Array();
        for (let i = 0; i < mat[index].length; i++) {
            matP[index][i] = '';
        }
    }
}

//MINILI

function opererLi(lignes) {
    var indicol = 0;
    var bool = true;
    colTemp[lignes] = new Array();
    matP[lignes] = new Array();

    while (bool) {
        const i = lignes;
        var min = mat[i][0];
        indicol = 0;
        for (var k = 0; k < mat[i].length; k++) {

            const suiv = parseInt(mat[i][k]);
            const mint = parseInt(min);
            var ok = true;
            if (colTemp[i].length > 0)
                for (let index = 0; index < colTemp[i].length; index++) {
                    const element = parseInt(colTemp[i][index]);

                    if (element == k) {
                        ok = false;
                    }
                }
            if (ok) {
                matP[i][k] = '-';
                if (mint > suiv) {
                    min = mat[i][k];
                    indicol = k;
                }
            }
        }
        console.log(indicol);
        colTemp[i].push(indicol);

        if (parseInt(tabLign[i]) > parseInt(tabCol[indicol])) {
            const tbc = parseInt(tabCol[indicol]);
            matP[i][indicol] = tbc;
            const tbl2 = parseInt(tabLign[i]) - parseInt(tabCol[indicol]);
            tabLign[i] = tbl2;
            tabCol[indicol] = 0;
        } else {
            const tbl = parseInt(tabLign[i]);
            matP[i][indicol] = tbl;
            const tbc1 = parseInt(tabCol[indicol]) - parseInt(tabLign[i]);
            tabCol[indicol] = tbc1;
            tabLign[i] = 0;
        }


        if (parseInt(tabLign[i]) == 0) {
            barrerLigne(i);
            bool = false;
        } else if (parseInt(tabCol[indicol]) == 0)
            barrerColonne(indicol, i);

    }

}

//MINICO
function operer(colonne) {
    let indl = 0;
    let bool = true;
    while (bool) {
        const i = colonne;
        let min = mat[0][i];
        indl = 0;
        for (let k = 0; k < mat.length; k++) {
            const suiv = parseInt(mat[k][i]);
            const mint = parseInt(min);
            let ok = true;
            for (let index = 0; index < colTemp[k].length; index++) {
                const element = parseInt(colTemp[k][index]);

                if (element == i) {
                    ok = false;
                }
            }
            if (ok) {
                if (mint > suiv) {
                    min = mat[k][i];
                    indl = k;
                }
            }
        }
        colTemp[indl].push(i);
        if (parseInt(tabLign[indl]) > parseInt(tabCol[i])) {
            const tbc = parseInt(tabCol[i]);
            matP[indl][i] = tbc;
            const tbl2 = parseInt(tabLign[indl]) - parseInt(tabCol[i]);
            tabLign[indl] = tbl2;
            tabCol[i] = 0;
        } else {
            const tbl = parseInt(tabLign[indl]);
            matP[indl][i] = tbl;
            const tbc1 = parseInt(tabCol[i]) - parseInt(tabLign[indl]);
            tabCol[i] = tbc1;
            tabLign[indl] = 0;
        }
        if (parseInt(tabCol[i]) == 0) {
            barrerColonne(i);
            bool = false;
        } else if (parseInt(tabLign[indl]) == 0) {
            barrerLigne(indl);
        }
    }
}


function opererDI() {
    console.log('here');
    let tab = document.getElementById("table3");
    let tab1 = document.querySelector("#difflIn");
    let tab2 = document.querySelector("#diffCol");
    let maxlin = new Array();
    let secondml = new Array();
    let replin = new Array();
    let maxreplin = 0;
    let i = 0;
    let j = 0;


    for (let r = 1; r <= rows; r++) {
        maxlin[(r - 1)] = 0;
        for (c = 1; c <= cols; c++) {
            if (tab.rows[r].cells[c].children[0].value != '') {
                if (tab.rows[r].cells[c].children[0].value > maxlin[(r - 1)]) {
                    maxlin[(r - 1)] = tab.rows[r].cells[c].children[0].value;
                }
            }
        }
    }
    for (let r = 1; r <= rows; r++) {
        secondml[(r - 1)] = 0;
        for (c = 1; c <= cols; c++) {
            if (tab.rows[r].cells[c].children[0].value != '') {
                if (tab.rows[r].cells[c].children[0].value > secondml[(r - 1)] && tab.rows[r].cells[c].children[0].value < maxlin[(r - 1)]) {
                    secondml[(r - 1)] = tab.rows[r].cells[c].children[0].value;
                }
            }
        }
    }

    for (let r = 1; r <= rows; r++) {
        replin[(r - 1)] = maxlin[(r - 1)] - secondml[(r - 1)];
        if (maxreplin < replin[(r - 1)]) {
            maxreplin = replin[(r - 1)];
            i = r - 1;
        }
    }

    let maxcol = new Array();
    let secondmc = new Array();
    let repcol = new Array();
    let maxrepcol = 0;
    for (let c = 1; c <= cols; c++) {
        maxcol[(c - 1)] = 0;
        for (r = 1; r <= rows; r++) {
            if (tab.rows[r].cells[c].children[0].value != '') {
                if (tab.rows[r].cells[c].children[0].value > maxcol[(c - 1)]) {
                    maxcol[(c - 1)] = tab.rows[r].cells[c].children[0].value;
                }
            }
        }
    }
    for (let c = 1; c <= cols; c++) {
        secondmc[(c - 1)] = 0;
        for (r = 1; r <= rows; r++) {
            if (tab.rows[r].cells[c].children[0].value != '' && tab.rows[r].cells[c].children[0].value < maxcol[(r - 1)]) {
                if (tab.rows[r].cells[c].children[0].value > secondmc[(c - 1)]) {
                    secondmc[(c - 1)] = tab.rows[r].cells[c].children[0].value;
                }
            }
        }
    }
    for (let c = 1; c <= cols; c++) {
        repcol[(c - 1)] = maxcol[(c - 1)] - secondmc[(c - 1)];
        if (maxrepcol < repcol[(c - 1)]) {
            maxrepcol = repcol[(c - 1)];
            j = c - 1;
        }
    }
    console.log(replin);

    for (let index = 0; index < replin.length; index++) {
        document.getElementById('difflIn').rows[index].cells[0].value = replin[index];

    }


    if (maxreplin > maxrepcol) {
        var indicol = 0;
        var min = mat[i][0];
        indicol = 0;
        for (var k = 0; k < mat[i].length; k++) {

            const suiv = parseInt(mat[i][k]);
            const mint = parseInt(min);
            var ok = true;
            if (colTemp[i].length > 0)
                for (let index = 0; index < colTemp[i].length; index++) {
                    const element = parseInt(colTemp[i][index]);

                    if (element == k) {
                        ok = false;
                    }
                }
            if (ok) {
                matP[i][k] = '-';
                if (mint > suiv) {
                    min = mat[i][k];
                    indicol = k;
                }
            }
        }

        colTemp[i].push(indicol);

        if (parseInt(tabLign[i]) > parseInt(tabCol[indicol])) {
            const tbc = parseInt(tabCol[indicol]);
            matP[i][indicol] = tbc;
            const tbl2 = parseInt(tabLign[i]) - parseInt(tabCol[indicol]);
            tabLign[i] = tbl2;
            tabCol[indicol] = 0;
        } else {
            const tbl = parseInt(tabLign[i]);
            matP[i][indicol] = tbl;
            const tbc1 = parseInt(tabCol[indicol]) - parseInt(tabLign[i]);
            tabCol[indicol] = tbc1;
            tabLign[i] = 0;
        }


        if (parseInt(tabLign[i]) == 0) {
            barrerLigne(i);
            supplin(i);
        } else if (parseInt(tabCol[indicol]) == 0) {
            barrerColonne(indicol, i);
            suppcol(indicol);
        }

        //}
    } else {
        let indl = 0;

        //while (bool) {
        const i = j;
        let min = mat[0][i];
        indl = 0;
        for (let k = 0; k < mat.length; k++) {
            const suiv = parseInt(mat[k][i]);
            const mint = parseInt(min);
            let ok = true;
            for (let index = 0; index < colTemp[k].length; index++) {
                const element = parseInt(colTemp[k][index]);

                if (element == i) {
                    ok = false;
                }
            }
            if (ok) {
                if (mint > suiv) {
                    min = mat[k][i];
                    indl = k;
                }
            }
        }
        colTemp[indl].push(i);
        if (parseInt(tabLign[indl]) > parseInt(tabCol[i])) {
            const tbc = parseInt(tabCol[i]);
            matP[indl][i] = tbc;
            const tbl2 = parseInt(tabLign[indl]) - parseInt(tabCol[i]);
            tabLign[indl] = tbl2;
            tabCol[i] = 0;
        } else {
            const tbl = parseInt(tabLign[indl]);
            matP[indl][i] = tbl;
            const tbc1 = parseInt(tabCol[i]) - parseInt(tabLign[indl]);
            tabCol[i] = tbc1;
            tabLign[indl] = 0;
        }
        if (parseInt(tabCol[i]) == 0) {
            barrerColonne(i);
            suppcol(i);
        } else if (parseInt(tabLign[indl]) == 0) {
            barrerLigne(indl);
            supplin(indl);
        }
        //}
    }

    for (let l = 0; l < rows; l++) {
        tab1.rows[l].cells[0].children[0].value = '';
    }
    for (let l = 0; l < cols; l++) {
        tab2.rows[0].cells[l].children[0].value = '';
    }
}

function isFinishDiff() {

    let tab1 = document.querySelector("#nvtablelIn");
    let tab2 = document.querySelector("#nvtableCol");
    let ok = true;
    for (let l = 0; l < rows; l++) {
        if (tab1.rows[l].cells[0].children[0].value != 0) {
            ok = false;
        }
    }
    for (let l = 0; l < cols; l++) {
        if (tab2.rows[0].cells[l].children[0].value != 0) {
            ok = false;
        }
    }

    return ok;
}

function supplin(i) {
    let tab = document.getElementById("table3");
    for (let r = 1; r <= rows; r++) {
        if (r == (i + 1))
            for (c = 1; c <= cols; c++) {
                tab.rows[r].cells[c].children[0].value = '';
            }
    }
}

function suppcol(i) {
    let tab = document.getElementById("table3");
    for (let r = 1; r <= rows; r++) {
        for (c = 1; c <= cols; c++) {
            if (c == (i + 1))
                tab.rows[r].cells[c].children[0].value = '';
        }
    }
}

function barrerLigne(ligne) {

    for (let o = 0; o < cols; o++) {
        mat[ligne][o] = Number.MAX_VALUE;
        let bool = true;
        colTemp[ligne].forEach(element => {

            if (parseInt(element) == o) {
                bool = false;
            }
        });
        if (bool)
            matP[ligne][o] = '-';
    }
}


function barrerColonne(colonne) {

    for (let o = 0; o < rows; o++) {
        mat[o][colonne] = Number.MAX_VALUE;
        let bool = true;
        colTemp[o].forEach(element => {
            if (colonne == parseInt(element)) {
                bool = false;
            }
        });
        if (bool) {
            matP[o][colonne] = '-';
        }
    }
}

function Afficher() {
    if (click == 0) {
        initColTemp();
        initMatP();
        afficherTable();
    } else if (click <= cols && click > 0) {
        operer(click - 1);
        afficherTable();
    } else {
        click = -1;
        hide('minico');
        show('actu');
        calculZ(matrice);
        maxMatP();
        dinamCercle();
        afficheStep();
    }
    click++;
}

function AfficherDI() {
    if (click == 0) {
        initColTemp();
        initMatP();
        afficherTable1();
        afficherTable();
        defaultDATA1();
    } else if (!isFinishDiff() && click > 0) {
        opererDI();
        //afficherTable1();
        afficherTable();
    } else {
        click = -1;
        hide('diff');
        show('actu');
        calculZ(matrice);
        maxMatP();
        dinamCercle();
        afficheStep();
    }
    click++;
}

function AfficherLI() {
    if (click == 0) {
        initColTemp();
        initMatP();
        afficherTable();
    } else if (click <= rows && click > 0) {
        opererLi(click - 1);
        afficherTable();
    } else {
        click = -1;
        hide('minili');
        show('actu');
        calculZ(matrice);
        maxMatP();
        dinamCercle();
        afficheStep();
    }
    click++;
}

function creerTable(nom) {
    let tableaud = '';
    let t = '<thead><tr><td></td>';
    for (let e = 1; e <= cols; e++) {
        t += '<td style="text-align:center">' + e + '</td>';
    }

    tableaud += t + '</tr></thead><tbody>';

    for (let r = 0; r < nom.length; r++) {
        tableaud += '<tr><td>' + lettre[r] + '</td>';
        for (let c = 0; c < nom[r].length; c++) {
            tableaud += '<td><input type="text" value="' + (nom[r][c]) + '"></td>';
        }
        tableaud += '</tr>';
    }
    tableaud += '</tbody>';
    return tableaud;
}

function creerTableN(nom) {
    let tableaud = '';
    let t = '<thead><tr><td></td>';
    for (let e = 1; e <= cols; e++) {
        t += '<td style="text-align:center">' + e + '</td>';
    }

    tableaud += t + '</tr></thead><tbody>';

    for (let r = 0; r < nom.length; r++) {
        tableaud += '<tr><td>' + lettre[r] + '</td>';
        for (let c = 0; c < nom[r].length; c++) {
            tableaud += '<td><input type="number" value="' + nom[r][c] + '"></td>';
        }
        tableaud += '</tr>';
    }
    tableaud += '</tbody>';
    return tableaud;
}

function creerTable2(nom) {

    let tableaud = '';

    tableaud += '<tr>';
    for (let c = 0; c < nom.length; c++) {

        tableaud += '<td><input type="number" style="width: 45px;text-align: center;background-color: white;color: red;border: 0px" value="' + nom[c] + '"></td>';
    }
    tableaud += '</tr>';
    return tableaud;
}

function creerTable3(nom) {
    tableaud = '';

    for (let c = 0; c < nom.length; c++) {


        tableaud += '<tr><td><input type="number" style="width: 45px;text-align: center;background-color: white;color: red;border: 0px" value="' + nom[c] + '"></td></tr>';
    }

    return tableaud;
}


function afficherTable() {
    document.querySelector("#content2").innerHTML = '<div style="display:block;"><div style="display:inline-block;vertical-align:bottom"><table id="table2">' + creerTable(matP) + '</table></div>' +
        '<div style="display:inline-block;vertical-align:bottom"><table id="nvtablelIn">' + creerTable3(tabLign) + '</table></div></div>' +
        '<table id="nvtableCol" style="margin-left:10px">' + creerTable2(tabCol) + '</table>';
}

function afficherTable1() {
    document.querySelector("#content0").innerHTML = '<div style="display:block;"><div style="display:inline-block;"><table id="table3">' + creerTableN(matP) + '</table></div>' +
        '<div style="display:inline-block;"><table id="difflIn">' + creerTable3(tabLign) + '</table></div></div>' +
        '<table id="diffCol" style="margin-left:10px">' + creerTable2(tabCol) + '</table>';
}

function calculZ(ppl) {
    let z = 0;
    for (let i = 0; i < rows; i++) {
        for (let c = 0; c < colTemp[i].length; c++) {
            z += parseInt(ppl[i][parseInt(colTemp[i][c])]) * parseInt(matP[i][parseInt(colTemp[i][c])])
        }
    }
    document.querySelector("#Z").innerHTML = '<br><div style="text-align:center;border:1px dashed red;font-weight: bold;">Z = ' + z + '</div><br>';
    return z;
}

function maxLn() {
    let max = 0;
    initialiseVxVy();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < colTemp[i].length; j++) {
            if (max < parseInt(matrice[i][parseInt(colTemp[i][j])])) {
                initialiseVxVy();
                Vx[i] = 0;
                max = parseInt(matrice[i][parseInt(colTemp[i][j])]);
            }
        }
    }
}

function maxMatP() {
    maxLn();
    let traiteX = new Array();
    let traiteY = new Array();
    for (let index = 0; index < Vx.length; index++) {
        traiteX[index] = false;
    }
    for (let index = 0; index < Vy.length; index++) {
        traiteY[index] = false;
    }

    while (!completVxVy()) {
        for (let i = 0; i < Vx.length; i++) {
            if (typeof(Vx[i]) == "number") {
                if (!traiteX[i]) {
                    traiteX[i] = true;
                    const t = traitX(i);

                    for (let j = 0; j < t.length; j++) {
                        if (!traiteY[t[j]])
                            Vy[t[j]] = Vx[i] + parseInt(matrice[i][t[j]]);
                    }
                    for (let o = 0; o < Vy.length; o++) {
                        if (typeof(Vy[o]) == "number") {
                            if (!traiteY[o]) {
                                traiteY[o] = true;
                                const to = traitY(o);
                                for (let k = 0; k < to.length; k++) {
                                    if (!traiteX[to[k]])
                                        Vx[to[k]] = Vy[o] - parseInt(matrice[to[k]][o]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}

function initialiseVxVy() {
    for (let i = 0; i < rows; i++) {
        Vx[i] = '';
    }
    for (let i = 0; i < cols; i++) {
        Vy[i] = '';
    }
}

function completVxVy() {
    let ok = true;

    for (let i = 0; i < rows; i++) {
        if (typeof(Vx[i]) != "number") {
            ok = false;
        }
    }
    for (let i = 0; i < cols; i++) {
        if (typeof(Vy[i]) != "number") {
            ok = false;
        }
    }

    return ok;
}

function traitY(colonne) {
    let possible = new Array();
    for (let i = 0; i < rows; i++) {
        if (typeof(matP[i][colonne]) == "number") {
            possible.push(i);
        }
    }
    return possible.slice();
}

function traitX(ligne) {
    let possible = new Array();
    for (let i = 0; i < cols; i++) {
        if (typeof(matP[ligne][i]) == "number") {
            possible.push(i);
        }
    }
    return possible.slice();
}


function dinamCercle() {
    let svg = '';
    svg += '<svg height="400" width="400" style="border: 1px solid black">';
    let htr1 = 60;
    let htr2 = 60;
    let id = 0;
    svg += '<marker id="fleche" markerHeight="10" refX="0" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="red"></path></marker>';
    //creer ligne reliant le deux cercle et nombre
    for (let i = 0; i < colTemp.length; i++) {
        for (let j = 0; j < colTemp[i].length; j++) {
            svg += '<path stroke="red" marker-end="url(#fleche)" id="p' + id + '" d="M50 ' + (60 * (i + 1)) + ' l225 ' + ((60 * (colTemp[i][j])) - (60 * (i))) + '" />';
            svg += '<text x="150"><textPath href="#p' + id + '">' + matrice[i][colTemp[i][j]] + '</textPath></text>';
            id++;
        }
    }
    //creer cercle ligne
    for (let i = 0; i < rows; i++) {
        const h = htr1 + 5;
        svg += '<circle cx="50" cy="' + htr1 + '" r="20" stroke="green" stroke-width="1" fill="yellow" />';
        svg += '<text x="45" y="' + h + '">' + lettre[i] + '</text>';
        svg += '<text x="5" y="' + h + '">' + Vx[i] + '</text>';
        htr1 += 60;
    }
    //creer cercle colonne
    for (let i = 0; i < cols; i++) {
        const h = htr2 + 5;
        svg += '<circle cx="300" cy="' + htr2 + '" r="20" stroke="green" stroke-width="1" fill="yellow" />';
        svg += '<text x="295" y="' + h + '">' + (i + 1) + '</text>';
        svg += '<text x="335" y="' + h + '">' + Vy[i] + '</text>';
        htr2 += 60;
    }
    svg += '</svg>';
    document.querySelector("#GRP").innerHTML = '<br><div>' + svg + '</div>';
}

function nbLinTabStep() {
    let nb = 0;
    for (let i = 0; i < matP.length; i++) {
        for (let j = 0; j < matP[i].length; j++) {
            if (matP[i][j] == "-") {
                nb++;
            }
        }
    }
    return Math.ceil(nb / 3);
}

function afficheStep() {
    let nbl = nbLinTabStep();
    let step = new Array();
    let Negstep = new Array();
    document.querySelector("#sltBase").children[0].textContent = "Solution optimale";
    for (let i = 0; i < matP.length; i++) {
        for (let j = 0; j < matP[i].length; j++) {
            if (matP[i][j] == "-") {
                step.push('<input type="text" style="border:0px; width:200px; text-align:left" value="σ(' + lettre[i] + ',' + j + ') = ' + Vx[i] + ' + ' + matrice[i][j] + ' - ' + Vy[j] + ' = ' + (((parseInt(Vx[i]) + parseInt(matrice[i][j]) - parseInt(Vy[j])) >= 0) ? 'P' : (parseInt(Vx[i]) + parseInt(matrice[i][j]) - parseInt(Vy[j]))) + '">');
                if ((parseInt(Vx[i]) + parseInt(matrice[i][j]) - parseInt(Vy[j])) < 0) {
                    Negstep.push('<input type="text" style="border:0px; width:200px; text-align:left; color:red" value="σ(' + lettre[i] + ',' + j + ') = ' + Vx[i] + ' + ' + matrice[i][j] + ' - ' + Vy[j] + ' = ' + (parseInt(Vx[i]) + parseInt(matrice[i][j]) - parseInt(Vy[j])) + '">');
                }
            }
        }
    }

    let tb = '<h3>Algorithme de Stepping Stone</h3><table>';
    let k = 0;
    for (let i = 0; i < nbl; i++) {
        tb += '<tr>';
        for (let j = 0; j < 3; j++) {
            tb += '<td>' + step[k] + '</td>';
            k++;
        }
        tb += '</tr>';
    }
    tb += '</table><br><table id="neg">';
    for (let index = 0; index < Negstep.length; index++) {
        tb += '<tr><td>' + Negstep[index] + '</td></tr>';
    }

    document.querySelector("#step").innerHTML = '<br><div>' + tb + '</div>';
}

function finish(i, j, nb) {
    let ok = false;
    if (i != null)
        for (let index = 0; index < i.length; index++) {
            traitX(i[index]).forEach((element) => {
                if (element == j && nb != 0)
                    ok = true;
            })
        }
    return ok;
}

function MarqueTab(i, j) {


    let l = false;
    let c = true;
    let cl = new Array();
    let tb = new Array();
    let ok = new Array();
    let nb = 0;
    let nb1 = 0;
    let nb2 = 1;
    let ans = { parent: null, id: i, jd: j, cd: null, method: '' }
    tb.push(ans);
    ok.push(ans);
    let current = new Array();

    while (!finish(current, j, nb)) {
        current = [];
        if (l) {
            l = !l;
            c = !c;
            for (let index = 1; index <= nb1; index++) {
                traitY(cl[(cl.length - index)].id).forEach((element) => {
                    if (cl[(cl.length - index)].jd != element) {
                        let tp = { parent: cl[(cl.length - index)].jd, id: element, jd: cl[(cl.length - index)].id, cd: cl[cl.length - index].id, method: 'Y' }
                        tb.push(tp);
                        ok.push(tp);
                        nb++;
                        nb2++;
                    }
                });
            }
            nb1 = 0;
        } else if (c) {
            c = !c;
            l = !l;
            for (let index = 1; index <= nb2; index++) {
                current.push(tb[(tb.length - index)].id);
                traitX(tb[(tb.length - index)].id).forEach((element) => {
                    if (tb[(tb.length - index)].jd != element || tb[(tb.length - index)].method == '') {
                        let tp = { parent: tb[(tb.length - index)].id, id: element, jd: tb[(tb.length - index)].id, cd: tb[tb.length - index].jd, method: 'X' }
                        cl.push(tp);
                        ok.push(tp);
                        nb1++;
                    }
                });
            }
            nb2 = 0;
        }
    }
    //permutation
    for (let a = 0; a < ok.length; a++) {
        if (ok[a].method == 'X') {
            let l = ok[a].id;
            ok[a].id = ok[a].jd;
            ok[a].jd = l;
        }
    }

    let ob = null;
    for (let index = 0; index < ok.length; index++) {
        const element = ok[index];
        if (element.jd == j) {
            ob = element;
        }
    }
    let h3 = document.createElement("h3");
    h3.id = "gain_h3";

    boucle(ob, ok)
    document.querySelector("#table2").rows[(i + 1)].cells[(j + 1)].children[0].value = '+';
    document.querySelector("#table2").rows[(i + 1)].cells[(j + 1)].children[0].style.color = 'red';
    if (document.querySelector("#gain_h3") == null) {
        h3.textContent = "Calcul gain en rouge ci-dessus"
        document.querySelector("#step").append(h3);
        document.querySelector("#table2").rows[(i + 1)].cells[(j + 1)].children[0].value = '+';
        document.querySelector("#table2").rows[(i + 1)].cells[(j + 1)].children[0].style.color = 'red';
    }

}

function boucle(l, ok) {
    if (l.parent == null) return;
    else {
        let prefixe = '+';
        if (l.method == 'X') {
            prefixe = '-'
        }
        document.querySelector("#table2").rows[(l.id + 1)].cells[(l.jd + 1)].children[0].value = prefixe + document.querySelector("#table2").rows[(l.id + 1)].cells[(l.jd + 1)].children[0].value;
        document.querySelector("#table2").rows[(l.id + 1)].cells[(l.jd + 1)].children[0].style.color = 'red'
        boucle(getCell(l.parent, l.cd, ok), ok)
    }
}

function getCell(i, j, ok) {
    for (let index = 0; index < ok.length; index++) {
        if (ok[index].id == i && ok[index].jd == j)
            return ok[index];
    }
    return null;
}

function calculGain(i) {
    let neg = getNegatif();
    let div = document.createElement("div")
    div.className = "gain";
    div.innerHTML = "<input type='text' style='border:0px; width:200px; text-align:left;' value='" + parseInt(document.querySelector("#neg").rows[i].cells[0].children[0].value.split("= ")[2]) + " x " + neg + "=" + (parseInt(document.querySelector("#neg").rows[i].cells[0].children[0].value.split("= ")[2]) * neg) + "'>"
    document.querySelector("#step").append(div);
}

function getMaxGain() {
    let tb = new Array();
    let neg = (-1 * getNegatif());
    for (let index = 0; index < document.querySelectorAll(".gain").length; index++) {
        tb.push(parseInt(document.querySelector("#neg").rows[index].cells[0].children[0].value.split("= ")[2]) * neg)
    }
    let max = 0;
    let i = 0;
    for (let index = 0; index < tb.length; index++) {
        const element = tb[index];
        if (max < element) {
            max = element;
            i = index;
        }
    }
    document.querySelectorAll(".gain")[i].children[0].style.color = 'red';
    return i;
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = '';
}


function Marquage() {
    data = new Array();
    if (click == 0) {
        po = document.querySelector("#neg").rows.length;
    }
    let len = po;
    if (len == 0) {
        click = -1;
        hide("actu");
        let p = document.createElement("p");
        p.textContent = "Fin de l'algorithme! Pour obtenir une solution optimale, veillez suivre la repartition du 2e tableau";
        document.querySelector("#step").append(p);

    } else if (click < len) {
        nettoieTable('table2');
        data = document.querySelector("#neg").rows[click].cells[0].children[0].value.split(")")[0].split("(")[1].split(",");
        MarqueTab((data[0].charCodeAt(0) - 65), parseInt(data[1]));
        calculGain(click);
    } else if (len == click) {
        nettoieTable('table2');
        data = document.querySelector("#neg").rows[getMaxGain()].cells[0].children[0].value.split(")")[0].split("(")[1].split(",");
        MarqueTab((data[0].charCodeAt(0) - 65), parseInt(data[1]));
        actualiserTable();
    } else if ((len + 1) == click) {
        initialiser();
        ColTemp2();
        calculZ(matrice);
        maxMatP();
        dinamCercle();
        afficheStep();
    } else {
        click = -1;
    }
    click++;
}

function nettoieTable(id) {
    let tb = document.getElementById(id);
    for (let index = 1; index < tb.rows.length; index++) {
        for (let i = 1; i < tb.rows[index].cells.length; i++) {
            if (tb.rows[index].cells[i].children[0].value == '-' || tb.rows[index].cells[i].children[0].value == '+')
                tb.rows[index].cells[i].children[0].value = '';
            else if (tb.rows[index].cells[i].children[0].value.indexOf("-") != -1 || tb.rows[index].cells[i].children[0].value.indexOf("+") != -1) {
                tb.rows[index].cells[i].children[0].value = parseInt(tb.rows[index].cells[i].children[0].value.substr(1));
                tb.rows[index].cells[i].children[0].style.color = 'black';
            }
        }
    }
}

function getNegatif() {
    let rep = new Array();
    let tb = document.getElementById('table2');
    for (let index = 1; index < tb.rows.length; index++) {
        for (let i = 1; i < tb.rows[index].cells.length; i++) {
            if (tb.rows[index].cells[i].children[0].value.indexOf("-") != -1) {
                rep.push(parseInt(tb.rows[index].cells[i].children[0].value.substr(1)));
            }
        }
    }
    let min = Number.MAX_VALUE;
    for (let index = 0; index < rep.length; index++) {
        if (rep[index] < min) {
            min = rep[index];
        }
    }
    return min;
}

function actualiserTable() {
    let tb = document.getElementById('table2');
    let neg = getNegatif();
    for (let index = 1; index < tb.rows.length; index++) {
        for (let i = 1; i < tb.rows[index].cells.length; i++) {
            if (tb.rows[index].cells[i].children[0].value.indexOf("-") != -1) {
                tb.rows[index].cells[i].children[0].value = ((parseInt(tb.rows[index].cells[i].children[0].value.substr(1)) - neg) == 0) ? '' : (parseInt(tb.rows[index].cells[i].children[0].value.substr(1)) - neg);
                tb.rows[index].cells[i].children[0].style.color = 'black';
            } else if (tb.rows[index].cells[i].children[0].value == '+') {
                tb.rows[index].cells[i].children[0].value = neg;
                tb.rows[index].cells[i].children[0].style.color = 'black';
            } else if (tb.rows[index].cells[i].children[0].value.indexOf("+") != -1) {
                tb.rows[index].cells[i].children[0].value = parseInt(tb.rows[index].cells[i].children[0].value.substr(1)) + neg;
                tb.rows[index].cells[i].children[0].style.color = 'black';
            }
        }
    }
}

function initGRP() {
    document.querySelector("#GRP").innerHTML = '';
}

function initZ() {
    document.querySelector("#Z").innerHTML = '';
}

function initStep() {
    document.querySelector("#step").innerHTML = '';
}

function initialiser() {
    initGRP();
    initZ();
    initStep();
    updateTable2();
}

function updateTable2() {
    let tb = document.getElementById('table2');
    for (let index = 1; index < tb.rows.length; index++) {
        for (let i = 1; i < tb.rows[index].cells.length; i++) {
            if (tb.rows[index].cells[i].children[0].value == "") {
                matP[(index - 1)][(i - 1)] = '-';
            } else {
                matP[(index - 1)][(i - 1)] = parseInt(tb.rows[index].cells[i].children[0].value);
            }
        }
    }
}

function ColTemp2() {
    let tb = document.getElementById('table2');
    for (let index = 1; index < tb.rows.length; index++) {
        colTemp[(index - 1)] = [];
        for (let i = 1; i < tb.rows[index].cells.length; i++) {
            if (tb.rows[index].cells[i].children[0].value != "") {
                colTemp[(index - 1)].push((i - 1));
            }
        }
    }
}

// append row to the HTML table
function appendRow(id,tb) {
    let tbl = document.getElementById(id); // table reference
    let row = tbl.insertRow(tbl.rows.length); // append table row

    // insert table cells to the new row
    for (let i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), tb[i], 'row');
    }
}

// create DIV element and append to the table cell
function createCell(cell, text, style) {
    let div = document.createElement('input'); // create DIV element
    let txt = document.createTextNode(text); // create text node
    div.type="text";
    div.valu=txt; // append text node to the DIV
    div.setAttribute('class', style); // set DIV class attribute
    div.setAttribute('className', style); // set DIV class attribute for IE (?!)
    cell.appendChild(div); // append DIV to the table cell
}

// append column to the HTML table
function appendColumn(id) {
    var tbl = document.getElementById(id); // table reference
    // open loop for each row and append cell
    for (let i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), '', 'col');
    }
}