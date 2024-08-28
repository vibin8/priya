document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for contacting me!');
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form');
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form');
    });
});
