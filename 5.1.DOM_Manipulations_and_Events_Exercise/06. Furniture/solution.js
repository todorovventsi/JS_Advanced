function solve() {
    // Get references to the elements of interest
    let [inputRef, outputRef] = document.querySelectorAll('#exercise textarea');
    let [generateBtnRef, buyBtnRef] =
        document.querySelectorAll('#exercise button');
    let tableBodyRef = document.querySelector('.table tbody');

    // Add event listeners to the two buttons
    generateBtnRef.addEventListener('click', generateTable);
    buyBtnRef.addEventListener('click', displayOutput);

    // Store purchased items
    let purchasedItems = [];

    function generateTable() {
        let itemsList = JSON.parse(inputRef.value); // Parse input to array of objects

        for (let item of itemsList) {
            let rowToAdd = document.createElement('tr');
            for (let [tag, value] of Object.entries(item)) {
                rowToAdd.appendChild(generateData(tag, value));
            }

            let td = document.createElement('td');
            let checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            td.appendChild(checkBox);
            rowToAdd.appendChild(td);
            tableBodyRef.appendChild(rowToAdd);

            purchasedItems.push({
                name: item.name,
                price: item.price,
                decFactor: item.decFactor,
                isChecked
            });

            function isChecked() {
                return checkBox.checked;
            }
        }

        function generateData(tag, value) {
            let dataCell = document.createElement('td');

            if (tag === 'img') {
                let img = document.createElement('img');
                img.src = value;
                dataCell.appendChild(img);
                return dataCell;
            }

            let p = document.createElement('p');
            p.textContent = value;
            dataCell.appendChild(p);
            return dataCell;
        }
    }

    function displayOutput() {
        let names = [];
        let totalSpend = 0;
        let decFactor = 0;

        for (let item of purchasedItems.filter((i) => i.isChecked())) {
            names.push(item.name);
            totalSpend += Number(item.price);
            decFactor += Number(item.decFactor);
        }

        let outputMassage = `Bought furniture: ${names.join(
            ', '
        )}\nTotal price: ${totalSpend.toFixed(2)}\nAverage decoration factor: ${
            decFactor / names.length
        }`;

        outputRef.textContent = outputMassage;
    }
}
