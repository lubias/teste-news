// CSS Loader Fallback - Run immediately
(function() {
    console.log('🚀 CSS Loader Fallback Active');
    
    // Wait for DOM and check CSS
    function checkAndLoadCSS() {
        // Check if our main CSS is loaded
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        let cssLoaded = false;
        
        links.forEach(link => {
            if (link.href && link.href.includes('style.css')) {
                // Try to access the CSS rules
                try {
                    if (link.sheet && link.sheet.cssRules && link.sheet.cssRules.length > 0) {
                        cssLoaded = true;
                        console.log('✅ Main CSS loaded successfully');
                    }
                } catch (e) {
                    console.warn('⚠️ CSS access blocked, might be CORS issue');
                }
            }
        });
        
        // If CSS didn't load after 2 seconds, apply fallback
        if (!cssLoaded) {
            setTimeout(() => {
                const computed = window.getComputedStyle(document.body);
                if (computed.background === 'rgba(0, 0, 0, 0)' || computed.background === '') {
                    console.warn('🔧 Applying emergency CSS...');
                    injectEmergencyCSS();
                }
            }, 2000);
        }
    }
    
    function injectEmergencyCSS() {
        const emergencyCSS = document.createElement('style');
        emergencyCSS.id = 'emergency-css';
        emergencyCSS.textContent = `/* Emergency CSS - Skyline News */body{margin:0;padding:0;font-family:Inter,system-ui,-apple-system,sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;color:#333}.container{max-width:1280px;margin:0 auto;padding:0 1.5rem}.header{background:rgba(255,255,255,.95);backdrop-filter:blur(20px);padding:2rem 0;box-shadow:0 4px 20px rgba(0,0,0,.1)}.header-content{display:flex;justify-content:space-between;align-items:center}.logo h1{font-size:2rem;font-weight:800;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent}.logo p{color:#6b7280;font-size:.9rem;margin-top:.25rem}.search-btn{background:linear-gradient(135deg,#667eea,#764ba2);color:white;border:none;padding:.75rem 1.5rem;border-radius:12px;font-weight:500;cursor:pointer;display:flex;align-items:center;gap:.5rem}.nav{background:rgba(255,255,255,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.2)}.nav-list{display:flex;list-style:none;gap:.5rem;padding:1.25rem 0;justify-content:center;margin:0}.nav-link{text-decoration:none;color:#6b7280;font-weight:500;padding:.75rem 1.5rem;border-radius:12px;transition:all .3s ease}.nav-link.active,.nav-link:hover{color:white;background:linear-gradient(135deg,#667eea,#764ba2)}.main{padding:3rem 0;min-height:70vh}.main-layout{display:grid;grid-template-columns:1fr 350px;gap:3rem;align-items:start}.content-area{min-width:0}.loading{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem 0;color:#6b7280}.weather-sidebar{position:sticky;top:2rem}.weather-widget{background:rgba(255,255,255,.95);border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.1);border:1px solid rgba(255,255,255,.2)}.weather-header{background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:1.5rem;text-align:center}.weather-header h3{margin:0;font-size:1.1rem;font-weight:600}.weather-content{padding:2rem}.weather-loading{display:flex;flex-direction:column;align-items:center;gap:1rem;color:#6b7280}.footer{background:linear-gradient(135deg,#1e293b,#334155);color:white;text-align:center;padding:3rem 0;margin-top:4rem}.footer p{margin:0;opacity:.9;font-weight:500}.search-modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:1000;align-items:center;justify-content:center}.search-modal-content{background:white;border-radius:16px;padding:2rem;max-width:500px;width:90%}.search-modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem}.search-modal-header h2{margin:0;color:#333}.close-btn{background:none;border:none;font-size:1.5rem;cursor:pointer;color:#666}.search-input{width:100%;padding:1rem;border:2px solid #e5e7eb;border-radius:12px;font-size:1rem;margin-bottom:1rem}.search-submit-btn{background:linear-gradient(135deg,#667eea,#764ba2);color:white;border:none;padding:1rem 2rem;border-radius:12px;font-weight:600;cursor:pointer;width:100%}@media (max-width:768px){.main-layout{grid-template-columns:1fr;gap:2rem}.weather-sidebar{order:-1;position:static}.header-content{flex-direction:column;gap:1rem}.nav-list{flex-wrap:wrap;gap:.25rem}}`;
        document.head.appendChild(emergencyCSS);
        console.log('🚑 Emergency CSS injected successfully!');
    }
    
    // Run check when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkAndLoadCSS);
    } else {
        checkAndLoadCSS();
    }
})();