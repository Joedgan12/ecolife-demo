// Get elements
const getStartedButton = document.getElementById('get-started-button');
const habitsList = document.getElementById('habits-list');
const ecoImpactList = document.getElementById('eco-impact-list');
const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const editProfileButton = document.getElementById('edit-profile-button');

// API Endpoints
const apiEndpoints = {
  getHabits: 'https://example.com/api/habits',
  getEcoImpact: 'https://example.com/api/eco-impact',
  getUserProfile: 'https://example.com/api/user/profile',
  editUserProfile: 'https://example.com/api/user/profile/edit',
};

// Get habits from API
const getHabits = async () => {
  try {
    const response = await fetch(apiEndpoints.getHabits);
    const data = await response.json();
    // Update habits list
    habitsList.innerHTML = data.map(habit => `
      <li>
        <h2>${habit.name}</h2>
        <p>${habit.description}</p>
        <button class="log-activity-button">Log Activity</button>
      </li>
    `).join('');
  } catch (error) {
    console.error(error);
  }
};

// Get eco-impact from API
const getEcoImpact = async () => {
  try {
    const response = await fetch(apiEndpoints.getEcoImpact);
    const data = await response.json();
    // Update eco-impact list
    ecoImpactList.innerHTML = data.map(impact => `
      <li>
        <h2>${impact.type}</h2>
        <p>${impact.value}</p>
      </li>
    `).join('');
  } catch (error) {
    console.error(error);
  }
};

// Get user profile from API
const getUserProfile = async () => {
  try {
    const response = await fetch(apiEndpoints.getUserProfile);
    const data = await response.json();
    // Update username and email
    usernameElement.textContent = data.username;
    emailElement.textContent = data.email;
  } catch (error) {
    console.error(error);
  }
};

// Edit user profile
const editUserProfile = async () => {
  try {
    const response = await fetch(apiEndpoints.editUserProfile, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'new-username', email: 'new-email@example.com' }),
    });
    const data = await response.json();
    // Update username and email
    usernameElement.textContent = data.username;
    emailElement.textContent = data.email;
  } catch (error) {
    console.error(error);
  }
};

// Add event listeners
getStartedButton.addEventListener('click', getHabits);
editProfileButton.addEventListener('click', editUserProfile);

// Initialize
getHabits();
getEcoImpact();
getUserProfile();