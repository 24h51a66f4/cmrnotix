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

// Real-Time Search for Notes (only if the element exists)
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function() {
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
}

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

// Generate Roadmap Based on Stream Selection
const streamSelect = document.getElementById('stream-select');
const roadmapContainer = document.getElementById('roadmap-container');

streamSelect.addEventListener('change', function() {
    const selectedStream = this.value;
    let roadmapHTML = '';

    switch (selectedStream) {
        case 'cse-core':
            roadmapHTML = `
                <h3>CSE Core Roadmap</h3>
                <p><strong>Core Subjects:</strong></p>
                <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>Computer Organization and Architecture</li>
                    <li>Operating Systems</li>
                    <li>Database Management Systems</li>
                    <li>Computer Networks</li>
                    <li>Software Engineering</li>
                    <li>Theory of Computation</li>
                    <li>Compiler Design</li>
                    <li>Computer Graphics</li>
                    <li>Discrete Mathematics</li>
                </ul>
                <p><strong>Programming Languages & Libraries:</strong></p>
                <ul>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>HTML/CSS/JavaScript</li>
                </ul>
                <p><strong>Additional Skills:</strong></p>
                <ul>
                    <li>Version Control (Git)</li>
                    <li>Agile Methodologies</li>
                    <li>Basic Linux Commands</li>
                </ul>
                <p><strong>Job Opportunities:</strong></p>
                <ul>
                    <li>Software Developer</li>
                    <li>System Analyst</li>
                    <li>Network Administrator</li>
                    <li>Database Administrator</li>
                </ul>
                <p><strong>Salary Ranges:</strong></p>
                <ul>
                    <li>Software Developer: ₹4,00,000 - ₹10,00,000</li>
                    <li>System Analyst: ₹4,00,000 - ₹8,00,000</li>
                    <li>Network Administrator: ₹3,50,000 - ₹7,00,000</li>
                    <li>Database Administrator: ₹4,00,000 - ₹9,00,000</li>
                </ul>
            `;
            break;
        case 'cse-ai-ml':
            roadmapHTML = `
                <h3>CSE AI/ML Roadmap</h3>
                <p><strong>Core Subjects:</strong></p>
                <ul>
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Probability and Statistics</li>
                    <li>Linear Algebra</li>
                    <li>Calculus</li>
                    <li>Discrete Mathematics</li>
                </ul>
                <p><strong>Programming Languages & Libraries:</strong></p>
                <ul>
                    <li>Python</li>
                    <li>R</li>
                    <li>TensorFlow</li>
                    <li>Keras</li>
                    <li>PyTorch</li>
                    <li>Scikit-learn</li>
                </ul>
                <p><strong>Additional Skills:</strong></p>
                <ul>
                    <li>Version Control (Git)</li>
                    <li>Big Data Technologies (Hadoop, Spark)</li>
                    <li>Cloud Computing (AWS, GCP)</li>
                    <li>Mathematical Modeling</li>
                </ul>
                <p><strong>Job Opportunities:</strong></p>
                <ul>
                    <li>Machine Learning Engineer</li>
                    <li>Data Scientist</li>
                    <li>AI Research Scientist</li>
                    <li>Deep Learning Engineer</li>
                    <li>NLP Engineer</li>
                    <li>Computer Vision Engineer</li>
                </ul>
                <p><strong>Salary Ranges:</strong></p>
                <ul>
                    <li>Machine Learning Engineer: ₹5,00,000 - ₹15,00,000</li>
                    <li>Data Scientist: ₹5,00,000 - ₹12,00,000</li>
                    <li>AI Research Scientist: ₹7,00,000 - ₹20,00,000</li>
                    <li>Deep Learning Engineer: ₹6,00,000 - ₹14,00,000</li>
                    <li>NLP Engineer: ₹6,00,000 - ₹13,00,000</li>
                    <li>Computer Vision Engineer: ₹6,00,000 - ₹13,00,000</li>
                </ul>
            `;
            break;
        case 'cse-data-science':
            roadmapHTML = `
                <h3>CSE Data Science Roadmap</h3>
                <p><strong>Core Subjects:</strong></p>
                <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>Probability and Statistics</li>
                    <li>Linear Algebra</li>
                    <li>Calculus</li>
                    <li>Data Mining</li>
                    <li>Data Warehousing</li>
                    <li>Big Data Technologies</li>
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Discrete Mathematics</li>
                </ul>
                <p><strong>Programming Languages & Libraries:</strong></p>
                <ul>
                    <li>Python</li>
                    <li>R</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>Matplotlib</li>
                    <li>Scikit-learn</li>
                    <li>TensorFlow</li>
                    <li>Keras</li>
                    <li>PyTorch</li>
                </ul>
                <p><strong>Additional Skills:</strong></p>
                <ul>
                    <li>Version Control (Git)</li>
                    <li>Cloud Computing (AWS, GCP)</li>
                    <li>Data Visualization Tools (Tableau, Power BI)</li>
                    <li>Mathematical Modeling</li>
                </ul>
                <p><strong>Job Opportunities:</strong></p>
                <ul>
                    <li>Data Scientist</li>
                    <li>Data Analyst</li>
                    <li>Machine Learning Engineer</li>
                    <li>Big Data Engineer</li>
                    <li>Data Engineer</li>
                    <li>Business Intelligence Analyst</li>
                </ul>
                <p><strong>Salary Ranges:</strong></p>
                <ul>
                    <li>Data Scientist: ₹5,00,000 - ₹12,00,000</li>
                    <li>Data Analyst: ₹4,00,000 - ₹9,00,000</li>
                    <li>Machine Learning Engineer: ₹6,00,000 - ₹14,00,000</li>
                    <li>Big Data Engineer: ₹5,50,000 - ₹11,00,000</li>
                    <li>Data Engineer: ₹5,00,000 - ₹10,00,000</li>
                    <li>Business Intelligence Analyst: ₹4,50,000 - ₹9,00,000</li>
                </ul>
            `;
            break;
        default:
            roadmapHTML = '';
            break;
    }

    roadmapContainer.innerHTML = roadmapHTML;
});
