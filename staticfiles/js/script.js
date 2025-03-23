// document.addEventListener("DOMContentLoaded", () => {
//     const servicesDropdown = document.querySelector(".dropdown");
//     const servicesMenu = document.querySelector("#servicesMenu");
//     const bookCoverDropdown = document.querySelector("#bookCoverDropdown");
//     const bookCoverMenu = document.querySelector("#bookCoverMenu");

//     // Ensure all dropdowns are hidden initially
//     servicesMenu.classList.remove("show");
//     bookCoverMenu.classList.remove("show");

//     // Show Main Dropdown on Hover
//     servicesDropdown.addEventListener("mouseenter", () => {
//         servicesMenu.classList.add("show");
//     });

//     servicesDropdown.addEventListener("mouseleave", () => {
//         if (!servicesMenu.matches(":hover") && !bookCoverDropdown.matches(":hover")) {
//             servicesMenu.classList.remove("show");
//             bookCoverMenu.classList.remove("show");
//         }
//     });

//     // Show Nested Dropdown on Hover
//     bookCoverDropdown.addEventListener("mouseenter", () => {
//         bookCoverMenu.classList.add("show");
//     });

//     bookCoverMenu.addEventListener("mouseleave", () => {
//         bookCoverMenu.classList.remove("show");
//     });

//     // Hide dropdowns when clicking outside
//     document.addEventListener("click", (event) => {
//         if (!servicesDropdown.contains(event.target) && !bookCoverDropdown.contains(event.target)) {
//             servicesMenu.classList.remove("show");
//             bookCoverMenu.classList.remove("show");
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const track = document.querySelector(".custom-carousel-track");
//     const slides = Array.from(document.querySelectorAll(".custom-carousel-item"));
//     const indicators = document.querySelectorAll(".custom-indicator");
//     const prevButton = document.querySelector(".custom-carousel-control.prev");
//     const nextButton = document.querySelector(".custom-carousel-control.next");

//     let slideWidth = slides[0].offsetWidth;
//     let currentIndex = 1; // Start at the first real slide
//     const normalInterval = 5000; // 5 seconds for normal slides
//     const firstLoadDelay = 10000; // 10 seconds before first transition
//     let autoSlideTimeout;
//     let isFirstSlide = true; // Flag to track first slide

//     // Clone first and last slides for seamless infinite scrolling
//     const firstClone = slides[0].cloneNode(true);
//     const lastClone = slides[slides.length - 1].cloneNode(true);
//     track.appendChild(firstClone);
//     track.insertBefore(lastClone, slides[0]);

//     const allSlides = document.querySelectorAll(".custom-carousel-item");
//     track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

//     function updateCarousel() {
//         track.style.transition = "transform 1s ease-in-out";
//         track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//         updateIndicators();
//     }

//     function updateIndicators() {
//         indicators.forEach((indicator, index) => {
//             indicator.classList.toggle("active", index === currentIndex - 1);
//         });
//     }

//     function slideToNext() {
//         if (isFirstSlide) {
//             isFirstSlide = false; // Disable first slide delay after first move
//             resetAutoSlide(normalInterval); // Use normal 5s delay for future slides
//             return;
//         }

//         if (currentIndex >= allSlides.length - 1) {
//             currentIndex++;
//             updateCarousel();
//             setTimeout(() => {
//                 track.style.transition = "none";
//                 currentIndex = 1; // Reset to the first real slide
//                 track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//             }, 1000);
//         } else {
//             currentIndex++;
//             updateCarousel();
//         }
//         resetAutoSlide(normalInterval);
//     }

//     function slideToPrev() {
//         if (currentIndex <= 0) {
//             currentIndex--;
//             updateCarousel();
//             setTimeout(() => {
//                 track.style.transition = "none";
//                 currentIndex = allSlides.length - 2; // Reset to the last real slide
//                 track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//             }, 1000);
//         } else {
//             currentIndex--;
//             updateCarousel();
//         }
//         resetAutoSlide(normalInterval);
//     }

