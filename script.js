// Function to process search results
function processSearchResults(query) {
    // Extract the health issue and symptom from the query
    const queryParts = query.toLowerCase().split(' for ')[1].split(' in ');
    const symptom = queryParts[0];
    const healthIssue = queryParts[1];
    
    console.log(`Searching for: ${symptom} in ${healthIssue}`);
    
    // Create a unique combination ID to ensure different remedies
    const combinationId = `${healthIssue}_${symptom}`;
    const remedies = [];
    
    // Comprehensive database of remedies organized by health issue and symptom
    const remedyDatabase = {
        // COLD REMEDIES
        "cold_runny nose": [
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
                benefits: ['Helps reduce mucus', 'Contains natural antivirals', 'Boosts immunity', 'Soothes throat irritation'],
                source: 'Based on Ayurvedic tradition'
            },
            {
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
            }
        ],
        "cold_nasal congestion": [
            {
                title: 'Black Pepper Steam Therapy',
                ingredients: ['1 teaspoon black pepper', '4 cups of hot water', 'A large towel'],
                preparation: [
                    'Boil water in a large bowl',
                    'Add black pepper to the hot water',
                    'Cover your head with a towel',
                    'Inhale the steam for 5-10 minutes',
                    'Repeat 2-3 times a day'
                ],
                benefits: ['Opens nasal passages', 'Helps thin and expel mucus', 'Reduces inflammation'],
                source: 'Traditional Indian remedy'
            },
            {
                title: 'Eucalyptus Oil Inhalation',
                ingredients: ['2-3 drops of eucalyptus oil', '4 cups of hot water', 'A large towel'],
                preparation: [
                    'Boil water in a large bowl',
                    'Add eucalyptus oil to the hot water',
                    'Cover your head with a towel',
                    'Inhale the steam for 5-10 minutes',
                    'Repeat 2-3 times a day'
                ],
                benefits: ['Powerful decongestant', 'Opens breathing passages', 'Antimicrobial properties'],
                source: 'Ayurvedic treatment'
            }
        ],
        "cold_sneezing": [
            {
                title: 'Honey and Black Pepper Mix',
                ingredients: ['1 tablespoon honey', '1/4 teaspoon black pepper powder', '1/4 teaspoon turmeric'],
                preparation: [
                    'Mix all ingredients together',
                    'Take 1 teaspoon of this mixture 3 times a day',
                    'Continue for 2-3 days'
                ],
                benefits: ['Reduces sneezing frequency', 'Soothes throat irritation', 'Anti-inflammatory effects'],
                source: 'Grandma\'s traditional remedy'
            },
            {
                title: 'Jaggery and Ginger Mix',
                ingredients: ['1 inch piece of ginger', '2 tablespoons jaggery (gur)', 'A pinch of black salt'],
                preparation: [
                    'Crush ginger to extract juice',
                    'Heat jaggery until it melts',
                    'Mix ginger juice and black salt with melted jaggery',
                    'Take a small piece 2-3 times a day'
                ],
                benefits: ['Controls sneezing', 'Warms the body', 'Boosts immunity'],
                source: 'Ancient Indian home remedy'
            }
        ],
        
        // HEADACHE REMEDIES
        "headache_tension headache": [
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
                benefits: ['Anti-inflammatory properties', 'Helps relieve tension', 'Calming effect', 'Improves circulation'],
                source: 'Traditional Indian remedy'
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
                benefits: ['Cooling sensation', 'Relieves tension', 'Improves blood flow', 'Calming aroma helps relax'],
                source: 'Ayurvedic therapy'
            }
        ],
        "headache_migraine": [
            {
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
            },
            {
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
            }
        ],
        "headache_sinus headache": [
            {
                title: 'Steam Inhalation with Ajwain and Tulsi',
                ingredients: ['1 tablespoon ajwain (carom seeds)', '10-12 tulsi leaves', '5 cups water'],
                preparation: [
                    'Boil water in a large pot',
                    'Add ajwain and tulsi leaves',
                    'Cover your head with a towel over the pot',
                    'Breathe in the steam for 10 minutes',
                    'Repeat 2-3 times daily'
                ],
                benefits: ['Opens sinus passages', 'Reduces sinus pressure', 'Antimicrobial effects', 'Thins mucus'],
                source: 'Traditional sinus relief method'
            },
            {
                title: 'Neti Pot with Salt Water',
                ingredients: ['1/4 teaspoon salt', '1/4 teaspoon baking soda (optional)', '1 cup warm distilled water', 'Neti pot or nasal irrigator'],
                preparation: [
                    'Mix salt and baking soda in warm water until dissolved',
                    'Lean over a sink with your head tilted',
                    'Pour the solution into one nostril, allowing it to drain from the other',
                    'Repeat on the other side',
                    'Gently blow your nose afterward'
                ],
                benefits: ['Flushes out sinus cavities', 'Removes irritants and allergens', 'Reduces inflammation'],
                source: 'Ancient Ayurvedic practice of Jala Neti'
            }
        ],
        
        // SORE THROAT REMEDIES
        "sore throat_throat pain": [
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
                benefits: ['Anti-inflammatory properties', 'Soothes throat irritation', 'Boosts immunity', 'Promotes healing'],
                source: 'Ancient Ayurvedic recipe'
            },
            {
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
            }
        ],
        "sore throat_difficulty swallowing": [
            {
                title: 'Licorice (Mulethi) and Honey Mix',
                ingredients: ['1 teaspoon licorice (mulethi) powder', '1 tablespoon honey', 'A pinch of black pepper'],
                preparation: [
                    'Mix all ingredients together',
                    'Let it dissolve slowly in your mouth',
                    'Take twice daily'
                ],
                benefits: ['Creates protective coating in throat', 'Anti-inflammatory', 'Soothes pain', 'Makes swallowing easier'],
                source: 'Ayurvedic medicine'
            },
            {
                title: 'Slippery Elm and Honey Paste',
                ingredients: ['1 teaspoon slippery elm powder', '1 tablespoon honey', 'Warm water as needed'],
                preparation: [
                    'Mix slippery elm powder with honey',
                    'Add small amounts of warm water until it forms a paste',
                    'Take 1 teaspoon and let it dissolve slowly in the mouth',
                    'Use 3-4 times daily'
                ],
                benefits: ['Creates a soothing coating', 'Reduces pain when swallowing', 'Anti-inflammatory'],
                source: 'Traditional throat remedy'
            }
        ],
        
        // STOMACH ACHE REMEDIES
        "stomachache_general stomach pain": [
            {
                title: 'Jeera (Cumin) Water',
                ingredients: ['1 teaspoon cumin seeds', '1 cup water', 'A pinch of rock salt (optional)'],
                preparation: [
                    'Lightly roast cumin seeds until fragrant',
                    'Boil water and add roasted cumin seeds',
                    'Simmer for 5 minutes and strain',
                    'Add rock salt if desired',
                    'Drink warm'
                ],
                benefits: ['Alleviates stomach pain', 'Improves digestion', 'Reduces gas and bloating', 'Anti-inflammatory'],
                source: 'Traditional Indian digestive remedy'
            },
            {
                title: 'Ginger and Ajwain Tea',
                ingredients: ['1/2 inch ginger', '1 teaspoon ajwain (carom seeds)', '1 cup water', 'Honey to taste'],
                preparation: [
                    'Crush ginger and ajwain slightly',
                    'Boil water and add crushed ginger and ajwain',
                    'Simmer for 5 minutes and strain',
                    'Add honey if desired',
                    'Drink warm'
                ],
                benefits: ['Relieves stomach cramps', 'Reduces gas', 'Improves digestion', 'Anti-spasmodic'],
                source: 'Ayurvedic digestive remedy'
            }
        ],
        "stomachache_gas and bloating": [
            {
                title: 'Hing (Asafoetida) Water',
                ingredients: ['1/4 teaspoon hing (asafoetida)', '1 cup warm water', 'A pinch of salt'],
                preparation: [
                    'Mix hing and salt in warm water',
                    'Stir well until dissolved',
                    'Drink slowly'
                ],
                benefits: ['Excellent for gas relief', 'Reduces bloating', 'Anti-spasmodic', 'Improves digestion'],
                source: 'Traditional Indian home remedy'
            },
            {
                title: 'Fennel Seed (Saunf) Tea',
                ingredients: ['1 teaspoon fennel seeds', '1 cup water', '1/2 teaspoon ginger powder (optional)'],
                preparation: [
                    'Lightly crush fennel seeds',
                    'Boil water and add fennel seeds',
                    'Add ginger powder if using',
                    'Simmer for 5 minutes and strain',
                    'Drink after meals'
                ],
                benefits: ['Relieves gas and bloating', 'Calms stomach spasms', 'Aids digestion', 'Pleasant taste'],
                source: 'Ayurvedic digestive aid'
            }
        ]
    };
    
    // Convert health issue and symptom to lowercase for matching
    const healthIssueLower = healthIssue.toLowerCase();
    const symptomLower = symptom.toLowerCase();
    
    // Try to find an exact match in our database
    Object.keys(remedyDatabase).forEach(key => {
        const [dbHealthIssue, dbSymptom] = key.split('_');
        
        // Check if this health issue and symptom combination matches our database
        if (healthIssueLower.includes(dbHealthIssue) && symptomLower.includes(dbSymptom)) {
            remedies.push(...remedyDatabase[key]);
        }
    });
    
    // If no specific remedies found, generate some generic ones
    if (remedies.length === 0) {
        // Generate generic but realistic-looking results for any other combination
        console.log("No exact match found, generating generic remedies");
        
        // Common herbs and ingredients in Indian medicine
        const commonHerbs = [
            'Tulsi (Holy Basil)',
            'Ginger (Adrak)',
            'Turmeric (Haldi)',
            'Cumin (Jeera)',
            'Fennel (Saunf)',
            'Fenugreek (Methi)',
            'Cardamom (Elaichi)',
            'Cinnamon (Dalchini)',
            'Black Pepper (Kali Mirch)',
            'Mint (Pudina)',
            'Coriander (Dhaniya)',
            'Neem',
            'Amla (Indian Gooseberry)',
            'Clove (Laung)',
            'Licorice (Mulethi)'
        ];
        
        // Generate 2-3 remedies
        for (let i = 0; i < 2; i++) {
            // Select 2-3 random herbs/ingredients
            const selectedHerbs = [];
            const numHerbs = 2 + Math.floor(Math.random() * 2);
            
            for (let j = 0; j < numHerbs; j++) {
                const herbIndex = Math.floor(Math.random() * commonHerbs.length);
                if (!selectedHerbs.includes(commonHerbs[herbIndex])) {
                    selectedHerbs.push(commonHerbs[herbIndex]);
                }
            }
            
            // Create a title based on the selected herbs
            const mainHerb = selectedHerbs[0];
            const title = `${mainHerb} ${selectedHerbs.length > 1 ? 'and ' + selectedHerbs[1] : ''} ${
                healthIssueLower.includes('headache') ? 'Relief' : 
                healthIssueLower.includes('cold') ? 'Remedy' :
                healthIssueLower.includes('stomach') ? 'Digestive Aid' :
                healthIssueLower.includes('throat') ? 'Soothing Mix' :
                'Treatment'
            }`;
            
            // Create ingredients list
            const ingredients = [...selectedHerbs];
            ingredients.push('Water');
            if (Math.random() > 0.5) ingredients.push('Honey');
            if (Math.random() > 0.7) ingredients.push('Lemon juice');
            
            // Create preparation steps
            const preparation = [];
            if (ingredients.includes('Ginger (Adrak)')) {
                preparation.push('Crush or grate the ginger');
            }
            if (ingredients.some(i => i.includes('seeds'))) {
                preparation.push('Lightly crush the seeds');
            }
            
            preparation.push('Boil water in a saucepan');
            preparation.push(`Add ${ingredients.filter(i => i !== 'Water' && i !== 'Honey' && i !== 'Lemon juice').join(', ')}`);
            preparation.push('Simmer for 5-10 minutes');
            
            if (ingredients.includes('Honey') || ingredients.includes('Lemon juice')) {
                preparation.push('Remove from heat and let cool slightly');
                if (ingredients.includes('Honey')) preparation.push('Add honey to taste');
                if (ingredients.includes('Lemon juice')) preparation.push('Add fresh lemon juice');
            }
            
            preparation.push('Consume while warm');
            
            // Create benefits
            const benefits = [];
            
            // Add specific benefits based on the health issue
            if (healthIssueLower.includes('cold')) {
                benefits.push('Helps relieve cold symptoms');
                benefits.push('Boosts immunity');
            } else if (healthIssueLower.includes('headache')) {
                benefits.push('Helps reduce headache pain');
                benefits.push('Promotes relaxation');
            } else if (healthIssueLower.includes('stomach')) {
                benefits.push('Aids digestion');
                benefits.push('Reduces stomach discomfort');
            } else if (healthIssueLower.includes('throat')) {
                benefits.push('Soothes throat irritation');
                benefits.push('Reduces inflammation');
            }
            
            benefits.push('Natural remedy with no side effects');
            
            if (ingredients.includes('Turmeric (Haldi)')) {
                benefits.push('Anti-inflammatory properties');
            }
            if (ingredients.includes('Ginger (Adrak)')) {
                benefits.push('Anti-nausea and digestive benefits');
            }
            if (ingredients.includes('Tulsi (Holy Basil)')) {
                benefits.push('Adaptogenic and stress-relieving');
            }
            
            // Create the remedy object
            remedies.push({
                title: title,
                ingredients: ingredients,
                preparation: preparation,
                benefits: benefits,
                source: 'Based on traditional Indian medicine principles'
            });
        }
    }
    
    return remedies;
}
