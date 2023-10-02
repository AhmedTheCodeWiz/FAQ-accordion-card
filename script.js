const questions = document.querySelectorAll('.question-container')
const questionContainers = document.querySelectorAll('.question');
const answerContainers = document.querySelectorAll('.answer');
const arrowIcons = document.querySelectorAll('.arrow');


function toggleAnswer(index) {
    
    const isAnswerVisible = answerContainers[index].style.display === 'block';

    // Hide all answer containers
    answerContainers.forEach((container) => {
        container.style.display = 'none';
        
    });

    answerContainers.forEach((container, i) => {
        container.style.display = 'none';
        
        if (i === index) {
            questionContainers[i].style.color = '#1d1e35';
            questionContainers[i].style.fontWeight = '700';
            questions[i].style.marginBottom = '3rem';
            arrowIcons[i].style.rotate = '180deg'
        } else {
            questionContainers[i].style.color = '';
            questionContainers[i].style.fontWeight = '';
            questions[i].style.marginBottom = '';
            arrowIcons[i].style.rotate = '0deg'
        }
    });
    answerContainers[index].style.display = isAnswerVisible ? 'none' : 'block';
    questionContainers[index].style.color = isAnswerVisible ? '' : '#1d1e35';
    questionContainers[index].style.fontWeight = isAnswerVisible ? '' : '700';
    questions[index].style.marginBottom = isAnswerVisible ? '' : '3rem';
    arrowIcons[index].style.rotate = isAnswerVisible ? '0deg' : '180deg';
}

// Set the initial state (e.g., index 1) to be displayed when the page loads
window.addEventListener('load', () => {
    toggleAnswer(1); // Display the answer at index 1 (zero-based index)
});

// Add a click event listener to each question container and arrow icon
questionContainers.forEach((questionContainer, index) => {
    questionContainer.addEventListener('click', () => {
        toggleAnswer(index); 
        
    });

    // Add click event listener to the corresponding arrow icon
    const arrowIcon = arrowIcons[index];
    arrowIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click from propagating to the question container
        toggleAnswer(index); 
        
    });
})