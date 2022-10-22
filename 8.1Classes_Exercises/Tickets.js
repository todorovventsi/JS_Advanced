function manageTickets(tickets, sortType) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsData = [];

    let sortTypes = {
        destination: function (a, b) {
            if (a.destination.toUpperCase() > b.destination.toUpperCase()) {
                return 1;
            }
            if (a.destination.toUpperCase() < b.destination.toUpperCase()) {
                return -1;
            }
            return 0;
        },
        price: (a, b) => a.price - b.price,
        status: function (a, b) {
            if (a.status.toUpperCase() > b.status.toUpperCase()) {
                return 1;
            }
            if (a.status.toUpperCase() < b.status.toUpperCase()) {
                return -1;
            }
            return 0;
        },
    };

    for (let ticket of tickets) {
        let [destination, price, status] = ticket.split("|");
        price = Number(price);
        let ticketObj = new Ticket(destination, price, status);
        ticketsData.push(ticketObj);
    }

    return ticketsData.sort(sortTypes[sortType]);
}

manageTickets(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "price"
);
