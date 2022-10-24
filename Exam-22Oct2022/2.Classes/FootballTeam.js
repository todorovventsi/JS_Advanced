class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(players) {
        for (let player of players) {
            let [name, age, playerValue] = player.split("/");
            age = Number(age);
            playerValue = Number(playerValue);
            let playerIsPresent = false;
            // Check if player is present
            for (let contractedPlayer of this.invitedPlayers) {
                if (
                    contractedPlayer.name == name &&
                    playerValue > contractedPlayer.playerValue
                ) {
                    contractedPlayer.playerValue = playerValue;
                    playerIsPresent = true;
                    break;
                }
            }
            if (playerIsPresent) {
                break;
            }

            let newInvited = { name, age, playerValue };
            this.invitedPlayers.push(newInvited);
        }

        // Return message with all invited players
        let invitedPlayersNamesCollection = this.invitedPlayers.map(
            (x) => x.name
        );
        return `You successfully invite ${invitedPlayersNamesCollection.join(
            ", "
        )}`;
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split("/");
        offer = Number(offer);
        let playerIsNotIvited = true;
        // Finding the offered player in the invited collection
        for (let player of this.invitedPlayers) {
            if (player.name == name) {
                playerIsNotIvited = false;
                // Error for low offer
                if (player.playerValue > offer) {
                    throw new Error(
                        `The manager's offer is not enough to sign a contract with ${name}, ${
                            player.playerValue - offer
                        } million more are needed to sign the contract!`
                    );
                }

                player.playerValue = "Bought";
                return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
            }

            // Error for not finded player
        }
        if (playerIsNotIvited) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    ageLimit(name, ageLimit) {
        let playerIsNotIvited = true;

        for (let player of this.invitedPlayers) {
            if (player.name == name) {
                playerIsNotIvited = false;

                if (player.age < ageLimit) {
                    let diff = ageLimit - player.age;
                    if (diff < 5) {
                        return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
                    }
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                }
                return `${name} is above age limit!`;
            }

            // Error for not finded player
        }
        if (playerIsNotIvited) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    transferWindowResult() {
        this.invitedPlayers.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
        });
        let tempColl = [];
        for (let p of this.invitedPlayers) {
            let temp = `Player ${p.name}-${p.playerValue}`;
            tempColl.push(temp);
        }
        return `Players list:\n${tempColl.join("\n")}`;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
    fTeam.newAdditions([
        "Kylian Mbappé/23/160",
        "Lionel Messi/35/50",
        "Pau Torres/25/52",
    ])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
