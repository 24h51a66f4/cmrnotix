// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode); // Save preference to localStorage
  });
  
  // Load Dark Mode Preference on Page Load
  window.addEventListener('load', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  });
  
  // Academic Year Selection
  const yearButtons = document.querySelectorAll('.year-btn');
  const subjectList = document.getElementById('subject-list');
  const comingSoon = document.getElementById('coming-soon');
  
  yearButtons.forEach(button => {
    button.addEventListener('click', () => {
      const year = button.dataset.year;
  
      // Hide all sections initially
      subjectList.classList.add('hidden');
      comingSoon.classList.add('hidden');
  
      if (year === '1') {
        subjectList.classList.remove('hidden'); // Show subjects for 1st year
      } else {
        comingSoon.classList.remove('hidden'); // Show "Coming Soon" message
      }
    });
  });
  
  // Learning Roadmap Generation
  const streamSelector = document.getElementById('stream-selector');
  const roadmapContent = document.getElementById('roadmap-content');
  const selectedStreamElement = document.getElementById('selected-stream');
  const roadmapList = document.getElementById('roadmap-list');
  
  // Roadmap Data
  const roadmaps = {
    'cse-core': [
      'Mathematics: Linear Algebra, Calculus, Probability',
      'Programming: Python, C++, Java',
      'Data Structures & Algorithms',
      'Job Opportunities: Software Developer, Systems Engineer',
      'Expected Salary in India: ₹4-8 LPA'
    ],
    'cse-ai-ml': [
      'Mathematics: Linear Algebra, Statistics, Calculus',
      'Programming: Python, TensorFlow, PyTorch',
      'Machine Learning: Supervised & Unsupervised Learning',
      'Job Opportunities: AI/ML Engineer, Data Scientist',
      'Expected Salary in India: ₹6-15 LPA'
    ],
    'cse-data-science': [
      'Mathematics: Statistics, Probability',
      'Programming: Python, R',
      'Libraries: Pandas, NumPy, Matplotlib',
      'Job Opportunities: Data Analyst, Data Scientist',
      'Expected Salary in India: ₹5-12 LPA'
    ]
  };
  
  streamSelector.addEventListener('change', () => {
    const selectedStream = streamSelector.value;
  
    if (selectedStream) {
      roadmapContent.classList.remove('hidden');
      selectedStreamElement.textContent = selectedStream.toUpperCase();
  
      // Clear previous roadmap items
      roadmapList.innerHTML = '';
  
      // Populate roadmap list
      roadmaps[selectedStream].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        roadmapList.appendChild(li);
      });
    } else {
      roadmapContent.classList.add('hidden');
    }
  });