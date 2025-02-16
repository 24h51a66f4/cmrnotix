/* scriptgemcode.js */

document.addEventListener('DOMContentLoaded', function() {
    // Page Loading Animation (Simple fade-in)
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    window.addEventListener('load', function() {
        document.body.style.opacity = 1;
    });

    // Smooth Scrolling (for anchor links - if you add any in future)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (let link of anchorLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElementId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetElementId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Dark/Light Mode Toggle (Basic Implementation - can be enhanced)
    const body = document.body;
    let darkMode = localStorage.getItem('darkMode') === 'enabled'; // Check local storage

    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        darkMode = true;
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
        darkMode = false;
    }

    // Initially set mode based on local storage
    if (darkMode) {
        enableDarkMode();
    }

    // Example Toggle Button (You'd need to add a button in HTML to trigger this)
    // For now, let's just trigger dark mode automatically after 3 seconds for demonstration
    // In real implementation, you'd use a button click to toggle
    /*
    const darkModeToggleButton = document.getElementById('darkModeToggle'); // Example button ID

    darkModeToggleButton.addEventListener('click', function() {
        if (darkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    */

   // Auto enable dark mode after 3 seconds for demonstration, remove in final version if you use toggle button
   setTimeout(enableDarkMode, 3000);


});
/* scriptgemcode.js */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Previous JavaScript code: Page Loading Animation, Smooth Scrolling, Dark/Light Mode) ...

    // Academic Stream & Learning Roadmap Feature

    const streamDropdown = document.getElementById('stream-dropdown');
    const roadmapContentDiv = document.getElementById('roadmap-content');
    const roadmapPlaceholder = document.getElementById('roadmap-placeholder');

    // Roadmap Data (Example - Expand and refine this with actual data)
    const roadmaps = {
        'cse-core': {
            streamName: 'CSE Core Engineering',
            overview: 'Focuses on fundamental computer science principles, software engineering, and system design.',
            essentialSubjects: [
                'Mathematics: Calculus, Linear Algebra, Discrete Mathematics, Probability & Statistics',
                'Programming: C, C++, Java, Python, Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering'
            ],
            beneficialSkills: [
                'Strong analytical and problem-solving skills',
                'System design and architecture principles',
                'Proficiency in multiple programming paradigms',
                'Understanding of software development lifecycle'
            ],
            jobOpportunities: [
                'Software Developer',
                'System Analyst',
                'Database Administrator',
                'Network Engineer',
                'Web Developer',
                'Salary Range (India): ₹3 LPA - ₹20 LPA (depending on experience and company)'
            ],
            aiMlInsights: 'While CSE Core provides a strong foundation, specializing in AI/ML may require further focused learning in machine learning, deep learning, and related areas.'
        },
        'cse-aiml': {
            streamName: 'CSE - Artificial Intelligence & Machine Learning',
            overview: 'Specializes in the theories, techniques, and applications of AI and Machine Learning.',
            essentialSubjects: [
                'Mathematics: Calculus, Linear Algebra, Probability & Statistics, Optimization',
                'Programming: Python (essential), Java, R (for statistics), Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Big Data Technologies',
                'Key Libraries: TensorFlow, PyTorch, scikit-learn, Keras, Pandas, NumPy'
            ],
            beneficialSkills: [
                'Machine learning algorithm development and implementation',
                'Deep learning model design and training',
                'Data analysis and preprocessing techniques',
                'Model evaluation and deployment',
                'Understanding of ethical implications of AI'
            ],
            jobOpportunities: [
                'Machine Learning Engineer',
                'AI Research Scientist',
                'Data Scientist (specializing in ML)',
                'Computer Vision Engineer',
                'NLP Engineer',
                'AI Product Manager',
                'Salary Range (India): ₹4 LPA - ₹30 LPA+ (highly in demand, top roles can command very high salaries)'
            ],
            aiMlInsights: 'High demand for AI/ML skills in India. Strong career growth and competitive salaries. Continuous learning and staying updated with the latest research are crucial.'
        },
        'cse-datascience': {
            streamName: 'CSE - Data Science',
            overview: 'Focuses on extracting knowledge and insights from data using statistical and computational techniques.',
            essentialSubjects: [
                'Mathematics: Statistics (essential), Linear Algebra, Calculus, Probability, Discrete Mathematics',
                'Programming: Python (essential), R, SQL, Data Warehousing, Data Mining, Big Data Technologies',
                'Key Libraries: Pandas, NumPy, Matplotlib, Seaborn, scikit-learn, Spark, Hadoop'
            ],
            beneficialSkills: [
                'Data visualization and storytelling',
                'Statistical modeling and hypothesis testing',
                'Data cleaning and preprocessing',
                'Big data handling and processing',
                'Domain knowledge in a specific industry (e.g., finance, healthcare)'
            ],
            jobOpportunities: [
                'Data Scientist',
                'Data Analyst',
                'Business Intelligence Developer',
                'Data Engineer',
                'Statistician',
                'Salary Range (India): ₹3.5 LPA - ₹25 LPA+ (data science is a rapidly growing field)'
            ],
            aiMlInsights: 'Data Science roles are abundant across industries. Strong analytical and communication skills are highly valued. Often overlaps with AI/ML, and skills are transferable.'
        }
        // Add more roadmaps here for other streams (e.g., 'cse-cybersecurity', 'ece', 'mechanical', etc.)
    };


    // Function to generate roadmap HTML
    function generateRoadmapHTML(streamKey) {
        const roadmapData = roadmaps[streamKey];
        if (!roadmapData) {
            return '<p>Roadmap data not available for this stream.</p>'; // Handle missing data
        }

        let html = `
            <section class="roadmap-details">
                <h3>${roadmapData.streamName} Learning Roadmap</h3>
                <p class="roadmap-overview">${roadmapData.overview}</p>

                <h4>Essential Subjects:</h4>
                <ul class="roadmap-list">
        `;
        roadmapData.essentialSubjects.forEach(subject => {
            html += `<li>${subject}</li>`;
        });
        html += `</ul>`;

        html += `
                <h4>Beneficial Skills:</h4>
                <ul class="roadmap-list">
        `;
        roadmapData.beneficialSkills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `</ul>`;

        html += `
                <h4>Job Opportunities (AI/ML Focus in India):</h4>
                <ul class="roadmap-list">
        `;
        roadmapData.jobOpportunities.forEach(job => {
            html += `<li>${job}</li>`;
        });
        html += `</ul>`;

        html += `
                <p class="ai-ml-insights"><strong>AI/ML Insights:</strong> ${roadmapData.aiMlInsights}</p>
            </section>
        `;
        return html;
    }


    // Event listener for stream dropdown change
    streamDropdown.addEventListener('change', function() {
        const selectedStreamValue = this.value;

        if (selectedStreamValue) {
            roadmapPlaceholder.style.display = 'none'; // Hide placeholder
            const roadmapHTML = generateRoadmapHTML(selectedStreamValue);
            roadmapContentDiv.innerHTML = roadmapHTML; // Insert roadmap
        } else {
            roadmapPlaceholder.style.display = 'block'; // Show placeholder
            roadmapContentDiv.innerHTML = ''; // Clear roadmap content
        }
    });

    // ... (Rest of your scriptgemcode.js - Dark Mode, etc.) ...
});
/* scriptgemcode.js */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Previous JavaScript code: Page Loading Animation, Smooth Scrolling, Dark/Light Mode, Roadmap Feature) ...

    // Student Email Benefits - Expand/Collapse Functionality

    const categoryTitles = document.querySelectorAll('.category-title');

    categoryTitles.forEach(title => {
        title.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const contentId = this.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            const expandIcon = this.querySelector('.expand-icon'); // Get the icon within the clicked title

            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                content.classList.remove('expanded');
                content.classList.add('collapsed');
                 expandIcon.textContent = '+'; // Change icon to '+' for collapsed state
            } else {
                this.setAttribute('aria-expanded', 'true');
                content.classList.remove('collapsed');
                content.classList.add('expanded');
                expandIcon.textContent = '−'; // Change icon to '−' (minus) or a different collapse icon
            }
        });
    });

    // ... (Rest of your scriptgemcode.js - Dark Mode, etc.) ...
});
/* scriptgemcode.js */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Previous JavaScript code: Page Loading Animation, Smooth Scrolling, Dark/Light Mode, Roadmap Feature, Student Email Benefits) ...

    // Events Feature - Dynamic Event Loading

    const eventCategories = {
        'workshops-seminars': document.getElementById('workshops-seminars-events'),
        'tech-fests-competitions': document.getElementById('tech-fests-competitions-events'),
        'cultural-events': document.getElementById('cultural-events')
    };

    const eventsData = [
        {
            title: 'AI & Machine Learning Workshop',
            date: '2024-08-15',
            description: 'Hands-on workshop on the fundamentals of AI and Machine Learning. Learn to build your first ML model.',
            category: 'workshops-seminars',
            registrationLink: 'https://example.com/ai-workshop-registration',
            isComingSoon: false
        },
        {
            title: 'Web Development Seminar',
            date: '2024-09-05',
            description: 'Comprehensive seminar covering modern web development technologies and best practices.',
            category: 'workshops-seminars',
            registrationLink: 'https://example.com/web-dev-seminar-registration',
            isComingSoon: false
        },
        {
            title: 'National Tech Fest - Technex 2024',
            date: '2024-10-20',
            description: 'Annual national-level tech fest with coding competitions, robotics, and project showcases.',
            category: 'tech-fests-competitions',
            registrationLink: 'https://example.com/technex-2024-registration',
            isComingSoon: false
        },
        {
            title: 'Inter-college Hackathon',
            date: '2024-09-25',
            description: '48-hour hackathon challenging students to solve real-world problems using technology.',
            category: 'tech-fests-competitions',
            registrationLink: 'https://example.com/hackathon-registration',
            isComingSoon: false
        },
        {
            title: 'Telangana Cultural Fest',
            date: '2024-11-10',
            description: 'A vibrant celebration of Telangana culture with music, dance, and traditional performances.',
            category: 'cultural-events',
            registrationLink: 'https://example.com/cultural-fest-registration',
            isComingSoon: false
        },
        {
            title: 'Coding Competition - CodeSprint (Coming Soon)',
            date: '2024-12-05',
            description: 'Online coding competition for all skill levels. Prizes and certificates for top performers.',
            category: 'tech-fests-competitions',
            registrationLink: '#', // No registration link yet, using #
            isComingSoon: true
        },
        {
            title: 'Seminar on Career in Data Science (Coming Soon)',
            date: '2024-07-28',
            description: 'Informative seminar on career paths and opportunities in the field of Data Science.',
            category: 'workshops-seminars',
            registrationLink: '#', // No registration link yet, using #
            isComingSoon: true
        },
        {
            title: 'Folk Dance Workshop (Coming Soon)',
            date: '2024-08-28',
            description: 'Learn traditional Telangana folk dances in this fun and engaging workshop.',
            category: 'cultural-events',
            registrationLink: '#', // No registration link yet, using #
            isComingSoon: true
        }
        // Add more events here...
    ];

    function createEventCardHTML(event) {
        const registerButtonClass = event.isComingSoon ? 'register-button disabled-link' : 'register-button';
        const registerButtonText = event.isComingSoon ? 'Register (Coming Soon)' : 'Register Now';
        const eventCardClass = event.isComingSoon ? 'event-card coming-soon' : 'event-card';
        const eventDate = new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); // Format date

        return `
            <div class="${eventCardClass}">
                <div class="event-details">
                    <h4>${event.title}</h4>
                    <p class="event-date">Date: ${eventDate}</p>
                    <p class="event-description">${event.description}</p>
                </div>
                <div class="event-actions">
                    <a href="${event.registrationLink}" class="${registerButtonClass}" ${event.isComingSoon ? 'tabindex="-1" aria-disabled="true"' : ''}>${registerButtonText}</a>
                </div>
            </div>
        `;
    }

    // Function to populate event list for a category
    function populateEvents(categoryName, events) {
        const eventListContainer = eventCategories[categoryName];
        if (!eventListContainer) return; // Exit if container not found

        let eventsHTML = '';
        events.forEach(event => {
            if (event.category === categoryName) {
                eventsHTML += createEventCardHTML(event);
            }
        });
        eventListContainer.innerHTML = eventsHTML;
    }

    // Populate events for each category
    populateEvents('workshops-seminars', eventsData);
    populateEvents('tech-fests-competitions', eventsData);
    populateEvents('cultural-events', eventsData);


    // ... (Rest of your scriptgemcode.js - Dark Mode, etc., Student Email Benefits, Roadmap) ...
    // ... (Keep the existing Student Email Benefits expand/collapse functionality) ...
    const categoryTitles = document.querySelectorAll('.category-title'); // Ensure event listeners for student benefits are still set up
    categoryTitles.forEach(title => { /* ... (Student email benefits event listener code from previous step) ... */ });
});
/* scriptgemcode.js */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Previous JavaScript code: Page Loading Animation, Smooth Scrolling, Dark/Light Mode, Roadmap, Student Email Benefits, Events) ...

    // Internships Feature - Dynamic Internship Loading

    const internshipListingsContainer = document.getElementById('internship-listings-container');

    const internshipsData = [
        {
            title: 'AI/ML Virtual Internship',
            company: 'TechCorp Innovations',
            skills: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis'],
            duration: '3 Months',
            opportunityType: 'Internship',
            companyBackground: 'Leading tech company focused on AI solutions for various industries.',
            registrationLink: 'https://example.com/aiml-internship-apply',
            isComingSoon: false
        },
        {
            title: 'Data Science Job Shadowing',
            company: 'Data Insights Global',
            skills: ['Data Analysis', 'SQL', 'Python', 'Data Visualization', 'Statistics'],
            duration: '2 Weeks',
            opportunityType: 'Job Shadowing',
            companyBackground: 'Global leader in data analytics and business intelligence.',
            registrationLink: 'https://example.com/data-science-job-shadow-apply',
            isComingSoon: false
        },
        {
            title: 'Cybersecurity Virtual Internship (Coming Soon)',
            company: 'SecureNet Systems',
            skills: ['Network Security', 'Ethical Hacking', 'Cybersecurity Fundamentals', 'Scripting'],
            duration: '6 Months',
            opportunityType: 'Internship',
            companyBackground: 'Specializes in providing cutting-edge cybersecurity solutions.',
            registrationLink: '#',
            isComingSoon: true
        },
        {
            title: 'Software Development Internship (Coming Soon)',
            company: 'CodeCrafters Inc.',
            skills: ['Java', 'Web Development', 'Agile', 'Software Engineering Principles'],
            duration: '4 Months',
            opportunityType: 'Internship',
            companyBackground: 'Innovative software development company creating next-gen applications.',
            registrationLink: '#',
            isComingSoon: true
        }
        // Add more internships here...
    ];

    function createInternshipCardHTML(internship) {
        const applyButtonClass = internship.isComingSoon ? 'apply-button disabled-link' : 'apply-button';
        const applyButtonText = internship.isComingSoon ? 'Apply (Coming Soon)' : 'Apply Now';
        const internshipCardClass = internship.isComingSoon ? 'internship-card coming-soon' : 'internship-card';

        const skillsListHTML = internship.skills.map(skill => `<li>${skill}</li>`).join(''); // Generate skills list HTML

        return `
            <div class="${internshipCardClass}">
                <div class="internship-details">
                    <h3>${internship.title}</h3>
                    <p class="company-name">${internship.company}</p>
                    <ul class="skills-list">
                        ${skillsListHTML}
                    </ul>
                    <p class="duration">Duration: ${internship.duration}</p>
                    <p class="opportunity-type">Type: ${internship.opportunityType}</p>
                    <p class="company-background">Company Background: ${internship.companyBackground}</p>
                </div>
                <div class="internship-actions">
                    <a href="${internship.registrationLink}" class="${applyButtonClass}" ${internship.isComingSoon ? 'tabindex="-1" aria-disabled="true"' : ''}>${applyButtonText}</a>
                </div>
            </div>
        `;
    }

    function populateInternships(internships) {
        let internshipsHTML = '';
        internships.forEach(internship => {
            internshipsHTML += createInternshipCardHTML(internship);
        });
        internshipListingsContainer.innerHTML = internshipsHTML;
    }

    populateInternships(internshipsData);


    // ... (Rest of your scriptgemcode.js - Dark Mode, etc., Student Email Benefits, Roadmap, Events) ...
    // ... (Keep the existing Student Email Benefits expand/collapse functionality and Events page functionality) ...
    const categoryTitles = document.querySelectorAll('.category-title'); // Ensure event listeners for student benefits are still set up
    categoryTitles.forEach(title => { /* ... (Student email benefits event listener code from previous step) ... */ });
    const eventCategoryTitles = document.querySelectorAll('.category-title'); // Ensure event listeners for student benefits are still set up
    eventCategoryTitles.forEach(title => { /* ... (Student email benefits event listener code from previous step) ... */ });
});
/* scriptgemcode.js */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Previous JavaScript code: Page Loading Animation, Smooth Scrolling, Dark/Light Mode, Roadmap, Student Email Benefits, Events, Internships) ...

    // AI Tool Advisor Feature - Questionnaire and Recommendations

    const aiToolQuestionnaireForm = document.getElementById('ai-tool-questionnaire');
    const toolRecommendationsContainer = document.getElementById('tool-recommendations-container');
    const recommendationsPlaceholder = document.getElementById('recommendations-placeholder'); // Get placeholder element

    aiToolQuestionnaireForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const subjectArea = document.getElementById('subject-area').value;
        const taskType = document.getElementById('task-type').value;

        // Basic recommendation logic (replace with more sophisticated logic later)
        let recommendationsHTML = '';
        if (subjectArea && taskType) {
            recommendationsPlaceholder.style.display = 'none'; // Hide placeholder text when recommendations are shown

            if (subjectArea === 'programming' && taskType === 'coding-assistance') {
                recommendationsHTML = `
                    <div class="tool-card">
                        <h4>GitHub Copilot</h4>
                        <p>AI pair programmer that helps you write code faster and smarter.</p>
                        <a href="https://github.com/features/copilot" class="advisor-tool-link" target="_blank">Learn More</a>
                    </div>
                    <div class="tool-card">
                        <h4>Tabnine</h4>
                        <p>AI code completion tool that predicts and suggests code in real-time.</p>
                        <a href="https://www.tabnine.com/" class="advisor-tool-link" target="_blank">Learn More</a>
                    </div>
                `;
            } else if (subjectArea === 'mathematics' && taskType === 'problem-solving') {
                recommendationsHTML = `
                    <div class="tool-card">
                        <h4>WolframAlpha</h4>
                        <p>Computational knowledge engine for math, science, and more.</p>
                        <a href="https://www.wolframalpha.com/" class="advisor-tool-link" target="_blank">Learn More</a>
                    </div>
                    <div class="tool-card">
                        <h4>Symbolab</h4>
                        <p>Step-by-step math solver, calculator, and practice problems.</p>
                        <a href="https://www.symbolab.com/" class="advisor-tool-link" target="_blank">Learn More</a>
                    </div>
                `;
            } else if (subjectArea === 'writing' && taskType === 'essay-writing') {
                recommendationsHTML = `
                    <div class="tool-card">
                        <h4>Grammarly</h4>
                        <p>AI-powered writing assistant for grammar, style, and clarity.</p>
                        <a href="https://www.grammarly.com/" class="advisor-tool-link" target="_blank">Learn More</a>
                    </div>
                    <div class="tool-card">
                        <h4>QuillBot</h4>
                        <p>AI paraphrasing and summarization tool to improve your writing.</p>
                        <a href="https://quillbot.com/" class="advisor-tool-link" target="_blank">Learn More</a>
                    </div>
                `;
            } else if (subjectArea === 'general' && taskType === 'note-taking') {
                recommendationsHTML = `
                    <div class="tool-card">
                        <h4>Evernote</h4>
                        <p>Versatile note-taking and organization app with cross-platform access.</p>
                        <a href="https://evernote.com/" class="advisor-tool-link" target="_blank">Learn More</a>
                    </div>
                    <div class="tool-card">
                        <h4>Notion</h4>
                        <p>All-in-one workspace for notes, tasks, wikis, and databases.</p>
                        <a href="https://www.notion.so/" class="advisor-tool-link" target="_blank">Learn More</a>
                    </div>
                `;
            } else if (subjectArea === 'general' && taskType === 'research') {
                recommendationsHTML = `
                    <div class="tool-card">
                        <h4>Zotero</h4>
                        <p>Powerful research tool to help you collect, organize, cite, and share research.</p>
                        <a href="https://www.zotero.org/" class="advisor-tool-link" target="_blank">Learn More</a>
                    </div>
                    <div class="tool-card">
                        <h4>Mendeley</h4>
                        <p>Reference manager and academic social network.</p>
                        <a href="https://www.mendeley.com/" class="advisor-tool-link" target="_blank">Learn More</a>
                    </div>
                `;
            }
            else {
                recommendationsHTML = `<p>No specific recommendations found for this combination. Please try another selection.</p>`;
                recommendationsPlaceholder.style.display = 'block'; // Show placeholder again if no specific recs
            }
        } else {
            recommendationsHTML = `<p>Please select both Subject Area and Task Type to get recommendations.</p>`;
            recommendationsPlaceholder.style.display = 'block'; // Show placeholder again if no selections made
        }

        toolRecommendationsContainer.innerHTML = recommendationsHTML;
    });


    // ... (Rest of your scriptgemcode.js - Dark Mode, etc., Student Email Benefits, Roadmap, Events, Internships) ...
    // ... (Keep the existing Student Email Benefits expand/collapse, Events, and Internships functionalities) ...
    const categoryTitles = document.querySelectorAll('.category-title'); // Student Email Benefits
    categoryTitles.forEach(title => { /* ... (Student email benefits event listener code from previous step) ... */ });
    const eventCategoryTitles = document.querySelectorAll('.category-title'); // Events page - ensure existing event listeners are still setup
    eventCategoryTitles.forEach(title => { /* ... (Student email benefits event listener code from previous step) ... */ });
});
/* scriptgemcode.js */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Previous JavaScript code: Page Loading Animation, Smooth Scrolling, Dark/Light Mode, Roadmap, Student Email Benefits, Events, Internships, AI Tool Advisor - Questionnaire and Recommendations) ...

    // AI Tool Advisor Feature - Tool Comparison

    const compareToolsButton = document.getElementById('compare-tools-button');
    const comparisonResultsContainer = document.getElementById('comparison-results-container');
    const comparisonPlaceholder = document.getElementById('comparison-placeholder');

    // Placeholder Tool Data (Expand this with more tools and features)
    const aiToolsData = {
        'github-copilot': {
            name: 'GitHub Copilot',
            description: 'AI pair programmer that helps you write code faster and smarter.',
            features: ['Code Completion', 'Contextual Suggestions', 'Multi-language Support', 'Integration with VS Code and other IDEs']
        },
        'tabnine': {
            name: 'Tabnine',
            description: 'AI code completion tool that predicts and suggests code in real-time.',
            features: ['Deep Code Completion', 'Full-Line & Function Completion', 'Team Support', 'Cloud & Local Models']
        },
        'wolframalpha': {
            name: 'WolframAlpha',
            description: 'Computational knowledge engine for math, science, and more.',
            features: ['Math Problem Solving', 'Data Analysis', 'Scientific Computations', 'Knowledge Base Access']
        },
        'symbolab': {
            name: 'Symbolab',
            description: 'Step-by-step math solver, calculator, and practice problems.',
            features: ['Step-by-step Solutions', 'Practice Problems', 'Graphing Calculator', 'Geometry Solver']
        },
        'grammarly': {
            name: 'Grammarly',
            description: 'AI-powered writing assistant for grammar, style, and clarity.',
            features: ['Grammar & Spell Check', 'Style Suggestions', 'Plagiarism Detection', 'Tone Adjustment']
        },
        'quillbot': {
            name: 'QuillBot',
            description: 'AI paraphrasing and summarization tool to improve your writing.',
            features: ['Paraphrasing Tool', 'Summarizer', 'Grammar Checker', 'Citation Generator']
        },
        'evernote': {
            name: 'Evernote',
            description: 'Versatile note-taking and organization app with cross-platform access.',
            features: ['Note-Taking', 'Web Clipping', 'Task Management', 'Cross-Platform Sync']
        },
        'notion': {
            name: 'Notion',
            description: 'All-in-one workspace for notes, tasks, wikis, and databases.',
            features: ['Note-Taking & Wikis', 'Project Management', 'Databases', 'Customizable Workspaces']
        },
        'zotero': {
            name: 'Zotero',
            description: 'Powerful research tool to help you collect, organize, cite, and share research.',
            features: ['Reference Management', 'Citation Generation', 'PDF Organization', 'Collaboration Features']
        },
        'mendeley': {
            name: 'Mendeley',
            description: 'Reference manager and academic social network.',
            features: ['Reference Management', 'PDF Annotation', 'Research Network', 'Citation Styles']
        }
    };


    compareToolsButton.addEventListener('click', function() {
        const tool1Value = document.getElementById('tool1').value;
        const tool2Value = document.getElementById('tool2').value;

        let comparisonHTML = '';

        if (!tool1Value || !tool2Value) {
            comparisonHTML = '<p>Please select two tools to compare.</p>';
            comparisonPlaceholder.style.display = 'block'; // Show placeholder if error
        } else if (tool1Value === tool2Value) {
            comparisonHTML = '<p>Please select two *different* tools for comparison.</p>';
            comparisonPlaceholder.style.display = 'block'; // Show placeholder if error
        } else {
            comparisonPlaceholder.style.display = 'none'; // Hide placeholder when results are shown

            const tool1Data = aiToolsData[tool1Value];
            const tool2Data = aiToolsData[tool2Value];

            if (tool1Data && tool2Data) {
                comparisonHTML = `
                    <div class="tool-comparison-card">
                        <div class="tool-header">
                            <h4>${tool1Data.name}</h4>
                        </div>
                        <div class="tool-features">
                            <h5>Key Features:</h5>
                            <ul>
                                ${tool1Data.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                            <p class="tool-description">${tool1Data.description}</p>
                            <a href="#" class="advisor-tool-link" target="_blank">Learn More</a>  </div>
                    </div>
                    <div class="tool-comparison-card">
                        <div class="tool-header">
                            <h4>${tool2Data.name}</h4>
                        </div>
                        <div class="tool-features">
                            <h5>Key Features:</h5>
                            <ul>
                                ${tool2Data.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                            <p class="tool-description">${tool2Data.description}</p>
                            <a href="#" class="advisor-tool-link" target="_blank">Learn More</a> </div>
                    </div>
                `;
            } else {
                comparisonHTML = '<p>Error: Could not retrieve tool data. Please try again.</p>'; // Error if data is missing (shouldn't happen with current data)
                comparisonPlaceholder.style.display = 'block'; // Show placeholder if error
            }
        }

        comparisonResultsContainer.innerHTML = comparisonHTML;
    });


    // ... (Rest of your scriptgemcode.js - Dark Mode, etc., Student Email Benefits, Roadmap, Events, Internships, AI Tool Advisor - Questionnaire and Recommendations) ...
    // ... (Keep all existing functionalities - Student Email Benefits expand/collapse, Events, Internships, AI Tool Advisor Questionnaire) ...
    const categoryTitles = document.querySelectorAll('.category-title'); // Student Email Benefits
    categoryTitles.forEach(title => { /* ... (Student email benefits event listener code from previous step) ... */ });
     const eventCategoryTitles = document.querySelectorAll('.category-title'); // Events page - ensure existing event listeners are still setup
    eventCategoryTitles.forEach(title => { /* ... (Student email benefits event listener code from previous step) ... */ });
});
/* scriptgemcode.js - UPDATED PART - AI Prompt Engineering Assistance - Interactive Prompt Builder (No Errors) */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Your previous JavaScript code in scriptgemcode.js should be here) ...

    // AI Prompt Engineering Assistance - Interactive Prompt Builder

    const aiPromptBuilderForm = document.getElementById('ai-prompt-builder-form');
    const userPromptOutput = document.getElementById('user-prompt-output');

    aiPromptBuilderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const taskType = document.getElementById('prompt-task').value;
        const topic = document.getElementById('prompt-topic').value;
        const keywords = document.getElementById('prompt-keywords').value;
        const style = document.getElementById('prompt-style').value;

        let generatedPrompt = "";

        if (taskType) {
            generatedPrompt += `Task: ${taskType}.\n`;
        }
        if (topic) {
            generatedPrompt += `Topic: ${topic}.\n`;
        }
        if (keywords) {
            generatedPrompt += `Keywords: ${keywords}.\n`;
        }
        if (style) {
            generatedPrompt += `Style: ${style}.\n`;
        }

        if (generatedPrompt) {
            userPromptOutput.value = "Generate a response for the following:\n" + generatedPrompt.trim(); // Basic prompt structure
        } else {
            userPromptOutput.value = "Please select a Task Type to generate a prompt."; // If no task selected
        }
    });

    // ... (Your previous JavaScript code in scriptgemcode.js should continue after this point - e.g., Dark Mode, Student Email Benefits, Event Listeners, etc.) ...
});
/* scriptgemcode.js - UPDATED PART - AI Ethics & Bias Awareness - Bias Detection Tool (Basic Keyword Check) */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Your previous JavaScript code in scriptgemcode.js should be here) ...

    // AI Prompt Engineering Assistance - Interactive Prompt Builder
    // ... (Your AI Prompt Builder JavaScript code) ...


    // AI Ethics & Bias Awareness - Bias Detection Tool (Basic Keyword Check)

    const biasCheckButton = document.getElementById('bias-check-button');
    const biasTextInput = document.getElementById('bias-text-input');
    const biasResultsContainer = document.getElementById('bias-results-container');
    const biasResultsPlaceholder = document.getElementById('bias-results-placeholder');

    // **VERY BASIC KEYWORD LISTS - FOR DEMONSTRATION ONLY.  NOT COMPREHENSIVE OR ACCURATE BIAS DETECTION.**
    const biasKeywords = {
        gender: ["men", "women", "male", "female", "he", "she", "him", "her", "man", "woman"], // Example gender-related keywords
        race: ["black", "white", "asian", "hispanic", "indian"], // Example race-related keywords - VERY simplified and incomplete
        religion: ["christian", "muslim", "jewish", "hindu", "buddhist"] // Example religion-related keywords - VERY simplified and potentially problematic
        // Add more categories and keywords as needed for demonstration
    };


    biasCheckButton.addEventListener('click', function() {
        const inputText = biasTextInput.value.toLowerCase(); // Convert input to lowercase for case-insensitive matching
        let biasDetected = false;
        let resultsHTML = "";

        if (inputText.trim() !== "") {
            biasResultsPlaceholder.style.display = 'none'; // Hide placeholder

            for (const category in biasKeywords) {
                let categoryBiasFound = false;
                for (const keyword of biasKeywords[category]) {
                    if (inputText.includes(keyword)) {
                        categoryBiasFound = true;
                        biasDetected = true;
                        break; // No need to check other keywords in this category if one is found
                    }
                }
                if (categoryBiasFound) {
                    resultsHTML += `<p>Potential <strong>${category} bias</strong> keyword(s) detected.</p>`;
                }
            }

            if (biasDetected) {
                biasResultsContainer.innerHTML = `<h3>Potential Biases Detected (Keyword Based - VERY BASIC)</h3>${resultsHTML}<p class="bias-disclaimer"><strong>Disclaimer:</strong> This is a very basic keyword-based bias check for demonstration purposes only. It is NOT a comprehensive or accurate bias detection tool. Real bias detection is complex and requires sophisticated AI analysis.</p>`;
                biasResultsContainer.style.backgroundColor = '#ffcdd2'; // Light red for potential bias detected
                biasResultsContainer.style.borderColor = '#ef9a9a'; // Light red border
                biasResultsContainer.style.textAlign = 'left';
                biasResultsContainer.style.whiteSpace = 'pre-line';


            } else {
                biasResultsContainer.innerHTML = "<p>No explicit bias keywords detected in the text (based on very basic keyword lists).</p><p class='bias-disclaimer'><strong>Disclaimer:</strong> This is a very basic keyword-based check and does not guarantee the absence of bias.  Real bias can be subtle and complex.</p>";
                biasResultsContainer.style.backgroundColor = '#c8e6c9'; // Light green for no keywords detected
                biasResultsContainer.style.borderColor = '#a5d6a7'; // Light green border
                biasResultsContainer.style.textAlign = 'center';
                biasResultsContainer.style.whiteSpace = 'normal'; // Revert to normal whitespace

            }


        } else {
            biasResultsPlaceholder.style.display = 'block'; // Show placeholder if no input
            biasResultsContainer.innerHTML = ""; // Clear any previous results
            biasResultsContainer.style.backgroundColor = ''; // Reset background color
            biasResultsContainer.style.borderColor = ''; // Reset border color
            biasResultsContainer.style.textAlign = 'center';
        }
    });


    // ... (Rest of your scriptgemcode.js - Dark Mode, etc., Student Email Benefits, Roadmap, Events, Internships, AI Tool Advisor, Tool Comparison, AI Prompt Builder) ...
    // ... (Keep all existing functionalities) ...

    const categoryTitles = document.querySelectorAll('.category-title'); // Student Email Benefits
    categoryTitles.forEach(title => { /* ... (Student email benefits event listener code) ... */ });
    const eventCategoryTitles = document.querySelectorAll('.category-title'); // Events page
    eventCategoryTitles.forEach(title => { /* ... (Event listeners) ... */ });

});
/* scriptgemcode.js - UPDATED PART - AI Tool Advisor - Tool Comparison (Detailed) */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Your previous JavaScript code in scriptgemcode.js - including AI Tool Advisor Questionnaire & Recommendations, AI Ethics Bias Detection, AI Prompt Builder etc.) ...

    // AI Tool Advisor - Tool Comparison (Detailed)

    const compareButton = document.getElementById('compare-button');
    const tool1Select = document.getElementById('tool1-select');
    const tool2Select = document.getElementById('tool2-select');
    const comparisonTableContainer = document.getElementById('comparison-table-container');
    const comparisonPlaceholder = document.getElementById('comparison-placeholder');
    const aiToolComparisonTable = document.getElementById('ai-tool-comparison-table');


    // **AI TOOLS DATA - DETAILED COMPARISON INFORMATION**
    const aiToolsData = {
        "chatgpt": {
            name: "ChatGPT",
            description: "A versatile AI language model excelling in conversational AI, text generation, and creative content. Offers both free (GPT-3.5) and paid (GPT-4) versions.",
            features: {
                "Text Generation": "Excellent - Highly advanced, nuanced, and contextually aware text generation.",
                "Code Generation": "Good - Capable of generating code in multiple languages, helpful for coding tasks.",
                "Image Generation": "No - Primarily text-based, no built-in image generation.",
                "Data Analysis": "Limited - Basic data interpretation through conversation, not designed for in-depth analysis.",
                "Learning Assistance": "Excellent - Explains complex topics, provides study aids, offers feedback on writing.",
                "Creative Writing": "Excellent - Highly capable in creative writing, storytelling, and poetry.",
                "Multilingual Support": "Excellent - Supports a wide range of languages for input and output.",
                "Platforms": "Web, API, Mobile Apps (via third-party)",
                "Pricing": "Free (GPT-3.5), Paid (GPT-4 via ChatGPT Plus subscription)"
            },
            learn_more_link: "https://openai.com/chatgpt"
        },
        "bard": {
            name: "Bard (Gemini)",
            description: "Google's AI conversational model, integrated with Google services, offering up-to-date information and creative text formats. Powered by the Gemini models.",
            features: {
                "Text Generation": "Very Good - Strong text generation, integrates real-time information from the web.",
                "Code Generation": "Very Good - Proficient in coding assistance, debugging, and code explanations, leveraging Google's expertise.",
                "Image Generation": "Yes (Gemini Pro & Gemini API) - Can generate images and understand visual inputs (multimodal capabilities).",
                "Data Analysis": "Good - Integrates with Google Sheets and other services for basic data exploration.",
                "Learning Assistance": "Very Good - Provides summaries, explanations, and can access and process information from web sources.",
                "Creative Writing": "Good - Capable of creative writing, poetry, and different creative formats.",
                "Multilingual Support": "Excellent - Broad language support, leveraging Google Translate capabilities.",
                "Platforms": "Web, Mobile (Google App), API (Gemini API)",
                "Pricing": "Free (Bard), Paid (Gemini Advanced via Google One AI Premium)"
            },
            learn_more_link: "https://bard.google.com/"
        },
        "copilot": {
            name: "GitHub Copilot",
            description: "An AI pair programmer that provides code suggestions and autocompletions directly within code editors. Designed to boost developer productivity.",
            features: {
                "Text Generation": "Limited - Primarily focused on code, not general text generation.",
                "Code Generation": "Excellent - Highly specialized for code, suggests lines, functions, and code blocks in real-time within IDEs.",
                "Image Generation": "No - Not relevant, focused on coding.",
                "Data Analysis": "No - Not relevant, focused on coding.",
                "Learning Assistance": "Good - Helps learn coding practices and discover new libraries through code suggestions.",
                "Creative Writing": "No - Not relevant, focused on coding.",
                "Multilingual Support": "Excellent - Supports numerous programming languages.",
                "Platforms": "Code Editors (VS Code, Neovim, JetBrains IDEs), Cloud",
                "Pricing": "Subscription-based (GitHub Copilot Individual, GitHub Copilot Business)"
            },
            learn_more_link: "https://github.com/features/copilot"
        },
        "claude": {
            name: "Claude",
            description: "An AI assistant focused on helpful, harmless, and honest conversations. Known for strong natural language understanding and longer context windows.",
            features: {
                "Text Generation": "Excellent - Strong natural language understanding and generation, good for nuanced conversations and detailed responses.",
                "Code Generation": "Good - Can assist with coding tasks and generate code snippets.",
                "Image Generation": "No - Primarily text-based.",
                "Data Analysis": "Limited - Not designed for direct data analysis.",
                "Learning Assistance": "Very Good - Can explain concepts, summarize information, and engage in helpful dialogues.",
                "Creative Writing": "Good - Capable of creative writing and various text formats.",
                "Multilingual Support": "Good - Supports multiple languages.",
                "Platforms": "Web, API",
                "Pricing": "Free (Claude Instant), Paid (Claude 2, Claude Pro)"
            },
            learn_more_link: "https://www.anthropic.com/claude"
        },
        "writesonic": {
            name: "Writesonic",
            description: "AI-powered writing tool suite focused on content creation for marketing, blogs, articles, and SEO. Offers various writing templates and tools.",
            features: {
                "Text Generation": "Very Good - Specializes in marketing and SEO-focused content, blog posts, articles, and ad copy.",
                "Code Generation": "Limited - Some basic coding assistance, but not its primary focus.",
                "Image Generation": "Yes - Integrates with AI image generation capabilities.",
                "Data Analysis": "No - Not designed for data analysis.",
                "Learning Assistance": "Limited - Primarily for content creation, less focused on direct learning assistance.",
                "Creative Writing": "Good - Can assist with creative writing tasks, especially marketing-related content.",
                "Multilingual Support": "Good - Supports multiple languages for content generation.",
                "Platforms": "Web",
                "Pricing": "Subscription-based (various plans based on words/features)"
            },
            learn_more_link: "https://writesonic.com/"
        },
        "jasper": {
            name: "Jasper (Formerly Jarvis)",
            description: "AI content platform for marketing teams, focused on generating marketing copy, blog content, and social media posts. Offers a wide range of templates.",
            features: {
                "Text Generation": "Excellent - Highly specialized for marketing content, excels in generating persuasive and engaging copy.",
                "Code Generation": "Limited - Not a primary feature.",
                "Image Generation": "Yes - Integrates with AI image generation.",
                "Data Analysis": "No - Not designed for data analysis.",
                "Learning Assistance": "Limited - Focus on marketing content creation, less for academic learning.",
                "Creative Writing": "Very Good - Strong for marketing-related creative content and storytelling.",
                "Multilingual Support": "Good - Supports multiple languages.",
                "Platforms": "Web, API",
                "Pricing": "Subscription-based (Creator, Teams, Business plans)"
            },
            learn_more_link: "https://www.jasper.ai/"
        },
        "rytr": {
            name: "Rytr",
            description: "An AI writing assistant designed to generate content quickly for various use cases like emails, social media, and blog posts, with a focus on speed and ease of use.",
            features: {
                "Text Generation": "Good - Quick content generation for short-form content, emails, social media, and basic blog outlines.",
                "Code Generation": "Limited - Not a primary feature.",
                "Image Generation": "No - Primarily text-based.",
                "Data Analysis": "No - Not designed for data analysis.",
                "Learning Assistance": "Limited - Focus on quick content creation, less for in-depth learning.",
                "Creative Writing": "Basic - Can assist with basic creative prompts and short-form creative text.",
                "Multilingual Support": "Good - Supports multiple languages.",
                "Platforms": "Web, Browser Extension",
                "Pricing": "Free plan available, Paid subscriptions (Saver, Unlimited plans)"
            },
            learn_more_link: "https://rytr.me/"
        },
        "simplifiedaiwriter": {
            name: "Simplified AI Writer",
            description: "Part of a broader design and marketing platform, the AI writer tool focuses on generating marketing copy, articles, and social media content, integrated with design features.",
            features: {
                "Text Generation": "Good - Decent quality for marketing and social media content, integrated with design workflow.",
                "Code Generation": "No - Not a feature.",
                "Image Generation": "Yes - Integrated image generation and design tools.",
                "Data Analysis": "No - Not designed for data analysis.",
                "Learning Assistance": "Limited - Primarily for content creation within a design context.",
                "Creative Writing": "Good - Can assist with creative marketing copy and visual content.",
                "Multilingual Support": "Good - Supports multiple languages.",
                "Platforms": "Web",
                "Pricing": "Free plan available, Paid subscriptions (various plans with different features)"
            },
            learn_more_link: "https://simplified.com/ai-writer/"
        },
        "inkforall": {
            name: "INK (INKforall)",
            description: "AI content and SEO platform focused on SEO-optimized content creation, including articles, website copy, and marketing materials, with SEO scoring.",
            features: {
                "Text Generation": "Very Good - Strong focus on SEO-optimized content, articles, and website copy designed to rank well.",
                "Code Generation": "No - Not a feature.",
                "Image Generation": "No - Primarily text-focused.",
                "Data Analysis": "Limited - SEO analysis and scoring, but not general data analysis.",
                "Learning Assistance": "Limited - Focus on SEO writing and content strategy.",
                "Creative Writing": "Good - Can assist with creative content within SEO and marketing context.",
                "Multilingual Support": "Good - Supports multiple languages with SEO optimization.",
                "Platforms": "Web",
                "Pricing": "Subscription-based (Starter, Pro, Enterprise plans)"
            },
            learn_more_link: "https://inkforall.com/"
        },
        "neuroflash": {
            name: "Neuroflash",
            description: "AI marketing co-pilot designed for generating marketing texts and content in German and other languages, with a focus on the European market.",
            features: {
                "Text Generation": "Very Good - Strong in marketing text generation, particularly for German-speaking markets, supports various content types.",
                "Code Generation": "No - Not a feature.",
                "Image Generation": "Yes - Integrated AI image generation.",
                "Data Analysis": "Limited - Marketing performance analysis within its platform.",
                "Learning Assistance": "Limited - Focus on marketing and content creation.",
                "Creative Writing": "Good - Can assist with creative marketing campaigns and copy.",
                "Multilingual Support": "Excellent - Strong multilingual support, especially for European languages.",
                "Platforms": "Web",
                "Pricing": "Subscription-based (Free trial, various paid plans)"
            },
            learn_more_link: "https://neuroflash.com/"
        }
    };


    compareButton.addEventListener('click', function() {
        const tool1Value = tool1Select.value;
        const tool2Value = tool2Select.value;

        if (!tool1Value || !tool2Value) {
            comparisonPlaceholder.textContent = "Please select two tools to compare.";
            aiToolComparisonTable.innerHTML = ""; // Clear table if any
            comparisonTableContainer.style.display = 'block'; // Show container
            comparisonPlaceholder.style.display = 'block'; // Show placeholder
            return; // Exit function if tools are not selected
        }

        if (tool1Value === tool2Value) {
            comparisonPlaceholder.textContent = "Please select two *different* tools to compare.";
            aiToolComparisonTable.innerHTML = ""; // Clear table if any
            comparisonTableContainer.style.display = 'block'; // Show container
            comparisonPlaceholder.style.display = 'block'; // Show placeholder
            return; // Exit if same tools selected
        }


        const tool1Data = aiToolsData[tool1Value];
        const tool2Data = aiToolsData[tool2Value];


        if (tool1Data && tool2Data) {
            comparisonPlaceholder.style.display = 'none'; // Hide placeholder
            comparisonTableContainer.style.display = 'block'; // Show table container

            let tableHTML = `
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>${tool1Data.name}</th>
                        <th>${tool2Data.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Description</td>
                        <td>${tool1Data.description}</td>
                        <td>${tool2Data.description}</td>
                    </tr>
            `;

            // Iterate through features and create table rows
            for (const featureName in tool1Data.features) {
                tableHTML += `
                    <tr>
                        <td>${featureName}</td>
                        <td>${tool1Data.features[featureName]}</td>
                        <td>${tool2Data.features[featureName]}</td>
                    </tr>
                `;
            }

            tableHTML += `
                    <tr>
                        <td>Learn More</td>
                        <td><a href="${tool1Data.learn_more_link}" target="_blank" class="tool-link">Learn More</a></td>
                        <td><a href="${tool2Data.learn_more_link}" target="_blank" class="tool-link">Learn More</a></td>
                    </tr>
                </tbody>
            `;

            aiToolComparisonTable.innerHTML = tableHTML;


        } else {
            comparisonPlaceholder.textContent = "Error: Could not retrieve tool data.";
            aiToolComparisonTable.innerHTML = ""; // Clear table if any
            comparisonTableContainer.style.display = 'block'; // Show container
            comparisonPlaceholder.style.display = 'block'; // Show placeholder
        }
    });


    // ... (Rest of your scriptgemcode.js - AI Tool Advisor Questionnaire, AI Ethics Bias Detection, AI Prompt Builder, Dark Mode, etc.) ...
    // ... (Keep all existing functionalities) ...

    const advisorForm = document.getElementById('ai-tool-advisor-form'); // AI Tool Advisor Questionnaire
    advisorForm.addEventListener('submit', function(event) {  /* ... (AI Tool Advisor Questionnaire code) ... */ });

    const aiPromptBuilderForm = document.getElementById('ai-prompt-builder-form'); // AI Prompt Builder
    aiPromptBuilderForm.addEventListener('submit', function(event) { /* ... (AI Prompt Builder code) ... */ });

    const biasCheckButton = document.getElementById('bias-check-button'); // AI Ethics Bias Detection
    biasCheckButton.addEventListener('click', function() { /* ... (AI Ethics Bias Detection code) ... */ });

    const categoryTitles = document.querySelectorAll('.category-title'); // Student Email Benefits
    categoryTitles.forEach(title => { /* ... (Student email benefits event listener code) ... */ });
    const eventCategoryTitles = document.querySelectorAll('.category-title'); // Events page
    eventCategoryTitles.forEach(title => { /* ... (Event listeners) ... */ });


});
/* scriptgemcode.js - UPDATED PART - AI Tool Advisor - Questionnaire Recommendations (Improved) */

