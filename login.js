// आपकी Firebase प्रोजेक्ट सेटिंग्स से मिली जानकारी
const firebaseConfig = {
  apiKey: "AIzaSyDIvCMGgoAo4ulc89F4eq0IjF1AkZLKooo", //
  authDomain: "my-notebook-6a623.firebaseapp.com", // यह आपके Project ID से बनता है
  projectId: "my-notebook-6a623", //
  storageBucket: "my-notebook-6a623.appspot.com", // यह भी आपके Project ID से बनता है
  messagingSenderId: "419641880589", // यह आपका Project number है
  appId: "" // appId की ज़रूरत अभी नहीं है, आप इसे खाली छोड़ सकते हैं
};

// Firebase को शुरू करें
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// HTML पेज के एलिमेंट्स को चुनें
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const googleBtn = document.getElementById('googleBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// 'Sign Up' बटन का लॉजिक
signupBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email || !password) {
        errorMessage.textContent = 'Please enter both email and password.';
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Sign up successful! Please login now.');
            // साइन-अप के बाद फॉर्म खाली कर दें
            emailInput.value = "";
            passwordInput.value = "";
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
});

// 'Login' बटन का लॉजिक
loginBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email || !password) {
        errorMessage.textContent = 'Please enter both email and password.';
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // लॉगिन सफल होने पर मुख्य पेज (index.html) पर भेजें
            window.location.href = 'index.html';
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
});

// 'Sign in with Google' बटन का लॉजिक
googleBtn.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
             // गूगल से लॉगिन सफल होने पर मुख्य पेज (index.html) पर भेजें
            window.location.href = 'index.html';
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
});