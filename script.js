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
    
    // Simulate search delay for better UX
    setTimeout(() => {
        // Get remedies for the selected health issue and symptom
        const remedies = getRemediesForCondition(healthIssue, symptom);
        
        // Display the remedies
        displayRemedies(remedies, healthIssue, symptom);
        
        // Hide loading, show results
        loadingDiv.style.display = 'none';
        resultsDiv.style.display = 'block';
    }, 1200);
}

// Function to get remedies for a specific health issue and symptom
function getRemediesForCondition(healthIssue, symptom) {
    // This is where you would normally fetch from a database or API
    // For now, we'll use predefined remedies based on the selection
    
    // Collection of remedies organized by health issue and symptom
    const remediesDatabase = {
        'cold': {
            'Runny nose': [
                {
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
                    benefits: ['Helps reduce mucus', 'Contains natural antivirals', 'Boosts immunity', 'Soothes throat irritation']
                },
                {
                    title: 'Steam Inhalation with Ajwain (Carom Seeds)',
                    ingredients: ['1 tablespoon of ajwain (carom seeds)', '4 cups of hot water', 'A large towel'],
                    preparation: [
                        'Boil water in a large bowl',
                        'Add ajwain seeds to the hot water',
                        'Cover your head with a towel',
                        'Inhale the steam for 5-10 minutes',
                        'Repeat 2-3 times a day'
                    ],
                    benefits: ['Clears nasal congestion', 'Reduces inflammation in nasal passages', 'Helps thin mucus', 'Provides relief from breathing difficulty']
                }
            ],
            'Sore throat': [
                {
                    title: 'Turmeric and Salt Gargle',
                    ingredients: ['1/2 teaspoon turmeric powder', '1/2 teaspoon salt', '1 cup warm water'],
                    preparation: [
                        'Mix turmeric and salt in warm water',
                        'Stir well until dissolved',
                        'Gargle with this solution for 30-60 seconds',
                        'Spit out completely after gargling',
                        'Repeat 3-4 times a day'
                    ],
                    benefits: ['Reduces throat inflammation', 'Kills bacteria', 'Provides temporary pain relief', 'Loosens mucus']
                },
                {
                    title: 'Honey and Ginger Mixture',
                    ingredients: ['1 tablespoon raw honey', '1/2 teaspoon freshly grated ginger', 'A pinch of black pepper'],
                    preparation: [
                        'Mix honey and grated ginger',
                        'Add a small pinch of black pepper',
                        'Take 1/2 teaspoon of this mixture and let it dissolve slowly in your mouth',
                        'Repeat every 2-3 hours'
                    ],
                    benefits: ['Coats and soothes irritated throat', 'Anti-inflammatory properties', 'Antimicrobial action', 'Reduces cough reflex']
                }
            ]
        },
        'headache': {
            'Tension headache': [
                {
                    title: 'Coriander Seed Tea',
                    ingredients: ['2 teaspoons coriander seeds', '1 cup water', 'Honey (optional)'],
                    preparation: [
                        'Lightly crush the coriander seeds',
                        'Boil water and add crushed coriander seeds',
                        'Simmer for 3-5 minutes and strain',
                        'Add honey if desired',
                        'Drink warm'
                    ],
                    benefits: ['Anti-inflammatory properties', 'Helps relieve tension', 'Calming effect', 'Improves circulation']
                },
                {
                    title: 'Pudina (Mint) Compress',
                    ingredients: ['Handful of fresh mint leaves', '2 cups water', 'A clean cloth'],
                    preparation: [
                        'Boil mint leaves in water for 5 minutes',
                        'Strain and cool the water slightly',
                        'Soak the cloth in this mint-infused water',
                        'Wring out excess water and apply to forehead and temples',
                        'Lie down and relax for 15-20 minutes'
                    ],
                    benefits: ['Cooling sensation', 'Relieves tension', 'Improves blood flow', 'Calming aroma helps relax']
                }
            ]
        },
        'sore-throat': {
            'Throat pain': [
                {
                    title: 'Turmeric Milk (Haldi Doodh)',
                    ingredients: ['1 cup milk', '1/2 teaspoon turmeric powder', '1/4 teaspoon black pepper', 'Honey to taste'],
                    preparation: [
                        'Heat milk in a saucepan',
                        'Add turmeric powder and black pepper',
                        'Simmer for 5 minutes on low heat',
                        'Add honey to taste after removing from heat',
                        'Drink warm before bedtime'
                    ],
                    benefits: ['Anti-inflammatory properties', 'Soothes throat irritation', 'Boosts immunity', 'Promotes healing']
                },
                {
                    title: 'Licorice (Mulethi) Tea',
                    ingredients: ['1 small stick of licorice root', '1 cup water', 'Honey (optional)', '2-3 leaves of tulsi (optional)'],
                    preparation: [
                        'Break the licorice stick into small pieces',
                        'Boil water and add licorice pieces',
                        'Add tulsi leaves if using',
                        'Simmer for 5 minutes on low heat',
                        'Strain and add honey if desired',
                        'Drink warm 2-3 times a day'
                    ],
                    benefits: ['Soothes throat mucous membranes', 'Creates protective coating on throat', 'Anti-inflammatory', 'Antimicrobial properties']
                },
                {
                    title: 'Salt Water Gargle',
                    ingredients: ['1/2 teaspoon salt', '1 cup warm water', '1/4 teaspoon turmeric (optional)'],
                    preparation: [
                        'Dissolve salt in warm water',
                        'Add turmeric if using',
                        'Gargle with the solution for 30 seconds',
                        'Spit out completely',
                        'Repeat 3-4 times a day'
                    ],
                    benefits: ['Reduces swelling and pain', 'Draws out excess fluid', 'Removes irritants', 'Creates hostile environment for bacteria']
                }
            ],
            'Difficulty swallowing': [
                {
                    title: 'Honey and Ginger Syrup',
                    ingredients: ['2 tablespoons raw honey', '1 tablespoon ginger juice', '1/2 teaspoon black pepper powder'],
                    preparation: [
                        'Extract juice from fresh ginger by grating and squeezing',
                        'Mix honey, ginger juice, and black pepper powder',
                        'Take 1 teaspoon of this mixture every 2 hours',
                        'Let it slowly dissolve in the mouth'
                    ],
                    benefits: ['Lubricates the throat', 'Reduces inflammation', 'Numbs pain', 'Helps break down mucus']
                }
            ]
        }
    };
    
    // Check if we have remedies for this combination
    if (remediesDatabase[healthIssue] && remediesDatabase[healthIssue][symptom]) {
        return remediesDatabase[healthIssue][symptom];
    }
    
    // Default remedies if specific combination not found
    return [
        {
            title: 'Turmeric Milk (Haldi Doodh)',
            ingredients: ['1 cup milk', '1/2 teaspoon turmeric powder', '1/4 teaspoon black pepper', 'Honey to taste'],
            preparation: [
                'Heat milk in a saucepan',
                'Add turmeric powder and black pepper',
                'Simmer for 5 minutes on low heat',
                'Add honey to taste after removing from heat',
                'Drink warm before bedtime'
            ],
            benefits: ['Anti-inflammatory properties', 'Boosts immunity', 'Helps with various ailments', 'Promotes better sleep']
        },
        {
            title: 'Ginger-Honey Tea',
            ingredients: ['1 inch fresh ginger', '1 cup water', '1 tablespoon honey', '1/2 lemon (optional)'],
            preparation: [
                'Slice or grate the ginger',
                'Boil water and add ginger',
                'Simmer for 5-10 minutes',
                'Strain into a cup',
                'Add honey and lemon juice if desired',
                'Drink warm 2-3 times a day'
            ],
            benefits: ['Anti-inflammatory', 'Boosts immunity', 'Improves digestion', 'Relieves pain']
        }
    ];
}

// Function to display remedies
function displayRemedies(remedies, healthIssue, symptom) {
    // Clear previous results
    remediesContainer.innerHTML = '';
    
    // Update results heading
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
        `;
        
        remediesContainer.appendChild(remedyCard);
    });
}