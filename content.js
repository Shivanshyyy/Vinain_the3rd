// ============================================================================
// EDIT THIS FILE FOR ALL TEXT. Nothing else in the project needs to change.
// Every field below has a comment saying exactly where it shows up on the site.
// Wrapping a word in <em>...</em> makes it gold + italic (used for emphasis).
// After editing, just save this file and refresh the page in your browser.
// ============================================================================

const CONTENT = {

  // The date you two got together. Powers the live "X days, Y hours..." counter
  // in the hero section. Format: new Date(YEAR, MONTH, DAY) — MONTH IS 0-INDEXED
  // (January = 0, so June = 5). Time defaults to midnight since it's unknown.
  startDate: new Date(2026, 5, 6, 0, 0, 0),

  // ---- HERO — the very first full-screen section ----
  hero: {
    eyebrow: "JUNE 6, 2026",                    // small line above the big heading
    titleBefore: "Happy",                       // first word of the big heading
    titleEmphasis: "Three Months",               // the gold italic word(s) in the heading
    titleName: "Vinani",                         // her name, on its own line under the heading
    tagline: "Mumbai to Kohima. one heartbeat. too many meows.", // small line under the heading
    counterCaption: "and counting"                // caption under the live day/hour/min/sec counter
  },

  // ---- GALLERY — the 3D coverflow photo array, right after the reveal lines ----
  gallery: {
    label: "you, mostly",                         // small caption above the gallery
    // Add a photo: 1) drop the image file into the photos/ folder next to this
    // file, 2) add its exact filename as a new line below. Order here = order
    // they appear while scrolling. Nothing else needs to change.
    photos: [
      "2bb7844a-d603-423e-a994-3683c9dc4e3a.jpg",
      "586f4a12-9c7a-4294-bf1e-c02c61ede1ba.jpg",
      "60b6f5eb-8e86-48f0-ba56-f3b51e951a48.jpg",
      "6c58f6d3-86f5-44c2-88b0-5bef9f3906c4.jpg",
      "6c9b16cd-1340-4a6b-a9a3-67b808551714.jpg",
      "ab3c167e-fbf6-4ab5-b7b7-819b3ffa017b.jpg",
      "d310ba95-cda8-4c78-9186-f8cfa53010c2.jpg",
      "photo-08.jpeg",
      "photo-09.jpeg",
      "photo-10.jpeg",
      "photo-11.jpeg",
      "photo-12.jpeg",
      "photo-13.jpeg",
      "photo-14.jpeg",
      "photo-15.jpeg"
    ]
  },

  // ---- "things i haven't said enough" — the scrolling reveal lines ----
  reveal: {
    label: "things i haven't said enough",       // small caption above the lines
    items: [                                      // each line fades in on its own as she scrolls down
      "You speak fluent cat. They've basically made you their ambassador.",
      "Soft, sleepy and goofyyy in one breath, devastatingly cheeky in the next. ",
      "You turned <em>meow</em> into the most romantic word I know.",
      "we live in same country but you just always beat me to the sunrise.",
      "Three months in, and I still want to tell you everything the second it happens.",
      "Distance is the only thing keeping this PG. Barely.",
      "and lastlyy,",
      "My <em>ass</em> is yourss bbg."
    ]
  },

  // ---- THE LETTER — cream paper card ----
  letter: {
    salutation: "My Vinani,",                     // first line of the letter
    paragraphs: [                                  // each entry becomes its own paragraph
      "On Feb 13th, scared me asked a cat to go out and Three months ago, on June 6th, something in my life quietly rearranged itself. I didn't plan on falling for someone who talks to cats better than she talks to people — and somehow still finds time to be devastatingly cheeky with me — but here we are.",
      "Long distance is not for the weak(said by lord of the meowmeow), and Mumbai to Kohima is further than it should be. But then you send one unhinged <em>meow</em> and it undoes every mile between us. You make a stupid amount of distance feel like a technicality and idk how, brings so much hope.",
      "I don't know when we'll be in the same room again — could be months, could be longer — and I've stopped pretending that doesn't scare me a little. But I'd rather wait for you than settle for anyone easier to reach. So here's to three months, and to every one after it, however far apart they have to happen.",
      "Keep talking to the cats. Keep being cheeky. Keep saying meow like it's a whole sentence — half the time I don't think you mean the cats, and my ass is yours."
    ],
    signature: "Yours, Mumbai to Kohima — Shivansh" // last line, bottom-right of the letter
  },

  // ---- THE SCROLL SCENE — park walk -> car -> candlelit dinner ----
  future: {
    label: "a little peek at someday",            // small caption above the scene, right at the top
    // Short captions that appear OVER the animation and change AS she keeps scrolling.
    // start/end are how far through the whole scene (0 = the very start, 1 = the very end)
    // — you can edit the TEXT freely; only touch the numbers if you want a caption to
    // show up earlier/later or last longer.
    captionBeats: [
      { start: 0.03, end: 0.12, text: "just a walk. (for now.)" },
      { start: 0.22, end: 0.26, text: "windows down." },
      { start: 0.27, end: 0.31, text: "your hand finds mine." }
    ],
    finalText: "Candlelight, good pasta, a glass of red — both of us dressed like we tried. Someday: no Mumbai, no Kohima. Just this table, and you, stealing my last bite.", // big caption at the very end, over the dinner table
    finalSmall: "Until then — meow."               // small line under the final caption
  },

  // ---- WORLD TOUR — new scroll scene, right after the dinner scene ----
  worldTour: {
    label: "and after that, everywhere",           // small caption above the scene
    // Each stop is one postcard scene the camera pans past as she scrolls.
    // Only "caption" is meant to be edited freely here — the illustration for each
    // stop (Paris/beach/mountains/desert) is drawn in index.html, so adding a whole
    // NEW stop (a 5th postcard) needs a bit of code, not just a text edit.
    stops: [
      { caption: "Paris. obviously." },
      { caption: "somewhere with a beach and no wifi." },
      { caption: "the mountains, finally(hopefully in Chinaa)." },
      { caption: "and then wherever you want." }
    ]
  },

  // ---- CLOSING — last section ----
  closing: {
    heading: "Happy Three Months",
    sub: "meow, forever.",
    secretButtonLabel: "reveal a secret",          // label the button starts with
    // Cycles to the next message each time the button is tapped, on repeat.
    secretMessages: [
      "I love you more than you love cats.<br><span>(Statistically impossible. Still true.)</span>",
      "Long distance has exactly one upside — you have no idea what I'm going to do the next time I see you.",
      "Every <span>meow</span> you send does things that would get flagged in both Mumbai and Kohima.",
      "Three months down. I'm not going anywhere, so get used to me."
    ],
    footer: "built with too many browser tabs and zero regrets — since June 6, 2026"
  },

  // ---- FLOATING CAT ICON (bottom-right corner, clickable on every page) ----
  mascot: {
    messages: [                                    // one is shown at random each time it's tapped
      "meow.",
      "meow, meow.",
      "i miss you.",
      "come here.",
      "purr...",
      "you're it. forever.",
      "go talk to a cat for me.",
      "still thinking about ghop ghop.",
      "my place or yours? (kidding. mostly.)",
      "stop being cute over text, it is not fair to me"
    ],
    streakMessage: "okay fine — I miss your hands more than your voice notes. happy?" // bonus message if tapped 5x fast
  }
};
