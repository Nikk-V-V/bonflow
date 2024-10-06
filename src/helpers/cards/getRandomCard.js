export default function getRandomCard(cards) {
    const cardsKeys = Object.keys(cards);
    const randomCardKey = cardsKeys[Math.floor(Math.random() * cardsKeys.length)];
    return cards[randomCardKey];
}