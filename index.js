document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Products Data
    const products = {
        'best-sellers': [
            {
                id: 1,
                name: 'Rustic Red with Silver',
                price: 650,
                image: 'rustic red-silver.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 2,
                name: 'Classic Gold',
                price: 650,
                image: 'classic-golg.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 3,
                name: 'Spring Butterflies',
                price: 499,
                image: 'spring-by.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 4,
                name: 'Marble and Chrome',
                price: 699,
                image: 'marble-chrome.jpg',
                sizes: ['S', 'M', 'L']
            }
        ],
        'other-designs': [
            {
                id: 5,
                name: 'Chrome French',
                price: 699,
                image: 'chromefrench.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 6,
                name: 'Mermaid Chrome',
                price: 650,
                image: 'mermaidchrome.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 7,
                name: 'Cartoon Cat',
                price: 699,
                image: 'cartooncats'.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 8,
                name: 'Red Catalye',
                price: 599,
                image: 'red catalye.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 9,
                name: 'Intricate Art Set',
                price: 899,
                image: 'art-set.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 10,
                name: 'Tropical Vibe',
                price: 799,
                image: 'tropical.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 11,
                name: 'Grunge',
                price: 699,
                image: 'grunge.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 12,
                name: 'Royal Gold',
                price: 699,
                image: 'rgold.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 13,
                name: 'Spring Flowers',
                price: 599,
                image: 'sp-flowers.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 14,
                name: 'Cat Eye with Chrome',
                price: 699,
                image: 'cateye-chrome.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 15,
                name: 'Stained Glass',
                price: 750,
                image: 'stain-glas.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 16,
                name: 'Basic Gold Chrome Flowers',
                price: 699,
                image: 'basic-gold-ch-flow.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 17,
                name: 'Only Browns with Chrome',
                price: 799,
                image: 'browns-ch.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 18,
                name: 'Blossom Cherry',
                price: 699,
                image: 'cherryoverload.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 19,
                name: 'Cat Eye Butterfly',
                price: 599,
                image: 'cateye-by.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 20,
                name: 'Lunar Blush',
                price: 699,
                image: 'lunar-blush.jpg',
                sizes: ['S', 'M', 'L']
            },
            {
                id: 21,
                name: 'Custom Nail Set',
                price: 799,
                image: 'custom-set.jpg',
                sizes: ['S', 'M', 'L'],
                custom: true
            }
        ]
    };

    // Services Data
    const services = [
        { id: 1, name: 'Gel Polish (hands)', price: 550, duration: '1 hour' },
        { id: 2, name: 'Gel Polish (feet)', price: 499, duration: '1 hour' },
        { id: 3, name: 'Temporary extensions', price: 599, duration: '1.5 hours' },
        { id: 4, name: 'Acrylic extensions', price: 1299, duration: '2 hours' },
        { id: 5, name: 'Acrylic Overlay', price: 699, duration: '1.5 hours' },
        { id: 6, name: 'Acrylic refill', price: 599, duration: '1.5 hours' },
        { id: 7, name: 'Gel Extensions', price: 1399, duration: '2 hours' },
        { id: 8, name: 'Gel Overlay', price: 899, duration: '1.5 hours' },
        { id: 9, name: 'Gel Refill', price: 699, duration: '1.5 hours' },
        { id: 10, name: 'Gel X Extensions', price: 1499, duration: '2.5 hours' },
        { id: 11, name: 'Extension Removal', price: 399, duration: '45 mins' },
        { id: 12, name: 'Gel Polish Removal', price: 250, duration: '30 mins' }
    ];

    // Load Products
    const productGrid = document.getElementById('productGrid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    function loadProducts(category) {
        if (!productGrid) return;
        
        productGrid.innerHTML = '';
        
        products[category].forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            let customHtml = '';
            if (product.custom) {
                customHtml = `
                    <div class="custom-upload">
                        <label for="customDesign">Upload Reference Design:</label>
                        <input type="file" id="customDesign" name="customDesign" accept="image/*">
                        <textarea placeholder="Design specifications..."></textarea>
                    </div>
                `;
            }
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p class="product-price">₹${product.price}</p>
                    <div class="product-sizes">
                        <span>Size:</span>
                        ${product.sizes.map(size => 
                            `<label class="size-option">
                                <input type="radio" name="size-${product.id}" value="${size}">
                                <span>${size}</span>
                            </label>`
                        ).join('')}
                    </div>
                    ${customHtml}
                    <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
                        Add to Cart
                    </button>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
        
        // Add event listeners to "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const productName = this.getAttribute('data-name');
                const productPrice = this.getAttribute('data-price');
                
                // Get selected size
                const selectedSize = document.querySelector(`input[name="size-${productId}"]:checked`);
                
                if (!selectedSize) {
                    alert('Please select a size');
                    return;
                }
                
                const cartItem = {
                    id: productId,
                    name: productName,
                    price: productPrice,
                    size: selectedSize.value,
                    quantity: 1
                };
                
                // For custom designs, add reference image and specifications
                if (productName === 'Custom Nail Set') {
                    const customDesignInput = document.getElementById('customDesign');
                    const designSpecs = this.parentElement.querySelector('textarea').value;
                    
                    if (!customDesignInput.files[0]) {
                        alert('Please upload a reference design');
                        return;
                    }
                    
                    cartItem.customDesign = true;
                    cartItem.designSpecs = designSpecs;
                }
                
                // Here you would add the item to the cart (localStorage or cart array)
                addToCart(cartItem);
                
                alert(`${productName} (${selectedSize.value}) added to cart!`);
            });
        });
    }
    
    // Handle category button clicks
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Load products for selected category
                loadProducts(category);
            });
        });
        
        // Load best sellers by default
        loadProducts('best-sellers');
    }
    
    // Cart functionality
    let cart = [];
    
    function addToCart(item) {
        // Check if item already exists in cart
        const existingItem = cart.find(cartItem => 
            cartItem.id === item.id && cartItem.size === item.size
        );
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(item);
        }
        
        // Save cart to localStorage
        localStorage.setItem('synailTechCart', JSON.stringify(cart));
        
        // Update cart UI (if implemented)
        updateCartUI();
    }
    
    function updateCartUI() {
        // For future implementation: update cart icon, display count, etc.
    }
    
    // Load services
    const servicesList = document.getElementById('servicesList');
    
    if (servicesList) {
        services.forEach(service => {
            const serviceItem = document.createElement('div');
            serviceItem.className = 'service-item';
            serviceItem.innerHTML = `
                <div class="service-checkbox">
                    <input type="checkbox" id="service-${service.id}" class="service-option" 
                           data-id="${service.id}" data-name="${service.name}" data-price="${service.price}">
                    <label for="service-${service.id}">${service.name}</label>
                </div>
                <div class="service-details">
                    <span class="service-price">₹${service.price}</span>
                    <span class="service-duration">${service.duration}</span>
                </div>
            `;
            servicesList.appendChild(serviceItem);
        });
        
        // Add event listeners to service checkboxes
        const serviceCheckboxes = document.querySelectorAll('.service-option');
        serviceCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateBookingSummary);
        });
    }
    
    // Update booking summary when services are selected
    function updateBookingSummary() {
        const selectedServicesText = document.getElementById('selectedServices');
        const totalPriceText = document.getElementById('totalPrice');
        
        const selectedServices = Array.from(document.querySelectorAll('.service-option:checked'));
        
        if (selectedServices.length === 0) {
            selectedServicesText.textContent = 'None';
            totalPriceText.textContent = '₹0';
            return;
        }
        
        const serviceNames = selectedServices.map(service => service.getAttribute('data-name'));
        const totalPrice = selectedServices.reduce((total, service) => {
            return total + parseInt(service.getAttribute('data-price'));
        }, 0);
        
        selectedServicesText.textContent = serviceNames.join(', ');
        totalPriceText.textContent = `₹${totalPrice}`;
    }
    
    // Handle booking form submission
    const bookingForm = document.getElementById('bookingForm');
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.getElementById('closeModal');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const selectedServices = Array.from(document.querySelectorAll('.service-option:checked'));
            
            if (selectedServices.length === 0) {
                alert('Please select at least one service');
                return;
            }
            
            const date = document.getElementById('date').value;
            const currentDate = new Date().toISOString().split('T')[0];
            
            if (date <= currentDate) {
                alert('Please select a date at least one day in advance');
                return;
            }
            
            // Form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                date: date,
                time: document.getElementById('time').value,
                notes: document.getElementById('notes').value,
                services: selectedServices.map(service => ({
                    id: service.getAttribute('data-id'),
                    name: service.getAttribute('data-name'),
                    price: service.getAttribute('data-price')
                }))
            };
            
            // Here you would send the data to your backend
            console.log('Booking submitted:', formData);
            
            // Show confirmation modal
            bookingModal.style.display = 'flex';
            
            // Reset form
            bookingForm.reset();
            updateBookingSummary();
        });
    }
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            bookingModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === bookingModal) {
            bookingModal.style.display = 'none';
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                subject: document.getElementById('contactSubject').value,
                message: document.getElementById('contactMessage').value
            };
            
            // Here you would send the data to your backend
            console.log('Contact form submitted:', formData);
            
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-question');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('active');
            
            // Close other open FAQs
            document.querySelectorAll('.faq-item.active').forEach(openItem => {
                if (openItem !== parent) {
                    openItem.classList.remove('active');
                }
            });
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Date input validation to prevent same-day bookings
    const dateInput = document.getElementById('date');
    
    if (dateInput) {
        // Set minimum date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
        
        dateInput.addEventListener('change', function() {
            const selectedDate = new Date(this.value);
            const today = new Date();
            
            // Reset time portions for accurate comparison
            today.setHours(0, 0, 0, 0);
            selectedDate.setHours(0, 0, 0, 0);
            
            if (selectedDate <= today) {
                alert('Please select a date at least one day in advance');
                this.value = '';
            }
        });
    }
    
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
