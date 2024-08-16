window.addEventListener('DOMContentLoaded', function() {
  if (performance.navigation.type !== 1) {
    setTimeout(function() {
      location.reload();
    }, 1);
  }
});
