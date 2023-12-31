function szepTomb(tomb) {
    if (!Array.isArray(tomb)) {
        return false;
    }
    const firstType = typeof tomb[0];
    return tomb.every(elem => typeof elem === firstType);
}
//console.log(szepTomb(['alma', 'körte', 'csiga', 'vér', 'szilveszter']))
//console.log(szepTomb([80, 'körte', 'csiga', 'vér', 'szilveszter']))
console.log(szepTomb(['alma', 'körte', 'csiga', 'vér', 10]))