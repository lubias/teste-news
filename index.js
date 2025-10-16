(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();function B(){console.log("🎨 Checking CSS loading...");const e=document.querySelector(".header");if(e){const n=window.getComputedStyle(e);n.background!=="rgba(0, 0, 0, 0)"&&n.background!=="transparent"&&n.background!==""?console.log("✅ CSS loaded successfully"):(console.warn("⚠️ CSS not loaded, applying fallback..."),M())}}function M(){const e=document.createElement("style");e.textContent=`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Inter, system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
        .header { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); padding: 2rem 0; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
        .header-content { display: flex; justify-content: space-between; align-items: center; }
        .logo h1 { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .logo p { color: #6b7280; font-size: 0.9rem; margin-top: 0.25rem; }
        .search-btn { background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 12px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; }
        .nav { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        .nav-list { display: flex; list-style: none; gap: 0.5rem; padding: 1.25rem 0; justify-content: center; }
        .nav-link { text-decoration: none; color: #6b7280; font-weight: 500; padding: 0.75rem 1.5rem; border-radius: 12px; transition: all 0.3s ease; }
        .nav-link.active { color: white; background: linear-gradient(135deg, #667eea, #764ba2); }
        .main { padding: 3rem 0; min-height: 70vh; }
        .main-layout { display: grid; grid-template-columns: 1fr 350px; gap: 3rem; align-items: start; }
        .loading { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3rem 0; color: #6b7280; }
        .weather-widget { background: rgba(255, 255, 255, 0.95); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); }
        .weather-header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1.5rem; text-align: center; }
        .weather-content { padding: 2rem; }
        .footer { background: linear-gradient(135deg, #1e293b, #334155); color: white; text-align: center; padding: 3rem 0; }
        @media (max-width: 768px) { .main-layout { grid-template-columns: 1fr; gap: 2rem; } .weather-sidebar { order: -1; } }
    `,document.head.appendChild(e),console.log("🎨 Fallback CSS applied")}console.log("🚀 Skyline News Loading...");console.log("Environment:","production");console.log("Base URL:","/teste-news/");console.log("Current URL:",window.location.href);console.log("DOM State:",document.readyState);const g="eQXmmahM2v1pEMNk25PtkDDniEGgy41q",D={mostViewed:`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${g}`,mostShared:`https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${g}`,search:`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${g}`};let L="mostViewed";const v="https://goweather.xyz/weather/NY",d=document.getElementById("newsGrid"),h=document.getElementById("loading"),w=document.querySelectorAll(".nav-link"),k=document.getElementById("searchBtn"),l=document.getElementById("searchModal"),E=document.getElementById("closeSearchBtn"),m=document.getElementById("searchInput"),x=document.getElementById("performSearch"),f=document.getElementById("weatherContent");function N(){h&&(h.style.display="flex",h.innerHTML=`
            <div class="spinner"></div>
            <p>Loading the latest news...</p>
        `),d&&(d.innerHTML="")}function $(){h&&(h.style.display="none")}function b(e){$(),d&&(d.innerHTML=`
            <div class="error-message">
                <h2>📰 Unable to load news</h2>
                <p>${e}</p>
                <button onclick="loadNews('${L}')" class="retry-btn">🔄 Try Again</button>
            </div>
        `)}function P(e,n){const o=document.createElement("div");o.className="news-card";let r,t,a,c,p,s;if(n==="mostViewed"||n==="mostShared"){r=e.title||"No Title",t=e.abstract||"No description available",a=e.published_date||"";let i=e.byline||"Unknown Author";if(c=typeof i=="string"?i.replace("By ",""):"Unknown Author",s=e.url||e.short_url||"https://www.nytimes.com",p="https://via.placeholder.com/400x250/667eea/ffffff?text=NY+Times+News",e.media&&e.media.length>0){const u=e.media[0]["media-metadata"];u&&u.length>0&&(p=u[u.length-1].url)}}else{console.log("=== TOP STORIES/SEARCH ARTICLE DEBUG ==="),console.log("Full article object:",e),console.log("headline:",e.headline),console.log("byline:",e.byline),console.log("web_url:",e.web_url),console.log("======================================="),r=e.headline?.main||e.title||"No Title",t=e.abstract||e.snippet||e.lead_paragraph||"No description available",a=e.pub_date||e.published_date||"";let i="Unknown Author";e.byline&&(typeof e.byline=="string"?i=e.byline:e.byline.original?i=e.byline.original:e.byline.person&&e.byline.person.length>0&&(i=e.byline.person[0].firstname+" "+e.byline.person[0].lastname)),c=typeof i=="string"?i.replace(/^By\s+/i,""):"Unknown Author",s=e.web_url||e.url||e.short_url||"https://www.nytimes.com",p=null}(!s||s==="#"||s==="")&&(s="https://www.nytimes.com"),s&&!s.startsWith("http")&&(s="https://www.nytimes.com"+(s.startsWith("/")?s:"/"+s));const C=a?new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"";t.length>140&&(t=t.substring(0,137)+"..."),r.length>80&&(r=r.substring(0,77)+"...");const A=p?`
        <div class="news-image">
            <img src="${p}" alt="${r}" onerror="this.src='https://via.placeholder.com/400x250/667eea/ffffff?text=NY+Times+News'">
        </div>
    `:"";return o.innerHTML=`
        ${A}
        <div class="news-content">
            <h3 class="news-title">${r}</h3>
            <p class="news-description">${t}</p>
            <div class="news-meta">
                <span class="news-author">✍️ ${c}</span>
                <span class="news-date">📅 ${C}</span>
            </div>
            <a href="${s}" target="_blank" rel="noopener noreferrer" class="news-link">
                Read Full Article →
            </a>
        </div>
    `,o}async function _(e="mostViewed"){const n=D[e];if(!n)throw new Error("Invalid category");console.log(`Fetching ${e} from:`,n);const o=await fetch(n);if(console.log("Response status:",o.status),!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);const r=await o.json();console.log("Data received:",r);let t=[];return r.results?t=r.results:r.response&&r.response.docs&&(t=r.response.docs),t}function T(e,n){if($(),!e||e.length===0){b("No articles found");return}d.innerHTML="",e.slice(0,12).forEach(o=>{const r=P(o,n);d.appendChild(r)}),console.log(`Displayed ${e.length} articles`)}async function y(e="mostViewed"){N(),L=e;try{const n=await _(e);T(n,e)}catch(n){console.error("Load news error:",n),b(`Failed to load news: ${n.message}`)}}async function S(){const e=m.value.trim();if(!e){alert("Please enter a search term");return}const n=`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(e)}&api-key=${g}`;l.style.display="none",w.forEach(o=>o.classList.remove("active")),N();try{const o=await fetch(n);if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);const t=(await o.json()).response?.docs||[];T(t,"search"),m.value=""}catch(o){console.error("Search error:",o),b(`Search failed: ${o.message}`)}}async function H(){try{console.log("Fetching weather data from:",v);const e=await fetch(v);if(!e.ok)throw new Error(`Weather API error: ${e.status}`);const n=await e.json();return console.log("Weather data received:",n),n}catch(e){throw console.error("Error fetching weather:",e),e}}function R(e){if(!f)return;const{temperature:n,wind:o,description:r,forecast:t}=e,a=t&&t.length>0&&t[0]?`<div class="forecast-day">
            <span class="forecast-day-name">Tomorrow</span>
            <div>
                <div class="forecast-temp">${t[0].temperature||"N/A"}</div>
                <div class="forecast-wind">🌬️ ${t[0].wind||"N/A"}</div>
            </div>
        </div>`:"<p>Forecast not available</p>";f.innerHTML=`
        <div class="weather-current">
            <div class="weather-temp">${n||"N/A"}</div>
            <div class="weather-desc">${r||"No description"}</div>
            <div class="weather-wind">
                <span>🌬️</span>
                <span>${o||"N/A"}</span>
            </div>
        </div>
        <div class="weather-forecast">
            <h4>Tomorrow's Forecast</h4>
            ${a}
        </div>
    `}async function I(){if(f)try{const e=await H();R(e)}catch(e){console.error("Failed to load weather:",e),f.innerHTML=`
            <div class="weather-error">
                <p>⚠️ Unable to load weather</p>
                <button onclick="loadWeather()" class="retry-btn" style="padding: 0.5rem 1rem; margin-top: 0.5rem; background: var(--accent-color); color: white; border: none; border-radius: 6px; cursor: pointer;">
                    Retry
                </button>
            </div>
        `}}document.addEventListener("DOMContentLoaded",()=>{console.log("Skyline News initialized successfully!"),setTimeout(()=>{document.body.style.opacity="1"},100),w.forEach(e=>{e.addEventListener("click",n=>{n.preventDefault();const o=e.dataset.category;w.forEach(r=>r.classList.remove("active")),e.classList.add("active"),y(o)})}),k&&l&&E&&(k.addEventListener("click",()=>{l.style.display="flex",m.focus()}),E.addEventListener("click",()=>{l.style.display="none"}),l.addEventListener("click",e=>{e.target===l&&(l.style.display="none")})),x&&x.addEventListener("click",S),m&&m.addEventListener("keypress",e=>{e.key==="Enter"&&S()}),y("mostViewed"),I(),setTimeout(()=>{B()},500)});window.loadNews=y;window.loadWeather=I;