//     function resetAutoSlide(delay) {
//         clearTimeout(autoSlideTimeout);
//         autoSlideTimeout = setTimeout(() => {
//             slideToNext();
//         }, delay);
//     }

//     // Pause auto-slide on hover
//     track.addEventListener("mouseenter", () => clearTimeout(autoSlideTimeout));
//     track.addEventListener("mouseleave", () => resetAutoSlide(normalInterval));

//     // Reset track position when reaching clones
//     track.addEventListener("transitionend", () => {
//         if (currentIndex === allSlides.length - 1) {
//             track.style.transition = "none";
//             currentIndex = 1;
//             track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//         } else if (currentIndex === 0) {
//             track.style.transition = "none";
//             currentIndex = allSlides.length - 2;
//             track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//         }
//     });

//     // Event Listeners
//     prevButton.addEventListener("click", slideToPrev);
//     nextButton.addEventListener("click", slideToNext);
//     indicators.forEach((indicator, index) => {
//         indicator.addEventListener("click", () => {
//             currentIndex = index + 1;
//             updateCarousel();
//             resetAutoSlide(normalInterval);
//         });
//     });

//     // Handle window resize
//     window.addEventListener("resize", () => {
//         slideWidth = slides[0].offsetWidth;
//         track.style.transition = "none";
//         track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     });

//     // **Ensure first slide stays for 10 seconds before moving**
//     resetAutoSlide(firstLoadDelay);
// });



// document.addEventListener("DOMContentLoaded", () => {
//     // Smooth scrolling for the book carousel
//     const carousel = document.querySelector(".book-carousel");
//     const prevButton = document.querySelector(".pagination .prev");
//     const nextButton = document.querySelector(".pagination .next");

//     if (carousel && prevButton && nextButton) {
//         const scrollAmount = 300; // Adjust the amount to scroll per click

//         // Helper function to handle smooth scrolling
//         function handleScroll(direction) {
//             carousel.scrollBy({
//                 left: direction * scrollAmount,
//                 behavior: "smooth",
//             });
//         }

//         prevButton.addEventListener("click", () => handleScroll(-1));
//         nextButton.addEventListener("click", () => handleScroll(1));
//     }
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const track = document.querySelector(".unique-carousel-track");
//     const items = Array.from(document.querySelectorAll(".unique-carousel-item"));
//     const prevButton = document.querySelector(".unique-carousel-control.prev");
//     const nextButton = document.querySelector(".unique-carousel-control.next");
//     const dotsContainer = document.querySelector(".unique-pagination-dots");

//     if (!track || items.length === 0 || !prevButton || !nextButton) return;

//     let itemWidth = items[0].offsetWidth + 20; // Correct width with gaps
//     let currentIndex = 0;
//     const autoSlideInterval = 3000;
//     let autoSlideTimeout;

//     function updateCarousel() {
//         track.style.transition = "transform 0.7s ease-in-out";
//         track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//         updateDots();
//     }

//     function updateDots() {
//         const dots = document.querySelectorAll(".unique-pagination-dots .dot");
//         let activeIndex = currentIndex % items.length;
//         dots.forEach((dot, index) => {
//             dot.classList.toggle("active", index === activeIndex);
//         });
//     }

//     function slideToNext() {
//         if (currentIndex >= items.length - 1) {
//             track.style.transition = "none";
//             currentIndex = -1;
//         }
//         currentIndex++;
//         updateCarousel();
//         resetAutoSlide(autoSlideInterval);
//     }

//     function slideToPrev() {
//         if (currentIndex <= 0) {
//             track.style.transition = "none";
//             currentIndex = items.length;
//         }
//         currentIndex--;
//         updateCarousel();
//         resetAutoSlide(autoSlideInterval);
//     }

