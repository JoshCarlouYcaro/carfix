// Function para magpalit sa pagitan ng Carfix at Autocheck sections
function switchBusiness(type) {
    const btnCarfix = document.getElementById('btnCarfix');
    const btnAutocheck = document.getElementById('btnAutocheck');
    const sectionCarfix = document.getElementById('sectionCarfix');
    const sectionAutocheck = document.getElementById('sectionAutocheck');

    if (type === 'carfix') {
        btnCarfix.classList.add('active');
        btnAutocheck.classList.remove('active');
        sectionCarfix.style.display = 'block';
        sectionAutocheck.style.display = 'none';
    } else {
        btnAutocheck.classList.add('active');
        btnCarfix.classList.remove('active');
        sectionAutocheck.style.display = 'block';
        sectionCarfix.style.display = 'none';
    }
}

// Universal vCard save function para sa HTML buttons
function saveContact(businessName, phone, email, org) {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:France H. Vidallo
ORG:${org}
TITLE:Owner / Founder
TEL;TYPE=WORK,VOICE:${phone}
EMAIL;TYPE=WORK:${email}
END:VCARD`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        const encodedVCard = encodeURIComponent(vcardData);
        window.location.href = `data:text/vcard;charset=utf-8,${encodedVCard}`;
    } else {
        const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `France_Vidallo_${businessName}.vcf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
}

// Email fallback handler para sa parehong section
document.querySelectorAll('.email-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.getAttribute('data-email');
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Inquiry`;
        window.location.href = `mailto:${email}?subject=Inquiry`;
        
        setTimeout(function() {
            window.open(gmailUrl, '_blank');
        }, 500);
    });
});