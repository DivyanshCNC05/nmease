// js/script.js

const nav = document.querySelector('.test_nav')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})

const footer = document.querySelector('.end')
fetch('footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})


document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Disable right-click menu
});

document.addEventListener('copy', function (event) {
    event.preventDefault(); // Disable copying
});


const counters = document.querySelectorAll('.stat-value');

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const suffix = counter.getAttribute('data-suffix') || '';
                const currentText = counter.innerText.replace(/[^0-9.]/g, '');
                const count = +currentText;

                const increment = target / 60; // 60 steps for smooth animation

                if (count < target) {
                    counter.innerText = (Math.ceil(count + increment)) + suffix;
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + suffix;
                }
            };

            // Start counting on load
            updateCount();
        });