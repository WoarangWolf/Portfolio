export function randomKnowledge() {
    let facts = [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
        "Bananas are berries, but strawberries aren't. In botanical terms, a berry is a fruit produced from the ovary of a single flower with seeds embedded in the flesh.",
        "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
        "A day on Venus is longer than a year on Venus. It takes about 243 Earth days to rotate once on its axis, but only about 225 Earth days to orbit the Sun.",
        "Wombat poop is cube-shaped. This unique shape helps prevent the poop from rolling away and is used by wombats to mark their territory."
    ];

    const randomNumber = Math.floor(Math.random() * facts.length);

    return facts[randomNumber];
}