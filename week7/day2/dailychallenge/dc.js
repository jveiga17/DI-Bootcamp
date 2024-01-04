function submitForm() {
    // Retrieve data from inputs
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;

    // Create a JavaScript object
    const formData = {
        name: name,
        lastName: lastName
    };

    // Convert the object to a JSON string
    const jsonString = JSON.stringify(formData, null, 2);

    // Append the JSON string to the DOM
    document.getElementById("jsonResult").innerText = jsonString;
}