document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const CLUB_ID = urlParams.get('club') || 'the-club-of-195-countries';
    
    async function fetchMemberData() {
        const response = await fetch(`https://api.chess.com/pub/club/${CLUB_ID}`);
        const data = await response.json();
        // ... (Logic to update UI and New Legends list)
    }

    fetchMemberData();
    setInterval(fetchMemberData, 300000); 
});
