


function Kysy() {
    const nimi = prompt('Syötä nimesi:');
    const isoNimi = nimi.toUpperCase(); 
    const pElementti = document.createElement('p');
    pElementti.textContent = isoNimi;
  
    
    document.body.appendChild(pElementti);
  }
  
  
  window.addEventListener('load', Kysy);