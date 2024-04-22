/*Créer un objet contenant ces propriétés et leurs valeurs.
nom
age
race
gender
lvl
experience
maxLife
currentLife
maxSpellSlotCount
currentSpellSlotCount
backstory
weaponType
armorType
armor
intellect
strength
agility
gold*/

const character = {
    name : 'Thalgar Martelfeu',
    age : 34,
    race : 'dwarf',
    gender : 'Male',
    lvl : 5,
    experience : 12000,
    maxLife : 55,
    currentLife : 45,
    maxSpellSlotCount : 0,
    currentSpellSlotCount : 0,
    backstory :'Thalgar was born in the depths of Iron Mountain. He left his home to explore the world and discover new treasures. He is a fearless warrior, specializing in the use of the dwarven war axe.',
    weaponType : 'Longsword',
    armorType : 'Heavy',
    armor :  'Royal Plate Armor',
    intellect : 12,
    strength : 16,
    agility : 10,
    gold :200,
}

class Character{
    constructor(
        name, 
        age, 
        race, 
        gender, 
        lvl, 
        experience, 
        maxLife, 
        currentLife, 
        maxSpellSlotCount, 
        currentSpellSlotCount, 
        backstory, 
        weaponType, 
        armorType, 
        armor, 
        intellect, 
        strength, 
        agility, 
        gold
    ){
        this.name = name;
        this.age = age;
        this.race = race;
        this.gender = gender;
        this.lvl = lvl;
        this.experience = experience;
        this.maxLife = maxLife;
        this.currentLife = currentLife;
        this.maxSpellSlotCount = maxSpellSlotCount;
        this.currentSpellSlotCount = currentSpellSlotCount;
        this.backstory = backstory;
        this.weaponType = weaponType;
        this.armorType = armorType;
        this.armor = armor;
        this.intellect = intellect;
        this.strength = strength;
        this.agility = agility;
        this.gold = gold;

        console.log(this);
    }


    /*Attack (retourne un nombre aléatoire entre 0 et 6 + la propriété strength)*/
    /**
     * @param {number}
     * @returns {number}
     */
    attack(){
        return this.getRandomNumber(6) + this.strength;
    }

    /*castSpell (si current spell slot count > 0 console.log() le nom du spell recu en parametre et reduit la propriete current spell slot count par 1. Sinon, console.log() no more spell slot available)*/
    /**
     * 
     * @param {string} spellName
     */
    castSpell(spellName){
        if(this.currentSpellSlotCount > 0){
            console.log(spellName);
            this.currentSpellSlotCount--;
            }
            else{
                console.log('Sorry, no more spell slot available.');
            }
    }
    
    /*rest (ramène la propriété currentLife et currentSpellSlotCount à leur maximum)*/
    /**
     * @param {number} number
     */
    rest(){
        this.currentLife = this.maxLife;
        this.currentSpellSlotCount = this.maxSpellSlotCount;
    }
    
    /*takeDmg (reduit la propriété currentLife par le nombre reçu en paramètre - la propriété armor. Si currentLife <= 0 afficher console.log “le nom” + est mort)*/
    /**
     * 
     * @param {number} dmg 
     */
    takeDmg(dmg){
        this.currentLife -=  Math.max(0, dmg - this.armor);
        if(this.currentLife <= 0){
            console.log(this.name + ' est mort');
        }
    }
    
    /*pickPocket (prend en paramètre le nombre de gold qui sera volé. Si un nombre généré aléatoirement entre 0 et 12 + la propriété agilité > le nombre de gold reçu en paramètre, augmenter la propriété gold par le nombre reçu en paramètre. Sinon, utilisez la méthode takeDmg pour infliger un point de dégât)*/
    /**
     * 
     * @param {number} goldAmount 
     */
    pickPocket(goldAmount){
        if(this.getRandomNumber(12) + this.agility > goldAmount) {
            this.gold += goldAmount;
        }
        else{
            this.takeDmg(1);
        }
    }
    
    /*readMind (prend en paramètre une phrase. Si un nombre généré aléatoirement entre 0 et 20 plus la propriété intellect > le nombre de caractères de la phrase diviser par 2 augmentez la propriété expérience par le nombre de caractère divisé par 2. Sinon, utilisez la méthode takeDmg pour infliger un point de dégât)*/
    /**
     * 
     * @param {string} phrase 
     */
    readMind(phrase){
        if(this.getRandomNumber(20) + this.intellect > phrase.length / 2){
            this.experience += phrase.length / 2;
        }
        else{
            this.takeDmg(1);
        }
    }

    /**
     * 
     * @param {number} max 
     * @returns number
     */
    getRandomNumber(max){
        return Math.round(Math.random() * max);
    }
}

const characters = [
    new Character(
        'Elara Blanchefleur',
        25,
        'Elf',
        'Female',
        3,
        6500,
        40,
        35,
        4,
        2,
        'Elara is a graceful and mysterious elf, born in the enchanted forest of Lysaël. She was trained as a druidess by the elders of her people, mastering the secrets of nature and magic.',
        'Staff',
        'Light',
        'Leaf Tunic',
        5,
        17,
        15,
        65),
    new Character(
        'Durak Poingd\'acier',
        40,
        'Half-orc',
        'Male',
        4,
        9000,
        50,
        40,
        0,
        0,
        'Durak is a sturdy fighter, born from the union of an orc and a human. Rejected by both societies, he found a home among the mercenaries. His loyalty is unwavering to his comrades in arms.',
        'Club',
        'Intermediate',
        'Steel breastplate',
        8,
        18,
        10,
        50),
    new Character(
        'Lyra Tisse-Ombre',
        28,
        'Half-elf',
        'Female',
        6,
        15000,
        45,
        40,
        6,
        5,
        'Lyra was born from the forbidden love between an elf and a human. She has inherited elven grace and human tenacity. Raised by a solitary witch, she learned to manipulate shadows to serve her purposes.',
        'Poisoned Dagger',
        'Light',
        'Shadow Cloak',
        16,
        10,
        14,
        120),
    new Character(
        'Bran Fermain',
        42,
        'Human',
        'Male',
        7,
        21000,
        60,
        55,
        0,
        0,
        'Bran is a former soldier in the royal army, but left the service after witnessing corruption within the court. He vowed to dedicate his life to protecting the innocent and fighting injustice, even at the cost of his own safety.',
        'Longsword',
        'Heavy',
        'Royal Plate Armor',
        12,
        16,
        10,
        200),
    new Character(
        'Selene Aile-d\'Argent',
        120,
        'Dragonborn',
        'Female',
        9,
        35000,
        70,
        65,
        8,
        7,
        'Selene is a descendant of dragons, blessed with the majesty and strength of her bloodline. She traveled the world to protect the treasures of her ancestors and to maintain balance between the different races. Her wisdom and power make her a valuable ally in any quest.',
        'Claws and Dragon Breath',
        'Intermediate',
        'Silver Scales',
        18,
        20,
        16,
        500),
    ];

console.log(character);
console.log(characters);

for (const character of characters) {// Boucle pour voir tous les personnages créés
console.log(character.name);
console.log('Attack : ' + character.attack());
character.castSpell('Spell : ' + 'Abracadabra!');
character.rest();
character.takeDmg(200);
}
