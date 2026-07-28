/*
  ================================================================
  STICKERS DATA FILE
  ================================================================
  This is the ONLY file you need to touch to add, remove, or edit
  stickers on the site. No HTML or design knowledge required.

  TO ADD A NEW STICKER:
    1. Add your sticker image to the /images/stickers folder.
    2. Copy one of the blocks below (the part between { and }),
       paste it into the STICKERS list, and fill in your own info.
    3. Give it a unique "id" (no spaces — use dashes).
    4. Save the file and push to GitHub. The site updates
       automatically — no build step needed.

  FIELDS:
    id          - unique short name, used internally (e.g. "cat-nap")
    name        - the sticker's title, shown on the card
    description - a short one or two sentence description
    image       - path to the image file, e.g. "images/stickers/cat-nap.png"
    category    - one word used for the filter chips (e.g. "Animals")
    etsyUrl     - link to the product's Etsy listing (or any store link)
    isNew       - true or false — shows a "NEW" tag on the card
  ================================================================
*/

const STICKERS = [
  {
    id: "guitar-leap",
    name: "Guitar Leap Sticker",
    description: "The moment when there's more air between the stage and the thrasher than there is in an actual lead zeppelin.",
    image: "images/stickers/guitar-leap.svg",
    category: "Music",
    etsyUrl: "https://etsy.com/shop/coolgroovyfunk",
    isNew: false
  },
  {
    id: "unicorn-van",
    name: "Unicorn Van Sticker",
    description: "Rainbows plus unicorn plus hippie van equals groovy.",
    image: "images/stickers/unicorn-van.svg",
    category: "Vehicles",
    etsyUrl: "https://etsy.com/shop/coolgroovyfunk",
    isNew: false
  },
  {
    id: "cat-spaceship",
    name: "Cat in a Spaceship Holographic Sticker",
    description: "Is that a cat sitting next to an alien pilot? Or is the cat the pilot?",
    image: "images/stickers/cat-spaceship.svg",
    category: "Animals",
    etsyUrl: "https://etsy.com/shop/coolgroovyfunk",
    isNew: true
  },
  {
    id: "rad-dad",
    name: "Rad Dad Sticker",
    description: "Tell the world how rad you are, dad!",
    image: "images/stickers/rad-dad.svg",
    category: "Funny",
    etsyUrl: "https://etsy.com/shop/coolgroovyfunk",
    isNew: false
  },
  {
    id: "wrigley-clock",
    name: "Wrigley Field Clock Sticker",
    description: "What time is it? Chicago Cubs baseball time! Let this sticker take your mind to good old Wrigley Field any time.",
    image: "images/stickers/wrigley-clock.svg",
    category: "Sports",
    etsyUrl: "https://etsy.com/shop/coolgroovyfunk",
    isNew: false
  },
  {
    id: "toad-pun",
    name: "Toadally Sticker",
    description: "Toad in a pun t-shirt. Toadally awesome.",
    image: "images/stickers/toad-pun.svg",
    category: "Animals",
    etsyUrl: "https://etsy.com/shop/coolgroovyfunk",
    isNew: false
  },
  {
    id: "basstronaut",
    name: "Basstronaut Holographic Sticker",
    description: "Half bass, half space shuttle, and totally holo.",
    image: "images/stickers/basstronaut.svg",
    category: "Music",
    etsyUrl: "https://etsy.com/shop/coolgroovyfunk",
    isNew: true
  },
  {
    id: "gold-tooth-dude",
    name: "Gold Tooth Dude Sticker",
    description: "Put on your shades, because when this dude smiles it gets bright!",
    image: "images/stickers/gold-tooth-dude.svg",
    category: "Funny",
    etsyUrl: "https://etsy.com/shop/coolgroovyfunk",
    isNew: false
  }
];
