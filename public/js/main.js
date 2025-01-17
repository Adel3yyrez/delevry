
    // menu script 
        const menuToggle = document.getElementById('menu-toggle');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-closed');
            mobileMenu.classList.add('menu-open');
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open');
            mobileMenu.classList.add('menu-closed');
        });

    // count effect 
        AOS.init();
        // دالة لإنشاء تأثير العد
        function startCounter(elementId, targetNumber, duration) {
            const element = document.getElementById(elementId);
            let currentNumber = 0;
            const increment = targetNumber / (duration / 16); // 16ms لكل إطار

            const updateCounter = () => {
                currentNumber += increment;
                if (currentNumber < targetNumber) {
                    element.textContent = Math.floor(currentNumber);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = targetNumber; // التأكد من الوصول إلى الرقم النهائي
                }
            };

            updateCounter();
        }

        // بدء العد عند التمرير إلى القسم
        const achievementsSection = document.getElementById('achievements');
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startCounter('orderCount', 1212, 2000); // 2000ms (2 ثواني)
                startCounter('truckCount', 20, 2000);
                startCounter('distributorCount', 50, 2000);
                observer.disconnect(); // إيقاف المراقبة بعد التشغيل
            }
        }, { threshold: 0.5 }); // بدء العد عند ظهور 50% من القسم

        observer.observe(achievementsSection);
    
        // swiper script
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1.2, // عرض بطاقة واحدة وجزء من الثانية على الهواتف
            spaceBetween: 16, // المسافة بين البطاقات
            breakpoints: {
                640: {
                    slidesPerView: 3.2, // عرض 3 بطاقات وجزء من الرابعة على الشاشات الكبيرة
                    spaceBetween: 24,
                },
            },
            freeMode: true, // الانتقال السلس بدون تأثيرات
        });