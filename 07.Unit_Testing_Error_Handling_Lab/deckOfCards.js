function printDeckOfCards(cardsArr) {
	let cardsCollection = [];

	for (card of cardsArr) {
		f = card.slice(0, -1);
		s = card.slice(-1);

		try {
			cardsCollection.push(createCard(f, s));
		} catch {
			return console.log(`Invalid card: ${card.toString()}`);
		}
	}

	console.log(cardsCollection.join(" "));

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
}

printDeckOfCards(["5S", "3D", "QD", "1C"]);
