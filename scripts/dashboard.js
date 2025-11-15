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
// Load Dashboard Data
// ===================================

function loadDashboardData() {
    // Temperature Card
    document.getElementById('temperature').textContent = 
        `${cityData.temperature.value}${cityData.temperature.unit}`;
    document.getElementById('tempDesc').textContent = 
        cityData.temperature.description;
    
    // Temperature meter (0-50°C scale)
    const tempPercentage = (cityData.temperature.value / 50) * 100;
    document.getElementById('tempFill').style.width = `${tempPercentage}%`;
    
    // AQI Card
    document.getElementById('aqi').textContent = cityData.aqi.value;
    document.getElementById('aqiDesc').textContent = cityData.aqi.level;
    
    // AQI meter and color
    const aqiPercentage = (cityData.aqi.value / 500) * 100;
    const aqiFill = document.getElementById('aqiFill');
    aqiFill.style.width = `${aqiPercentage}%`;
    
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
    
    // Facilities Stats
    document.getElementById('parks').textContent = cityData.facilities.parks;
    document.getElementById('hospitals').textContent = 
        cityData.facilities.hospitals;
    document.getElementById('schools').textContent = cityData.facilities.schools;
    document.getElementById('malls').textContent = cityData.facilities.malls;
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
// Initialize Dashboard
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial load
    updateDateTime();
    loadDashboardData();
    
    // Update time every second
    setInterval(updateDateTime, 1000);
    
    // Update dashboard data every 30 seconds (simulating real-time updates)
    setInterval(() => {
        // Simulate slight variations in data
        cityData.temperature.value = 22 + Math.floor(Math.random() * 6);
        cityData.aqi.value = 50 + Math.floor(Math.random() * 40);
        cityData.traffic.percentage = 50 + Math.floor(Math.random() * 40);
        
        loadDashboardData();
    }, 30000);
});
