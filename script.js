// Get DOM elements
const healthIssueSelect = document.getElementById('health-issue');
const symptomsContainer = document.getElementById('symptoms-container');
const symptomsSelect = document.getElementById('symptoms');
const searchBtn = document.getElementById('search-btn');
const loadingDiv = document.getElementById('loading');
const resultsDiv = document.getElementById('results');
const remediesContainer = document.getElementById('remedies-container');

// Define symptoms for each health issue
const symptomsMap = {
    'cold': [
        'Runny nose',
        'Nasal congestion',
        'Sneezing',
        'Sore throat',
        'Mild cough',
        'Mild body aches'
    ],
    'cough': [
        'Dry cough',
        'Wet cough',
        'Chest congestion',
        'Throat irritation',
        'Nighttime cough'
    ],
    'fever': [
        'High temperature',
        'Chills and shivering',
        'Headache',
        'Body aches',
        'Weakness'
    ],
    'headache': [
        'Tension headache',
        'Migraine',
        'Sinus headache',
        'Stress-related headache'
    ],
    'stomachache': [
        'General stomach pain',
        'Gas and bloating',
        'Acidity',
        'Nausea'
    ],
    'indigestion': [
        'Bloating',
        'Gas',
        'Acidity',
        'Heartburn',
        'Nausea after eating'
    ],
    'constipation': [
        'Difficult bowel movements',
        'Infrequent bowel movements',
        'Hard stools',
        'Feeling of incomplete evacuation'
    ],
    'diarrhea': [
        'Loose watery stools',
        'Abdominal cramps',
        'Urgent bowel movements',
        'Nausea'
    ],
    'sore-throat': [
        'Throat pain',
        'Difficulty swallowing',
        'Scratchy sensation in throat',
        'Throat inflammation'
    ],
    'allergies': [
        'Sneezing',
        'Itchy eyes',
        'Runny nose',
        'Skin rash',
        'Seasonal allergies'
    ],
    'skin-issues': [
        'Acne',
        'Dry skin',
        'Minor burns',
        'Rashes',
        'Itching'
    ],
    'joint-pain': [
        'Arthritis pain',
        'Joint stiffness',
        'Swelling in joints',
        'Muscle aches',
        'Inflammation'
    ]
};

// Named symptom mapping for better search terms
const healthIssueNames = {
    'cold': 'common cold',
    'cough': 'cough',
    'fever': 'fever',
    'headache': 'headache',
    'stomachache': 'stomach ache',
    'indigestion': 'indigestion',
    'constipation': 'constipation',
    'diarrhea': 'diarrhea',
    'sore-throat': 'sore throat',
    'allergies': 'allergies',
    'skin-issues': 'skin problems',
    'joint-pain': 'joint pain'
};

// Event listeners
healthIssueSelect.addEventListener('change', updateSymptoms);
searchBtn.addEventListener('click', findRemedies);

// Function to update symptoms dropdown based on health issue selection
function updateSymptoms() {
    const selectedIssue = healthIssueSelect.value;
    
    if (selectedIssue) {
        // Clear previous options except the first default one
        symptomsSelect.innerHTML = '<option value="">-- Select symptoms --</option>';
        
        // Add symptoms for selected health issue
        if (symptomsMap[selectedIssue]) {
            symptomsMap[selectedIssue].forEach(symptom => {
                const option = document.createElement('option');
                option.value = symptom;
                option.textContent = symptom;
                symptomsSelect.appendChild(option);
            });
        }
        
        // Show symptoms dropdown
        symptomsContainer.style.display = 'block';
    } else {
        // Hide symptoms dropdown if no health issue selected
        symptomsContainer.style.display = 'none';
    }
}

// Function to find remedies based on selections
function findRemedies() {
    const healthIssue = healthIssueSelect.value;
    const symptom = symptomsSelect.value;
    
    // Validate inputs
    if (!healthIssue) {
        alert('Please select a health issue');
        return;
    }
    
    if (!symptom) {
        alert('Please select a symptom');
        return;
    }
    
    // Show loading state
    loadingDiv.style.display = 'block';
    resultsDiv.style.display = 'none';
    
    // Create search query
    const healthIssueName = healthIssueNames[healthIssue] || healthIssue;
    const searchQuery = `traditional Indian home remedies for ${symptom.toLowerCase()} in ${healthIssueName}`;
    
    // Perform the search
    searchForRemedies(searchQuery);
}

// Function to search for remedies using SerpAPI
function searchForRemedies(query) {
    // Set up the URL to the proxy server that will handle the SerpAPI request
    // In a real implementation, you would host this proxy server somewhere
    const proxyUrl = 'https://your-proxy-server.glitch.me/search';
    
    // Since we cannot directly use SerpAPI without exposing the key in client-side code,
    // this is where you would connect to your proxy server
    
    // For demo purposes, we'll simulate a search response after a delay
    setTimeout(() => {
        // Parse the simulated search results
        const remedies = processSearchResults(query);
        
        // Display the remedies
        displayRemedies(remedies);
        
        // Hide loading, show results
        loadingDiv.style.display = 'none';
        resultsDiv.style.display = 'block';
    }, 2000);
}

