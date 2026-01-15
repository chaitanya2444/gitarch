// Configuration
const API_BASE_URL = 'http://localhost:8000';

// DOM Elements
const pdfForm = document.getElementById('pdfForm');
const submitButton = document.getElementById('submitButton');
const loadingState = document.getElementById('loadingState');
const successState = document.getElementById('successState');
const errorState = document.getElementById('errorState');
const downloadButton = document.getElementById('downloadButton');
const generateAnotherButton = document.getElementById('generateAnotherButton');
const tryAgainButton = document.getElementById('tryAgainButton');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// Form inputs
const githubLinkInput = document.getElementById('githubLink');
const githubTokenInput = document.getElementById('githubToken');
const prdFileInput = document.getElementById('prdFile');

// State Management
let currentState = 'form'; // 'form', 'loading', 'success', 'error'

/**
 * Show specific state and hide others
 */
function showState(state) {
    currentState = state;

    // Hide all states
    pdfForm.classList.add('hidden');
    loadingState.classList.add('hidden');
    successState.classList.add('hidden');
    errorState.classList.add('hidden');

    // Show requested state
    switch (state) {
        case 'form':
            pdfForm.classList.remove('hidden');
            break;
        case 'loading':
            loadingState.classList.remove('hidden');
            break;
        case 'success':
            successState.classList.remove('hidden');
            break;
        case 'error':
            errorState.classList.remove('hidden');
            break;
    }
}

/**
 * Display error message
 */
function showError(message) {
    errorMessage.textContent = message;
    showState('error');
}

/**
 * Display success message
 */
function showSuccess(pdfUrl, filename) {
    successMessage.textContent = `Your architecture PDF "${filename}" is ready!`;
    downloadButton.href = `${API_BASE_URL}${pdfUrl}`;
    downloadButton.download = filename;
    showState('success');
}

/**
 * Handle form submission
 */
async function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    const githubLink = githubLinkInput.value.trim();
    const githubToken = githubTokenInput.value.trim();
    const prdFile = prdFileInput.files[0];

    // Validate inputs
    if (!githubLink) {
        showError('Please enter a GitHub repository link');
        return;
    }

    // Validate GitHub URL format
    if (!githubLink.includes('github.com') && !githubLink.includes('gitlab.com')) {
        showError('Please enter a valid GitHub or GitLab repository URL');
        return;
    }

    // Validate file size if provided (max 10MB)
    if (prdFile && prdFile.size > 10 * 1024 * 1024) {
        showError('File size too large. Please upload a file smaller than 10MB.');
        return;
    }

    // Prepare form data for file upload
    const formData = new FormData();
    formData.append('github_link', githubLink);
    if (githubToken) {
        formData.append('github_token', githubToken);
    }
    if (prdFile) {
        formData.append('prd_document', prdFile);
    }

    // Show loading state
    showState('loading');

    try {
        // Make API request with file upload
        const response = await fetch(`${API_BASE_URL}/api/generate-github-architecture`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (!response.ok) {
            // Handle error response
            throw new Error(data.detail || `Server error: ${response.status}`);
        }

        if (data.success) {
            // Show success state
            showSuccess(data.pdf_url, data.pdf_filename);
        } else {
            throw new Error(data.message || 'Architecture PDF generation failed');
        }

    } catch (error) {
        console.error('Error generating architecture PDF:', error);

        // Handle specific error types
        let errorMsg = 'An unexpected error occurred. Please try again.';

        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError') || error.message.includes('CORS')) {
            errorMsg = 'Cannot connect to the backend server. Please ensure the server is running.';
        } else if (error.message.includes('403') || error.message.includes('Forbidden')) {
            errorMsg = 'Repository access denied. Please provide a valid GitHub token for private repositories.';
        } else if (error.message.includes('401') || error.message.includes('Unauthorized')) {
            errorMsg = 'Authentication failed. Please check your GitHub token.';
        } else if (error.message.includes('400') || error.message.includes('Bad Request')) {
            errorMsg = 'Invalid repository URL. Please check the GitHub link format.';
        } else if (error.message.includes('404')) {
            errorMsg = 'Repository not found. Please check that the repository exists and is accessible.';
        } else if (error.message.includes('500')) {
            errorMsg = 'Server error occurred while analyzing repository. Please try again.';
        } else if (error.message) {
            errorMsg = error.message;
        }

        showError(errorMsg);
    }
}

/**
 * Reset form and show initial state
 */
function resetForm() {
    pdfForm.reset();
    showState('form');
}

/**
 * Check backend connection on page load
 */
async function checkBackendConnection() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/health`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log('✅ Backend connection successful:', data);
            return true;
        } else {
            console.error('❌ Backend health check failed:', response.status);
            return false;
        }
    } catch (error) {
        console.error('❌ Cannot connect to backend:', error);
        return false;
    }
}

/**
 * Initialize event listeners
 */
async function init() {
    // Check backend connection first
    const isConnected = await checkBackendConnection();
    if (!isConnected) {
        console.warn('⚠️ Backend connection check failed. The server may not be running.');
        console.warn(`💡 Make sure the backend is running on: ${API_BASE_URL}`);
    }

    // Form submission
    pdfForm.addEventListener('submit', handleSubmit);

    // Generate another button
    generateAnotherButton.addEventListener('click', resetForm);

    // Try again button
    tryAgainButton.addEventListener('click', () => showState('form'));

    // File upload validation
    prdFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.size > 10 * 1024 * 1024) {
            prdFileInput.style.borderColor = 'var(--accent-error)';
            console.warn('File size exceeds 10MB limit');
        } else {
            prdFileInput.style.borderColor = '';
        }
    });

    console.log('System Architecture Agent initialized for GitHub repositories');
    console.log(`API Base URL: ${API_BASE_URL}`);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
