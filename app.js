/* Empire: the welcome page with the opening video, and one landing page for each brand.
   Routes: #home, #glass, #smokes. ?cap hides the preview badge, ?rail collapses the pitch rail, ?still skips the play screen. */
(function () {
  const D = window.EM, B = D.brands;
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const money = n => "$" + (n % 1 ? n.toFixed(2) : n.toLocaleString("en-US"));
  const Q = new URLSearchParams(location.search);
  if (Q.has("cap")) document.body.classList.add("cap");
  if (Q.has("rail")) document.body.classList.add("rail-min");
  const HUB = "The Citadel";

  const IC = {
    home: "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z", flame: "M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 2 1 3 3 3 5 1-2 1-5 0-8z",
    bag: "M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2", dragon: "M4 15c3 0 4-3 7-3s4 3 7 3M6 9c2-3 5-4 8-3l3-2v4l2 2-3 1M4 19h16", form: "M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h7",
  };
  const icon = k => `<svg viewBox="0 0 24 24"><path d="${IC[k]}"/></svg>`;
  const ROUTES = [["home", "Welcome", "home"], ["glass", "Empire Glassworks", "flame"], ["smokes", "Empire Smokes", "bag"]];
  $("#rail").innerHTML = `<div class="rail-brand"><img src="img/glass/logo.png?v=1793571820" alt=""><div><b>Empire</b><span>A preview</span></div></div>
    <span class="rail-k">The websites</span>${ROUTES.map(([k, t, i]) => `<a href="#${k}" data-r="${k}">${icon(i)}<span>${t}</span></a>`).join("")}
    <span class="rail-k">Behind them</span><a href="hub.html">${icon("dragon")}<span>${HUB}</span></a><a href="survey.html">${icon("form")}<span>Team survey</span></a>
    <div class="rail-foot">Two brands, one backend. Sample numbers throughout.</div>`;
  $("#menubtn").onclick = () => document.body.classList.toggle("menu");
  $("#main").addEventListener("click", () => document.body.classList.remove("menu"));

  const toast = t => { const el = document.createElement("div"); el.className = "toast"; el.textContent = t; document.body.appendChild(el); setTimeout(() => el.remove(), 2600); };

  /* ---------- the welcome page and the opening video ---------- */
  const SHOTS = ["glass", "smokes"];
  function welcome() {
    return `<section class="wl-hero" id="wh">
      <img class="wl-bg" src="${B.glass.hero}" alt="">
      <div class="wl-front">
        <div class="wl-mark"><img src="img/glass/logo.png?v=1793571820" alt="Empire"></div>
        <h1>Two brands. One backend.</h1>
        <p>A new look for Empire Glassworks and Empire Smokes, and the hub that runs them both.</p>
        <button class="wl-play" type="button" id="play"><i></i>Watch the preview</button>
      </div>
      <div class="wl-stage" id="stage"></div>
      <button class="wl-skip" type="button" id="skip">Skip</button>
      <div class="wl-bar" id="wbar"></div>
      <a class="wl-more" href="#more" id="more">Scroll down for more<svg viewBox="0 0 24 24"><path d="M5 9l7 7 7-7"/></svg></a>
    </section>
    <section class="wl-sec" id="more">
      <span class="wl-k">The front doors</span>
      <h2 class="wl-h">Each brand keeps its own website.</h2>
      <p class="wl-p">The maker and the boutique, each with its own look. One inventory and one wholesale book behind both.</p>
      <div class="wl-brands">
        ${SHOTS.map(k => `<a class="wl-card" href="#${k}"><img class="shot" src="img/shots/${k}.jpg" alt="${esc(B[k].name)} landing page"><div class="t"><b>${esc(B[k].name)}</b><span>${esc(B[k].url)}</span><u>Open the page</u></div></a>`).join("")}
      </div>
    </section>
    <section class="wl-one"><div class="wl-sec">
      <span class="wl-k">Behind both</span>
      <h2 class="wl-h">${HUB}.</h2>
      <p class="wl-p">The castle behind the empire: every order, account and piece of glass in one place.</p>
      <div class="wl-trio">
        <a href="hub.html#wholesale">${icon("flame")}<b>Wholesale, built in</b><span>Accounts, who to reorder, order drafts, price tiers, samples and commission.</span><u>See the sales tools</u></a>
        <a href="hub.html#flow">${icon("bag")}<b>One inventory</b><span>A piece sold at Empire Smokes and a case sold to a shop come off the same count.</span><u>See how it connects</u></a>
        <a href="survey.html">${icon("form")}<b>Ask your team</b><span>Five minutes on how each person's day really goes.</span><u>Open the survey</u></a>
      </div>
      <div class="wl-cta"><a href="hub.html">See ${HUB}</a><a class="o" href="#glass">Start with Empire Glassworks</a></div>
    </div></section>`;
  }
  const phone = () => matchMedia("(max-width: 700px)").matches;
  // the scenes after the push-in: both logos, each landing page, the back end, then the hub ring
  function scenes() {
    const m = phone() ? "m-" : "";
    return [
      { html: `<div class="wl-two"><div style="--d:.1s"><img class="lg-g" src="img/glass/logo.png?v=1793571820" alt=""><span>Empire Glassworks</span></div><div style="--d:.5s"><img class="lg-s" src="img/smokes/logo.png?v=1793571820" alt=""><span>Empire Smokes</span></div></div>`, t: 4 },
      { web: `img/shots/${m}glass.jpg`, url: B.glass.url, k: "The maker", h: "Made for the shops that carry it.", t: 4.5 },
      { web: `img/shots/${m}smokes.jpg`, url: B.smokes.url, k: "The boutique", h: "Every Empire piece, plus 80 artists.", t: 4.5 },
      { web: "img/shots/hub-day.jpg?v=1793571820", url: "the-citadel", k: "Behind both", h: "Every rep starts the day here.", t: 4, dark: true },
      { web: "img/shots/hub-reorder.jpg?v=1793571820", url: "the-citadel", k: "Wholesale", h: "Who to reorder, and the draft ready.", t: 4, dark: true, cont: true },
      { web: "img/shots/hub-stock.jpg?v=1793571820", url: "the-citadel", k: "One inventory", h: "Both stores, one count.", t: 4, dark: true, cont: true },
      { web: "img/shots/hub-po.jpg?v=1793571820", url: "the-citadel", k: "Production", h: "A distributor's PO, read and priced.", t: 4, dark: true, cont: true },
      { web: "img/shots/hub-drop.jpg?v=1793571820", url: "the-citadel", k: "Marketing", h: "Every drop, planned in one place.", t: 4, dark: true, cont: true },
      { ring: true, t: 7.5 },
    ];
  }
  const ORBS = [["Empire Glassworks", "img/glass/logo.png?v=1793571820"], ["Empire Smokes"], ["Sales"], ["Marketing"], ["Production"], ["Inventory"]];
  function ringHtml() {
    return `<div class="wl-ring">${ORBS.map(([t, img], i) => { const a = i * Math.PI / 3; return `<span class="orb${img ? "" : " dk"}" style="--d:${(.3 + i * .18).toFixed(2)}s;left:${(50 + 42 * Math.sin(a)).toFixed(1)}%;top:${(50 - 42 * Math.cos(a)).toFixed(1)}%">${img ? `<img src="${img}" alt="">` : esc(t)}</span>`; }).join("")}
      <div class="core"><div><img class="core-mark" src="img/glass/logo.png?v=1793571820" alt=""><b>${HUB}</b><span>The hub</span></div></div></div>`;
  }
  let run = 0;
  function play() {
    const wh = $("#wh"), stage = $("#stage"), bar = $("#wbar"), my = ++run, alive = () => my === run && document.body.contains(wh);
    const S = scenes(), LINES = [["Two brands.", "Empire"], ["One family of glass.", "Since 2013"], ["One backend.", HUB]];
    const total = LINES.length * 2.8 + S.reduce((a, x) => a + x.t, 0);
    wh.classList.add("playing"); stage.innerHTML = "";
    bar.style.transition = "none"; bar.style.width = "0"; requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.transition = `width ${total}s linear`; bar.style.width = "100%"; }));
    const wait = t => new Promise(r => setTimeout(r, t * 1000));
    const show = html => { const el = document.createElement("div"); el.className = "wl-sc"; el.innerHTML = html; stage.appendChild(el); requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("on"))); const old = [...stage.children].slice(0, -1); setTimeout(() => old.forEach(o => o.remove()), 950); return el; };
    (async () => {
      for (const [l, k] of LINES) { if (!alive()) return; show(`<div class="wl-line"><small>${esc(k)}</small>${esc(l)}</div>`); await wait(2.8); }
      for (const sc of S) {
        if (!alive()) return;
        if (sc.ring) show(`<img class="kb" src="${B.smokes.hero}" alt="" style="opacity:.25">${ringHtml()}<div class="wl-ringcap"><small>Behind it all</small>One hub runs both brands.</div>`);
        else if (sc.web) {
          // the back end stays in one window: only the screen and the line above it change
          const prev = stage.lastElementChild;
          if (sc.cont && prev && prev.querySelector(".wl-win")) { prev.querySelector(".wl-win img").src = sc.web; prev.querySelector(".cap").innerHTML = `<small>${esc(sc.k)}</small>${esc(sc.h)}`; }
          else show(`<div class="wl-web${sc.dark ? " dk" : ""}"><div class="cap"><small>${esc(sc.k)}</small>${esc(sc.h)}</div><div class="wl-win"><div class="bar"><i></i><i></i><i></i><span>${esc(sc.url)}</span></div><img src="${sc.web}" alt=""></div></div>`);
        } else show(sc.html);
        await wait(sc.t);
      }
      end();
    })();
  }
  function end() {
    run++; const wh = $("#wh"); if (!wh) return;
    wh.classList.remove("playing"); $("#stage").innerHTML = "";
    const b = $("#wbar"); b.style.transition = "none"; b.style.width = "0";
    $("#play").innerHTML = "<i></i>Watch again";
  }
  function bindWelcome() {
    $("#play").onclick = play; $("#skip").onclick = end;
    $("#more").onclick = e => { e.preventDefault(); $("#more.wl-sec, section#more").scrollIntoView({ behavior: "smooth" }); };
    if (Q.has("play")) play();
  }

  /* ---------- the landing pages ---------- */
  const forSite = k => D.products.filter(p => p.sold.includes(k));
  const card = (p, k) => `<div class="st-card"><div class="ph"><img src="${p.img}" alt="" loading="lazy">${p.isNew ? `<span class="tg">New</span>` : p.stock <= 3 ? `<span class="tg">${p.stock === 1 ? "One left" : "Almost gone"}</span>` : ""}</div>
    <span class="nm">${esc(p.t)}</span><span class="pr">${k === "glass" ? (p.retail ? `${money(p.retail)} at Empire Smokes` : "Wholesale only") : `${p.was ? `<s>${money(p.was)}</s> ` : ""}${money(p.retail)}${k === "smokes" && p.maker !== "Empire Glassworks" ? ` · ${esc(p.maker)}` : ""}`}</span></div>`;
  const foot = k => `<footer class="st-foot"><div><b>${esc(B[k].name)}</b><span>${k === "glass" ? "Placentia, California · Est. 2013" : "Southern California · Online only"}</span><span>${k === "glass" ? "714-455-2906 · info@empireglassworks.com" : "info@empiresmokes.com · Mon to Fri, 9 to 5"}</span></div>
    <div><b>Wholesale</b><span>Apply in two minutes. $500 opening order.</span></div><div><b>A preview</b><span>A new landing page, made for ${esc(B[k].name)}.</span></div></footer>`;

  function glass() {
    const b = B.glass, P = forSite("glass").filter(p => p.cat !== "Wholesale cases").slice(0, 8);
    return `<div class="st st-glass">
      <div class="st-ann">${esc(b.ann)}</div>
      <header class="st-head"><a class="logo" href="#glass"><img src="${b.logo}" alt=""><b>Empire<small>Glassworks</small></b></a>
        <nav class="st-nav"><button class="hide-m" data-go="g-shop">The glass</button><button class="hide-m" data-go="g-story">Our story</button><button data-go="g-ws">Wholesale</button></nav></header>
      <section class="st-hero"><div><h1>${b.h1}</h1><p class="lede">${esc(b.lede)}</p>
        <div class="btns"><button class="st-btn" data-go="g-ws">Carry Empire in your shop</button><a class="st-btn o" href="#smokes">Buy a piece</a></div></div>
        <div class="art"><img src="${b.hero}" alt="Glass donut pipes by Empire Glassworks"></div></section>
      <div class="marq" aria-hidden="true"><div>${[...b.marquee, ...b.marquee].map(t => `<span>${esc(t)} ✦</span>`).join("")}</div></div>
      <section class="st-sec" id="g-shop"><h2>Made with character.</h2><p class="sub">Every piece is a little sculpture that works. Here are a few from the line.</p>
        <div class="st-grid">${P.map(p => card(p, "glass")).join("")}</div></section>
      <section class="st-sec" id="g-story"><div class="st-band"><img src="${b.story.img}" alt="The Empire Glassworks team"><div><h2>${esc(b.story.h)}</h2>${b.story.p.map(t => `<p>${esc(t)}</p>`).join("")}
        <p><b>Made with</b> ${b.collabs.join(", ")}.</p></div></div></section>
      <section class="st-sec" id="g-ws"><div class="st-ws"><div><h2>Carry Empire in your shop.</h2><p style="font-size:18px;margin-bottom:22px">Smoke shops, online stores and distributors. One account covers the whole line.</p>
        <button class="st-btn" id="apply">Apply for wholesale</button></div>
        <ul><li>$500 opening order</li><li>Approved in 1 to 2 business days</li><li>Your own price list and order history</li><li>Reorder in two taps</li><li>A rep who knows your shop</li></ul></div></section>
      <section class="st-sec" style="padding-top:0"><a class="st-sister" href="#smokes"><div><b>Shopping for yourself?</b><span>Every Empire piece is at Empire Smokes, the glass boutique.</span></div><img src="img/smokes/logo-header-721.png?v=1793571820" alt="Empire Smokes" style="height:48px;width:auto"></a></section>
      ${foot("glass")}</div>`;
  }
  function smokes() {
    const b = B.smokes, P = forSite("smokes");
    const pick = ["moonbeaker", "moonrig", "spartan", "flagship", "rosybow", "soju", "otter", "trout"].map(id => P.find(p => p.id === id));
    return `<div class="st st-smokes">
      <div class="st-ann">${esc(b.ann)}</div>
      <header class="st-head"><a class="logo" href="#smokes"><img src="${b.logo}" alt="Empire Smokes"></a>
        <nav class="st-nav"><button class="hide-m" data-go="s-shop">New in</button><button class="hide-m" data-go="s-story">About</button><a class="st-btn" href="#glass" style="padding:10px 18px;font-size:14.5px">Wholesale</a></nav></header>
      <section class="st-hero"><div><h1>${b.h1}</h1><p class="lede">${esc(b.lede)}</p>
        <div class="btns"><button class="st-btn" data-go="s-shop">Shop new glass</button><button class="st-btn o" data-go="s-story">Our story</button></div></div>
        <div class="art"><img src="${b.hero}" alt="Moonray x Empire Sunshine Garden glass"></div></section>
      <div class="brands">${b.brandsRow.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      <section class="st-sec" id="s-shop"><h2>Meet our <em>prettiest</em> collab yet.</h2><p class="sub">Moonray x Empire Sunshine Garden, a few one-of-a-kind pieces, and the house favorites.</p>
        <div class="st-grid">${pick.map(p => card(p, "smokes")).join("")}</div></section>
      <section class="st-sec" id="s-story"><div class="st-band"><div><h2>${b.story.h}</h2>${b.story.p.map(t => `<p>${esc(t)}</p>`).join("")}</div><img src="${b.story.img}" alt="Empire Glassworks Puffco attachments"></div></section>
      <section class="st-sec" style="padding-top:0"><a class="st-sister" href="#glass"><div><b>Own a shop?</b><span>Carry the Empire Glassworks line. Wholesale from $500.</span></div><img src="img/glass/logo.png?v=1793571820" alt="Empire Glassworks" style="height:56px;width:56px;border-radius:50%"></a></section>
      ${foot("smokes")}</div>`;
  }

  /* ---------- routing ---------- */
  function route() {
    const r = (location.hash.slice(1) || "home").split("/")[0], k = ["glass", "smokes"].includes(r) ? r : "home";
    if (r === "more") return;
    run++;
    $("#view").innerHTML = k === "glass" ? glass() : k === "smokes" ? smokes() : welcome();
    document.querySelectorAll("#rail [data-r]").forEach(a => a.toggleAttribute("aria-current", a.dataset.r === k) || a.setAttribute("aria-current", a.dataset.r === k ? "page" : "false"));
    $("#mtopk").textContent = k === "home" ? "Welcome" : B[k].name;
    document.title = k === "home" ? "Empire" : B[k].name;
    if (k === "home") bindWelcome();
    document.querySelectorAll("[data-go]").forEach(b => b.onclick = () => document.getElementById(b.dataset.go).scrollIntoView({ behavior: "smooth" }));
    const ap = $("#apply"); if (ap) ap.onclick = () => toast("The application lands in The Citadel for a rep to approve.");
    if (!Q.has("to")) scrollTo(0, 0); else { const t = document.getElementById(Q.get("to")); t && t.scrollIntoView(); }
  }
  addEventListener("hashchange", route);
  route();
})();
