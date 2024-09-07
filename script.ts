// alert('test');
 emailLink = document.getElementById('email-link');

if (emailLink) {
    emailLink.addEventListener('click', function (event) {
        event.preventDefault();  
        const email = 'syedaleezhassan@gmail.com';
        const subject = 'Hello Syed Aleez Hassan'; 
        const body = 'Dear Syed,\n\nI would like to get in touch with you.';  // Optional: Pre-fill the body
        
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
    });
}