document.addEventListener('DOMContentLoaded', function() {
    // ... (Your previous JavaScript code in scriptgemcode.js - including AI Tool Advisor Tool Comparison, AI Ethics Bias Detection, AI Prompt Builder etc.) ...

    // AI Tool Advisor - Questionnaire Recommendations (Improved)

    const advisorForm = document.getElementById('ai-tool-advisor-form');
    const recommendationResults = document.getElementById('recommendation-results');
    const recommendationPlaceholder = document.getElementById('recommendation-placeholder');
    const aiToolList = document.getElementById('ai-tool-list');


    // **UPDATED AI TOOLS DATA - WITH SUITABILITY CRITERIA FOR RECOMMENDATIONS**
    const aiToolsData = {
        "chatgpt": {
            name: "ChatGPT",
            description: "A versatile AI language model excelling in conversational AI, text generation, and creative content. Offers both free (GPT-3.5) and paid (GPT-4) versions.",
            features: { /* ... (features from previous step) ... */ },
            learn_more_link: "https://openai.com/chatgpt",
            suitability: {
                studyGoals: ["understand-concepts", "improve-writing", "coding-assistance", "research-support", "efficiency-productivity"],
                learningStyles: ["visual", "auditory", "reading-writing", "kinesthetic"], //Broadly suitable
                familiarityLevels: ["beginner", "intermediate", "advanced"] // Generally easy to start with
            }
        },
        "bard": {
            name: "Bard (Gemini)",
            description: "Google's AI conversational model, integrated with Google services, offering up-to-date information and creative text formats. Powered by the Gemini models.",
            features: { /* ... (features from previous step) ... */ },
            learn_more_link: "https://bard.google.com/",
            suitability: {
                studyGoals: ["understand-concepts", "improve-writing", "research-support", "efficiency-productivity"],
                learningStyles: ["visual", "auditory", "reading-writing"], //Less strong on kinesthetic compared to others
                familiarityLevels: ["beginner", "intermediate", "advanced"] // Easy to begin
            }
        },
        "copilot": {
            name: "GitHub Copilot",
            description: "An AI pair programmer that provides code suggestions and autocompletions directly within code editors. Designed to boost developer productivity.",
            features: { /* ... (features from previous step) ... */ },
            learn_more_link: "https://github.com/features/copilot",
            suitability: {
                studyGoals: ["coding-assistance", "efficiency-productivity"], // Primarily for coding
                learningStyles: ["kinesthetic", "reading-writing"], //Hands-on coding, reading documentation
                familiarityLevels: ["intermediate", "advanced"] // Best for those with coding experience
            }
        },
        "claude": {
            name: "Claude",
            description: "An AI assistant focused on helpful, harmless, and honest conversations. Known for strong natural language understanding and longer context windows.",
            features: { /* ... (features from previous step) ... */ },
            learn_more_link: "https://www.anthropic.com/claude",
            suitability: {
                studyGoals: ["understand-concepts", "improve-writing", "research-support", "efficiency-productivity"],
                learningStyles: ["auditory", "reading-writing"], //Good for discussion, reading heavy learning
                familiarityLevels: ["beginner", "intermediate"] // User-friendly for beginners
            }
        },
        "writesonic": {
            name: "Writesonic",
            description: "AI-powered writing tool suite focused on content creation for marketing, blogs, articles, and SEO. Offers various writing templates and tools.",
            features: { /* ... (features from previous step) ... */ },
            learn_more_link: "https://writesonic.com/",
            suitability: {
                studyGoals: ["improve-writing", "efficiency-productivity", "research-support"], // Writing, efficiency in content creation, research for writing
                learningStyles: ["reading-writing", "visual"], // Focus on written output, visual templates in platform
                familiarityLevels: ["beginner", "intermediate"] // Relatively easy to use
            }
        },
        "jasper": {
            name: "Jasper (Formerly Jarvis)",
            description: "AI content platform for marketing teams, focused on generating marketing copy, blog content, and social media posts. Offers a wide range of templates.",
            features: { /* ... (features from previous step) ... */ },
            learn_more_link: "https://www.jasper.ai/",
            suitability: {
                studyGoals: ["improve-writing", "efficiency-productivity"], // Primarily writing focused, marketing/content efficiency
                learningStyles: ["reading-writing", "visual"], // Output is written, visual templates in platform
                familiarityLevels: ["intermediate", "advanced"] // More features, might need some learning curve
            }
        },
        "rytr": {
            name: "Rytr",
            description: "An AI writing assistant designed to generate content quickly for various use cases like emails, social media, and blog posts, with a focus on speed and ease of use.",
            features: { /* ... (features from previous step) ... */ },
            learn_more_link: "https://rytr.me/",
            suitability: {
                studyGoals: ["improve-writing", "efficiency-productivity"], // Quick writing tasks, improving writing speed
                learningStyles: ["reading-writing"], // Output is primarily written
                familiarityLevels: ["beginner", "intermediate"] // Very easy and quick to use
            }
        },
        "simplifiedaiwriter": {
            name: "Simplified AI Writer",
            description: "Part of a broader design and marketing platform, the AI writer tool focuses on generating marketing copy, articles, and social media content, integrated with design features.",
            features: { /* ... (features from previous step) ... */ },
            learn_more_link: "https://simplified.com/ai-writer/",
            suitability: {
                studyGoals: ["improve-writing", "efficiency-productivity", "creative-writing"], // Writing, content creation in design context
                learningStyles: ["visual", "reading-writing"], // Visual design integration, written output
                familiarityLevels: ["beginner", "intermediate"] // Integrated platform, relatively user-friendly
            }
        },
        "inkforall": {
            name: "INK (INKforall)",
            description: "AI content and SEO platform focused on SEO-optimized content creation, including articles, website copy, and marketing materials, with SEO scoring.",
            features: { /* ... (features from previous step) ... */ },
            learn_more_link: "https://inkforall.com/",
            suitability: {
                studyGoals: ["improve-writing", "research-support", "efficiency-productivity"], // SEO writing, research for content, efficiency in SEO content
                learningStyles: ["reading-writing", "visual"], // Written output, SEO reports are visual
                familiarityLevels: ["intermediate", "advanced"] // SEO focus might require some SEO knowledge
            }
        },
        "neuroflash": {
            name: "Neuroflash",
            description: "AI marketing co-pilot designed for generating marketing texts and content in German and other languages, with a focus on the European market.",
            features: { /* ... (features from previous step) ... */ },
            learn_more_link: "https://neuroflash.com/",
            suitability: {
                studyGoals: ["improve-writing", "efficiency-productivity", "creative-writing"], // Marketing writing, efficiency in marketing content
                learningStyles: ["reading-writing", "visual"], // Written marketing content, visual aspects in marketing
                familiarityLevels: ["intermediate", "advanced"] // Marketing focus might need marketing understanding
            }
        }
    };


    advisorForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const studyGoal = document.getElementById('study-goal').value;
        const learningStyle = document.getElementById('preferred-learning-style').value;
        const familiarityLevel = document.getElementById('familiarity-ai-tools').value;

        recommendationPlaceholder.style.display = 'none'; // Hide placeholder
        aiToolList.innerHTML = ""; // Clear previous recommendations
        recommendationResults.style.display = 'block'; // Show results area

        const recommendedTools = [];

        for (const toolKey in aiToolsData) {
            const tool = aiToolsData[toolKey];
            const suitability = tool.suitability;

            if (suitability.studyGoals.includes(studyGoal) &&
                suitability.learningStyles.includes(learningStyle) &&
                suitability.familiarityLevels.includes(familiarityLevel)) {
                recommendedTools.push(tool);
            }
        }


        if (recommendedTools.length > 0) {
            let recommendationsHTML = "";
            recommendedTools.forEach(tool => {
                recommendationsHTML += `
                    <li class="ai-tool-recommendation-item">
                        <h4>${tool.name}</h4>
                        <p>${tool.description}</p>
                        <a href="${tool.learn_more_link}" class="tool-link" target="_blank">Learn More</a>
                    </li>
                `;
            });
            aiToolList.innerHTML = recommendationsHTML;
            recommendationResults.style.backgroundColor = '#e8f5e9'; // Light green background for recommendations
            recommendationResults.style.borderColor = '#c8e6c9'; // Light green border
            recommendationResults.style.textAlign = 'left';


        } else {
            aiToolList.innerHTML = "<p>No specific tools strongly matched all your criteria. Here are some tools that generally align with some of your selections. Explore the Domain Catalogs below for a broader view.</p>";
            recommendationResults.style.backgroundColor = '#ffe0b2'; // Light orange for no strong matches
            recommendationResults.style.borderColor = '#ffcc80'; // Light orange border
            recommendationResults.style.textAlign = 'center';
        }
    });


    // ... (Rest of your scriptgemcode.js - AI Tool Advisor Tool Comparison, AI Ethics Bias Detection, AI Prompt Builder, Dark Mode etc.) ...
    // ... (Keep all existing functionalities) ...

    const compareButton = document.getElementById('compare-button'); // AI Tool Advisor Tool Comparison
    compareButton.addEventListener('click', function() { /* ... (AI Tool Advisor Tool Comparison code) ... */ });

    const aiPromptBuilderForm = document.getElementById('ai-prompt-builder-form'); // AI Prompt Builder
    aiPromptBuilderForm.addEventListener('submit', function(event) { /* ... (AI Prompt Builder code) ... */ });

    const biasCheckButton = document.getElementById('bias-check-button'); // AI Ethics Bias Detection
    biasCheckButton.addEventListener('click', function() { /* ... (AI Ethics Bias Detection code) ... */ });

    const categoryTitles = document.querySelectorAll('.category-title'); // Student Email Benefits
    categoryTitles.forEach(title => { /* ... (Student email benefits event listener code) ... */ });
    const eventCategoryTitles = document.querySelectorAll('.category-title'); // Events page
    eventCategoryTitles.forEach(title => { /* ... (Event listeners) ... */ });


});
// VERY BASIC Theme Toggle Functionality - FOR TESTING DEFAULT LIGHT MODE
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;
const toggleIcon = document.querySelector('.toggle-icon');
const toggleText = document.querySelector('.toggle-text');

bodyElement.classList.remove('dark-mode'); // FORCE Light Mode on initial load
toggleIcon.textContent = '🌙';
toggleText.textContent = 'Dark Mode';


themeToggleBtn.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-mode');

    if (bodyElement.classList.contains('dark-mode')) {
        toggleIcon.textContent = '☀️';
        toggleText.textContent = 'Light Mode';
    } else {
        toggleIcon.textContent = '🌙';
        toggleText.textContent = 'Dark Mode';
    }
});