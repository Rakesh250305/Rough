function scrollLeft() {
  const container = document.getElementById('servicesContainer');
  container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
  const container = document.getElementById('servicesContainer');
  container.scrollBy({ left: 300, behavior: 'smooth' });
}
