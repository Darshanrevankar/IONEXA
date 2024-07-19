function setAmount(amount) {
    document.getElementById('amount').value = amount;
}

document.getElementById('details').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const phoneNo = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;

    const formData = {
        name,
        phoneNo,
        amount
    };

    try {
        const response = await fetch('http://localhost:3000/api/reg_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        if (data.success) {
            alert('User registered successfully!');
            window.location.href = 'index.html';  
        } else {
            alert(`Registration failed: ${data.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration. Please try again.');
    }
});
