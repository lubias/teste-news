console.log('🚀 Skyline News - Debug Info');
console.log('Base URL:', import.meta.env.BASE_URL);
console.log('Mode:', import.meta.env.MODE);
console.log('Window location:', window.location.href);

// Test API call
setTimeout(() => {
    console.log('🔍 Testing NY Times API...');
    
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=eQXmmahM2v1pEMNk25PtkDDniEGgy41q')
        .then(response => {
            console.log('✅ API Response Status:', response.status);
            return response.json();
        })
        .then(data => {
            console.log('✅ API Data received:', data.results?.length, 'articles');
        })
        .catch(error => {
            console.error('❌ API Error:', error);
        });
}, 1000);