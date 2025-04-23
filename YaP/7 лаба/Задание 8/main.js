document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-registration');
    const cancelPersonalBtn = document.getElementById('cancel-personal');
    const nextToPhoneBtn = document.getElementById('next-to-phone');
    const backToPersonalBtn = document.getElementById('back-to-personal');
    const sendCodeBtn = document.getElementById('send-code');
    const nextToPaymentBtn = document.getElementById('next-to-payment');
    const backToPhoneBtn = document.getElementById('back-to-phone');
    const completeBtn = document.getElementById('complete-registration');
    const returnToStartBtn = document.getElementById('return-to-start');
    const welcomeFrame = document.getElementById('welcome-frame');
    const personalFrame = document.getElementById('personal-frame');
    const phoneFrame = document.getElementById('phone-frame');
    const paymentFrame = document.getElementById('payment-frame');
    const successFrame = document.getElementById('success-frame');
    const personalForm = document.getElementById('personal-form');
    const phoneForm = document.getElementById('phone-form');
    const paymentForm = document.getElementById('payment-form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const phone = document.getElementById('phone');
    const verificationCode = document.getElementById('verification-code');
    const codeGroup = document.getElementById('code-group');
    const cardPart1 = document.getElementById('card-part1');
    const cardPart2 = document.getElementById('card-part2');
    const cardPart3 = document.getElementById('card-part3');
    const cardPart4 = document.getElementById('card-part4');
    const cardName = document.getElementById('card-name');
    const expiryDate = document.getElementById('expiry-date');
    const cvv = document.getElementById('cvv');

    initCountries();

    startBtn.addEventListener('click', function() {
        showFrame(personalFrame);
    });

    cancelPersonalBtn.addEventListener('click', function() {
        showFrame(welcomeFrame);
        personalForm.reset();
    });

    nextToPhoneBtn.addEventListener('click', function() {
        showFrame(phoneFrame);
    });

    backToPersonalBtn.addEventListener('click', function() {
        showFrame(personalFrame);
    });

    sendCodeBtn.addEventListener('click', function() {
        if (phone.value) {
            codeGroup.style.display = 'block';
            sendCodeBtn.style.display = 'none';
            nextToPaymentBtn.style.display = 'inline-block';
        }
    });

    nextToPaymentBtn.addEventListener('click', function() {
        showFrame(paymentFrame);
    });

    backToPhoneBtn.addEventListener('click', function() {
        showFrame(phoneFrame);
    });

    completeBtn.addEventListener('click', function() {
        showFrame(successFrame);
    });

    returnToStartBtn.addEventListener('click', function() {
        showFrame(welcomeFrame);
        personalForm.reset();
        phoneForm.reset();
        paymentForm.reset();
        codeGroup.style.display = 'none';
        sendCodeBtn.style.display = 'inline-block';
        nextToPaymentBtn.style.display = 'none';
    });

    personalForm.addEventListener('input', function() {
        const isFormValid = firstName.value && lastName.value && email.value &&
            country.value && password.value &&
            confirmPassword.value &&
            password.value === confirmPassword.value;

        nextToPhoneBtn.disabled = !isFormValid;
    });

    verificationCode.addEventListener('input', function() {
        nextToPaymentBtn.disabled = verificationCode.value.length !== 4;
    });

    cardPart1.addEventListener('input', function() {
        if (this.value.length === 4) cardPart2.focus();
    });

    cardPart2.addEventListener('input', function() {
        if (this.value.length === 4) cardPart3.focus();
    });

    cardPart3.addEventListener('input', function() {
        if (this.value.length === 4) cardPart4.focus();
    });

    function showFrame(frame) {
        document.querySelectorAll('.frame').forEach(f => {
            f.classList.remove('active');
        });
        frame.classList.add('active');
    }

    function initCountries() {
        const countries = [
            'Россия', 'США', 'Канада', 'Великобритания', 'Германия',
            'Франция', 'Италия', 'Испания', 'Китай', 'Япония',
            'Южная Корея', 'Австралия', 'Бразилия', 'Индия', 'Мексика'
        ];

        countries.forEach(c => {
            const option = document.createElement('option');
            option.value = c;
            option.textContent = c;
            country.appendChild(option);
        });
    }
});