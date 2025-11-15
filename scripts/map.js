// ===================================
// Zone Data (Static Objects)
// ===================================

const zonesData = {
    'central-park': {
        name: 'Central Park',
        category: 'Parks & Recreation',
        categoryClass: 'parks',
        description: 'The largest and most beautiful park in the city. Features walking trails, playgrounds, picnic areas, and a beautiful lake. Perfect for family outings and morning jogs.',
        address: '123 Park Avenue, Central District',
        contact: '+1 (555) 123-4567',
        hours: '6:00 AM - 9:00 PM Daily',
        info: 'Free entry | Dog-friendly | Cycling allowed'
    },
    'city-hospital': {
        name: 'City General Hospital',
        category: 'Hospital',
        categoryClass: 'hospitals',
        description: 'A multi-specialty hospital providing 24/7 emergency services, advanced medical care, and state-of-the-art diagnostic facilities. Equipped with modern ICU and operation theaters.',
        address: '456 Medical Center Road',
        contact: 'Emergency: 911 | Main: +1 (555) 234-5678',
        hours: '24/7 Emergency Services',
        info: 'All insurance accepted | Free ambulance service'
    },
    'tech-school': {
        name: 'City Technology School',
        category: 'Educational Institution',
        categoryClass: 'schools',
        description: 'Premier educational institution offering programs in technology, engineering, and sciences. Equipped with modern labs, libraries, and sports facilities.',
        address: '789 Education Boulevard',
        contact: '+1 (555) 345-6789',
        hours: 'Mon-Fri: 8:00 AM - 4:00 PM',
        info: 'Grades 9-12 | Tech-focused curriculum'
    },
    'riverside-park': {
        name: 'Riverside Recreation Park',
        category: 'Parks & Recreation',
        categoryClass: 'parks',
        description: 'Scenic riverside park with jogging tracks, boat rentals, and outdoor fitness equipment. Popular spot for evening walks and weekend picnics.',
        address: '321 Riverside Drive',
        contact: '+1 (555) 456-7890',
        hours: '5:00 AM - 10:00 PM Daily',
        info: 'Boat rentals available | Evening food stalls'
    },
    'metro-station': {
        name: 'Central Metro Station',
        category: 'Transport Hub',
        categoryClass: 'transport',
        description: 'Major metro interchange station connecting Red, Blue, and Green lines. Features ticket counters, waiting areas, and retail shops.',
        address: '555 Transit Plaza',
        contact: 'Helpline: +1 (555) 567-8901',
        hours: '5:00 AM - 12:00 AM Daily',
        info: 'Three lines | Digital ticketing | WiFi available'
    },
    'city-mall': {
        name: 'City Center Mall',
        category: 'Shopping Center',
        categoryClass: 'malls',
        description: 'Premier shopping destination with 200+ stores, food court, cinema, and entertainment zone. Features international and local brands.',
        address: '888 Shopping District',
        contact: '+1 (555) 678-9012',
        hours: '10:00 AM - 10:00 PM Daily',
        info: 'Free parking | 500+ parking spots | Family entertainment'
    },
    'govt-complex': {
        name: 'Government Administrative Complex',
        category: 'Government',
        categoryClass: 'government',
        description: 'Central administrative complex housing municipal offices, citizen services center, and public records department. One-stop solution for civic services.',
        address: '999 Government Plaza',
        contact: '+1 (555) 789-0123',
        hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
        info: 'Online appointments available | Document services'
    },
    'community-hospital': {
        name: 'Community Health Center',
        category: 'Hospital',
        categoryClass: 'hospitals',
        description: 'Community healthcare facility providing primary care, vaccination services, and health education programs. Focus on preventive healthcare.',
        address: '147 Community Road',
        contact: '+1 (555) 890-1234',
        hours: 'Mon-Sat: 8:00 AM - 8:00 PM',
        info: 'Free consultations for seniors | Vaccination center'
    },
    'shopping-district': {
        name: 'Downtown Shopping District',
        category: 'Shopping Center',
        categoryClass: 'malls',
        description: 'Vibrant shopping district with boutique stores, cafes, restaurants, and street markets. Perfect for shopping enthusiasts and food lovers.',
        address: '258 Downtown Street',
        contact: '+1 (555) 901-2345',
        hours: '9:00 AM - 11:00 PM Daily',
        info: 'Street parking | Weekend markets | Live events'
    },
    'sports-complex': {
        name: 'City Sports Complex',
        category: 'Parks & Recreation',
        categoryClass: 'parks',
        description: 'Modern sports facility with indoor and outdoor courts, swimming pool, gym, and training facilities. Hosts city sports events and tournaments.',
        address: '369 Athletic Way',
        contact: '+1 (555) 012-3456',
        hours: '6:00 AM - 10:00 PM Daily',
        info: 'Membership available | Coaching programs | Olympic-size pool'
    },
    'public-school': {
        name: 'Public Elementary School',
        category: 'Educational Institution',
        categoryClass: 'schools',
        description: 'Well-established elementary school offering quality education from grades K-8. Features playground, library, and computer lab.',
        address: '741 School Lane',
        contact: '+1 (555) 123-7890',
        hours: 'Mon-Fri: 8:00 AM - 3:00 PM',
        info: 'Grades K-8 | After-school programs | Free lunch program'
    }
};

// ===================================
// Modal Management
// ===================================

const modal = document.getElementById('zoneModal');
const modalClose = document.getElementById('modalClose');

function openModal(zoneId) {
    const zoneData = zonesData[zoneId];
    
    if (!zoneData) return;
    
    // Populate modal content
    document.getElementById('zoneName').textContent = zoneData.name;
    document.getElementById('zoneCategory').textContent = zoneData.category;
    document.getElementById('zoneDescription').textContent = zoneData.description;
    document.getElementById('zoneAddress').textContent = zoneData.address;
    document.getElementById('zoneContact').textContent = zoneData.contact;
    document.getElementById('zoneHours').textContent = zoneData.hours;
    document.getElementById('zoneInfo').textContent = zoneData.info;
    
    // Show modal with animation
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

// ===================================
// Zone Interaction
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Get all zone elements
    const zones = document.querySelectorAll('.zone');
    
    zones.forEach(zone => {
        // Click event to open modal
        zone.addEventListener('click', () => {
            const zoneId = zone.getAttribute('data-zone');
            openModal(zoneId);
        });
        
        // Hover effect enhancement
        zone.addEventListener('mouseenter', () => {
            zone.style.filter = 'brightness(1.2) drop-shadow(0 0 10px rgba(0,0,0,0.3))';
        });
        
        zone.addEventListener('mouseleave', () => {
            zone.style.filter = '';
        });
    });
    
    // Close modal on close button click
    modalClose.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// ===================================
// Tooltip on Hover (Optional Enhancement)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const zones = document.querySelectorAll('.zone');
    
    zones.forEach(zone => {
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1000;
            white-space: nowrap;
        `;
        document.body.appendChild(tooltip);
        
        zone.addEventListener('mouseenter', (e) => {
            const zoneId = zone.getAttribute('data-zone');
            const zoneData = zonesData[zoneId];
            
            if (zoneData) {
                tooltip.textContent = zoneData.name;
                tooltip.style.opacity = '1';
            }
        });
        
        zone.addEventListener('mousemove', (e) => {
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
        });
        
        zone.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
});
