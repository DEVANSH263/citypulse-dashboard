// ===================================
// Alerts Data (Static Array)
// ===================================

const alertsData = [
    {
        id: 1,
        category: 'traffic',
        title: 'Heavy Traffic on Main Street',
        description: 'Traffic congestion reported on Main Street due to road construction. Expected delay: 20-30 minutes. Consider alternative routes via Park Avenue or River Road.',
        priority: 'high',
        date: '2025-11-15T09:30:00',
        location: 'Main Street, Downtown'
    },
    {
        id: 2,
        category: 'health',
        title: 'Free Health Checkup Camp',
        description: 'City Health Department organizing free health checkup camp at Community Center. Services include blood pressure, diabetes screening, and general consultation. Open to all citizens.',
        priority: 'medium',
        date: '2025-11-15T08:00:00',
        location: 'Community Center, Zone A'
    },
    {
        id: 3,
        category: 'weather',
        title: 'Rainfall Expected This Evening',
        description: 'Meteorological department predicts moderate to heavy rainfall between 6 PM to 10 PM. Citizens are advised to carry umbrellas and avoid unnecessary travel during peak hours.',
        priority: 'medium',
        date: '2025-11-15T07:15:00',
        location: 'Citywide'
    },
    {
        id: 4,
        category: 'public',
        title: 'Water Supply Maintenance',
        description: 'Scheduled water supply maintenance in residential areas of Zone C. Water supply will be interrupted from 10 PM to 2 AM. Please store adequate water in advance.',
        priority: 'high',
        date: '2025-11-14T20:00:00',
        location: 'Zone C Residential Area'
    },
    {
        id: 5,
        category: 'traffic',
        title: 'New Metro Line Opening',
        description: 'Exciting news! The new Green Line metro route is now operational, connecting East Terminal to West Hub. Reduced travel time by 40%. Special introductory fares available for the first month.',
        priority: 'low',
        date: '2025-11-14T06:00:00',
        location: 'Metro Green Line'
    },
    {
        id: 6,
        category: 'public',
        title: 'Public Library Extended Hours',
        description: 'Central Public Library announces extended operating hours. Now open until 10 PM on weekdays and 8 PM on weekends. New digital resources and study spaces available.',
        priority: 'low',
        date: '2025-11-13T10:00:00',
        location: 'Central Public Library'
    },
    {
        id: 7,
        category: 'health',
        title: 'Air Quality Alert',
        description: 'Air Quality Index reached moderate levels. Sensitive groups including children, elderly, and people with respiratory conditions should limit prolonged outdoor activities.',
        priority: 'medium',
        date: '2025-11-13T08:30:00',
        location: 'Citywide'
    },
    {
        id: 8,
        category: 'weather',
        title: 'Pleasant Weather Weekend',
        description: 'Weather forecast predicts clear skies and pleasant temperatures (22-26°C) throughout the weekend. Perfect time for outdoor activities and family picnics in city parks.',
        priority: 'low',
        date: '2025-11-12T18:00:00',
        location: 'Citywide'
    },
    {
        id: 9,
        category: 'public',
        title: 'Citizen Feedback Session',
        description: 'Mayor\'s office organizing citizen feedback session on smart city initiatives. Share your suggestions and concerns. Registration required. Limited seats available.',
        priority: 'medium',
        date: '2025-11-12T14:00:00',
        location: 'City Hall, Conference Room'
    },
    {
        id: 10,
        category: 'traffic',
        title: 'Parking Fee Revision Notice',
        description: 'Revised parking fees effective from next month. Digital payment options now available at all public parking facilities. Early bird discounts for morning hours.',
        priority: 'low',
        date: '2025-11-11T12:00:00',
        location: 'All Public Parking Areas'
    }
];

// ===================================
// State Management
// ===================================

let currentFilter = 'all';
let currentSort = 'newest';
let filteredAlerts = [...alertsData];

// ===================================
// Render Alerts
// ===================================

function renderAlerts() {
    const container = document.getElementById('alertsContainer');
    container.innerHTML = '';
    
    if (filteredAlerts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <h3>No Alerts Found</h3>
                <p>There are no alerts matching your current filter.</p>
            </div>
        `;
        return;
    }
    
    filteredAlerts.forEach((alert, index) => {
        const alertCard = createAlertCard(alert, index);
        container.appendChild(alertCard);
    });
}

// ===================================
// Create Alert Card
// ===================================

function createAlertCard(alert, index) {
    const card = document.createElement('div');
    card.className = `alert-card ${alert.category}`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    const date = new Date(alert.date);
    const formattedDate = date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    card.innerHTML = `
        <div class="alert-header">
            <div class="alert-title-section">
                <span class="alert-category ${alert.category}">
                    ${getCategoryIcon(alert.category)} ${capitalizeFirst(alert.category)}
                </span>
                <h3 class="alert-title">${alert.title}</h3>
            </div>
            <div class="alert-meta">
                <span class="alert-priority ${alert.priority}">
                    ${capitalizeFirst(alert.priority)} Priority
                </span>
                <span class="alert-date">${formattedDate}</span>
            </div>
        </div>
        <div class="alert-body">
            <p>${alert.description}</p>
        </div>
        <div class="alert-footer">
            <span class="alert-location">📍 ${alert.location}</span>
            <button class="alert-action">Learn More</button>
        </div>
    `;
    
    return card;
}

// ===================================
// Get Category Icon
// ===================================

function getCategoryIcon(category) {
    const icons = {
        traffic: '🚦',
        health: '⚕️',
        weather: '🌤️',
        public: '📢'
    };
    return icons[category] || '📌';
}

// ===================================
// Capitalize First Letter
// ===================================

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===================================
// Filter Alerts
// ===================================

function filterAlerts(category) {
    currentFilter = category;
    
    if (category === 'all') {
        filteredAlerts = [...alertsData];
    } else {
        filteredAlerts = alertsData.filter(alert => alert.category === category);
    }
    
    sortAlerts(currentSort);
    renderAlerts();
}

// ===================================
// Sort Alerts
// ===================================

function sortAlerts(sortType) {
    currentSort = sortType;
    
    switch (sortType) {
        case 'newest':
            filteredAlerts.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            filteredAlerts.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'priority':
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            filteredAlerts.sort((a, b) => 
                priorityOrder[b.priority] - priorityOrder[a.priority]
            );
            break;
    }
    
    renderAlerts();
}

// ===================================
// Event Listeners
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderAlerts();
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter alerts
            const category = button.getAttribute('data-category');
            filterAlerts(category);
        });
    });
    
    // Sort dropdown
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', (e) => {
        sortAlerts(e.target.value);
    });
});