// Function to process search results
function processSearchResults(query) {
    // This function would normally parse the results from a real search API
    // For now, we'll simulate different results based on the query
    
    // Extract the health issue and symptom from the query
    const queryParts = query.toLowerCase().split(' for ')[1].split(' in ');
    const symptom = queryParts[0];
    const healthIssue = queryParts[1];
    
    console.log(`Searching for: ${symptom} in ${healthIssue}`);
    
    // Generate dynamic results based on the search query
    const remedies = [];
    
    // Different remedy combinations based on the query
    if (healthIssue.includes('cold') && symptom.includes('runny nose')) {
        remedies.push({
            title: 'Tulsi (Holy Basil) Tea',
            ingredients: ['10-15 fresh tulsi leaves', '1 cup water', '1/2 inch ginger (grated)', 'Honey to taste', 'Lemon juice (optional)'],
            preparation: [
                'Boil water in a saucepan',
                'Add tulsi leaves and grated ginger',
                'Let it simmer for 5 minutes',
                'Strain the tea into a cup',
                'Add honey and lemon juice if desired',
                'Drink warm 2-3 times a day'
            ],
            benefits: ['Helps reduce mucus', 'Contains natural antivirals', 'Boosts immunity', 'Soothes throat irritation'],
            source: 'Based on Ayurvedic tradition'
        });
        
        remedies.push({
            title: 'Steam Inhalation with Ajwain',
            ingredients: ['1 tablespoon of ajwain (carom seeds)', '4 cups of hot water', 'A large towel'],
            preparation: [
                'Boil water in a large bowl',
                'Add ajwain seeds to the hot water',
                'Cover your head with a towel',
                'Inhale the steam for 5-10 minutes',
                'Repeat 2-3 times a day'
            ],
            benefits: ['Clears nasal congestion', 'Reduces inflammation in nasal passages', 'Helps thin mucus'],
            source: 'Traditional Indian household remedy'
        });
    } 
    else if (healthIssue.includes('headache') && symptom.includes('migraine')) {
        remedies.push({
            title: 'Ginger and Lemon Tea',
            ingredients: ['1 inch ginger piece', '1/2 lemon', '1 cup water', 'Honey to taste'],
            preparation: [
                'Grate the ginger',
                'Boil water with grated ginger for 5 minutes',
                'Strain into a cup',
                'Add fresh lemon juice and honey',
                'Drink while warm'
            ],
            benefits: ['Reduces inflammation', 'Alleviates nausea associated with migraines', 'Provides pain relief'],
            source: 'Ayurvedic medicine'
        });
        
        remedies.push({
            title: 'Coriander Seed Infusion',
            ingredients: ['2 tablespoons coriander seeds', '2 cups water'],
            preparation: [
                'Slightly crush the coriander seeds',
                'Boil water with the crushed seeds for 5 minutes',
                'Let it steep for 10 minutes',
                'Strain and drink when warm',
                'Drink 2-3 times during a migraine attack'
            ],
            benefits: ['Anti-inflammatory properties', 'Helps relieve headache pain', 'Calming effect'],
            source: 'Traditional Indian remedy'
        });
    }
    else if (healthIssue.includes('sore throat') && symptom.includes('throat pain')) {
        remedies.push({
            title: 'Turmeric Milk (Haldi Doodh)',
            ingredients: ['1 cup milk', '1/2 teaspoon turmeric powder', '1/4 teaspoon black pepper', 'Honey to taste'],
            preparation: [
                'Heat milk in a saucepan',
                'Add turmeric powder and black pepper',
                'Simmer for 5 minutes on low heat',
                'Add honey to taste after removing from heat',
                'Drink warm before bedtime'
            ],
            benefits: ['Anti-inflammatory properties', 'Soothes throat irritation', 'Boosts immunity', 'Promotes healing'],
            source: 'Ancient Ayurvedic recipe'
        });
        
        remedies.push({
            title: 'Salt Water Gargle with Turmeric',
            ingredients: ['1 cup warm water', '1/2 teaspoon salt', '1/4 teaspoon turmeric'],
            preparation: [
                'Mix salt and turmeric in warm water',
                'Stir until dissolved',
                'Gargle with the solution for 30-60 seconds',
                'Spit out completely',
                'Repeat 3-4 times daily'
            ],
            benefits: ['Reduces inflammation', 'Kills bacteria', 'Provides pain relief', 'Helps heal throat tissue'],
            source: 'Traditional Indian household remedy'
        });
    }
    else {
        // Generate generic but realistic-looking results for any other combination
        const commonIngredients = [
            ['Turmeric powder', 'Honey', 'Warm water'],
            ['Ginger', 'Lemon', 'Honey'],
            ['Tulsi leaves', 'Black pepper', 'Honey'],
            ['Fenugreek seeds', 'Water'],
            ['Cinnamon', 'Cardamom', 'Milk']
        ];
        
        const commonPreparations = [
            ['Mix ingredients together', 'Consume twice daily'],
            ['Boil ingredients for 5 minutes', 'Strain and drink warm'],
            ['Crush or grind the ingredients', 'Mix with warm water or milk', 'Take on an empty stomach'],
            ['Prepare as a tea', 'Drink 2-3 times daily'],
            ['Create a paste', 'Apply directly or consume with water']
        ];
        
        const commonBenefits = [
            ['Anti-inflammatory properties', 'Boosts immunity'],
            ['Reduces pain and discomfort', 'Natural antimicrobial'],
            ['Soothes affected area', 'Promotes healing'],
            ['Traditional Ayurvedic remedy', 'Balances body energies'],
            ['Antioxidant properties', 'Helps with recovery']
        ];
        
        // Generate 2-3 remedies
        const numRemedies = 2 + Math.floor(Math.random() * 2); // 2-3 remedies
        
        for (let i = 0; i < numRemedies; i++) {
            // Generate remedy titles based on the query
            const remedyTitles = [
                `Traditional ${healthIssue.split(' ')[0]} Relief Mixture`,
                `Ayurvedic ${symptom} Remedy`,
                `Grandma's ${healthIssue} Cure`,
                `Ancient Indian ${symptom} Solution`,
                `Natural ${healthIssue} Treatment`
            ];
            
            const ingredientSet = commonIngredients[Math.floor(Math.random() * commonIngredients.length)];
            const prepSet = commonPreparations[Math.floor(Math.random() * commonPreparations.length)];
            const benefitSet = commonBenefits[Math.floor(Math.random() * commonBenefits.length)];
            
            // Add some specificity based on the health issue
            if (healthIssue.includes('cold') || healthIssue.includes('cough')) {
                ingredientSet.push('Ginger');
                benefitSet.push('Helps with respiratory issues');
            }
            else if (healthIssue.includes('headache')) {
                ingredientSet.push('Mint leaves');
                benefitSet.push('Provides cooling relief');
            }
            else if (healthIssue.includes('stomach')) {
                ingredientSet.push('Cumin seeds');
                benefitSet.push('Aids digestion');
            }
            
            remedies.push({
                title: remedyTitles[Math.floor(Math.random() * remedyTitles.length)],
                ingredients: ingredientSet,
                preparation: prepSet,
                benefits: benefitSet,
                source: 'Based on traditional Indian medicine'
            });
        }
    }
    
    return remedies;
}

