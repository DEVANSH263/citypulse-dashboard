// ===================================
// Form Validation
// ===================================

const form = document.getElementById('feedbackForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// ===================================
// Validation Rules
// ===================================

const validators = {
    name: (value) => {
        if (!value.trim()) {
            return 'Name is required';
        }
        if (value.trim().length < 2) {
            return 'Name must be at least 2 characters long';
        }
        if (!/^[a-zA-Z\s]+$/.test(value)) {
            return 'Name should contain only letters and spaces';
        }
        return '';
    },
    
    email: (value) => {
        if (!value.trim()) {
            return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return 'Please enter a valid email address';
        }
        return '';
    },
    
    message: (value) => {
        if (!value.trim()) {
            return 'Message is required';
        }
        if (value.trim().length < 10) {
            return 'Message must be at least 10 characters long';
        }
        if (value.trim().length > 1000) {
            return 'Message must not exceed 1000 characters';
        }
        return '';
    }
};

// ===================================
// Validate Individual Field
// ===================================

function validateField(field, errorElement) {
    const fieldName = field.name;
    const value = field.value;
    const error = validators[fieldName](value);
    
    if (error) {
        errorElement.textContent = error;
        field.style.borderColor = '#ef4444';
        return false;
    } else {
        errorElement.textContent = '';
        field.style.borderColor = '#10b981';
        return true;
    }
}

// ===================================
// Real-time Validation
// ===================================

nameInput.addEventListener('blur', () => {
    validateField(nameInput, nameError);
});

nameInput.addEventListener('input', () => {
    if (nameError.textContent) {
        validateField(nameInput, nameError);
    }
});

emailInput.addEventListener('blur', () => {
    validateField(emailInput, emailError);
});

emailInput.addEventListener('input', () => {
    if (emailError.textContent) {
        validateField(emailInput, emailError);
    }
});

messageInput.addEventListener('blur', () => {
    validateField(messageInput, messageError);
});

messageInput.addEventListener('input', () => {
    if (messageError.textContent) {
        validateField(messageInput, messageError);
    }
});

// ===================================
// Form Submission
// ===================================

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField(nameInput, nameError);
    const isEmailValid = validateField(emailInput, emailError);
    const isMessageValid = validateField(messageInput, messageError);
    
    // Check if all fields are valid
    if (isNameValid && isEmailValid && isMessageValid) {
        // Get form data
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            category: document.getElementById('category').value,
            message: messageInput.value.trim(),
            timestamp: new Date().toISOString()
        };
        
        // Log form data (in real app, this would be sent to server)
        console.log('Form submitted:', formData);
        
        // Show success modal
        showSuccessModal();
        
        // Reset form
        form.reset();
        
        // Reset border colors
        nameInput.style.borderColor = '';
        emailInput.style.borderColor = '';
        messageInput.style.borderColor = '';
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error-message:not(:empty)');
        if (firstError) {
            firstError.parentElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }
});

// ===================================
// Success Modal
// ===================================

const successModal = document.getElementById('successModal');
const closeSuccessModalBtn = document.getElementById('closeSuccessModal');

function showSuccessModal() {
    successModal.classList.add('active');
}

function closeSuccessModal() {
    successModal.classList.remove('active');
}

closeSuccessModalBtn.addEventListener('click', closeSuccessModal);

// Close modal when clicking outside
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeSuccessModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successModal.classList.contains('active')) {
        closeSuccessModal();
    }
});

// ===================================
// Character Counter for Message
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const messageField = document.getElementById('message');
    const messageGroup = messageField.parentElement;
    
    // Create character counter
    const charCounter = document.createElement('div');
    charCounter.style.cssText = `
        text-align: right;
        font-size: 0.85rem;
        color: #64748b;
        margin-top: 0.3rem;
    `;
    charCounter.textContent = '0 / 1000 characters';
    
    messageGroup.appendChild(charCounter);
    
    messageField.addEventListener('input', () => {
        const length = messageField.value.length;
        charCounter.textContent = `${length} / 1000 characters`;
        
        if (length > 1000) {
            charCounter.style.color = '#ef4444';
        } else if (length > 900) {
            charCounter.style.color = '#f59e0b';
        } else {
            charCounter.style.color = '#64748b';
        }
    });
});

// ===================================
// Social Link Handlers
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-btn, .modal-social-btn');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Social link clicked:', link.className);
            // In a real application, these would link to actual social media pages
        });
    });
});
