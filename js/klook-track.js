(function() {
  function getCampaign() {
    var path = window.location.pathname;
    if (path.indexOf('domestic') !== -1) return 'domestic-2026';
    if (path.indexOf('overseas') !== -1) return 'overseas-2026';
    return 'pet-travel-2026';
  }
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.klook-btn');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.src = 'https://affiliate.klook.com/redirect/?aid=67213&campaign=' + getCampaign();
        document.body.appendChild(iframe);
        var tid = setTimeout(function() {
          if (document.body.contains(iframe)) document.body.removeChild(iframe);
        }, 5000);
        iframe.onload = function() { clearTimeout(tid); };
      });
    }
  });
})();
