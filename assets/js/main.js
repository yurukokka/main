// 現在のページのナビ項目に aria-current を付けるだけ。JSが無くても全ページ閲覧できます。
(function(){var f=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(function(a){if(a.getAttribute('href')===f)a.setAttribute('aria-current','page');});})();
