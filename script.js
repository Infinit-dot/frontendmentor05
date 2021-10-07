
//get reference to all headers-questions
const questions = document.querySelectorAll('.accordion__subtitle')

//cycle through all headers and add eventListener

questions.forEach(question => {
    question.addEventListener('click',() => {
    if (question.classList.contains('active')) {
        question.nextElementSibling.style.maxHeight = '0';
        question.nextElementSibling.style.marginBottom = '0';
    } else {
        questions.forEach(item => {
            item.nextElementSibling.style.maxHeight = '0';
            item.nextElementSibling.style.marginBottom = '0';
            item.classList.remove('active')
        })
    }
        //get reference to max-height of answer element
    const height = question.nextElementSibling.scrollHeight;
    question.classList.toggle('active')
    if (question.classList.contains('active')) {
        question.nextElementSibling.style.maxHeight = `${height}px`;
        question.nextElementSibling.style.marginBottom = '1.4em';
    }
    })
})
