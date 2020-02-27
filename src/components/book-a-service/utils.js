export function getQuestions(name) {
  switch (name) {
    case "refrigerator":
      return [
        {
          q: "What's the brand of the refrigerator?",
          /* a: [
            "Samsung",
            "LG",
            "Whirlpool",
            "General Electric",
            "MAYTAG",
            "Frigidaire",
            "Other",
          ], */
          a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        { q: "Is your refrigerator built-in?", a: ["yes", "no"] },
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
          a: [
            "Samsung",
            "LG",
            "Whirlpool",
            "General Electric",
            "MAYTAG",
            "Frigidaire",
            "Other",
          ],
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
          a: [
            "Samsung",
            "LG",
            "Whirlpool",
            "General Electric",
            "MAYTAG",
            "Frigidaire",
            "Other",
          ],
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
          a: [
            "Samsung",
            "LG",
            "Whirlpool",
            "General Electric",
            "MAYTAG",
            "Frigidaire",
            "Other",
          ],
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
          a: [
            "Samsung",
            "LG",
            "Whirlpool",
            "General Electric",
            "MAYTAG",
            "Frigidaire",
            "Other",
          ],
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
          a: [
            "Samsung",
            "LG",
            "Whirlpool",
            "General Electric",
            "MAYTAG",
            "Frigidaire",
            "Other",
          ],
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
          a: [
            "Samsung",
            "LG",
            "Whirlpool",
            "General Electric",
            "MAYTAG",
            "Frigidaire",
            "Other",
          ],
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
          a: [
            "Samsung",
            "LG",
            "Whirlpool",
            "General Electric",
            "MAYTAG",
            "Frigidaire",
            "Other",
          ],
        },
        {
          q: "Select the issue",
          a: ["No power", "Other"],
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
