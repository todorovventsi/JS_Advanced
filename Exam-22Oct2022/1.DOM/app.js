window.addEventListener("load", solve);

function solve() {
    // Collecting input fields references:
    let firstNameField = document.getElementById("first-name");
    let lastNameField = document.getElementById("last-name");
    let ageField = document.getElementById("age");
    let storyTitleField = document.getElementById("story-title");
    let genreField = document.getElementById("genre");
    let storyTextField = document.getElementById("story");

    let publishBtnField = document.getElementById("form-btn");

    publishBtnField.addEventListener("click", sendForReview);

    function sendForReview(event) {
        if (
            firstNameField.value == "" ||
            lastNameField.value == "" ||
            ageField.value == "" ||
            storyTitleField.value == "" ||
            storyTextField.value == ""
        ) {
            return;
        }

        let previewSectionField = document.getElementById("preview-list");
        let listItem = document.createElement("li");
        listItem.classList.add("story-info");
        let article = document.createElement("article");

        // Creating article elements and fill them
        let nameEl = document.createElement("h4");
        nameEl.textContent = `Name: ${firstNameField.value} ${lastNameField.value}`;

        let ageP = document.createElement("p");
        ageP.textContent = `Age: ${ageField.value}`;

        let titleP = document.createElement("p");
        titleP.textContent = `Title: ${storyTitleField.value}`;

        let genreP = document.createElement("p");
        genreP.textContent = `Genre: ${genreField.value}`;

        let textP = document.createElement("p");
        textP.textContent = `${storyTextField.value}`;

        // Append article children to it
        article.appendChild(nameEl);
        article.appendChild(ageP);
        article.appendChild(titleP);
        article.appendChild(genreP);
        article.appendChild(textP);

        // Creating buttons
        let saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save Story";
        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit Story";
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete Story";

        listItem.appendChild(article);
        listItem.appendChild(saveBtn);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);

        previewSectionField.appendChild(listItem);

        publishBtnField.disabled = true;
        editBtn.disabled = false;
        saveBtn.disabled = false;
        deleteBtn.disabled = false;

        let firstName = firstNameField.value;
        let lastName = lastNameField.value;
        let age = ageField.value;
        let storyTitle = storyTitleField.value;
        let storyText = storyTextField.value;
        let genre = genreField.value;

        firstNameField.value = "";
        lastNameField.value = "";
        ageField.value = "";
        storyTitleField.value = "";
        storyTextField.value = "";
        genreField.value = "";

        editBtn.addEventListener("click", edit);
        saveBtn.addEventListener("click", save);
        deleteBtn.addEventListener("click", deleteStory);

        function edit(event) {
            firstNameField.value = firstName;
            lastNameField.value = lastName;
            ageField.value = age;
            storyTextField.value = storyText;
            storyTitleField.value = storyTitle;
            genreField.value = genre;

            publishBtnField.disabled = false;
            editBtn.disabled = true;
            saveBtn.disabled = true;
            deleteBtn.disabled = true;

            let li = event.currentTarget.parentElement;
            li.remove();
        }

        function save(event) {
            let main = document.getElementById("main");
            main.innerHTML = "";
            let successMsgField = document.createElement("h1");
            successMsgField.textContent = "Your scary story is saved!";
            main.appendChild(successMsgField);
        }

        function deleteStory(event) {
            let li = event.currentTarget.parentElement;
            li.remove();
            publishBtnField.disabled = false;
        }
    }
}
