function openPopup(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }
  
  function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = ''; // restore scroll
  }