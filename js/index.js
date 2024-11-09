const myObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            myObserver.unobserve(entry.target)
        }
    })
})

const elements = document.querySelectorAll('.hidden');

elements.forEach(el => {
    myObserver.observe(el)
})