//     function resetAutoSlide(delay) {
//         clearTimeout(autoSlideTimeout);
//         autoSlideTimeout = setTimeout(slideToNext, delay);
//     }

//     prevButton.addEventListener("click", slideToPrev);
//     nextButton.addEventListener("click", slideToNext);
//     resetAutoSlide(autoSlideInterval);
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const carousel = document.querySelector(".carousel");

//     function duplicateItems() {
//         let items = Array.from(carousel.children);
//         items.forEach((item) => {
//             let clone = item.cloneNode(true);
//             carousel.appendChild(clone);
//         });
//     }

//     duplicateItems();
// });



// document.addEventListener("DOMContentLoaded", () => {
//     const track = document.querySelector(".unique-carousel-track");
//     const items = Array.from(document.querySelectorAll(".unique-carousel-item"));

//     if (!track || items.length === 0) return;

//     // Clone items for seamless looping
//     items.forEach(item => {
//         const clone = item.cloneNode(true);
//         track.appendChild(clone);
//     });

//     // Restart animation when fully scrolled
//     track.addEventListener("animationiteration", () => {
//         track.style.animation = "none";
//         setTimeout(() => track.style.animation = "infiniteScroll 20s linear infinite", 10);
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const carousel = document.querySelector(".carousel");

//     function duplicateItems() {
//         let items = Array.from(carousel.children);
//         items.forEach((item) => {
//             let clone = item.cloneNode(true);
//             carousel.appendChild(clone);
//         });
//     }

//     duplicateItems();
// });



// document.addEventListener("DOMContentLoaded", () => {
//     const moreButton = document.querySelector(".more-button");
//     const hiddenGenres = document.querySelectorAll(".hidden-genres");

//     moreButton.addEventListener("click", () => {
//         hiddenGenres.forEach((genre) => {
//             genre.style.display = genre.style.display === "none" || genre.style.display === "" ? "inline-block" : "none";
//         });

//         // Change button text
//         moreButton.textContent = moreButton.textContent === "More" ? "Less" : "More";
//     });
// });


// function flipCard(cardId) {
//     let card = document.getElementById(cardId);
//     if (card.classList.contains("flipped")) {
//         card.classList.remove("flipped");
//     } else {
//         card.classList.add("flipped");
//     }
// }




// document.addEventListener("DOMContentLoaded", () => {
//     const counters = document.querySelectorAll(".count");
//     const speed = 200; // The lower the number, the faster the count

//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = +counter.getAttribute("data-target");
//             const count = +counter.innerText;

//             // Increment value
//             const increment = target / speed;

//             if (count < target) {
//                 counter.innerText = Math.ceil(count + increment);
//                 setTimeout(updateCount, 20);
//             } else {
//                 counter.innerText = target;
//             }
//         };

//         updateCount();
//     });
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const carousel = document.querySelector(".carousel");
//     const nextButton = document.querySelector(".carousel-control.next");
//     const prevButton = document.querySelector(".carousel-control.prev");
//     const items = document.querySelectorAll(".award");

//     let currentIndex = 0;
//     const itemsToShow = 3; // Number of items visible at a time
//     const totalItems = items.length;

//     // Adjust the carousel width dynamically
//     carousel.style.width = `${totalItems * (100 / itemsToShow)}%`;

//     function updateCarousel() {
//         const offset = -(currentIndex * (100 / itemsToShow));
//         carousel.style.transform = `translateX(${offset}%)`;
//     }

//     function moveToNext() {
//         currentIndex = (currentIndex + 1) % (totalItems - (itemsToShow - 1));
//         updateCarousel();
//     }

//     function moveToPrev() {
//         currentIndex = (currentIndex - 1 + totalItems) % (totalItems - (itemsToShow - 1));
//         updateCarousel();
//     }

//     // Event listeners for buttons
//     nextButton.addEventListener("click", moveToNext);
//     prevButton.addEventListener("click", moveToPrev);

