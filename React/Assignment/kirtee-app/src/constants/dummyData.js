export const dummyBeersData = [
  {
    id: 1,
    name: "Buzz",
    tagline: "A Real Bitter Experience.",
    first_brewed: "09/2007",
    description:
      "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.5,
    ibu: 60,
    target_fg: 1010,
    target_og: 1044,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    attenuation_level: 75,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 64, unit: "celsius" }, duration: 75 }],
      fermentation: { temp: { value: 19, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Maris Otter Extra Pale",
          amount: { value: 3.3, unit: "kilograms" },
        },
        { name: "Caramalt", amount: { value: 0.2, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.4, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Fuggles",
          amount: { value: 25, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "First Gold",
          amount: { value: 25, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Fuggles",
          amount: { value: 37.5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "First Gold",
          amount: { value: 37.5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Cascade",
          amount: { value: 37.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Spicy chicken tikka masala",
      "Grilled chicken quesadilla",
      "Caramel toffee cake",
    ],
    brewers_tips:
      "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 2,
    name: "Trashy Blonde",
    tagline: "You Know You Shouldn't",
    first_brewed: "04/2008",
    description:
      "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
    image_url: "https://images.punkapi.com/v2/2.png",
    abv: 4.1,
    ibu: 41.5,
    target_fg: 1010,
    target_og: 1041.7,
    ebc: 15,
    srm: 15,
    ph: 4.4,
    attenuation_level: 76,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 69, unit: "celsius" }, duration: null }],
      fermentation: { temp: { value: 18, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Maris Otter Extra Pale",
          amount: { value: 3.25, unit: "kilograms" },
        },
        { name: "Caramalt", amount: { value: 0.2, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.4, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Amarillo",
          amount: { value: 13.8, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Simcoe",
          amount: { value: 13.8, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Amarillo",
          amount: { value: 26.3, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Motueka",
          amount: { value: 18.8, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Fresh crab with lemon",
      "Garlic butter dipping sauce",
      "Goats cheese salad",
      "Creamy lemon bar doused in powdered sugar",
    ],
    brewers_tips:
      "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 126,
    name: "Jet Black Heart",
    tagline: "Oatmeal Milk Stout. Dark. Roasty. Velvety.",
    first_brewed: "01/2016",
    description:
      "Good things come to those who wait. This smooth and roasty oatmeal milk stout won our 2015 Prototype Challenge at a canter. Roasty coffee and chocolate lead to a decadent, full-bodied richness of near uncharted depths with a velvet mouthfeel from the addition of oatmeal and a touch of wheat. This is complemented at every turn by the Magnum and Sorachi Ace hops, with the latter bringing an intensity of smooth vanilla and dark berry fruit on the long, rewarding finish.",
    image_url: "https://images.punkapi.com/v2/126.png",
    abv: 4.7,
    ibu: 45,
    target_fg: 1019,
    target_og: 1055,
    ebc: 200,
    srm: 100,
    ph: 4.4,
    attenuation_level: 70,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 75 }],
      fermentation: { temp: { value: 19, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Pale Ale", amount: { value: 2.75, unit: "kilograms" } },
        { name: "Wheat", amount: { value: 0.25, unit: "kilograms" } },
        { name: "Dark Crystal", amount: { value: 0.19, unit: "kilograms" } },
        { name: "Brown", amount: { value: 0.38, unit: "kilograms" } },
        { name: "Black Malt", amount: { value: 0.19, unit: "kilograms" } },
        {
          name: "Carafa Special Malt Type 1",
          amount: { value: 0.19, unit: "kilograms" },
        },
        { name: "Flaked Oats", amount: { value: 0.38, unit: "kilograms" } },
        { name: "Crystal 150", amount: { value: 0.25, unit: "kilograms" } },
        { name: "Lactose", amount: { value: 0.38, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Magnum",
          amount: { value: 12.5, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Sorachi Ace",
          amount: { value: 6.3, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: ["Oyster beignets", "Beef shin stew", "A Shakin' jesse"],
    brewers_tips:
      "There's a lot of speciality malt in the mash. Make sure you take the run off nice and steady – increase the flow too much and pull in the bed at your peril.",
    contributed_by: "Sasha <SashaMasondeCaires>",
  },
  {
    id: 4,
    name: "Pilsen Lager",
    tagline: "Unleash the Yeast Series.",
    first_brewed: "09/2013",
    description:
      "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
    image_url: "https://images.punkapi.com/v2/4.png",
    abv: 6.3,
    ibu: 55,
    target_fg: 1012,
    target_og: 1060,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 80,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: null }],
      fermentation: { temp: { value: 9, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Extra Pale", amount: { value: 4.58, unit: "kilograms" } },
        { name: "Caramalt", amount: { value: 0.25, unit: "kilograms" } },
        { name: "Dark Crystal", amount: { value: 0.06, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.25, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Centennial",
          amount: { value: 5, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Amarillo",
          amount: { value: 5, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Centennial",
          amount: { value: 10, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Amarillo",
          amount: { value: 10, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Centennial",
          amount: { value: 17.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Amarillo",
          amount: { value: 17.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 2007 - Pilsen Lager™",
    },
    food_pairing: [
      "Spicy crab cakes",
      "Spicy cucumber and carrot Thai salad",
      "Sweet filled dumplings",
    ],
    brewers_tips:
      "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
    contributed_by: "Ali Skinner <AliSkinner>",
  },
  {
    id: 30,
    name: "Dana - IPA Is Dead",
    tagline: "Single Hop India Pale Ale.",
    first_brewed: "02/2013",
    description:
      "Hailing from Slovenia, Dana was originally cross bred from the German Hallertau Magnum and native Slovenian varieties. Like any good faux noble hop should, it infuses a rustic, musty spiciness into a toasty beast of a malt base.",
    image_url: "https://images.punkapi.com/v2/30.png",
    abv: 6.7,
    ibu: 70,
    target_fg: 1015,
    target_og: 1066,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 77.3,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 75 }],
      fermentation: { temp: { value: 19, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Extra Pale", amount: { value: 5, unit: "kilograms" } },
        { name: "Caramalt", amount: { value: 0.31, unit: "kilograms" } },
        { name: "Dark Crystal", amount: { value: 0.06, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.31, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Dana",
          amount: { value: 2.5, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Dana",
          amount: { value: 25, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Dana",
          amount: { value: 37.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Dana",
          amount: { value: 125, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Spicy Asian-style noodles",
      "Smokey chipotle beef brisket tostada",
      "Sweet potato pie",
    ],
    brewers_tips:
      "Noble hops (and their offspring) have a fundamentally different profile to many other hops, down to their different oil fractions. Chill your hops to retain all of the spicy, delicate volatile hop oils!",
    contributed_by: "Matt Ball <GeordieMatt>",
  },
  {
    id: 31,
    name: "Nanny State",
    tagline: "Alcohol Free Hoppy Ale.",
    first_brewed: "08/2009",
    description:
      "Brewing a full flavoured craft beer at 0.5% is no easy task. Packed with loads of Centennial, Amarillo, Columbus, Cascade and Simcoe hops, dry hopped to the brink and back and sitting at 55 IBUs, Nanny State is a force to be reckoned with. With a backbone of 8 different specialty malts, Nanny State will tantalise your taste buds and leave you yearning for more.",
    image_url: "https://images.punkapi.com/v2/31.png",
    abv: 0.5,
    ibu: 55,
    target_fg: 1005,
    target_og: 1007,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 28.6,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 30 }],
      fermentation: { temp: { value: 19, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Munich", amount: { value: 0.13, unit: "kilograms" } },
        { name: "Caramalt", amount: { value: 0.19, unit: "kilograms" } },
        { name: "Crystal 150", amount: { value: 0.06, unit: "kilograms" } },
        { name: "Amber", amount: { value: 0.03, unit: "kilograms" } },
        { name: "Dark Crystal", amount: { value: 0.13, unit: "kilograms" } },
        { name: "Chocolate", amount: { value: 0.06, unit: "kilograms" } },
        { name: "Wheat", amount: { value: 0.06, unit: "kilograms" } },
        { name: "Rye", amount: { value: 0.13, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Amarillo",
          amount: { value: 6.3, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Simcoe",
          amount: { value: 5, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Centennial",
          amount: { value: 6.3, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Amarillo",
          amount: { value: 6.3, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Simcoe",
          amount: { value: 2.5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Centennial",
          amount: { value: 6.3, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Amarillo",
          amount: { value: 5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Simcoe",
          amount: { value: 5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Cascade",
          amount: { value: 12.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Ahtanum",
          amount: { value: 12.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Centennial",
          amount: { value: 50, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
        {
          name: "Cascade",
          amount: { value: 50, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
        {
          name: "Ahtanum",
          amount: { value: 25, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
        {
          name: "Simcoe",
          amount: { value: 25, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
        {
          name: "Columbus",
          amount: { value: 37.5, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: ["Earthy mushroom pasta"],
    brewers_tips:
      "Get hops in every stage of the brewing process - mash, run off boil and flame off. There's not too much malt body, so the more hops the better.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 6,
    name: "Electric India",
    tagline: "Vibrant Hoppy Saison.",
    first_brewed: "05/2013",
    description:
      "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
    image_url: "https://images.punkapi.com/v2/6.png",
    abv: 5.2,
    ibu: 38,
    target_fg: 1005,
    target_og: 1045,
    ebc: 15,
    srm: 7.5,
    ph: 4.4,
    attenuation_level: 88.9,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 75 }],
      fermentation: { temp: { value: 22, unit: "celsius" } },
      twist: "Honey: 62.5g at End (WP), Coriander Seeds: 8.5g at 45mins",
    },
    ingredients: {
      malt: [
        { name: "Extra Pale", amount: { value: 3.63, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.13, unit: "kilograms" } },
        { name: "Wheat", amount: { value: 0.25, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Amarillo",
          amount: { value: 2.5, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Nelson Sauvin",
          amount: { value: 5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Amarillo",
          amount: { value: 5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Peppercorns",
          amount: { value: 2.5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Nelson Sauvin",
          amount: { value: 20, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Amarillo",
          amount: { value: 12.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 3711 - French Saison™",
    },
    food_pairing: [
      "Mussels with a garlic and herb sauce",
      "Crab melt sandwich",
      "Shortbread cookies",
    ],
    brewers_tips:
      "Source some really good heather honey to get the right spicy esters in the beer.",
    contributed_by: "Sam Mason <samjbmason>",
  },
];
