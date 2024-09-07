// Define types for form fields and their values
var form = document.getElementById('cv-form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting traditionally
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var about = document.getElementById('about').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    document.getElementById('cv-name').innerText = name;
    document.getElementById('cv-email').innerText = email;
    document.getElementById('cv-phone').innerText = phone;
    document.getElementById('cv-address').innerText = address;
    document.getElementById('cv-about').innerText = about;
    document.getElementById('cv-experience').innerText = experience;
    document.getElementById('cv-education').innerText = education;
    document.getElementById('cv-skills').innerText = skills;
    // Show the CV display section
    document.getElementById('cv-display').style.display = 'block';
    // Optionally, hide the form after submission
    document.getElementById('cv-form').style.display = 'none';
});
// // alert('test');
//  var emailLink = document.getElementById('email-link');
// if (emailLink) {
//     emailLink.addEventListener('click', function (event) {
//         event.preventDefault();  
//         const email = 'syedaleezhassan@gmail.com';
//         const subject = 'Hello Syed Aleez Hassan'; 
//         const body = 'Dear Syed,\n\nI would like to get in touch with you.';  // Optional: Pre-fill the body
//         const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//         window.location.href = mailtoLink;
//     });
// }