//     // Continuous automatic scrolling
//     setInterval(() => {
//         moveToNext();
//     }, 5000);
// });


// const slider = document.getElementById("testimonialSlider");
// const prevButton = document.getElementById("prevButton");
// const nextButton = document.getElementById("nextButton");

// let currentIndex = 0;
// const itemsToShow = 3;
// const totalItems = slider.children.length;

// slider.style.width = `${totalItems * (100 / itemsToShow)}%`;

// function updateSlider() {
//     const offset = -(currentIndex * (100 / itemsToShow));
//     slider.style.transform = `translateX(${offset}%)`;
// }

// function moveToNext() {
//     currentIndex = (currentIndex + 1) % (totalItems - (itemsToShow - 1));
//     updateSlider();
// }

// function moveToPrev() {
//     currentIndex = (currentIndex - 1 + totalItems) % (totalItems - (itemsToShow - 1));
//     updateSlider();
// }

// nextButton.addEventListener("click", moveToNext);
// prevButton.addEventListener("click", moveToPrev);

// setInterval(() => {
//     moveToNext();
// }, 5000);




// document.addEventListener("DOMContentLoaded", function () {
//     const tabs = document.querySelectorAll(".tab-link");
//     const steps = document.querySelectorAll(".process-step");

//     tabs.forEach((tab) => {
//         tab.addEventListener("click", function () {
//             // Remove active class from all tabs
//             tabs.forEach((t) => t.classList.remove("active"));
//             this.classList.add("active");

//             // Get the selected step ID
//             const stepId = this.getAttribute("data-step");

//             // Hide all steps and show only the selected one
//             steps.forEach((step) => {
//                 step.classList.remove("active");
//                 if (step.id === stepId) {
//                     step.classList.add("active");
//                 }
//             });
//         });
//     });
// });




