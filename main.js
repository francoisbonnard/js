var score = 10
var nom="Bobby"
var sexe=true
var testcast=score+nom
var testcast2=nom+score

console.log(testcast2)
console.log(typeof(testcast2))
console.log(1==1)
console.log(1=="1")
console.log(1==="1")

premiereLettre=nom.substring(0,1)
console.log(premiereLettre)

// npm install readline-sync
var readline = require("readline-sync")
var moisEnLettre =  readline.question("quel mois ? ")
console.log("le mois est %d",moisEnLettre)

for(var compteur=1; compteur <10;compteur++) {

    console.log(compteur)
}

var tableau = [4,17,3,22]
console.log(tableau)
// tableau.sort()
console.log(tableau)
tableau.sort(comparaisonEntier)
console.log(tableau)


function comparaisonEntier (a,b) {
    return a-b

}

var t1=[1,2]
var t2=[3,4]
var t3=[5,6]
var t4=[t1,t2,t3]

var perso1 = {
    nom : "Mila",
    sexe : true,
    age : 30
}

var perso2 = {}

perso2.nom= "Johny"
perso2.sexe= false
perso2.age=17

console.log(perso1.nom)
console.log(perso2["nom"])

for (info in perso1) {
    console.log(perso1[info])
}

var P1 = {
 Nom : "Toto",
 Note1 : 12,
 Note2 : 15,
 Note3 :16,
 Niveau2 : {
    force : 12,
    defence : 14
 },
 moyenne () {
    return ("la moyenne est : "+(this.Note1 + this.Note2 + this.Note3)/3)
 },ù
afficheNiveau2 () {
    return (this.Niveau2.force)
}

}

console.log(P1.moyenne())
console.log(P1.afficheNiveau2())