// Function to display remedies
function displayRemedies(remedies) {
    // Clear previous results
    remediesContainer.innerHTML = '';
    
    // Update results heading
    const healthIssue = healthIssueSelect.value;
    const symptom = symptomsSelect.value;
    document.querySelector('.results h2').textContent = `Recommended Home Remedies for ${symptom}`;
    
    // If no remedies found
    if (!remedies || remedies.length === 0) {
        remediesContainer.innerHTML = `
            <div class="no-results">
                <p>No specific remedies found for this combination. Please try a different selection.</p>
            </div>
        `;
        return;
    }
    
    // Add each remedy to the container
    remedies.forEach(remedy => {
        const remedyCard = document.createElement('div');
        remedyCard.className = 'remedy-card';
        
        // Create ingredients list HTML
        const ingredientsList = remedy.ingredients.map(ingredient => 
            `<li>${ingredient}</li>`
        ).join('');
        
        // Create preparation steps HTML
        const preparationSteps = remedy.preparation.map(step => 
            `<li>${step}</li>`
        ).join('');
        
        // Create benefits list HTML
        const benefitsList = remedy.benefits.map(benefit => 
            `<li>${benefit}</li>`
        ).join('');
        
        // Set remedy card HTML
        remedyCard.innerHTML = `
            <div class="remedy-title">
                <span class="icon">🌿</span>
                ${remedy.title}
            </div>
            
            <div class="ingredients">
                <h4>Ingredients:</h4>
                <ul>${ingredientsList}</ul>
            </div>
            
            <div class="preparation">
                <h4>Preparation:</h4>
                <ol>${preparationSteps}</ol>
            </div>
            
            <div class="benefits">
                <h4>Benefits:</h4>
                <ul>${benefitsList}</ul>
            </div>
            
            ${remedy.source ? `<div class="source"><p><em>Source: ${remedy.source}</em></p></div>` : ''}
        `;
        
        remediesContainer.appendChild(remedyCard);
    });
}
