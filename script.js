// alert('test');
var emailLink = document.getElementById('email-link');
if (emailLink) {
    emailLink.addEventListener('click', function (event) {
        event.preventDefault();
        var email = 'syedaleezhassan@gmail.com';
        var subject = 'Hello Syed Aleez Hassan';
        var body = 'Dear Syed,\n\nI would like to get in touch with you.'; // Optional: Pre-fill the body
        var mailtoLink = "mailto:".concat(email, "?subject=").concat(encodeURIComponent(subject), "&body=").concat(encodeURIComponent(body));
        window.location.href = mailtoLink;
    });
}
