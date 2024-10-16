document.getElementById('submit').addEventListener('click', function() {
    // Retrieve form data
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const sin = document.getElementById('sin').value;
    const problem = document.getElementById('problem').value;

    // Check if all fields are filled
    if (name && address && sin && problem) {
        // Redirect to confirmation page with query parameters
        const confirmationURL = `Confirmation.html?name=${encodeURIComponent(name)}&address=${encodeURIComponent(address)}&sin=${encodeURIComponent(sin)}&problem=${encodeURIComponent(problem)}`;
        window.location.href = confirmationURL;
    } else {
        alert('कृपया सभी फ़ील्ड भरें।'); // Alert if fields are not filled
    }
});
