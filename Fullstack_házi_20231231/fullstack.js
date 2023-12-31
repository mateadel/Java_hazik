function fullStack(frontEndes, backEndes) {
    const frontEndSet = new Set(frontEndes.split(';').map(function(name) {
        return name.trim();
    }));
    
    const backEndSet = new Set(backEndes.split(';').map(function(name) {
        return name.trim();
    }));

    const fullStackSet = new Set([...frontEndSet].filter(function(name) {
        return backEndSet.has(name);
    }));

    return Array.from(fullStackSet);
}

const frontEndes = 'Cloé Jacobs; Élise Maes; Julia Bertrand; Liv Petit; Rudolf Balázs';
const backEndes = 'Rudolf Balázs; Elléa Cools; Bendegúz Hajdu; Albert Orsós ; Élise Maes; Géza Kerekes';

const eredmeny = fullStack(frontEndes, backEndes);
console.log(eredmeny)


