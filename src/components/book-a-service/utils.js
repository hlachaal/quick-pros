import frigidaire from "../../images/brands/frigidaire.svg"
import generalElectric from "../../images/brands/general-electric.svg"
import lg from "../../images/brands/lg.svg"
import maytag from "../../images/brands/maytag.svg"
import whirlpool from "../../images/brands/whirlpool.svg"
import samsung from "../../images/brands/samsung.svg"

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

export function getQuestions(name) {
  switch (name) {
    case "refrigerator":
      return [
        {
          q: "What's the brand of the refrigerator?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
        { q: "Is your refrigerator built-in?", a: ["Yes", "No"] },
        {
          q: "Select the issue",
          a: [
            "Not cooling",
            "Ice maker not working",
            "Leaking",
            "Noisy",
            "Other",
          ],
        },
        {
          q: "Select the issue",
          a: [
            "Not cooling",
            "Ice maker not working",
            "Leaking",
            "Noisy",
            "Other",
          ],
        },
      ]

    case "dryer":
      return [
        {
          q: "Is your dryer gas or electric?",
          a: ["Electric", "Gas", "Not Sure"],
        },
        {
          q: "How are your dryer and washer placed?",
          a: ["Stacked", "Side-by-side"],
        },
        {
          q: "What's the brand of the dryer?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
        {
          q: "Select the issue",
          a: [
            "Not Heating",
            "Burning Smell",
            "Drum issue",
            "No power",
            "Other",
          ],
        },
      ]

    case "oven":
      return [
        {
          q: "What's the brand of the oven?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
        {
          q: "Select the issue",
          a: ["Not Heating", "No power", "Other"],
        },
      ]

    case "washer":
      return [
        {
          q: "How are your dryer and washer placed?",
          a: ["Stacked", "Side-by-side"],
        },
        {
          q: "What's the brand of the washer?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
        {
          q: "Select the issue",
          a: [
            "Leaking",
            "Odor",
            "Not draining",
            "Drum issue",
            "No power",
            "Other",
          ],
        },
      ]

    case "dishwasher":
      return [
        {
          q: "What's the brand of the dishwasher?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
        {
          q: "Select the issue",
          a: ["Leaking", "Odor", "Not draining", "No power", "Other"],
        },
      ]

    case "cooktop":
      return [
        {
          q: "What's the brand of the cooktop?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
        {
          q: "Select the issue",
          a: ["No power", "Other"],
        },
      ]

    case "freezer":
      return [
        {
          q: "What's the brand of the freezer?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
        {
          q: "Select the issue",
          a: ["No power", "Other"],
        },
      ]

    case "microwave":
      return [
        {
          q: "What's the brand of the microwave?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
        {
          q: "Select the issue",
          a: ["No power", "Other"],
        },
      ]

    case "range hood":
      return [
        {
          q: "What's the brand of the range hood?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
      ]

    case "trash compactor":
      return [
        {
          q: "What's the brand of the trash compactor?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
      ]

    case "washer dryer combo":
      return [
        {
          q: "What's the brand of the washer dryer?",
          // prettier-ignore
          a: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
        },
        {
          q: "Select the issue",
          a: [
            "Leaking",
            "Odor",
            "Not draining",
            "Not drying",
            "Drum issue",
            "No power",
            "Other",
          ],
        },
      ]

    case 'up to 31"':
      return [
        {
          q: "Select bracket type",
          a: ["Fixed", "Tilting", "Full motion", "I already have a bracket"],
        },
        {
          q: "Where the TV will be mounted?",
          a: ["On the wall", "Above the fireplace", "Other"],
        },
        {
          q: "Select your wall type",
          a: ["Drywall or wood", "Brick", "Concrete", "Other"],
        },
      ]

    case '32" - 60"':
      return [
        {
          q: "Select bracket type",
          a: ["Fixed", "Tilting", "Full motion", "I already have a bracket"],
        },
        {
          q: "Where the TV will be mounted?",
          a: ["On the wall", "Above the fireplace", "Other"],
        },
        {
          q: "Select your wall type",
          a: ["Drywall or wood", "Brick", "Concrete", "Other"],
        },
      ]
    case 'over 81"':
      return [
        {
          q: "Select bracket type",
          a: ["Fixed", "Tilting", "Full motion", "I already have a bracket"],
        },
        {
          q: "Where the TV will be mounted?",
          a: ["On the wall", "Above the fireplace", "Other"],
        },
        {
          q: "Select your wall type",
          a: ["Drywall or wood", "Brick", "Concrete", "Other"],
        },
      ]
    case '61" - 80"':
      return [
        {
          q: "Select bracket type",
          a: ["Fixed", "Tilting", "Full motion", "I already have a bracket"],
        },
        {
          q: "Where the TV will be mounted?",
          a: ["On the wall", "Above the fireplace", "Other"],
        },
        {
          q: "Select your wall type",
          a: ["Drywall or wood", "Brick", "Concrete", "Other"],
        },
      ]

    case "appliance install":
      return [
        {
          q: "What type of appliance do you need to install/replace?",
          a: [
            "Cooktop installation",
            "Dishwasher replacement",
            "Dryer installation / replacement",
            "Garbage disposal installation",
            "Over-the-range microwave oven installation",
            "Refrigerator installation",
            "Stove replacement",
            "Wall oven replacement",
            "Washing machine installation / replacement",
          ],
        },
        {
          q: "Is this a first-time installation or replacement?",
          a: ["First - time", "Replacement"],
        },
        {
          q: "What is the fuel source for the cooktop?",
          a: [
            "Electric - hard wired",
            "Electric - plug",
            "Natural gas",
            "Propane gas",
          ],
        },
        {
          q: "Is wiring or gas available at the installation location?",
          a: ["Existing source", "New source"],
        },
      ]

    case "drywall repair":
      return [
        {
          q: "How many areas of drywall are damaged?",
          a: [
            {
              option: "Number of minor areas",
              description: "1 - 6 inches wide",
            },
            {
              option: "Number of major areas",
              description: "7 - 12 inches wide",
            },
          ],
        },
        {
          q: "Where do you need the repair?",
          a: ["Wall", "Ceiling", "Both (Wall & Ceiling)"],
        },
        {
          q: "Will the handyman need a ladder?",
          a: ["No", "Yes - step ladder", "Yes - extension ladder"],
        },
      ]

    case "electrical services":
      return [
        {
          q: "Tell us about the job",
          a: [
            {
              option: "Light switch replacement",
            },
            {
              option: "Outlet replacement",
            },
            {
              option: "Electrical outlets installation",
            },
            {
              option: "USB wall outlet installation",
            },
            {
              option: "Device installation",
              description: "Heaters, Bathroom Fan, Heated toilet seats",
            },
          ],
        },
        {
          q: "Select your wall type",
          a: ["Drywall or wood", "Brick", "Concrete", "Other"],
        },
      ]
    case "fan install":
      return [
        {
          q: "How many fans will be installed?",
          a: [
            {
              option: "Ceiling fans",
            },
            {
              option: "Bathroom fans",
            },
          ],
        },
        {
          q: "How high is your ceiling?",
          a: ["Under 10 ft.", "10 to 14 ft.", "Above 14 ft."],
        },
        {
          q: "Will the handyman need a ladder?",
          a: ["No", "Yes - step ladder", "Yes - extension ladder"],
        },
      ]

    case "furniture assembly":
      return [
        {
          q: "How many pieces of furniture will be assembled?",
          a: [
            {
              option: "Small furniture",
              description: "Chairs stools, small end tables, etc.",
            },
            {
              option: "Medium furniture",
              description: "Tables, one to two drawer chests, desks, etc.",
            },
            {
              option: "Large furniture",
              description: "Beds, Dressers, shelving units, etc.",
            },
          ],
        },
        {
          q: "What type of furniture do you need assembled?",
          a: [
            "IKEA furniture items only",
            "Other furniture items (non-IKEA)",
            "Both IKEA and non-IKEA furniture",
          ],
        },
      ]

    case "gutter cleaning":
      return [
        {
          q: "How big is your home?",
          a: [
            "0–1,000 sq ft",
            "1,001–2,000 sq ft",
            "2,001–3,000 sq ft",
            "3,001–4,000 sq ft",
            "4,001–5,000 sq ft",
          ],
        },
        {
          q: "How many floor is your home?",
          a: ["1 story", "2 story", "3 story"],
        },
      ]

    case "hardware installation":
      return [
        {
          q: "How many items do you want installed?",
          a: [
            {
              option: "Cabinet latches, knobs, and hinges",
            },
            {
              option: "Window locks",
            },
            {
              option: "Door knobs and handles",
            },
          ],
        },
        {
          q: "Will the handyman need a ladder?",
          a: ["No", "Yes - step ladder", "Yes - extension ladder"],
        },
      ]

    case "interior painting":
      return [
        {
          q: "Would you like us to provide the paint?",
          a: ["Yes", "No, I already have it"],
        },
        {
          q: "How many rooms are you painting?",
          a: ["Just touch ups", "1 room", "2 rooms"],
        },
      ]

    case "light install":
      return [
        {
          q: "Tell us about the job",
          a: [
            {
              option: "Light Fixture Replacement",
            },
            {
              option: "Exterior Light Fixture Replacement",
            },
            {
              option: "Chandelier Replacement",
            },
          ],
        },
        {
          q: "How high is your ceiling?",
          a: ["Under 10 ft.", "10 to 14 ft.", "Above 14 ft."],
        },
      ]

    case "tv mounting":
      return [
        {
          q: "What size is your TV?",
          a: ['Up to 31"', '32" - 60"', '61" - 80"', 'Over 81"'],
        },
        {
          q: "Select bracket type",
          a: ["Fixed", "Tilting", "Full motion"],
        },
        {
          q: "Would you like us to provide the bracket?",
          a: ["Yes", "No, I already have it"],
        },
        {
          q: "Where are you looking to have the TV mounted?",
          a: ["On the wall", "Above a fireplace"],
        },
        {
          q: "Select your wall type",
          a: ["Drywall or wood", "Brick", "Concrete", "Other"],
        },
      ]
    case "wall hanging":
      return [
        {
          q: "How many items need hanging?",
          a: [
            {
              option: "Small items",
              description: "Items smaller than 3ft by 3ft (1m by 1m)",
            },
            {
              option: "Large items",
              description: "Items larger than 3ft by 3ft (1m by 1m)",
            },
          ],
        },
        {
          q: "Will the handyman need a ladder?",
          a: ["No", "Yes - step ladder", "Yes - extension ladder"],
        },
      ]

    case "window treatment installation":
      return [
        {
          q: "Tell us about the job",
          a: [
            {
              option: "Blinds",
            },
            {
              option: "Curtains",
            },
          ],
        },
        {
          q: "Is this a first-time installation or replacement?",
          a: ["First-time", "Replacement"],
        },
        {
          q: "Will the handyman need a ladder?",
          a: ["No", "Yes - step ladder", "Yes - extension ladder"],
        },
      ]

    case "other handyman services":
      return [
        {
          q: "How many hours of service do you estimate you will need?",
          a: [
            {
              option: "Handyman hours",
              description: "Please estimate the number of hours you will need",
            },
          ],
        },
        {
          q: "Will the services be completed inside or outside your home?",
          a: ["Inside only", "Outside only", "Inside and outside"],
        },
        {
          q: "Will the handyman need a ladder?",
          a: ["No", "Yes - step ladder", "Yes - extension ladder"],
        },
      ]

    default:
      break
  }
}

const BRANDS = [
  {
    name: "Samsung",
    logo: samsung,
  },
  {
    name: "LG",
    logo: lg,
  },
  {
    name: "Whirlpool",
    logo: whirlpool,
  },
  {
    name: "General Electric",
    logo: generalElectric,
  },
  {
    name: "MAYTAG",
    logo: maytag,
  },
  {
    name: "Frigidaire",
    logo: frigidaire,
  },
  "Emerson",
  "Estate",
  "Fisher-Paykel",
  "Galaxy",
  "Gallery",
  "Gibson",
  "Gladiator",
  "Goldstar",
  "HEC",
  "Hair",
  "Holiday",
  "Hotpoint",
  "Ikea",
  "Imperial",
  "Inglis",
  "Insinkerator",
  "Jenn Air",
  "Kelvinator",
  "Kenmore",
  "Kirkland",
  "KitchenAid",
  "Liberty",
  "Magic Chef",
  "Modern Maid",
  "Monogram",
  "Montgomery Wards",
  "Norge",
  "Panasonic",
  "Profile",
  "Roper",
  "Sanyo",
  "Sears",
  "Sharp",
  "Signature",
  "Speed Queen",
  "Tappan",
  "Vinotemp",
  "WCI",
  "WC Woods",
  "White Westinghouse",
  "Zoneline",
  "Other / Don't know",
]

export function getBrand(number) {
  return BRANDS[number]
}
