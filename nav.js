/**
 * nav.js — InPursuit Health Universal Navigation
 * Drop this file in your site root and add:
 *   <script src="nav.js"></script>  before </body>
 */

(function () {

  /* ── NAV DATA ─────────────────────────────────────────────────── */
  var NAV = [
    {
      label: 'MAHA',
      href:  'maha.html'
    },
    {
      label: 'TETRA',
      href:  'tetra.html',
      children: [
        {
          label: 'TETRA Ex\u2122',
          href:  'tetra-ex.html',
          desc:  'Enterprise data exchange &amp; interoperability infrastructure'
        },
        {
          label: 'TETRA Conductor\u2122',
          href:  'tetra-conductor.html',
          desc:  'Model-agnostic AI orchestration layer for healthcare'
        },
        {
          label: 'TETRA Aegis\u2122',
          href:  'tetra-aegis.html',
          desc:  'AI governance &amp; supervisory control architecture',
          children: [
            {
              label: 'TETRA Sentinel\u2122',
              href:  'tetra-sentinel.html',
              desc:  'Real-time AI supervision &amp; threat interception agent'
            }
          ]
        }
      ]
    },
    {
      label: 'For You',
      href:  'for-you.html'
    },
    {
      label: 'For Providers',
      href:  'for-providers.html',
      children: [
        { label: 'CMS ACCESS Offer', href: 'access.html',    desc: 'Apply by April\u00a01, 2026\u00a0\u2014 Cohort\u00a01' },
        { label: 'MSSP',             href: 'mssp.html',       desc: 'Medicare Shared Savings Program' },
        { label: 'LEAD',             href: 'lead.html',       desc: 'Lung Cancer Early Detection' },
        { label: 'TEAM',             href: 'team.html',       desc: 'Transforming Episode Accountability Model' }
      ]
    },
    {
      label: 'Veterans First',
      href:  'veterans-first.html'
    }
  ];

  var CTA = { label: 'Invest Now', href: 'invest.html', highlight: true };

  /* ── CSS ──────────────────────────────────────────────────────── */
  var CSS = [
    ':root{',
    '  --iph-bg:rgba(8,17,34,0.96);',
    '  --iph-border:rgba(197,164,78,0.12);',
    '  --iph-gold:#C5A44E;',
    '  --iph-white:#eef0f4;',
    '  --iph-muted:rgba(238,240,244,0.45);',
    '  --iph-hover:rgba(197,164,78,0.07);',
    '  --iph-h:64px;',
    '  --iph-drop:#0d1c33;',
    '  --iph-sub:#091525;',
    '  --iph-sep:rgba(197,164,78,0.1);',
    '}',

    /* body offset */
    'body{padding-top:var(--iph-h);}',

    /* ── header bar ── */
    '#iph-header{',
    '  position:fixed;top:0;left:0;right:0;z-index:9999;',
    '  height:var(--iph-h);',
    '  display:flex;align-items:center;padding:0 32px;gap:0;',
    '  background:var(--iph-bg);',
    '  border-bottom:1px solid var(--iph-border);',
    '  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);',
    '}',

    /* ── logo ── */
    '#iph-logo{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;margin-right:36px;}',
    '#iph-logo svg{width:28px;height:28px;flex-shrink:0;}',
    '.iph-lw{display:flex;flex-direction:column;line-height:1;}',
    '.iph-lw-main{font-family:"Instrument Serif",Georgia,serif;font-size:17px;color:var(--iph-white);letter-spacing:-0.02em;}',
    '.iph-lw-sub{font-family:"Instrument Sans",Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--iph-gold);margin-top:2px;}',

    /* ── top-level nav ── */
    '#iph-nav{display:flex;align-items:center;flex:1;list-style:none;margin:0;padding:0;}',
    '.iph-ni{position:relative;list-style:none;}',
    '.iph-ni>a{display:flex;align-items:center;gap:5px;padding:0 14px;height:var(--iph-h);',
    '  font-family:"Instrument Sans",Arial,sans-serif;font-size:12px;font-weight:700;',
    '  letter-spacing:0.1em;text-transform:uppercase;',
    '  color:var(--iph-muted);text-decoration:none;transition:color 0.2s;white-space:nowrap;',
    '  position:relative;}',
    '.iph-ni>a:hover,.iph-ni.iph-open>a{color:var(--iph-white);}',
    '.iph-ni>a::after{content:"";position:absolute;bottom:0;left:14px;right:14px;height:2px;',
    '  background:var(--iph-gold);transform:scaleX(0);transition:transform 0.2s;}',
    '.iph-ni>a:hover::after,.iph-ni.iph-open>a::after{transform:scaleX(1);}',

    /* chevron */
    '.iph-chev{width:10px;height:10px;flex-shrink:0;opacity:0.4;transition:transform 0.2s,opacity 0.2s;display:inline-block;vertical-align:middle;}',
    '.iph-ni.iph-open>a .iph-chev,.iph-drop-item.iph-open>a .iph-chev{transform:rotate(180deg);opacity:0.85;}',

    /* ── dropdown ── */
    '.iph-drop{display:none;position:absolute;top:calc(var(--iph-h) + 1px);left:0;min-width:280px;',
    '  background:var(--iph-drop);border:1px solid var(--iph-sep);border-radius:12px;padding:8px;',
    '  box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 0 1px rgba(197,164,78,0.04);z-index:9998;',
    '  list-style:none;margin:0;}',
    '.iph-ni.iph-open>.iph-drop{display:block;}',

    /* drop items */
    '.iph-drop-item{position:relative;list-style:none;}',
    '.iph-drop-item>a{display:flex;flex-direction:column;padding:11px 14px;border-radius:8px;text-decoration:none;transition:background 0.15s;}',
    '.iph-drop-item>a:hover,.iph-drop-item.iph-open>a{background:var(--iph-hover);}',
    '.di-label{font-family:"Instrument Sans",Arial,sans-serif;font-size:13px;font-weight:700;color:var(--iph-white);display:flex;align-items:center;gap:6px;}',
    '.di-desc{font-family:"Instrument Sans",Arial,sans-serif;font-size:11px;color:var(--iph-muted);margin-top:3px;line-height:1.45;}',
    '.iph-drop-sep{height:1px;background:var(--iph-sep);margin:5px 8px;}',

    /* ── sub-dropdown (Aegis → Sentinel) ── */
    '.iph-subdrop{display:none;background:var(--iph-sub);border:1px solid var(--iph-sep);',
    '  border-radius:8px;margin:2px 8px 4px;padding:4px;list-style:none;}',
    '.iph-drop-item.iph-open>.iph-subdrop{display:block;}',
    '.iph-subdrop-item{list-style:none;}',
    '.iph-subdrop-item a{display:flex;flex-direction:column;padding:9px 12px;border-radius:6px;text-decoration:none;transition:background 0.15s;}',
    '.iph-subdrop-item a:hover{background:var(--iph-hover);}',
    '.iph-subdrop-item .di-label{font-size:12px;color:var(--iph-gold);}',
    '.iph-subdrop-item .di-desc{font-size:11px;}',

    /* ── CTA button ── */
    '#iph-cta{margin-left:auto;flex-shrink:0;display:inline-flex;align-items:center;',
    '  padding:9px 22px;background:var(--iph-gold);color:#060E1A;',
    '  font-family:"Instrument Sans",Arial,sans-serif;font-size:11px;font-weight:800;',
    '  letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;',
    '  border-radius:6px;transition:transform 0.15s;',
    '  white-space:nowrap;position:relative;overflow:hidden;',
    '  animation:iphInvestPulse 3.5s ease-in-out infinite;}',

    /* shimmer sweep */
    '#iph-cta::before{',
    '  content:"";position:absolute;top:0;left:-100%;width:60%;height:100%;',
    '  background:linear-gradient(105deg,transparent 20%,rgba(255,255,255,0.28) 50%,transparent 80%);',
    '  animation:iphInvestShimmer 3.5s ease-in-out infinite;',
    '  pointer-events:none;}',

    '#iph-cta:hover{transform:translateY(-1px);animation-play-state:paused;}',
    '#iph-cta:hover::before{animation-play-state:paused;}',

    '@keyframes iphInvestPulse{',
    '  0%,100%{',
    '    background:var(--iph-gold);',
    '    box-shadow:0 0 0 0 rgba(197,164,78,0),0 0 0 0 rgba(197,164,78,0);',
    '  }',
    '  40%{',
    '    background:#d4b05a;',
    '    box-shadow:0 0 12px 2px rgba(197,164,78,0.45),0 0 28px 6px rgba(197,164,78,0.18);',
    '  }',
    '  70%{',
    '    background:var(--iph-gold);',
    '    box-shadow:0 0 6px 1px rgba(197,164,78,0.2),0 0 0 0 rgba(197,164,78,0);',
    '  }',
    '}',

    '@keyframes iphInvestShimmer{',
    '  0%,30%{left:-100%;}',
    '  55%{left:140%;}',
    '  100%{left:140%;}',
    '}',

    /* any .btn-invest on any page gets the same treatment */
    '.btn-invest{position:relative;overflow:hidden;',
    '  animation:iphInvestPulse 3.5s ease-in-out infinite;}',
    '.btn-invest::before{',
    '  content:"";position:absolute;top:0;left:-100%;width:60%;height:100%;',
    '  background:linear-gradient(105deg,transparent 20%,rgba(255,255,255,0.28) 50%,transparent 80%);',
    '  animation:iphInvestShimmer 3.5s ease-in-out infinite;pointer-events:none;}',
    '.btn-invest:hover{animation-play-state:paused;}',
    '.btn-invest:hover::before{animation-play-state:paused;}',

    /* ── burger ── */
    '#iph-burger{display:none;flex-direction:column;justify-content:center;gap:5px;',
    '  width:36px;height:36px;cursor:pointer;margin-left:auto;',
    '  background:none;border:none;padding:4px;}',
    '#iph-burger span{display:block;height:2px;background:var(--iph-white);border-radius:2px;transition:all 0.25s;}',
    '#iph-header.iph-mob-open #iph-burger span:nth-child(1){transform:translateY(7px) rotate(45deg);}',
    '#iph-header.iph-mob-open #iph-burger span:nth-child(2){opacity:0;}',
    '#iph-header.iph-mob-open #iph-burger span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}',

    /* ── mobile drawer ── */
    '#iph-mob{display:none;position:fixed;top:var(--iph-h);left:0;right:0;',
    '  background:var(--iph-drop);border-top:1px solid var(--iph-border);',
    '  z-index:9997;overflow-y:auto;max-height:calc(100vh - var(--iph-h));padding:12px 0 32px;}',
    '#iph-header.iph-mob-open~#iph-mob{display:block;}',
    '.mob-sec{border-bottom:1px solid rgba(197,164,78,0.07);padding:2px 0;}',
    '.mob-top{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;',
    '  font-family:"Instrument Sans",Arial,sans-serif;font-size:13px;font-weight:700;',
    '  letter-spacing:0.08em;text-transform:uppercase;color:var(--iph-white);',
    '  text-decoration:none;cursor:pointer;}',
    '.mob-sec.iph-open .mob-top .iph-chev{transform:rotate(180deg);opacity:0.8;}',
    '.mob-kids{display:none;padding-bottom:6px;}',
    '.mob-sec.iph-open .mob-kids{display:block;}',
    '.mob-kid{display:flex;flex-direction:column;padding:10px 24px 10px 36px;text-decoration:none;}',
    '.mob-kid .di-label{font-size:13px;color:var(--iph-white);}',
    '.mob-kid .di-desc{font-size:11px;color:var(--iph-muted);margin-top:2px;}',
    '.mob-sub-head{padding:8px 24px 3px 36px;font-family:"Instrument Sans",Arial,sans-serif;',
    '  font-size:9px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;',
    '  color:var(--iph-gold);opacity:0.55;}',
    '.mob-sub{display:flex;flex-direction:column;padding:9px 24px 9px 50px;',
    '  text-decoration:none;background:rgba(0,0,0,0.18);}',
    '.mob-sub .di-label{font-size:12px;color:var(--iph-gold);}',
    '.mob-sub .di-desc{font-size:11px;color:var(--iph-muted);margin-top:2px;}',
    '.mob-cta{display:block;margin:16px 24px 0;padding:14px;',
    '  background:var(--iph-gold);color:#060E1A;',
    '  font-family:"Instrument Sans",Arial,sans-serif;font-size:12px;font-weight:800;',
    '  letter-spacing:0.12em;text-transform:uppercase;text-align:center;text-decoration:none;border-radius:8px;}',

    /* ── responsive breakpoint ── */
    '@media(max-width:900px){#iph-nav,#iph-cta{display:none!important;}#iph-burger{display:flex;}}',
    '@media(min-width:901px){#iph-mob{display:none!important;}}'
  ].join('\n');

  /* ── CHEVRON SVG ────────────────────────────────────────────── */
  function chev() {
    var s = document.createElementNS('http://www.w3.org/2000/svg','svg');
    s.setAttribute('viewBox','0 0 12 12');
    s.setAttribute('fill','none');
    s.setAttribute('stroke','currentColor');
    s.setAttribute('stroke-width','2');
    s.setAttribute('stroke-linecap','round');
    s.setAttribute('stroke-linejoin','round');
    s.className.baseVal = 'iph-chev';
    var p = document.createElementNS('http://www.w3.org/2000/svg','polyline');
    p.setAttribute('points','2,4 6,8 10,4');
    s.appendChild(p);
    return s;
  }

  /* ── COMPASS LOGO ───────────────────────────────────────────── */
  function compassSVG() {
    var s = document.createElementNS('http://www.w3.org/2000/svg','svg');
    s.setAttribute('viewBox','0 0 32 32');
    s.setAttribute('fill','none');
    s.innerHTML = [
      '<circle cx="16" cy="16" r="14" stroke="#C5A44E" stroke-width="1.5" opacity="0.3"/>',
      '<circle cx="16" cy="16" r="10" stroke="#C5A44E" stroke-width="1" opacity="0.2"/>',
      '<polygon points="16,4 18.5,14 16,12 13.5,14" fill="#C5A44E"/>',
      '<polygon points="16,28 13.5,18 16,20 18.5,18" fill="rgba(197,164,78,0.4)"/>',
      '<polygon points="4,16 14,13.5 12,16 14,18.5" fill="rgba(197,164,78,0.4)"/>',
      '<polygon points="28,16 18,18.5 20,16 18,13.5" fill="rgba(197,164,78,0.4)"/>',
      '<circle cx="16" cy="16" r="2.5" fill="#C5A44E" opacity="0.9"/>'
    ].join('');
    return s;
  }

  /* ── BUILD DESKTOP DROPDOWN ─────────────────────────────────── */
  function buildDropList(items) {
    var ul = document.createElement('ul');
    ul.className = 'iph-drop';

    items.forEach(function(item, idx) {
      if (idx > 0) {
        var sep = document.createElement('li');
        sep.className = 'iph-drop-sep';
        ul.appendChild(sep);
      }

      var li = document.createElement('li');
      li.className = 'iph-drop-item';

      var a = document.createElement('a');
      a.href = item.href || '#';

      var label = document.createElement('span');
      label.className = 'di-label';
      label.innerHTML = item.label;
      if (item.children && item.children.length) label.appendChild(chev());
      a.appendChild(label);

      if (item.desc) {
        var desc = document.createElement('span');
        desc.className = 'di-desc';
        desc.innerHTML = item.desc;
        a.appendChild(desc);
      }
      li.appendChild(a);

      // Sub-children (Aegis → Sentinel)
      if (item.children && item.children.length) {
        var sub = document.createElement('ul');
        sub.className = 'iph-subdrop';
        item.children.forEach(function(sc) {
          var sli = document.createElement('li');
          sli.className = 'iph-subdrop-item';
          var sa = document.createElement('a');
          sa.href = sc.href || '#';
          var sl = document.createElement('span');
          sl.className = 'di-label';
          sl.innerHTML = sc.label;
          sa.appendChild(sl);
          if (sc.desc) {
            var sd = document.createElement('span');
            sd.className = 'di-desc';
            sd.innerHTML = sc.desc;
            sa.appendChild(sd);
          }
          sli.appendChild(sa);
          sub.appendChild(sli);
        });
        li.appendChild(sub);

        a.addEventListener('click', function(e) {
          e.preventDefault();
          li.classList.toggle('iph-open');
        });
      }

      ul.appendChild(li);
    });
    return ul;
  }

  /* ── BUILD DESKTOP NAV ──────────────────────────────────────── */
  function buildNav() {
    var ul = document.createElement('ul');
    ul.id = 'iph-nav';

    NAV.forEach(function(item) {
      var li = document.createElement('li');
      li.className = 'iph-ni';

      var a = document.createElement('a');
      a.href = item.href || '#';
      a.innerHTML = item.label;
      if (item.children) a.appendChild(chev());
      li.appendChild(a);

      if (item.children) {
        li.appendChild(buildDropList(item.children));
        a.addEventListener('click', function(e) {
          e.preventDefault();
          var wasOpen = li.classList.contains('iph-open');
          document.querySelectorAll('.iph-ni.iph-open').forEach(function(el){ el.classList.remove('iph-open'); });
          if (!wasOpen) li.classList.add('iph-open');
        });
      }

      ul.appendChild(li);
    });
    return ul;
  }

  /* ── BUILD MOBILE MENU ──────────────────────────────────────── */
  function buildMobile() {
    var wrap = document.createElement('div');
    wrap.id = 'iph-mob';

    NAV.forEach(function(item) {
      var sec = document.createElement('div');
      sec.className = 'mob-sec';

      if (item.children) {
        var topDiv = document.createElement('div');
        topDiv.className = 'mob-top';
        var topSpan = document.createElement('span');
        topSpan.innerHTML = item.label;
        topDiv.appendChild(topSpan);
        topDiv.appendChild(chev());
        topDiv.addEventListener('click', function(){ sec.classList.toggle('iph-open'); });
        sec.appendChild(topDiv);

        var kids = document.createElement('div');
        kids.className = 'mob-kids';

        item.children.forEach(function(child) {
          var a = document.createElement('a');
          a.href = child.href || '#';
          a.className = 'mob-kid';
          var l = document.createElement('span');
          l.className = 'di-label';
          l.innerHTML = child.label;
          a.appendChild(l);
          if (child.desc) {
            var d = document.createElement('span');
            d.className = 'di-desc';
            d.innerHTML = child.desc;
            a.appendChild(d);
          }
          kids.appendChild(a);

          // Nested subs
          if (child.children && child.children.length) {
            var sh = document.createElement('div');
            sh.className = 'mob-sub-head';
            sh.textContent = 'Includes';
            kids.appendChild(sh);
            child.children.forEach(function(sub) {
              var sa = document.createElement('a');
              sa.href = sub.href || '#';
              sa.className = 'mob-sub';
              var sl = document.createElement('span');
              sl.className = 'di-label';
              sl.innerHTML = sub.label;
              sa.appendChild(sl);
              if (sub.desc) {
                var sd = document.createElement('span');
                sd.className = 'di-desc';
                sd.innerHTML = sub.desc;
                sa.appendChild(sd);
              }
              kids.appendChild(sa);
            });
          }
        });

        sec.appendChild(kids);
      } else {
        var a = document.createElement('a');
        a.href = item.href;
        a.className = 'mob-top';
        a.innerHTML = item.label;
        sec.appendChild(a);
      }
      wrap.appendChild(sec);
    });

    var cta = document.createElement('a');
    cta.href = CTA.href;
    cta.className = 'mob-cta';
    cta.textContent = CTA.label;
    wrap.appendChild(cta);

    return wrap;
  }

  /* ── INJECT ─────────────────────────────────────────────────── */
  function inject() {
    // Styles
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    // Header
    var header = document.createElement('header');
    header.id = 'iph-header';

    // Logo
    var logo = document.createElement('a');
    logo.id = 'iph-logo';
    logo.href = 'index.html';
    logo.appendChild(compassSVG());
    var wm = document.createElement('div');
    wm.className = 'iph-lw';
    wm.innerHTML = '<span class="iph-lw-main">InPursuit</span><span class="iph-lw-sub">Health</span>';
    logo.appendChild(wm);
    header.appendChild(logo);

    // Desktop nav
    header.appendChild(buildNav());

    // CTA
    var ctaEl = document.createElement('a');
    ctaEl.id = 'iph-cta';
    ctaEl.href = CTA.href;
    ctaEl.textContent = CTA.label;
    header.appendChild(ctaEl);

    // Burger
    var burger = document.createElement('button');
    burger.id = 'iph-burger';
    burger.setAttribute('aria-label','Menu');
    burger.innerHTML = '<span></span><span></span><span></span>';
    burger.addEventListener('click', function(){ header.classList.toggle('iph-mob-open'); });
    header.appendChild(burger);

    // Mobile menu
    var mob = buildMobile();

    // Insert
    document.body.insertBefore(mob, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);

    // Close dropdowns on outside click
    document.addEventListener('click', function(e) {
      if (!e.target.closest || !e.target.closest('.iph-ni')) {
        document.querySelectorAll('.iph-ni.iph-open').forEach(function(el){ el.classList.remove('iph-open'); });
      }
    });

    // Active page highlight
    var page = (window.location.pathname.split('/').pop()) || 'index.html';
    document.querySelectorAll('#iph-nav .iph-ni>a').forEach(function(a) {
      if (a.getAttribute('href') === page) a.closest('.iph-ni').classList.add('iph-active');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
