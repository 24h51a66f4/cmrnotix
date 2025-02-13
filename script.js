// Toggle Theme
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load Saved Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Real-Time Search for Notes
document.getElementById('search-input').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const noteItems = document.querySelectorAll('.note-item');
    noteItems.forEach(item => {
        const title = item.getAttribute('data-title').toLowerCase();
        if (title.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// Expandable Notes Preview
document.querySelectorAll('.preview-btn').forEach(button => {
    button.addEventListener('click', function() {
        const pdfUrl = this.getAttribute('data-pdf');
        openPreviewModal(pdfUrl);
    });
});

function openPreviewModal(pdfUrl) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <div class="pdf-viewer" id="pdf-viewer"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close button
    modal.querySelector('.close-btn').addEventListener('click', function() {
        modal.remove();
    });

    // PDF.js viewer
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc_) {
        const pdfDoc = pdfDoc_;
        const pdfViewer = document.getElementById('pdf-viewer');
        pdfDoc.getPage(1).then(function(page) {
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            pdfViewer.appendChild(canvas);

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    });

    // Click outside modal to close
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    });
}

// Loading Animation (Placeholder for demonstration)
window.addEventListener('load', () => {
    const loadingIndicator = document.querySelector('.loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
});

// Open Graph Tags for Social Sharing
function setMetaTags(title, description, url, image) {
    document.title = title;
    document.querySelector('meta[property="og:title"]').setAttribute('content', title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', description);
    document.querySelector('meta[property="og:url"]').setAttribute('content', url);
    document.querySelector('meta[property="og:image"]').setAttribute('content', image);
}

// Example usage (add these to the head of each HTML file)
/*
<meta property="og:title" content="Free Student Notes">
<meta property="og:description" content="Access study notes for Applied Physics, Matrices, and Calculus.">
<meta property="og:url" content="https://24h51a66f4.github.io/free-student-notes-website/">
<meta property="og:image" content="path/to/image.png">
*/