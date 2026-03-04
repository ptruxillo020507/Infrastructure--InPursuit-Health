/**
 * InPursuit Health — Universal Navigation
 * Drop <script src="nav.js"></script> into any page.
 * Edit ONLY this file to update nav sitewide.
 */
(function () {

  var css = `
    :root { --navy-deep:#060E1A; --gold:#C5A44E; --gold-bright:#E8D48B; }
    #iph-topbar {
      background:var(--navy-deep);
      border-bottom:1px solid rgba(197,164,78,0.2);
      position:fixed;top:0;left:0;right:0;z-index:9999;
      transition:box-shadow 0.3s ease;
      font-family:'Instrument Sans','DM Sans',sans-serif;
    }
    #iph-topbar.scrolled{box-shadow:0 4px 30px rgba(0,0,0,0.5);}
    #iph-topbar-inner{
      max-width:1400px;margin:0 auto;padding:0 40px;
      display:flex;justify-content:space-between;align-items:center;height:64px;
    }
    #iph-brand-group{display:flex;align-items:center;gap:10px;}
    #iph-wordmark{
      font-family:'Instrument Serif',Georgia,serif;
      font-size:22px;color:var(--gold);letter-spacing:1px;
      line-height:1;white-space:nowrap;
      text-decoration:none;transition:opacity 0.3s;
    }
    #iph-wordmark:hover{opacity:0.8;}
    #iph-brand-divider{color:rgba(255,255,255,0.2);font-size:14px;}
    #iph-maha{
      font-size:11px;font-weight:500;letter-spacing:0.5px;
      color:rgba(255,255,255,0.45);
      white-space:nowrap;text-decoration:none;transition:color 0.3s;
    }
    #iph-maha:hover{color:rgba(255,255,255,0.7);}
    #iph-nav{display:flex;align-items:center;gap:4px;}
    .iph-nav-item{
      padding:20px 14px;font-size:11px;font-weight:500;
      letter-spacing:1.5px;text-transform:uppercase;
      color:rgba(255,255,255,0.6);text-decoration:none;
      position:relative;transition:color 0.3s;white-space:nowrap;
      background:none;border:none;cursor:pointer;font-family:inherit;
    }
    .iph-nav-item:hover{color:var(--gold);}
    .iph-nav-item::after{
      content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);
      width:0;height:2px;background:var(--gold);transition:width 0.3s;
    }
    .iph-nav-item:hover::after{width:60%;}
    .iph-dropdown{position:relative;display:inline-flex;align-items:center;}
    .iph-dropdown-toggle{display:inline-flex;align-items:center;gap:5px;}
    .iph-dropdown-toggle .iph-caret{
      font-size:8px;opacity:0.5;
      transition:transform 0.25s,opacity 0.25s;display:inline-block;
    }
    .iph-dropdown:hover .iph-caret,.iph-dropdown.open .iph-caret{transform:rotate(180deg);opacity:1;}
    .iph-dropdown-menu{
      display:none;position:absolute;top:calc(100% - 2px);left:0;
      background:#0B1628;border:1px solid rgba(197,164,78,0.15);
      border-radius:0 0 8px 8px;box-shadow:0 20px 60px rgba(0,0,0,0.5);
      min-width:260px;z-index:10000;overflow:hidden;
    }
    .iph-dropdown:hover .iph-dropdown-menu,.iph-dropdown.open .iph-dropdown-menu{display:block;}
    .iph-dropdown-menu a{
      display:block;padding:13px 20px;
      font-size:11px;font-weight:500;letter-spacing:1px;
      text-transform:uppercase;color:rgba(255,255,255,0.5);
      text-decoration:none;border-bottom:1px solid rgba(197,164,78,0.06);
      transition:all 0.2s;white-space:nowrap;
    }
    .iph-dropdown-menu a:last-child{border-bottom:none;}
    .iph-dropdown-menu a:hover{color:var(--gold);background:rgba(197,164,78,0.05);padding-left:26px;}
    .iph-sub-label{
      display:block;padding:10px 20px 6px;
      font-size:9px;letter-spacing:2px;font-weight:700;
      text-transform:uppercase;color:rgba(197,164,78,0.35);
      border-bottom:1px solid rgba(197,164,78,0.06);pointer-events:none;
    }
    #iph-cta{
      display:inline-flex;align-items:center;margin-left:8px;padding:8px 18px;
      background:var(--gold);color:var(--navy-deep);font-size:10px;font-weight:700;
      letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;
      border-radius:4px;transition:all 0.3s;white-space:nowrap;
    }
    #iph-cta:hover{background:var(--gold-bright);transform:translateY(-1px);}
    #iph-toggle{
      display:none;background:none;border:none;
      width:32px;height:32px;cursor:pointer;position:relative;flex-shrink:0;
    }
    #iph-toggle span{
      display:block;width:22px;height:2px;background:var(--gold);
      position:absolute;left:5px;transition:all 0.3s;
    }
    #iph-toggle span:nth-child(1){top:8px;}
    #iph-toggle span:nth-child(2){top:15px;}
    #iph-toggle span:nth-child(3){top:22px;}
    body{padding-top:64px!important;}
    @media(max-width:1000px){
      #iph-topbar-inner{padding:0 20px;}
      #iph-nav{display:none;}
      #iph-toggle{display:block;}
      #iph-nav.open{
        display:flex;flex-direction:column;align-items:flex-start;
        position:absolute;top:64px;left:0;right:0;
        background:var(--navy-deep);
        border-bottom:1px solid rgba(197,164,78,0.2);
        padding:12px 0;max-height:calc(100vh - 64px);overflow-y:auto;
      }
      #iph-nav.open .iph-nav-item{padding:13px 24px;width:100%;}
      #iph-nav.open .iph-dropdown{width:100%;flex-direction:column;align-items:flex-start;}
      #iph-nav.open .iph-dropdown-menu{
        display:none;position:static;box-shadow:none;border:none;
        border-radius:0;min-width:100%;
        background:rgba(197,164,78,0.04);
        border-top:1px solid rgba(197,164,78,0.08);
      }
      #iph-nav.open .iph-dropdown.open .iph-dropdown-menu{display:block;}
      #iph-nav.open .iph-dropdown-menu a{padding:11px 36px;}
      #iph-cta{margin-left:24px;margin-top:4px;margin-bottom:14px;}
    }
  `;
  var s = document.createElement('style');
  s.textContent = css;
  document.head.appendChild(s);

  var html = `
    <div id="iph-topbar-inner">
      <div id="iph-brand-group">
        <a id="iph-wordmark" href="index.html">InPursuit Health</a>
        <span id="iph-brand-divider">|</span>
        <a id="iph-maha" href="maha.html">MAHA Policy Alignment</a>
      </div>
      <nav id="iph-nav">

        <div class="iph-dropdown">
          <a href="tetra.html" class="iph-nav-item iph-dropdown-toggle">TETRA <span class="iph-caret">▼</span></a>
          <div class="iph-dropdown-menu">
            <a href="tetra-ex.html">TETRA <em>ex</em>™</a>
            <a href="tetra-aegis.html">TETRA Aegis™</a>
          </div>
        </div>

        <div class="iph-dropdown">
          <a href="for-you.html" class="iph-nav-item iph-dropdown-toggle">For You <span class="iph-caret">▼</span></a>
          <div class="iph-dropdown-menu">
            
            
          </div>
        </div>

        <div class="iph-dropdown">
          <a href="for-providers.html" class="iph-nav-item iph-dropdown-toggle">For VBC Providers <span class="iph-caret">▼</span></a>
          <div class="iph-dropdown-menu">
            <a href="access.html">CMS ACCESS — Apply Now</a>
          </div>
        </div>

        <a href="data-oath.html" class="iph-nav-item">Data Oath</a>
        <a href="veterans.html" class="iph-nav-item">Veterans First</a>
        <a id="iph-cta" href="investors.html">Invest</a>

      </nav>
      <button id="iph-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  `;

  var bar = document.createElement('header');
  bar.id = 'iph-topbar';
  bar.innerHTML = html;
  document.querySelectorAll('header#iph-topbar,header.top-bar,header#topBar,.nav,nav.nav').forEach(function(el){el.remove();});
  document.body.insertBefore(bar, document.body.firstChild);

  window.addEventListener('scroll', function(){bar.classList.toggle('scrolled',window.scrollY>10);});

  document.getElementById('iph-toggle').addEventListener('click', function(){
    document.getElementById('iph-nav').classList.toggle('open');
  });

  document.querySelectorAll('.iph-dropdown-toggle').forEach(function(t){
    t.addEventListener('click', function(e){
      if(window.innerWidth<=1000){
        e.preventDefault();
        var p=this.closest('.iph-dropdown');
        var was=p.classList.contains('open');
        document.querySelectorAll('.iph-dropdown').forEach(function(d){d.classList.remove('open');});
        if(!was) p.classList.add('open');
      }
    });
  });

  var page=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.iph-nav-item,.iph-dropdown-menu a').forEach(function(a){
    if(a.getAttribute('href')===page) a.style.color='var(--gold)';
  });

  // ── UNIVERSAL FOOTER ──
  var fcss = `
    #iph-footer {
      background: #060E1A;
      border-top: 1px solid rgba(197,164,78,0.12);
      padding: 56px 40px 32px;
      font-family: 'Instrument Sans','DM Sans',sans-serif;
    }
    #iph-footer-inner { max-width:1200px; margin:0 auto; }
    #iph-footer-top {
      display:flex; justify-content:space-between; align-items:flex-start;
      flex-wrap:wrap; gap:48px;
      padding-bottom:40px; border-bottom:1px solid rgba(197,164,78,0.08);
    }
    #iph-footer-brand-col .iph-footer-wordmark {
      font-family:'Instrument Serif',Georgia,serif; font-size:20px;
      color:#C5A44E; letter-spacing:1px; display:block;
      margin-bottom:8px; text-decoration:none;
    }
    #iph-footer-brand-col .iph-footer-tagline {
      font-size:10px; letter-spacing:2px; text-transform:uppercase;
      color:rgba(255,255,255,0.25);
    }
    #iph-footer-brand-col .iph-footer-contact {
      display:block; margin-top:16px; font-size:11px; letter-spacing:0.5px;
      color:rgba(197,164,78,0.55); text-decoration:none; transition:color 0.3s;
    }
    #iph-footer-brand-col .iph-footer-contact:hover { color:#C5A44E; }
    .iph-footer-col-label {
      font-size:9px; font-weight:700; letter-spacing:2px; text-transform:uppercase;
      color:rgba(197,164,78,0.45); margin-bottom:16px;
    }
    .iph-footer-links { display:flex; flex-direction:column; gap:10px; }
    .iph-footer-links a {
      font-size:11px; letter-spacing:1px; text-transform:uppercase;
      color:rgba(255,255,255,0.35); text-decoration:none; transition:color 0.3s;
    }
    .iph-footer-links a:hover { color:#C5A44E; }
    #iph-footer-bottom {
      display:flex; justify-content:space-between; align-items:center;
      flex-wrap:wrap; gap:12px; padding-top:28px;
    }
    #iph-footer-legal { font-size:10px; color:rgba(255,255,255,0.2); letter-spacing:0.5px; line-height:1.6; }
    #iph-footer-marks { font-size:10px; color:rgba(255,255,255,0.15); letter-spacing:0.5px; }
    @media(max-width:768px){ #iph-footer{padding:40px 20px 24px;} #iph-footer-top{gap:32px;} }
  `;
  var fs = document.createElement('style');
  fs.textContent = fcss;
  document.head.appendChild(fs);

  var fhtml = `
    <div id="iph-footer-inner">
      <div id="iph-footer-top">
        <div id="iph-footer-brand-col">
          <a class="iph-footer-wordmark" href="index.html">InPursuit Health</a>
          <span class="iph-footer-tagline">Harness the Power of Your Data\u2122</span>
          <a class="iph-footer-contact" href="mailto:info@inpursuithealth.com">info@inpursuithealth.com</a>
        </div>
        <div>
          <div class="iph-footer-col-label">Policy</div>
          <div class="iph-footer-links">
            <a href="terms.html">Terms of Service</a>
            <a href="security.html">Security Center</a>
          </div>
        </div>
        <div>
          <div class="iph-footer-col-label">Company</div>
          <div class="iph-footer-links">
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="leadership.html">Leadership</a>
            <a href="careers.html">Careers</a>
            <a href="mailto:info@inpursuithealth.com">Contact</a>
          </div>
        </div>
      </div>
      <div id="iph-footer-bottom">
        <div id="iph-footer-legal">&copy; 2026 InPursuit Health, LLC &mdash; Wyoming Limited Liability Company. All rights reserved. Patent pending.</div>
        <div id="iph-footer-marks">Results Matter\u2122 &nbsp;|&nbsp; Harness the Power of Your Data\u2122</div>
      </div>
    </div>
  `;

  document.querySelectorAll('footer').forEach(function(el){ el.remove(); });
  var footer = document.createElement('footer');
  footer.id = 'iph-footer';
  footer.innerHTML = fhtml;
  document.body.appendChild(footer);

})();