document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript file loaded successfully!");

    /*** DROPDOWN MENU FUNCTIONALITY ***/
    const servicesDropdown = document.querySelector(".dropdown");
    const servicesMenu = document.querySelector("#servicesMenu");
    const bookCoverDropdown = document.querySelector("#bookCoverDropdown");
    const bookCoverMenu = document.querySelector("#bookCoverMenu");

    if (servicesDropdown && servicesMenu && bookCoverDropdown && bookCoverMenu) {
        servicesMenu.classList.remove("show");
        bookCoverMenu.classList.remove("show");

        servicesDropdown.addEventListener("mouseenter", () => {
            servicesMenu.classList.add("show");
        });

        servicesDropdown.addEventListener("mouseleave", () => {
            if (!servicesMenu.matches(":hover") && !bookCoverDropdown.matches(":hover")) {
                servicesMenu.classList.remove("show");
                bookCoverMenu.classList.remove("show");
            }
        });

        bookCoverDropdown.addEventListener("mouseenter", () => {
            bookCoverMenu.classList.add("show");
        });

        bookCoverMenu.addEventListener("mouseleave", () => {
            bookCoverMenu.classList.remove("show");
        });

        document.addEventListener("click", (event) => {
            if (!servicesDropdown.contains(event.target) && !bookCoverDropdown.contains(event.target)) {
                servicesMenu.classList.remove("show");
                bookCoverMenu.classList.remove("show");
            }
        });
    } else {
        console.warn("Dropdown elements not found in DOM.");
    }

    /*** CUSTOM CAROUSEL FUNCTIONALITY ***/
    const track = document.querySelector(".custom-carousel-track");
    const slides = document.querySelectorAll(".custom-carousel-item");
    const indicators = document.querySelectorAll(".custom-indicator");
    const prevButton = document.querySelector(".custom-carousel-control.prev");
    const nextButton = document.querySelector(".custom-carousel-control.next");

    if (track && slides.length > 0 && prevButton && nextButton) {
        let slideWidth = slides[0].offsetWidth;
        let currentIndex = 1;
        const normalInterval = 5000;
        const firstLoadDelay = 10000;
        let autoSlideTimeout;
        let isFirstSlide = true;

        const firstClone = slides[0].cloneNode(true);
        const lastClone = slides[slides.length - 1].cloneNode(true);
        track.appendChild(firstClone);
        track.insertBefore(lastClone, slides[0]);

        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        function updateCarousel() {
            track.style.transition = "transform 1s ease-in-out";
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            updateIndicators();
        }

        function updateIndicators() {
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle("active", index === currentIndex - 1);
            });
        }

        function slideToNext() {
            if (isFirstSlide) {
                isFirstSlide = false;
                resetAutoSlide(normalInterval);
                return;
            }

            if (currentIndex >= slides.length) {
                currentIndex++;
                updateCarousel();
                setTimeout(() => {
                    track.style.transition = "none";
                    currentIndex = 1;
                    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                }, 1000);
            } else {
                currentIndex++;
                updateCarousel();
            }
            resetAutoSlide(normalInterval);
        }

        function slideToPrev() {
            if (currentIndex <= 0) {
                currentIndex--;
                updateCarousel();
                setTimeout(() => {
                    track.style.transition = "none";
                    currentIndex = slides.length - 2;
                    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                }, 1000);
            } else {
                currentIndex--;
                updateCarousel();
            }
            resetAutoSlide(normalInterval);
        }

        function resetAutoSlide(delay) {
            clearTimeout(autoSlideTimeout);
            autoSlideTimeout = setTimeout(() => {
                slideToNext();
            }, delay);
        }

        prevButton.addEventListener("click", slideToPrev);
        nextButton.addEventListener("click", slideToNext);

        window.addEventListener("resize", () => {
            slideWidth = slides[0].offsetWidth;
            track.style.transition = "none";
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        });

        resetAutoSlide(firstLoadDelay);
    } else {
        console.warn("Custom carousel elements not found.");
    }

    /*** BOOK CAROUSEL FUNCTIONALITY ***/
    const bookCarousel = document.querySelector(".book-carousel");
    const bookPrevButton = document.querySelector(".pagination .prev");
    const bookNextButton = document.querySelector(".pagination .next");

    if (bookCarousel && bookPrevButton && bookNextButton) {
        const scrollAmount = 300;

        function handleScroll(direction) {
            bookCarousel.scrollBy({
                left: direction * scrollAmount,
                behavior: "smooth",
            });
        }

        bookPrevButton.addEventListener("click", () => handleScroll(-1));
        bookNextButton.addEventListener("click", () => handleScroll(1));
    } else {
        console.warn("Book carousel elements not found.");
    }

    /*** FLIP CARD FUNCTIONALITY ***/
    window.flipCard = function (cardId) {
        let card = document.getElementById(cardId);
        if (card) {
            card.classList.toggle("flipped");
        } else {
            console.warn(`Card with ID ${cardId} not found.`);
        }
    };

    /*** COUNT-UP ANIMATION FOR STATISTICS ***/
    const counters = document.querySelectorAll(".home-count");
    const speed = 200;

    if (counters.length > 0) {
        counters.forEach(counter => {
            function updateCount() {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
        });
    } else {
        console.warn("No count-up elements found.");
    }

    /*** TABS FUNCTIONALITY ***/
    const tabs = document.querySelectorAll(".tab-link");
    const steps = document.querySelectorAll(".process-step");

    if (tabs.length > 0 && steps.length > 0) {
        tabs.forEach((tab) => {
            tab.addEventListener("click", function () {
                tabs.forEach((t) => t.classList.remove("active"));
                this.classList.add("active");

                const stepId = this.getAttribute("data-step");

                steps.forEach((step) => {
                    step.classList.remove("active");
                    if (step.id === stepId) {
                        step.classList.add("active");
                    }
                });
            });
        });
    } else {
        console.warn("Tabs or process steps not found.");
    }
});
