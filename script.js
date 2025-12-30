document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Theme Toggle Functionality
    // Theme Toggle
     const themeToggle = document.getElementById('theme-toggle');

     themeToggle.addEventListener('click', () => {
     document.body.classList.toggle('dark-mode');
  
     // Save preference
     localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  
     // Update button icon
     const icon = themeToggle.querySelector('i');
     if (document.body.classList.contains('dark-mode')) {
     icon.className = 'fas fa-sun';
     themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
     } else {
     icon.className = 'fas fa-moon';
     themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
     }
    });

// Check saved preference on load
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}

    // Dynamic Greeting
    const greetingText = document.getElementById('greeting-text');
    const hour = new Date().getHours();

    let greeting;
    if (hour < 12) greeting = "Good morning! Breakfast is served until 11 AM.";
    else if (hour < 17) greeting = "Good afternoon! Enjoy our lunch specials!";
    else greeting = "Good evening! Dinner reservations recommended.";

    greetingText.textContent = greeting;

    // Menu Data for Indian Restaurant
    const menuData = {
        starters: [
            { 
                name: 'Samosa', 
                description: 'Crispy pastry filled with spiced potatoes and peas', 
                price: 'Rs. 10',
                image: 'images/samosa.jpg',
                spiceLevel: 1
            },
            { 
                name: 'Vada Paav', 
                description: 'deep batter fried aloo vada with green chutney in a pav', 
                price: 'Rs. 10',
                image: 'images/vada.jpg',
                spiceLevel: 1
            },
            { 
                name: 'Paneer Tikka', 
                description: 'Grilled cottage cheese cubes with mint chutney', 
                price: 'Rs. 150',
                image: 'images/Paneer-Tikka.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Aloo Tikki', 
                description: 'Spiced potato patties served with tamarind sauce', 
                price: 'Rs. 150',
                image: 'images/aalotikki.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Khandavi', 
                description: ' delicate, rolled, and melt-in-your-mouth texture', 
                price: 'Rs. 150',
                image: 'images/khandavi.jpg',
                spiceLevel: 1
            },
            { 
                name: 'Prawn Fryi', 
                description: 'dish of stir fried shrimp with onions, spices and herbs', 
                price: 'Rs. 150',
                image: 'images/Prawn Fry.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Bhajias', 
                description: ' Indian snack perfect for pairing with your favorite chai! 😋', 
                price: 'Rs. 150',
                image: 'images/Bhajias.jpg',
                spiceLevel: 1
            },
            { 
                name: 'Khasta Kachori', 
                description: ' Flaky, crunchy pastry pockets filled with a savory mix of spiced peas, onions, and herbs', 
                price: 'Rs. 150',
                image: 'images/khasta_khachori.jpg',
                spiceLevel: 1
            },
            { 
                name: 'Vegetable Pan Rolls', 
                description: ' A delicious and healthy treat that is perfect as a snack or appetizer! 🌟',
                price: 'Rs. 150',
                image: 'images/Vegetable Pan Rolls.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Idli', 
                description: 'Soft, fluffy steamed cakes made from fermented rice and lentil batter',
                price: 'Rs. 100',
                image: 'images/idli.jpg',
                spiceLevel: 1
            },
            { 
                name: 'Dosa', 
                description: ' Crispy, golden-brown rice crepes served with a savory potato filling, sambar, and coconut chutney',
                price: 'Rs. 100',
                image: 'images/dosa.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Medu vada', 
                description: 'Crispy, golden-fried lentil doughnuts served with sambar and coconut chutney',
                price: 'Rs. 100',
                image: 'images/medu-vada.jpg',
                spiceLevel: 2
            },
        ],
        mains: [
            { 
                name: 'Butter Chicken', 
                description: 'Tandoori chicken in creamy tomato gravy', 
                price: 'Rs. 150',
                image: 'images/chicken-butter.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Chicken Biryani', 
                description: 'Fragrant basmati rice with chicken and spices', 
                price: 'Rs. 150',
                image: 'images/Chicken-Biryani.jpg',
                spiceLevel: 3
            },
            { 
                name: 'Palak Paneer', 
                description: 'Spinach and cottage cheese curry', 
                price: 'Rs. 100',
                image: 'images/palak-paneer.jpg',
                spiceLevel: 1
            },
            { 
                name: 'Chana Masala', 
                description: 'Chickpeas cooked in aromatic spices', 
                price: 'Rs. 100',
                image: 'images/chana.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Veg Biryani', 
                description: 'Aromatic basmati rice cooked with a colorful mix of vegetables, spices, and herbs', 
                price: 'Rs.100',
                image: 'images/vegetable-biryani.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Fish surmai', 
                description: 'A seafood delight that is sure to tantalize your taste buds! 🌊', 
                price: 'Rs.100',
                image: 'images/surmai.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Shahi Paneer', 
                description: ' A regal dish fit for royalty, perfect for pairing with naan or rice! 👑', 
                price: 'Rs.100',
                image: 'images/shahi-paneer.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Pilao', 
                description: ' Aromatic and flavorful rice cooked with a mix of vegetables, spices, and herbs', 
                price: 'Rs.100',
                image: 'images/Peas-Pulao.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Mixed Veg', 
                description: 'A healthy and delicious option that is perfect for any meal!', 
                price: 'Rs.100',
                image: 'images/mixed vrg.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Jeera Rice', 
                description: 'Fragrant basmati rice infused with the warm, nutty flavor of cumin seeds (jeera).', 
                price: 'Rs.100',
                image: 'images/Jeera-Rice.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Dal Makhani', 
                description: 'Rich and creamy lentil curry made with black urad dal and kidney beans.', 
                price: 'Rs.100',
                image: 'images/dal-makhani.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Pamplet', 
                description: ' A popular seafood choice that is sure to delight your taste buds! 🌊', 
                price: 'Rs.100',
                image: 'images/img_3081.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Egg Curry', 
                description: ' A protein-packed dish that is perfect with rice or naan! 🍛', 
                price: 'Rs.100',
                image: 'images/egg-curry.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Bangda', 
                description: '  A popular seafood choice in India, perfect for those who love fish! 🌊', 
                price: 'Rs.100',
                image: 'images/bangda-fish.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Fish Tawa Fry', 
                description: '  A popular seafood choice in India, perfect for those who love fish! 🌊', 
                price: 'Rs.100',
                image: 'images/tawafry.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Tandoori Roti', 
                description: 'Perfect for pairing with curries and gravies! ', 
                price: 'Rs.100',
                image: 'images/tandoori-roti.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Chapati', 
                description: 'A staple accompaniment to curries and gravies in Indian cuisine!', 
                price: 'Rs.100',
                image: 'images/chapati-recipe.jpg',
                spiceLevel: 2
            },
            { 
                name: 'Bhakri', 
                description: 'A popular staple in many Indian regions, especially in Maharashtra and Gujarat! 🌾 ', 
                price: 'Rs.100',
                image: 'images/Jowar-Bhakri.jpg',
                spiceLevel: 2
            },

        ],
        desserts: [
            { 
                name: 'Gulab Jamun', 
                description: 'Golden fried dough balls in rose-scented syrup', 
                price: 'Rs. 50',
                image: 'images/gulab-jamun.jpg'
            },
            { 
                name: 'Kheer', 
                description: 'Creamy rice pudding with cardamom and nuts', 
                price: 'Rs. 50',
                image: 'images/kheer.jpg'
            },
            { 
                name: 'Rasmalai', 
                description: 'Soft cheese patties in saffron milk', 
                price: 'Rs. 50',
                image: 'images/rasmalai.jpg'
            },
            { 
                name: 'jalebi', 
                description: 'A popular Indian dessert that is sure to satisfy your sweet tooth! 🍬', 
                price: 'Rs. 50',
                image: 'images/jalebi.jpg'
            },
            { 
                name: 'Modak', 
                description: 'A traditional Indian sweet dumpling, typically filled with coconut and jaggery, and steamed to perfection', 
                price: 'Rs. 50',
                image: 'images/Modak.jpg'
            },
            { 
                name: 'Falooda', 
                description: 'refreshing and indulgent dessert made with layers of vermicelli, jelly, rose syrup, milk, and ice cream', 
                price: 'Rs. 50',
                image: 'images/faloodajpg.jpg'
            }
        ],
        drinks: [
            { 
                name: 'Mango Lassi', 
                description: 'Sweet yogurt drink with ripe mango', 
                price: '$4.99',
                image: 'images/mango-lassi.jpg'
            },
            { 
                name: 'Masala Chai', 
                description: 'Spiced Indian tea with milk', 
                price: '$3.99',
                image: 'images/Masala-Chai.jpg'
            },
            { 
                name: 'Nimbu Pani', 
                description: 'Refreshing lemonade with cumin and mint', 
                price: '$3.99',
                image: 'images/nimbu-pani.jpg'
            }
        ]
    };

    // Gallery Data
    const galleryData = [
        'res5.jpg', 'res6.jpg', 'res7.jpg', 'res8.jpg', 
        'res2.jpg', 'res3.jpg', 'res4.jpg', 'res11.jpg'
    ];

    // Menu Tab Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuItemsContainer = document.getElementById('menu-items');
    
    // Function to load menu items
    function loadMenuItems(category) {
        menuItemsContainer.innerHTML = '';
        
        menuData[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <div class="menu-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    ${item.spiceLevel ? '<div class="spice-level">' + '🌶️'.repeat(item.spiceLevel) + '</div>' : ''}
                    <p class="price">${item.price}</p>
                </div>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    }

    // Function to load gallery images
    function loadGalleryImages() {
        const galleryGrid = document.querySelector('.gallery-grid');
        galleryGrid.innerHTML = '';
        
        galleryData.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="images/${image}" alt="Indian food">
            `;
            galleryGrid.appendChild(galleryItem);
        });

        // Add click event to gallery images for modal
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <img src="${imgSrc}" alt="Enlarged view">
                    </div>
                `;
                document.body.appendChild(modal);
                
                modal.querySelector('.close').addEventListener('click', () => {
                    modal.remove();
                });
            });
        });
    }

    // Initialize menu and gallery
    loadMenuItems('starters');
    loadGalleryImages();

    // Tab button event listeners
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load corresponding menu items
            const category = this.getAttribute('data-category');
            loadMenuItems(category);
        });
    });

    // Form submission
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, you would send this data to a server
            alert('Thank you for your reservation! We will contact you shortly to confirm.');
            this.reset();
        });
    }

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });
});
