interface Usuari{
    nom: string ;
    cognom1: string;
    cognom2: string;
    isAdmin: boolean;
}



const pere:Usuari = {
    nom: 'Pere',
    cognom1: 'Prohens',
    cognom2: 'Pau',
    isAdmin: true
}

const miquel:Usuari = {
    nom: 'Miquel',
    cognom1: 'Gaia',
    cognom2: 'joan',
    isAdmin: false
}

console.log(pere.nom + " " + pere.cognom1+(pere.isAdmin)?'Es admin':'No es addmin ...')
console.log(miquel.nom + " " + miquel.cognom1+(miquel.isAdmin)?'Es admin':'No es addmin ...')