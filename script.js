const validCredentials = [
    { email: 'sachin.dsp@klhomeappliances.com', password: 'Sachin@dspKL', website: 'https://sites.google.com/klhomeappliances.com/store-in-charge?usp=sharing' },
    { email: 'subroto@klhomeappliances.com', password: 'Subroto@MISKL', website: 'https://sites.google.com/klhomeappliances.com/subroto-sir?usp=sharing' },
    { email: 'komal.sc@klhomeappliances.com', password: 'Komal', website: 'https://sites.google.com/klhomeappliances.com/crmdashboard?usp=sharing' },
    { email: 'sakshisingh2707@gmail.com', password: 'Sakshi@KL', website: 'https://sites.google.com/klhomeappliances.com/somudeep-mahto?usp=sharing' },
    { email: 'dkpal1399@gmail.com', password: 'Dkpal@KL', website: 'https://sites.google.com/klhomeappliances.com/dinesh-sir?usp=sharing' },
    { email: 'rahul2011.kumarmehta@gmail.com', password: 'Rahul@KL', website: 'https://sites.google.com/klhomeappliances.com/rahul-sir?usp=sharing' },
    { email: 'sonia@klhomeappliances.com', password: 'Sonia@KL', website: 'https://sites.google.com/klhomeappliances.com/sonia?usp=sharing' },
    { email: 'sanjay.purchase@klhomeappliances.com', password: 'Sanjay@KL', website: 'https://sites.google.com/klhomeappliances.com/sanjay?usp=sharing' },
    { email: 'deepak@klhomeappliances.com', password: 'Deepak@KL', website: 'https://sites.google.com/klhomeappliances.com/deepak?usp=sharing' },
    { email: 'shivaniklhomeappliances.com', password: 'Shivani', website: 'https://sites.google.com/klhomeappliances.com/shivani?usp=sharing' },
    { email: 'rajnicrm@klhomeapplinces.com', password: 'Rajni@KL', website: 'https://sites.google.com/klhomeappliances.com/rajni?usp=sharing' },
    { email: 'md@klhomeappliances.com', password: 'Shivam@md', website: 'https://sites.google.com/klhomeappliances.com/ajay?usp=sharing' },
    { email: 'rita@klhomeappliances.com', password: 'RitaMishra123@KL', website: 'https://sites.google.com/klhomeappliances.com/rita?usp=sharing' },
    { email: 'kusum@klhomeappliances.com', password: 'Kusum', website: 'https://sites.google.com/klhomeappliances.com/process-cordinator?usp=sharing' }
];

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.toLowerCase();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const user = validCredentials.find(credential => 
        credential.email.toLowerCase() === email && credential.password === password
    );
    
    if (user) {
        window.location.href = user.website;
    } else {
        errorMessage.textContent = 'Invalid email or password';
        errorMessage.style.display = 'block';
    }
}

