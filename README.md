# CityPulse — Smart City Information Dashboard

## Project Overview

CityPulse is an interactive, client-side smart city dashboard that provides real-time civic awareness, data visualization, and citizen engagement. Built entirely with HTML, CSS, and JavaScript, this project simulates a modern urban data portal allowing users to explore public information such as weather, alerts, and facilities interactively.

## Features

### Page 1: Home Dashboard (`index.html`)
- **Real-time Date & Time**: Auto-updates every second using JavaScript
- **Dynamic Data Cards**:
  - Temperature with visual meter (°C scale)
  - Air Quality Index (AQI) with color-coded status
  - Traffic Density with animated bars
  - Population statistics
  - Public transport status
  - Emergency services status
- **City Statistics**: Parks, Hospitals, Schools, and Shopping Centers count
- **Visual Indicators**: Animated meters and progress bars for data visualization
- **Auto-refresh**: Simulates real-time updates every 30 seconds with slight data variations

### Page 2: City Alerts & News (`alerts.html`)
- **Dynamic Alert Cards**: 10+ pre-loaded civic alerts and updates
- **Category Filters**: 
  - All alerts
  - Traffic (🚦)
  - Health (⚕️)
  - Weather (🌤️)
  - Public Notices (📢)
- **Sorting Options**:
  - Newest First
  - Oldest First
  - Priority (High → Medium → Low)
- **Priority Levels**: Color-coded badges (High, Medium, Low)
- **Smooth Animations**: Slide-in effects for alert cards
- **Interactive UI**: Hover effects and action buttons

### Page 3: Interactive City Map (`map.html`)
- **SVG-based Map**: Vector graphics for scalability
- **11 Clickable Zones**:
  - Parks & Recreation (Green)
  - Hospitals (Red)
  - Schools (Blue)
  - Shopping Centers (Orange)
  - Transport Hubs (Purple)
  - Government Buildings (Gray)
- **Interactive Features**:
  - Hover animations with brightness and scale effects
  - Click to open detailed modal
  - Zone-specific information display
- **Modal Information**:
  - Zone name and category
  - Detailed description
  - Address
  - Contact information
  - Operating hours
  - Additional info
- **Visual Legend**: Color-coded map legend for easy identification

### Page 4: Feedback & Citizen Connect (`feedback.html`)
- **Contact Information Cards**: Email, Phone, Response Time
- **Social Media Links**: Facebook, Twitter, Instagram, LinkedIn
- **Comprehensive Feedback Form**:
  - Full Name (required, letters only)
  - Email Address (required, email validation)
  - Category dropdown (7 options)
  - Message textarea (10-1000 characters)
- **Real-time Validation**:
  - Field-level validation on blur and input
  - Visual feedback (red/green borders)
  - Error messages below fields
  - Character counter for message field
- **Custom Success Modal**:
  - Animated checkmark icon
  - Thank you message
  - Social media suggestions
  - No default alert() used

## Technical Implementation

### Technologies Used
- **HTML5**: Semantic markup, forms, SVG graphics
- **CSS3**: 
  - Flexbox and Grid layouts
  - Custom animations and transitions
  - Responsive design with media queries
  - CSS variables for theming
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event listeners
  - Array methods (filter, sort, map)
  - Date and time handling
  - Form validation with regex
  - Custom modal implementation

### File Structure
```
WEB TECH/
│
├── index.html              # Home Dashboard
├── alerts.html             # City Alerts & News
├── map.html                # Interactive City Map
├── feedback.html           # Feedback & Citizen Connect
│
├── styles/
│   ├── main.css           # Global styles, navigation, layout
│   ├── dashboard.css      # Home dashboard specific styles
│   ├── alerts.css         # Alerts page styles
│   ├── map.css            # Map page styles
│   └── feedback.css       # Feedback page styles
│
└── scripts/
    ├── dashboard.js       # Dashboard functionality & data
    ├── alerts.js          # Alerts filtering & sorting
    ├── map.js             # Map interaction & modals
    └── feedback.js        # Form validation & submission
```

### Key Design Patterns

#### 1. Static Data Storage
All data is stored as JavaScript objects and arrays:
```javascript
const cityData = {
    temperature: { value: 24, unit: '°C', description: 'Partly Cloudy' },
    aqi: { value: 68, level: 'Moderate' },
    // ... more data
};
```

#### 2. Event-Driven Architecture
- Event listeners for user interactions
- Real-time form validation
- Dynamic content filtering and sorting

#### 3. Custom Modal System
- No alert() or confirm() used
- Custom HTML/CSS overlay modals
- Smooth animations with CSS

#### 4. Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Breakpoints for tablets and phones

## How to Run

### Option 1: Local Browser
1. Extract all files maintaining the folder structure
2. Open `index.html` in any modern web browser
3. Navigate between pages using the navigation menu

### Option 2: GitHub Pages
1. Create a new GitHub repository
2. Upload all files maintaining the structure
3. Go to Settings → Pages
4. Select main branch as source
5. Access via the provided GitHub Pages URL

### Option 3: Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Then open http://localhost:8000 in browser
```

## Browser Compatibility
- Chrome/Edge: ✅ Fully supported
- Firefox: ✅ Fully supported
- Safari: ✅ Fully supported
- Opera: ✅ Fully supported

## Features Checklist

### Technical Requirements ✅
- [x] HTML5, CSS3, JavaScript (ES6+)
- [x] No backend or database
- [x] Static data in JavaScript objects/arrays
- [x] DOM manipulation and event listeners
- [x] CSS animations and transitions
- [x] No alert()/confirm() - custom modals only
- [x] Fully functional as static website
- [x] Responsive design

### Page-Specific Features ✅
- [x] Home: Dynamic cards with visual indicators
- [x] Home: Real-time date/time updates
- [x] Home: Data visualization (meters, bars)
- [x] Alerts: Category filtering
- [x] Alerts: Sorting functionality
- [x] Alerts: Smooth animations
- [x] Map: Clickable zones
- [x] Map: Modal with zone details
- [x] Map: Hover animations
- [x] Feedback: Form validation
- [x] Feedback: Custom success modal
- [x] Feedback: Social media integration

## Design Philosophy

### Color Scheme
- **Primary Blue**: #2563eb (Trust, Technology)
- **Success Green**: #10b981 (Positive actions)
- **Warning Orange**: #f59e0b (Caution)
- **Danger Red**: #ef4444 (Urgent, Critical)
- **Gradient Background**: Purple gradient for modern look

### Typography
- Font Family: Segoe UI (system font for performance)
- Hierarchical sizing for clarity
- Consistent spacing and line heights

### User Experience
- Clear navigation with active state
- Smooth transitions and animations
- Visual feedback on interactions
- Accessible color contrasts
- Intuitive iconography

## Future Enhancements (Optional)
- Add more data visualization charts
- Implement dark mode toggle
- Add search functionality
- Multi-language support
- Enhanced accessibility features
- Print-friendly styles

## Credits
Developed as part of Web Technology course project.
Project demonstrates proficiency in:
- HTML5 semantic markup
- CSS3 modern layouts and animations
- JavaScript ES6+ programming
- Responsive web design
- User interface design
- Client-side data management

## License
This project is created for educational purposes.

---

**Note**: This is a static demonstration. All data is pre-loaded and simulated. No actual backend services or databases are used.
