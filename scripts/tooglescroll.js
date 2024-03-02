function toggleAnswer(element) {
    const answer = element.nextElementSibling;

    answer.classList.toggle('active');
    element.querySelector('.toggle').textContent = answer.classList.contains('active') ? '-' : '+';
}