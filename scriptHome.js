
function toggleMenu() {
    let navbar = document.getElementById('navbarInteractive');
    if (navbar.style.height === '0px' || navbar.style.padding === '0px 0px 0px 0px') {
        navbar.style.height = '28%';
        navbar.style.padding = '20px 0px 20px 0px';
    } else {
        navbar.style.height = '0px';
        navbar.style.padding = '0px 0px 0px 0px';
    }}

function clossMenu() {
    let navbar = document.getElementById('navbarInteractive');
        navbar.style.height = '0px';
        navbar.style.padding = '0px 0px 0px 0px';
}


function toggleFaq(element) {
            // Toggle class active pada item yang diklik
            element.classList.toggle('active');
            
            // Optional: Tutup FAQ lain saat membuka satu FAQ (accordion style)
            // Uncomment kode di bawah jika ingin behavior accordion
            const allItems = document.querySelectorAll('.faq-item');
            allItems.forEach(item => {
                if (item !== element) {
                    item.classList.remove('active');
                }
            });
        }