document.addEventListener('DOMContentLoaded', function () {
    const addEmailBtn = document.getElementById('addEmail');
    const emailsContainer = document.getElementById('emailsContainer');

    addEmailBtn.addEventListener('click', function () {
        const newEmailInput = document.createElement('input');
        newEmailInput.type = 'email';
        newEmailInput.name = 'email';
        newEmailInput.placeholder = 'Enter email address';
        emailsContainer.appendChild(newEmailInput);
    });

    document.getElementById('inviteForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInputs = document.getElementsByName('email');
        const emails = [];
        for (let i = 0; i < emailInputs.length; i++) {
            const email = emailInputs[i].value.trim();
            if (email !== '') {
                emails.push(email);
            }
        }

        const message = document.getElementById('message').value.trim();

        if (emails.length === 0 || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate sending invitations (replace this with actual code to send invitations)
        const formattedEmails = emails.join(', ');
        alert(`Invitations sent to: ${formattedEmails}\n\nMessage:\n${message}`);

        // Clear form fields after submitting
        for (let i = 0; i < emailInputs.length; i++) {
            emailInputs[i].value = '';
        }
        document.getElementById('message').value = '';
    });
});
