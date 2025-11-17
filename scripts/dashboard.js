// ===================================
// City Data (Static JSON-like Objects)
// ===================================

const cityData = {
    temperature: {
        value: 24,
        unit: '°C',
        description: 'Partly Cloudy'
    },
    aqi: {
        value: 68,
        level: 'Moderate',
        description: 'Air quality is acceptable'
    },
    traffic: {
        level: 'Medium',
        percentage: 65,
        description: 'Moderate traffic flow'
    },
    population: {
        value: '1.2M',
        description: 'Active Citizens'
    },
    transport: {
        active: 45,
        total: 50,
        description: 'Routes Active'
    },
    emergency: {
        status: 'All Clear',
        availability: '24/7 Available'
    },
    facilities: {
        parks: 28,
        hospitals: 12,
        schools: 45,
        malls: 18
    }
};

// ===================================
// Update Date and Time
// ===================================

function updateDateTime() {
    const now = new Date();
    
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    document.getElementById('currentDate').textContent = 
        now.toLocaleDateString('en-US', dateOptions);
    
    document.getElementById('currentTime').textContent = 
        now.toLocaleTimeString('en-US', timeOptions);
}

// ===================================
// Count Up Animation Function
// ===================================

function animateCountUp(element, target, suffix = '', duration = 1000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    element.classList.add('count-up');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (typeof target === 'number' && !Number.isInteger(target)) {
            element.textContent = current.toFixed(1) + suffix;
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// ===================================
// Load Dashboard Data with Animations
// ===================================

function loadDashboardData() {
    // Temperature Card with count-up animation
    const tempElement = document.getElementById('temperature');
    animateCountUp(tempElement, cityData.temperature.value, cityData.temperature.unit);
    document.getElementById('tempDesc').textContent = 
        cityData.temperature.description;
    
    // Temperature meter with animation (0-50°C scale)
    const tempPercentage = (cityData.temperature.value / 50) * 100;
    const tempFill = document.getElementById('tempFill');
    tempFill.classList.add('animated-progress');
    setTimeout(() => {
        tempFill.style.width = `${tempPercentage}%`;
    }, 100);
    
    // AQI Card with count-up animation
    const aqiElement = document.getElementById('aqi');
    animateCountUp(aqiElement, cityData.aqi.value);
    document.getElementById('aqiDesc').textContent = cityData.aqi.level;
    
    // AQI meter and color with animation
    const aqiPercentage = (cityData.aqi.value / 500) * 100;
    const aqiFill = document.getElementById('aqiFill');
    aqiFill.classList.add('animated-progress', 'meter-fill-animated');
    
    setTimeout(() => {
        aqiFill.style.width = `${aqiPercentage}%`;
    }, 200);
    
    if (cityData.aqi.value <= 50) {
        aqiFill.classList.add('good');
    } else if (cityData.aqi.value <= 100) {
        aqiFill.classList.add('moderate');
    } else {
        aqiFill.classList.add('unhealthy');
    }
    
    // Traffic Card
    document.getElementById('traffic').textContent = cityData.traffic.level;
    document.getElementById('trafficDesc').textContent = 
        cityData.traffic.description;
    
    // Traffic bars animation
    animateTrafficBars(cityData.traffic.percentage);
    
    // Population Card
    document.getElementById('population').textContent = 
        cityData.population.value;
    
    // Transport Card
    document.getElementById('transport').textContent = 
        `${cityData.transport.active}/${cityData.transport.total}`;
    document.getElementById('transportDesc').textContent = 
        cityData.transport.description;
    
    // Emergency Card
    document.getElementById('emergency').textContent = 
        cityData.emergency.status;
    
    // Facilities Stats with staggered count-up animations
    setTimeout(() => {
        animateCountUp(document.getElementById('parks'), cityData.facilities.parks);
    }, 300);
    
    setTimeout(() => {
        animateCountUp(document.getElementById('hospitals'), cityData.facilities.hospitals);
    }, 500);
    
    setTimeout(() => {
        animateCountUp(document.getElementById('schools'), cityData.facilities.schools);
    }, 700);
    
    setTimeout(() => {
        animateCountUp(document.getElementById('malls'), cityData.facilities.malls);
    }, 900);
}

// ===================================
// Animate Traffic Bars
// ===================================

function animateTrafficBars(percentage) {
    const bars = document.querySelectorAll('.bar');
    const heights = [30, 50, 70, 45, 60]; // Base heights in percentage
    
    bars.forEach((bar, index) => {
        setTimeout(() => {
            const height = (heights[index] * percentage) / 100;
            bar.style.height = `${height}%`;
        }, index * 100);
    });
}

// ===================================
// Live Activity Feed
// ===================================

const activityTemplates = [
    { icon: '🚌', title: 'Bus #42 departed from Central Station', type: 'transport' },
    { icon: '🚑', title: 'Ambulance dispatched to Zone 3', type: 'emergency' },
    { icon: '🚦', title: 'Traffic light synchronized on Main Street', type: 'traffic' },
    { icon: '🌳', title: 'Central Park maintenance completed', type: 'parks' },
    { icon: '📚', title: 'New books added to City Library', type: 'education' },
    { icon: '🏥', title: 'City Hospital received new equipment', type: 'health' },
    { icon: '🍔', title: 'Food Festival starting at Market Square', type: 'events' },
    { icon: '💡', title: 'Street lights upgraded in North District', type: 'utilities' },
    { icon: '♻️', title: 'Recycling drive collected 200kg waste', type: 'environment' },
    { icon: '🎭', title: 'Theater show tonight at Cultural Center', type: 'culture' },
    { icon: '🚴', title: '50 bikes rented from City Bike stations', type: 'transport' },
    { icon: '🏗️', title: 'Construction update: New bridge 60% complete', type: 'infrastructure' }
];

let activityLog = [];

function addActivityItem() {
    const streamElement = document.getElementById('activityStream');
    if (!streamElement) return;
    
    // Pick random activity
    const activity = activityTemplates[Math.floor(Math.random() * activityTemplates.length)];
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    // Create activity element
    const activityDiv = document.createElement('div');
    activityDiv.className = 'activity-item';
    activityDiv.innerHTML = `
        <div class="activity-icon">${activity.icon}</div>
        <div class="activity-content">
            <div class="activity-title">${activity.title}</div>
            <div class="activity-time">Just now • ${timeStr}</div>
        </div>
    `;
    
    // Add to top of stream
    streamElement.insertBefore(activityDiv, streamElement.firstChild);
    
    // Keep only last 5 activities
    while (streamElement.children.length > 5) {
        streamElement.removeChild(streamElement.lastChild);
    }
    
    // Update time labels
    setTimeout(() => {
        const timeLabel = activityDiv.querySelector('.activity-time');
        if (timeLabel) {
            timeLabel.textContent = `1 min ago • ${timeStr}`;
        }
    }, 60000);
}

// ===================================
// Weather Icon Updates
// ===================================

function updateWeatherIcon() {
    const weatherIcon = document.getElementById('weatherIcon');
    const tempMini = document.getElementById('tempMini');
    
    if (weatherIcon && tempMini) {
        const temp = cityData.temperature.value;
        let icon = '🌤️';
        
        if (temp > 30) icon = '☀️';
        else if (temp > 25) icon = '🌤️';
        else if (temp > 20) icon = '⛅';
        else if (temp > 15) icon = '☁️';
        else icon = '🌧️';
        
        weatherIcon.textContent = icon;
        tempMini.textContent = `${temp}°C`;
    }
}

// ===================================
// Card Animation on Update
// ===================================

function animateCardUpdate(cardElement) {
    cardElement.style.animation = 'none';
    setTimeout(() => {
        cardElement.style.animation = 'cardPulse 0.6s ease';
    }, 10);
}

// ===================================
// Initialize Dashboard
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial load
    updateDateTime();
    loadDashboardData();
    updateWeatherIcon();
    
    // Add initial activities
    setTimeout(() => addActivityItem(), 1000);
    setTimeout(() => addActivityItem(), 2500);
    setTimeout(() => addActivityItem(), 4000);
    
    // Update time every second
    setInterval(updateDateTime, 1000);
    
    // Add new activity every 8-15 seconds
    setInterval(() => {
        addActivityItem();
    }, Math.random() * 7000 + 8000);
    
    // Update dashboard data every 30 seconds (simulating real-time updates)
    setInterval(() => {
        // Simulate slight variations in data
        cityData.temperature.value = 22 + Math.floor(Math.random() * 6);
        cityData.aqi.value = 50 + Math.floor(Math.random() * 40);
        cityData.traffic.percentage = 50 + Math.floor(Math.random() * 40);
        
        loadDashboardData();
        updateWeatherIcon();
        
        // Animate updated cards
        document.querySelectorAll('.data-card').forEach(card => {
            animateCardUpdate(card);
        });
    }, 30000);
    
    // Add CSS for card pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cardPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        }
    `;
    document.head.appendChild(style);
});
