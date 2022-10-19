function createCard(face, suit) {
	let card = {
		toString() {
			return `${face}${suits[suit]}`;
		},
	};

	const suits = {
		S: "\u2660",
		H: "\u2665",
		D: "\u2666",
		C: "\u2663",
	};

	const faces = [
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"J",
		"Q",
		"K",
		"A",
	];

	if (faces.indexOf(face) == -1 || !suits.hasOwnProperty(suit)) {
		throw new Error();
	}

	card.face = face;
	card.suit = suit;

	return card;
}

console.log(createCard("1", "C").toString());
