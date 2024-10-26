// JavaScript for mobile menu toggle
function toggleMenu() {
    const navList = document.getElementById('nav-list');
    if (navList.classList.contains('mobile')) {
        navList.classList.remove('mobile');
    } else {
        navList.classList.add('mobile');
    }
}

// Typewriter effect for hero section
const typing1 = document.getElementById('typing1');
const typing2 = document.getElementById('typing2');

const textArray1 = ["Web Developer", "Cyber Policy Enthusiast"];
const textArray2 = ["Innovative thinker with a passion for technology"];

let index1 = 0;
let index2 = 0;
let charIndex1 = 0;
let charIndex2 = 0;
let typingSpeed = 100; // Adjust typing speed here
let delayBetweenLoops = 2000; // Delay between loops

function typeText1() {
    if (charIndex1 < textArray1[index1].length) {
        typing1.textContent += textArray1[index1].charAt(charIndex1);
        charIndex1++;
        setTimeout(typeText1, typingSpeed);
    } else {
        setTimeout(() => {
            deleteText1();
        }, delayBetweenLoops);
    }
}

function deleteText1() {
    if (charIndex1 > 0) {
        typing1.textContent = textArray1[index1].substring(0, charIndex1 - 1);
        charIndex1--;
        setTimeout(deleteText1, typingSpeed);
    } else {
        index1 = (index1 + 1) % textArray1.length; // Loop back to the first element
        setTimeout(typeText1, typingSpeed);
    }
}

function typeText2() {
    if (charIndex2 < textArray2[index2].length) {
        typing2.textContent += textArray2[index2].charAt(charIndex2);
        charIndex2++;
        setTimeout(typeText2, typingSpeed);
    } else {
        setTimeout(() => {
            deleteText2();
        }, delayBetweenLoops);
    }
}

function deleteText2() {
    if (charIndex2 > 0) {
        typing2.textContent = textArray2[index2].substring(0, charIndex2 - 1);
        charIndex2--;
        setTimeout(deleteText2, typingSpeed);
    } else {
        index2 = (index2 + 1) % textArray2.length; // Loop back to the first element
        setTimeout(typeText2, typingSpeed);
    }
}

// Initialize typing effect
typeText1();
typeText2();

//about section 
document.addEventListener("DOMContentLoaded", function() {
    const introText = "I am a passionate web developer and cyber policy enthusiast dedicated to improving digital security.";
    let index = 0;
    const introElement = document.querySelector('.about-introduction');
    
    function typeText() {
        if (index < introText.length) {
            introElement.textContent += introText.charAt(index);
            index++;
            setTimeout(typeText, 50); // Speed of typing
        }
    }
    
    typeText();
});

document.querySelector('.contact-form-box form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Show a confirmation message
    const name = this.querySelector('input[type="text"]').value;
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
    this.reset(); // Reset the form fields
});


// Back to Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

// Show button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('show'); // Add show class to display button
    } else {
        backToTopButton.classList.remove('show'); // Remove show class to hide button
    }
};

// Scroll to top function
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    });
};
