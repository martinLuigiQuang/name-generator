import superheroNames from '../Data/superhero_names.json';

export const getEnteredDescriptorAndHeroName = (enteredName) => {
    const enteredHeroNameArr = enteredName.split(' ');
    const enteredDescriptor =   enteredHeroNameArr.length === 2 ?
                                    enteredHeroNameArr[0] :
                                enteredHeroNameArr.length >= 3 ?
                                    enteredHeroNameArr.slice(0, 2).join(' ') :
                                    '';
    const enteredHeroName = enteredHeroNameArr.length === 2 ?
                                enteredHeroNameArr[1] :
                            enteredHeroNameArr.length >= 3 ?
                                enteredHeroNameArr.slice(2, enteredHeroNameArr.length).join(' ') :
                                enteredHeroNameArr[0];
    return {
        enteredDescriptor,
        enteredHeroName
    };
};

const checkArticle = (word) => {
    const wordArticle = word.split(' ')[0];
    console.log(wordArticle)
    const articles = ['the', 'la', 'el', 'o'];
    return articles.includes(wordArticle);
};

export const checkDescriptorIsListed = (language, enteredHeroName) => {
    const superheroNamesArr = superheroNames[language];
    const { enteredDescriptor } =  getEnteredDescriptorAndHeroName(enteredHeroName);
    if (checkArticle(enteredDescriptor.toLowerCase())) {
        return JSON.stringify(superheroNamesArr).toLowerCase().includes(enteredDescriptor.split(' ')[1].trim().toLowerCase());
    } else if (enteredDescriptor.split(' ').length > 1) {
        return JSON.stringify(superheroNamesArr).toLowerCase().includes(enteredDescriptor.split(' ')[0].trim().toLowerCase()) ;
    }
    return JSON.stringify(superheroNamesArr).toLowerCase().includes(enteredDescriptor.trim().toLowerCase());
};