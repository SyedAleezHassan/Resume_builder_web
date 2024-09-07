// Define types for form fields and their values
var form = document.getElementById('cv-form') as HTMLFormElement;

form.addEventListener('submit', function (event: Event) {
    event.preventDefault();  // Prevent form from submitting traditionally

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const about = (document.getElementById('about') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    (document.getElementById('cv-name') as HTMLElement).innerText = name;
    (document.getElementById('cv-email') as HTMLElement).innerText = email;
    (document.getElementById('cv-phone') as HTMLElement).innerText = phone;
    (document.getElementById('cv-address') as HTMLElement).innerText = address;
    (document.getElementById('cv-about') as HTMLElement).innerText = about;
    (document.getElementById('cv-experience') as HTMLElement).innerText = experience;
    (document.getElementById('cv-education') as HTMLElement).innerText = education;
    (document.getElementById('cv-skills') as HTMLElement).innerText = skills;

    // Show the CV display section
    (document.getElementById('cv-display') as HTMLElement).style.display = 'block';

    // Optionally, hide the form after submission
    (document.getElementById('cv-form') as HTMLElement).style.display = 'none';
});






