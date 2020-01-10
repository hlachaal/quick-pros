export function getQuestions(name) {
  switch (name) {
    case "refrigerator":
      return [
        { q: "Is your refrigerator built-in?", a: ["yes", "no"] },
        {
          q: "What's the brand of the refrigerator?",
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

    case 'up to 31"' || '32" - 60"' || '61" - 80"' || 'over 81"':
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

    default:
      break
  }
}
