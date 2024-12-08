const modalBtns = document.querySelectorAll('.openModalBtn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.closeBtn');

const navButtons = document.querySelectorAll('.navButton');

const submitButton = document.getElementById('submitButton');

modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    });

    btn.addEventListener('mouseenter', () => {
        btn.style.backgroundColor = "brown";
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.backgroundColor = "red";
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.style.display = "none";
    });
});

window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

navButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.color = "red";
    });

    button.addEventListener('mouseleave', () => {
        button.style.color = "white";
    });
});

submitButton.addEventListener('mouseenter', () => {
    submitButton.style.backgroundColor = "brown";
});

submitButton.addEventListener('mouseleave', () => {
    submitButton.style.backgroundColor = "red";
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const firstNameValidate = document.getElementById('firstName').value.trim();
    const lastNameValidate = document.getElementById('lastName').value.trim();
    const phoneValidate = document.getElementById('phone').value.trim();
    const emailValidate = document.getElementById('email').value.trim();

    if (firstNameValidate === "") {
        alert("Please fill out your first name");
    } else if (lastNameValidate === "") {
        alert("Please fill out your last name");
    } else if (phoneValidate === "") {
        alert("Please fill out your phone number");
    } else if (emailValidate === "") {
        alert("Please fill out your email address");
    } else {
        alert("Form submitted successfully!");
    }
});
