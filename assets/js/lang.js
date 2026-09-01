(function () {
  var sections = document.querySelectorAll('.lang-section');
  var buttons = document.querySelectorAll('.lang-switcher button');
  if (!sections.length || !buttons.length) return;

  document.documentElement.classList.add('js');

  var available = {};
  sections.forEach(function (s) { available[s.dataset.lang] = true; });

  function pick() {
    var stored = null;
    try { stored = localStorage.getItem('policy-lang'); } catch (e) {}
    if (stored && available[stored]) return stored;
    var langs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      var l = (langs[i] || '').toLowerCase();
      if (l.indexOf('ja') === 0 && available.ja) return 'ja';
      if (l.indexOf('zh') === 0 && available.zh) return 'zh';
      if (l.indexOf('en') === 0 && available.en) return 'en';
    }
    return sections[0].dataset.lang;
  }

  function show(lang) {
    sections.forEach(function (s) {
      s.classList.toggle('is-visible', s.dataset.lang === lang);
    });
    buttons.forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
    try { localStorage.setItem('policy-lang', lang); } catch (e) {}
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { show(b.dataset.lang); });
  });

  var hash = (location.hash || '').replace('#', '');
  show(available[hash] ? hash : pick());
})();
