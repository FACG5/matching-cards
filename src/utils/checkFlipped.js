export const checkFlipped = (cards, cardIndex) => {
  const cardsCopy = cards.slice();
  cardsCopy[cardIndex].flipped = true;
  const flippedElement = [];
  let score = 0;
  // Get Flipped Elements From All Cards
  cardsCopy.forEach((element, index) => {
    if (element.flipped === true) flippedElement.push({ index, ...element });
  });

  // If There  3 Flipped Elements Then Make All Of Them Closed else the last one
  if (flippedElement.length > 2) {
    cardsCopy.forEach(element => (element.flipped = false));
    // to still open last one
    cardsCopy[cardIndex]["flipped"] = true;
  }
  // if There 2 Flipped Elements Thene Check If Them Have The Same Value if true make them checked
  if (flippedElement.length === 2) {
    const [first, second] = flippedElement;
    if (first.value === second.value) {
      cardsCopy[first.index].checked = true;
      cardsCopy[second.index].checked = true;
      score += 10;
    }
  }
  return { cardsCopy, score };
};
