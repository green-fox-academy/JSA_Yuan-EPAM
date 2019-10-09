const kids = [
    { 'petName': 'Wattled crane', 'owner': 'Bryant' },
    { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
    { 'petName': 'Mynah, common', 'owner': 'Nelie' },
    { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
    { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
    { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
    { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
    { 'petName': 'Bison, american', 'owner': 'Tommie' },
    { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
    { 'petName': 'Carpet snake', 'owner': 'Veda' },
    { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

let pets = document.querySelector("#pets");

function addArticle(target, data) {
    for (let node of data) {
        let newPet = document.createElement("article");
        let ownerName = document.createElement("h3");
        let petName = document.createElement("p");
        ownerName.textContent = node["owner"];
        petName.innerText = node["petName"];
        newPet.appendChild(ownerName);
        newPet.appendChild(petName);
        target.appendChild(newPet);
    }
}

addArticle(pets, kids);