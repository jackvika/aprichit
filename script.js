document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sin-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const sin = document.getElementById('sin').value;
        const problem = document.getElementById('problem').value;

        if (name && address && sin && problem) {
            console.log("Redirecting with:", {name, address, sin, problem});
            window.location.href = `Confirmation.html?name=${encodeURIComponent(name)}&address=${encodeURIComponent(address)}&sin=${encodeURIComponent(sin)}&problem=${encodeURIComponent(problem)}`;
        } else {
            alert('कृपया सभी फ़ील्ड भरें।');
        }
    });
});
