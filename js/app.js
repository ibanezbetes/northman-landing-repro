// Thomas Northman Tax Lawyer - Interactive JavaScript
// Handles modal interactions, form submission, and chip navigation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize text content from data attributes
    initializeTextContent();
    
    // Initialize URL parameters for topic preselection
    initializeTopicFromURL();
    
    // Add keyboard navigation for modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

/**
 * Initialize text content from data attributes
 * This allows easy content editing through HTML data attributes
 */
function initializeTextContent() {
    const body = document.body;
    const textElements = document.querySelectorAll('[data-text]');
    
    textElements.forEach(element => {
        const dataKey = element.getAttribute('data-text');
        const bodyAttribute = `data-${dataKey.replace('_', '-')}`;
        const textContent = body.getAttribute(bodyAttribute);
        
        if (textContent) {
            element.textContent = textContent;
        }
    });
    
    // Initialize chips from data attribute
    const chipsData = body.getAttribute('data-chips');
    if (chipsData) {
        const chipsContainer = document.querySelector('.chips-container');
        const chipLabels = chipsData.split('|');
        
        chipsContainer.innerHTML = '';
        chipLabels.forEach(label => {
            const chip = document.createElement('button');
            chip.className = 'chip';
            chip.textContent = label.trim();
            chip.onclick = () => handleChipClick(label.trim());
            chip.setAttribute('aria-pressed', 'false');
            chipsContainer.appendChild(chip);
        });
    }
}

/**
 * Initialize topic selection from URL parameters
 */
function initializeTopicFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    
    if (topic) {
        const topicSelect = document.getElementById('topic');
        if (topicSelect) {
            // Find matching option and select it
            const options = topicSelect.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].value === topic) {
                    options[i].selected = true;
                    break;
                }
            }
        }
    }
}

/**
 * Open consultation modal with accessibility considerations
 */
function openModal() {
    const modal = document.getElementById('consultationModal');
    const firstInput = modal.querySelector('input[type="text"]');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    setTimeout(() => {
        if (firstInput) {
            firstInput.focus();
        }
    }, 100);
    
    // Update URL without page reload for better UX
    const url = new URL(window.location);
    url.searchParams.set('modal', 'consultation');
    window.history.pushState({}, '', url);
}

/**
 * Close consultation modal
 * @param {Event} event - Optional event object for event delegation
 */
function closeModal(event) {
    // Only close if clicking overlay, not content
    if (event && event.target !== event.currentTarget) {
        return;
    }
    
    const modal = document.getElementById('consultationModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Clean up URL
    const url = new URL(window.location);
    url.searchParams.delete('modal');
    window.history.pushState({}, '', url);
}

/**
 * Handle chip click interactions
 * Scrolls to form and preselects topic
 * @param {string} chipText - The text content of the clicked chip
 */
function handleChipClick(chipText) {
    // Visual feedback - toggle pressed state
    const clickedChip = event.target;
    const allChips = document.querySelectorAll('.chip');
    
    // Reset all chips
    allChips.forEach(chip => {
        chip.setAttribute('aria-pressed', 'false');
        chip.style.borderColor = '';
        chip.style.backgroundColor = '';
    });
    
    // Highlight clicked chip
    clickedChip.setAttribute('aria-pressed', 'true');
    clickedChip.style.borderColor = 'var(--primary)';
    clickedChip.style.backgroundColor = 'rgba(22, 163, 74, 0.05)';
    
    // Update URL with topic parameter
    const url = new URL(window.location);
    url.searchParams.set('topic', chipText);
    window.history.pushState({}, '', url);
    
    // Open modal and preselect topic
    openModal();
    
    // Set topic in form
    setTimeout(() => {
        const topicSelect = document.getElementById('topic');
        if (topicSelect) {
            const options = topicSelect.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].value === chipText) {
                    options[i].selected = true;
                    break;
                }
            }
        }
    }, 200);
}

/**
 * Handle form submission with validation and success feedback
 * @param {Event} event - Form submit event
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Basic validation (HTML5 handles most of it)
    const name = formData.get('name');
    const email = formData.get('email');
    const topic = formData.get('topic');
    const privacy = formData.get('privacy');
    
    if (!name || !email || !topic || !privacy) {
        showToast('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual API call)
    submitConsultationRequest(formData);
}

/**
 * Simulate consultation request submission
 * In a real application, this would make an API call
 * @param {FormData} formData - The form data to submit
 */
function submitConsultationRequest(formData) {
    // Show loading state
    const submitButton = document.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API delay
    setTimeout(() => {
        // Simulate successful submission
        console.log('Consultation request submitted:', Object.fromEntries(formData));
        
        // Reset form and close modal
        document.getElementById('consultationForm').reset();
        closeModal();
        
        // Show success message
        showToast('Consultation request sent successfully! We\'ll be in touch soon.', 'success');
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Clean up URL
        const url = new URL(window.location);
        url.searchParams.delete('topic');
        url.searchParams.delete('modal');
        window.history.pushState({}, '', url);
        
        // Analytics tracking (if available)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'consultation_request', {
                'event_category': 'engagement',
                'event_label': formData.get('topic')
            });
        }
        
    }, 1500); // 1.5 second delay to simulate network request
}

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type of toast (success, error, info)
 */
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const toastContent = document.createElement('div');
    toastContent.className = 'toast-content';
    
    const icon = document.createElement('span');
    icon.className = 'toast-icon';
    icon.textContent = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    
    const messageSpan = document.createElement('span');
    messageSpan.className = 'toast-message';
    messageSpan.textContent = message;
    
    toastContent.appendChild(icon);
    toastContent.appendChild(messageSpan);
    toast.appendChild(toastContent);
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 4000);
}

/**
 * Smooth scroll to element (polyfill for older browsers)
 * @param {string} targetId - ID of target element
 */
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle browser back/forward navigation
window.addEventListener('popstate', function(event) {
    const urlParams = new URLSearchParams(window.location.search);
    const modal = urlParams.get('modal');
    
    if (modal === 'consultation') {
        openModal();
    } else {
        closeModal();
    }
});

// Performance optimization: Preload modal content
window.addEventListener('load', function() {
    // Preload modal for better UX
    const modal = document.getElementById('consultationModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.offsetHeight; // Force reflow
        modal.style.display = '';
    }
});