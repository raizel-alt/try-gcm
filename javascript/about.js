document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                if (href && href !== '#' && !href.startsWith('http')) {
                    e.preventDefault(); 
                    document.body.classList.add('fade-out'); 

                    setTimeout(() => {
                        window.location.href = href;
                    }, 200); 
                }
            });
        });
    });

    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            document.body.classList.remove('fade-out');
        }
    });
