function validatePassword() {
    // Get the input value
    var password = document.getElementById('passwordInput').value.trim();

    // Define your table of correspondence (you can add more entries as needed)
    var correspondenceTable = {
        "145678": "Il voto dell'esame scritto è 28",
        "345898": "Il voto dell'esame scritto è 28",
		"777777": "Il voto dell'esame scritto è 28",
        // Add more entries as needed
    };

    // Look up the password in the correspondence table
    var message = correspondenceTable[password];

    // Display the result
    if (message) {
        document.getElementById('result').textContent = message;
    } else {
        document.getElementById('result').textContent = "Invalid password";
    }
}
