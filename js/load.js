window.addEventListener('DOMContentLoaded', function() {
  const [navigation] = performance.getEntriesByType("navigation");
  if (navigation.type !== 'reload') {
    setTimeout(function() {
      location.reload();
    }, 1);
  }
});
