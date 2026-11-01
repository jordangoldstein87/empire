/* Everything the preview shows: both brands, one catalog, and the sample wholesale book.
   Product names, photos and prices are real (research/*.json). Accounts, reps, orders and stock are samples. */
window.EM = {
  today: "2026-11-02",

  brands: {
    glass: {
      name: "Empire Glassworks", short: "Glassworks", url: "empireglassworks.com", c: "#c35121", logo: "img/glass/logo.png?v=1793571820",
      ann: "Wholesale opening orders from $500. Approved in 1 to 2 business days.",
      h1: "Art that <em>rips.</em>", lede: "Character glass made by hand in Placentia, California, since 2013. Donuts, otters, SPAM musubi and a few planets.",
      hero: "img/glass/empire-glassworks-handcrafted-functional-glass-hero.jpg?v=1793571820",
      marquee: ["Made with character", "Est. 2013", "Placentia, California", "From pandas to planets", "Art that rips"],
      story: { img: "img/glass/empire_glassworks_team_photo.jpg?v=1793571820", h: "It started with figurines.", p: ["The team made glass figurines for Disney before they made pipes. The same hands now make functional art for smoke shops around the world.", "Family owned. Every piece shaped, colored and checked in our California studio."] },
      detail: "img/glass/empire-glassworks-original-designs-glass-pieces.jpg?v=1793571820",
      collabs: ["Puffco", "Elevate Jane", "Session Goods", "SakiBomb", "Stundenglass", "The Bulldog"],
    },
    smokes: {
      name: "Empire Smokes", short: "Smokes", url: "empiresmokes.com", c: "#b24a64", logo: "img/smokes/logo-header-721.png?v=1793571820",
      ann: "Free US shipping over $75 · 21+ only",
      h1: "The glass <em>boutique.</em>", lede: "Heady glass, Puffco glass and the whole Empire Glassworks line, picked by people who blow glass for a living.",
      hero: "img/smokes/hero-moonray-collab.jpg?v=1793571820",
      story: { img: "img/smokes/hero-puffco-attachments.jpg?v=1793571820", h: "Built by community. <em>Driven by craft.</em>", p: ["Empire is not about size. It is about foundation, built brick by brick with the artists we carry.", "The main retailer for Empire Glassworks, and home to about 80 artists and brands."] },
      brandsRow: ["Empire Glassworks", "Moonray", "Puffco", "Anthea", "Trapper Studio", "Doble Reina", "Mmmelty", "Thicket"],
    },
  },

  // one catalog for both sites. ws = the wholesale price (Glassworks list), retail = the Empire Smokes price.
  // sold: where it is sold. House glass sells on both; outside artists sell on Empire Smokes only.
  products: [
    { id: "otter", t: "Otter Dry Pipe", maker: "Empire Glassworks", cat: "Dry pipes", ws: 35, retail: 65, img: "img/glass/products/dry-pipe-otter.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 142, sku: "EG-DP-OTTER" },
    { id: "jelly", t: "Jelly Donut Dry Pipe", maker: "Empire Glassworks", cat: "Dry pipes", ws: 30, retail: 60, img: "img/glass/products/dry-pipe-jelly-donut.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 88, sku: "EG-DP-JELLY" },
    { id: "spam", t: "SPAM Musubi Dry Pipe", maker: "Empire Glassworks", cat: "Dry pipes", ws: 35, retail: 70, img: "img/glass/products/spam-musubi-pipe.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 19, sku: "EG-DP-SPAM" },
    { id: "mush", t: "Mushrooms Dry Pipe", maker: "Empire Glassworks", cat: "Dry pipes", ws: 35, retail: 70, img: "img/glass/products/dry-pipe-mushrooms.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 64, sku: "EG-DP-MUSH" },
    { id: "galactic", t: "Galactic Baby Beaker", maker: "Empire Glassworks", cat: "Water pipes", ws: 165, retail: 330, img: "img/glass/products/baby-beaker-across-the-universe.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 23, sku: "EG-WP-GAL-BB" },
    { id: "sundae", t: "Cookie Sundae Float Mini Rig", maker: "Empire Glassworks", cat: "Water pipes", ws: 100, retail: 180, img: "img/glass/products/mini-rig-chocolate-cookie-sundae-float.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 31, sku: "EG-MR-SUNDAE" },
    { id: "duck", t: "Duck Bowl Piece, 14mm", maker: "Empire Glassworks", cat: "Bowls", ws: 18, retail: 36, img: "img/glass/products/bowl-piece-duck-14mm.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 210, sku: "EG-BW-DUCK14" },
    { id: "orchid", t: "Orchid Bowl Piece, 14mm", maker: "Empire Glassworks", cat: "Bowls", ws: 20, retail: 40, img: "img/glass/products/bowl-piece-orchid-14mm.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 12, sku: "EG-BW-ORCH14" },
    { id: "sriracha", t: "Sriracha Spinner Cap", maker: "Empire Glassworks", cat: "Caps & dabbers", ws: 20, retail: 40, img: "img/glass/products/spinner-cap-sriracha.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 76, sku: "EG-SC-SRIR" },
    { id: "luckycat", t: "Lucky Cat Spinner Cap", maker: "Empire Glassworks", cat: "Caps & dabbers", ws: 15, retail: 30, img: "img/glass/products/spinner-cap-lucky-cat.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 95, sku: "EG-SC-LCAT" },
    { id: "corgi", t: "Corgi Dabber", maker: "Empire Glassworks", cat: "Caps & dabbers", ws: 15, retail: 30, img: "img/glass/products/dabber-corgi.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 130, sku: "EG-DB-CORGI" },
    { id: "bees", t: "Save the Bees Proxy Core", maker: "Empire Glassworks", cat: "Puffco glass", ws: 30, retail: 60, img: "img/glass/products/puffco-proxy-core-attachment-save-the-bees.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 9, sku: "EG-PX-BEES" },
    { id: "soju", t: "Soju Bottle Peak Attachment", maker: "Empire Glassworks", cat: "Puffco glass", ws: 40, retail: 80, img: "img/glass/products/peak-attachment-soju-bottle.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 47, sku: "EG-PK-SOJU" },
    { id: "honey", t: "Honeycomb Terp Jar", maker: "Empire Glassworks", cat: "Caps & dabbers", ws: 20, retail: 40, img: "img/glass/products/terp-jar-honeycomb.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 58, sku: "EG-TJ-HONEY" },
    { id: "lipstick", t: "SakiBomb Red Lipstick Chillum", maker: "Empire Glassworks", cat: "Collabs", ws: 25, retail: 50, img: "img/glass/products/sakibomb-red-lipstick-chillum.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 40, sku: "EG-CB-SAKI-LIP" },
    { id: "pivotcase", t: "Pivot Mouthpiece Case, 18 with display", maker: "Empire Glassworks", cat: "Wholesale cases", ws: 270, retail: null, img: "img/glass/products/wholesale-case-puffco-pivot-mouthpieces-18pcs-w-pop-display.jpg?v=1793571820", sold: ["glass"], stock: 14, sku: "EG-WC-PIVOT18" },
    { id: "flagship", t: "Galactic Flagship Water Pipe", maker: "Empire Glassworks", cat: "Water pipes", ws: 175, retail: 350, img: "img/smokes/products/empire-glassworks-galactic-flagship-water-pipe.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 6, sku: "EG-WP-GAL-FLAG" },
    { id: "recycler", t: "East Australian Current Mini Recycler", maker: "Empire Glassworks", cat: "Water pipes", ws: 132.5, retail: 265, img: "img/smokes/products/empire-glassworks-east-australian-current-mini-recycler.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 11, sku: "EG-MR-EAC" },
    { id: "mushtop", t: "Green Mushroom Peak Dry Top", maker: "Empire Glassworks", cat: "Puffco glass", ws: 60, retail: 120, img: "img/smokes/products/empire-glassworks-puffco-peak-peak-pro-dry-top-attachment-gr.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 22, sku: "EG-PK-DRY-MUSH" },
    { id: "pivotuni", t: "Across the Universe Pivot Mouthpiece", maker: "Empire Glassworks", cat: "Puffco glass", ws: 15, retail: 30, img: "img/smokes/products/empire-glassworks-puffco-pivot-glass-mouthpiece-across-the-u.jpg?v=1793571820", sold: ["glass", "smokes"], stock: 160, sku: "EG-PV-UNI" },
    { id: "moonbeaker", t: "Moonray x Empire Baby Beaker, Sunshine Garden", maker: "Moonray x Empire", cat: "Water pipes", ws: null, retail: 420, img: "img/smokes/products/moonray-x-empire-baby-beaker-sunshine-garden.jpg?v=1793571820", sold: ["smokes"], stock: 4, sku: "MR-EG-BB-SUN", isNew: true },
    { id: "moonrig", t: "Moonray x Empire Mini Rig, Sunshine Garden", maker: "Moonray x Empire", cat: "Water pipes", ws: null, retail: 245, img: "img/smokes/products/moonray-x-empire-mini-rig-sunshine-garden.jpg?v=1793571820", sold: ["smokes"], stock: 7, sku: "MR-EG-MR-SUN", isNew: true },
    { id: "moonspoon", t: "Moonray x Empire Spoon, Sunshine Garden", maker: "Moonray x Empire", cat: "Dry pipes", ws: null, retail: 115, img: "img/smokes/products/moonray-x-empire-spoon-pipe-sunshine-garden.jpg?v=1793571820", sold: ["smokes"], stock: 9, sku: "MR-EG-SP-SUN", isNew: true },
    { id: "spartan", t: "Eternal Sun Spartan Helmet Peak Attachment", maker: "Tony Kazy Glass", cat: "Puffco glass", ws: null, retail: 220, was: 250, img: "img/smokes/products/puffco-peak-peak-pro-glass-attachment-eternal-sun-spartan-he.jpg?v=1793571820", sold: ["smokes"], stock: 2, sku: "TK-PK-SPARTAN" },
    { id: "rosybow", t: "Rosy Bow Mini Spoon", maker: "Anthea Glass", cat: "Dry pipes", ws: null, retail: 150, img: "img/smokes/products/anthea-glass-rosy-bow-spoon-pipe.jpg?v=1793571820", sold: ["smokes"], stock: 3, sku: "AG-SP-ROSY" },
    { id: "trout", t: "Sunrise Rainbow Trout Chillum", maker: "Trapper Studio", cat: "Dry pipes", ws: null, retail: 300, img: "img/smokes/products/trapper-studio-sunrise-rainbow-trout-head-chillum.jpg?v=1793571820", sold: ["smokes"], stock: 1, sku: "TS-CH-TROUT" },
    { id: "madreperla", t: "Madreperla Bubbler", maker: "Doble Reina", cat: "Water pipes", ws: null, retail: 225, img: "img/smokes/products/doble-reina-madreperla-bubbler.jpg?v=1793571820", sold: ["smokes"], stock: 2, sku: "DR-BB-MADRE" },
    { id: "charm", t: "Blue Mushroom Puffco Charm", maker: "Mmmelty", cat: "Accessories", ws: null, retail: 10, img: "img/smokes/products/mmmelty-glass-puffco-charm-blue-mushroom.jpg?v=1793571820", sold: ["smokes"], stock: 34, sku: "MM-CH-BLUMUSH" },
    { id: "raygun", t: "Spaceout Ray Gun Torch, Pink", maker: "Thicket", cat: "Accessories", ws: null, retail: 50, img: "img/smokes/products/thicket-spaceout-lighter-ray-gun-torch-pink.jpg?v=1793571820", sold: ["smokes"], stock: 18, sku: "TH-TR-RAYPINK" },
  ],

  // wholesale price tiers (sample): shops pay the list; distributors get a deeper cut; ten or more of one piece earns a little more off
  tiers: [
    { k: "shop", name: "Smoke shop", off: 0, note: "The wholesale list" },
    { k: "online", name: "Online retailer", off: 0, note: "The wholesale list, MAP at the Empire Smokes price" },
    { k: "dist", name: "Distributor", off: 15, note: "15% under the list" },
  ],
  volume: { qty: 10, off: 5 },
  openingMin: 500,

  // the sample wholesale book: shops, online retailers and distributors (made up for the preview)
  reps: { kim: { name: "Kim", c: "#3f6493" }, andre: { name: "Andre", c: "#c35121" }, lena: { name: "Lena", c: "#2f7a46" } },
  accounts: [
    { id: "lakeside", name: "Lakeside Smoke & Vape", city: "Long Beach, CA", tier: "shop", rep: "kim", every: 30, last: 34, ytd: 9840, terms: "Net 30", open: 0, buyer: "Marisol", brands: "gs", lastOrder: [["otter", 6], ["jelly", 6], ["duck", 12], ["corgi", 12], ["sriracha", 6], ["bees", 4]] },
    { id: "highdesert", name: "High Desert Glass", city: "Tucson, AZ", tier: "shop", rep: "andre", every: 45, last: 41, ytd: 7420, terms: "Card on file", open: 0, buyer: "Wes", brands: "g", lastOrder: [["galactic", 2], ["sundae", 3], ["mush", 6], ["luckycat", 10]] },
    { id: "greenroom", name: "The Green Room", city: "Portland, OR", tier: "shop", rep: "lena", every: 30, last: 52, ytd: 5210, terms: "Net 15", open: 1180, buyer: "Jonah", brands: "g", lastOrder: [["spam", 6], ["honey", 12], ["orchid", 12], ["soju", 4]] },
    { id: "cloud9", name: "Cloud 9 Headshop", city: "Austin, TX", tier: "shop", rep: "kim", every: 21, last: 19, ytd: 12660, terms: "Net 30", open: 2240, buyer: "Priya", brands: "g", lastOrder: [["otter", 12], ["jelly", 12], ["pivotcase", 1], ["duck", 24]] },
    { id: "coastal", name: "Coastal Distribution", city: "San Diego, CA", tier: "dist", rep: "andre", every: 30, last: 27, ytd: 48300, terms: "Net 45", open: 8600, buyer: "Rafael", brands: "g", lastOrder: [["pivotcase", 6], ["otter", 48], ["duck", 60], ["bees", 24]] },
    { id: "nordic", name: "Nordic Head Supply", city: "Amsterdam, NL", tier: "dist", rep: "lena", every: 60, last: 74, ytd: 31950, terms: "Prepaid", open: 0, buyer: "Sanne", brands: "g", lastOrder: [["galactic", 6], ["recycler", 6], ["mushtop", 12], ["soju", 24]] },
    { id: "puffpalace", name: "Puff Palace Online", city: "Las Vegas, NV", tier: "online", rep: "kim", every: 30, last: 12, ytd: 15780, terms: "Net 30", open: 3920, buyer: "Tasha", brands: "g", lastOrder: [["soju", 12], ["mushtop", 6], ["pivotuni", 36], ["bees", 12]] },
    { id: "mountain", name: "Mountain Mist Smoke Shop", city: "Denver, CO", tier: "shop", rep: "andre", every: 30, last: 38, ytd: 6390, terms: "Card on file", open: 0, buyer: "Cody", brands: "g", lastOrder: [["mush", 6], ["sriracha", 6], ["luckycat", 6], ["lipstick", 6]] },
    { id: "bayside", name: "Bayside Tobacco & Gifts", city: "Tampa, FL", tier: "shop", rep: "lena", every: 45, last: 8, ytd: 4120, terms: "Net 15", open: 960, buyer: "Dina", brands: "g", lastOrder: [["corgi", 12], ["duck", 12], ["otter", 6]] },
    { id: "elevated", name: "Elevated Goods Co.", city: "Brooklyn, NY", tier: "shop", rep: "kim", every: 30, last: 0, ytd: 0, terms: "Card on file", open: 0, buyer: "Noor", brands: "g", isNew: true, lastOrder: [] },
  ],
  // sample web orders already in today, from both stores and the wholesale portal
  orders: [
    { id: "ES-48213", ch: "web", site: "smokes", who: "Sam R.", at: "2026-11-02T08:41", lines: [["moonspoon", 1], ["otter", 1]], status: "pick" },
    { id: "ES-48212", ch: "web", site: "smokes", who: "Alexis T.", at: "2026-11-02T07:58", lines: [["soju", 1], ["charm", 2]], status: "pick" },
    { id: "WS-10388", ch: "wholesale", acct: "puffpalace", at: "2026-11-02T07:20", lines: [["soju", 12], ["pivotuni", 36]], status: "review" },
    { id: "ES-48207", ch: "web", site: "smokes", who: "Jordan K.", at: "2026-11-01T21:15", lines: [["galactic", 1]], status: "shipped", track: "1Z 84A 9E2 03 4411 2087" },
    { id: "WS-10385", ch: "wholesale", acct: "cloud9", at: "2026-11-01T14:02", lines: [["otter", 12], ["jelly", 12], ["duck", 24]], status: "shipped", track: "1Z 84A 9E2 03 4410 9921" },
    { id: "WS-10381", ch: "wholesale", acct: "bayside", at: "2026-10-31T10:30", lines: [["corgi", 12], ["duck", 12], ["otter", 6]], status: "delivered", track: "9400 1118 9922 3301 7745 02" },
  ],
};
