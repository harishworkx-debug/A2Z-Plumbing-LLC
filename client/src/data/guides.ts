export interface GuideData {
  slug: string;
  title: string;
  metaDesc: string;
  category: string;
  readTime: string;
  publishedDate: string;
  intro: string;
  sections: { h2: string; body: string }[];
  relatedServiceId: string;
  faqs: [string, string][];
}

export const guidesData: Record<string, GuideData> = {
  "water-heater-not-producing-hot-water": {
    slug: "water-heater-not-producing-hot-water",
    title: "Why Is My Water Heater Not Producing Hot Water?",
    metaDesc: "Discover the top reasons why your water heater isn't producing hot water and learn practical troubleshooting steps for gas and electric units.",
    category: "Water Heaters",
    readTime: "5 min read",
    publishedDate: "2026-10-01",
    intro: "Waking up to a freezing cold shower is never a pleasant experience. If your water heater has stopped producing hot water, understanding the cause can help you decide whether it requires a quick reset or professional repair.",
    sections: [
      {
        h2: "1. Extinguished Pilot Light (Gas Water Heaters)",
        body: "For gas water heaters, an extinguished pilot light is one of the most common causes of cold water. Drafts, thermocouple failure, or gas supply interruptions can cause the flame to go out. Check the viewing window at the bottom of the unit to confirm if the pilot is lit."
      },
      {
        h2: "2. Tripped Circuit Breaker or Blown Heating Element (Electric Units)",
        body: "Electric water heaters rely on upper and lower heating elements powered by a dedicated 240-volt circuit. Check your home's breaker panel to ensure the switch hasn't tripped. If the breaker is fine, a multimeter test can determine if an element has burned out."
      },
      {
        h2: "3. Thermostat Temperature Setting or Calibration Issues",
        body: "If water is lukewarm rather than ice cold, check the thermostat setting on the front of the tank. The U.S. Department of Energy recommends setting water heater thermostats to 120°F (49°C) for ideal energy efficiency and safety."
      },
      {
        h2: "4. Heavy Sediment Accumulation inside the Tank",
        body: "Hard water in Solano and Napa counties causes mineral sediment (calcium and magnesium) to settle at the bottom of the tank over time. This layer acts as an insulator between the burner and the water, severely reducing heating efficiency."
      }
    ],
    relatedServiceId: "water-heater-repair",
    faqs: [
      ["Can I relight my gas water heater pilot light myself?", "Yes, most modern gas water heaters include step-by-step relighting instructions printed on the unit door. However, if the pilot flame refuses to stay lit after releasing the knob, the thermocouple likely needs replacement by a plumber."],
      ["How often should a water heater be flushed?", "We recommend flushing your water heater tank at least once a year to remove mineral sediment and extend the operational lifespan of the unit."]
    ]
  },

  "signs-of-hidden-water-leak": {
    slug: "signs-of-hidden-water-leak",
    title: "7 Signs of a Hidden Water Leak in Your Home",
    metaDesc: "Learn how to spot hidden plumbing leaks behind walls, under floors, and beneath slabs before severe water damage occurs.",
    category: "Leak Detection",
    readTime: "6 min read",
    publishedDate: "2026-09-25",
    intro: "Not all plumbing leaks produce dramatic puddles under the sink. Some of the most destructive leaks occur silently inside drywalls, beneath concrete slabs, or within subflooring.",
    sections: [
      {
        h2: "1. An Unexplained Spike in Your Monthly Water Bill",
        body: "If your household water consumption habits haven't changed but your monthly utility bill has jumped unexpectedly, a hidden continuous leak is often the culprit."
      },
      {
        h2: "2. The Sound of Running Water When All Fixtures Are Off",
        body: "Listen carefully when your home is quiet. If you hear a faint continuous hiss or trickling sound behind walls or under floors while no faucets, showers, or washing machines are running, investigate immediately."
      },
      {
        h2: "3. Soft, Discolored, or Bulging Drywall & Ceilings",
        body: "Water traveling down supply lines will gradually saturate surrounding drywall, producing dark ring stains, peeling paint, or soft sagging plaster."
      },
      {
        h2: "4. Unexplained Warm Spots on Hardwood or Tile Flooring",
        body: "A warm area on your floor can indicate a hot water slab leak running underneath your concrete foundation slab."
      },
      {
        h2: "5. Musty Odors and Persistent Mold Growth",
        body: "Hidden moisture creates an ideal environment for mold and mildew colonies behind baseboards and under cabinetry."
      }
    ],
    relatedServiceId: "leak-detection-repair",
    faqs: [
      ["How do plumbers pinpoint hidden leaks without tearing down walls?", "Professional plumbers use non-invasive diagnostic tools, including acoustic line locators, digital pressure gauge testing, and thermal imaging cameras to locate leaks precisely."],
      ["What is the first thing I should do if I suspect a slab leak?", "Locate your main water shut-off valve, turn off water to the property, and call a licensed plumber for acoustic pressure testing."]
    ]
  },

  "how-to-unclog-drain-safely": {
    slug: "how-to-unclog-drain-safely",
    title: "How to Unclog a Drain Safely Without Chemical Cleaners",
    metaDesc: "Discover safe, chemical-free methods to clear clogged kitchen and bathroom drains without damaging your home's pipes.",
    category: "Drain Cleaning",
    readTime: "4 min read",
    publishedDate: "2026-09-18",
    intro: "Reaching for liquid chemical drain cleaners might seem like a quick fix for a slow drain, but harsh chemical formulas containing sodium hydroxide or sulfuric acid can corrode pipes and harm the environment.",
    sections: [
      {
        h2: "1. Boiling Water Rinse (For Grease Buildup)",
        body: "For kitchen sinks sluggish from soap residue or light grease, pour a full kettle of boiling water directly down the drain in 2-3 stages, allowing hot water to work for several seconds between pours."
      },
      {
        h2: "2. Baking Soda and Vinegar Reaction",
        body: "Pour 1/2 cup of baking soda into the drain, followed by 1 cup of white distilled vinegar. Cover the drain plug and let the natural foaming action break down organic debris for 15 minutes before flushing with hot water."
      },
      {
        h2: "3. Manual Drain Snake or Hair Zip Tool",
        body: "Bathroom sink and shower clogs are frequently caused by hair binding with soap scum near the pop-up stopper. A inexpensive plastic zip tool can extract hair clogs manually in under two minutes."
      },
      {
        h2: "4. Standard Cup Plunger Technique",
        body: "Ensure a tight seal over the drain opening, submerge the plunger cup in 2 inches of standing water, and push vigorously up and down for 20 seconds to dislodge blockages mechanically."
      }
    ],
    relatedServiceId: "drain-cleaning",
    faqs: [
      ["Why do chemical drain cleaners damage plumbing pipes?", "Chemical drain cleaners generate intense exothermic heat while reacting with organic matter. This extreme heat can warp PVC pipes, weaken glue joints, and pit older metal piping."],
      ["When does a clogged drain require professional drain snaking?", "If multiple fixtures in your home are backing up simultaneously or if water backs up into the bathtub when flushing the toilet, the blockage is in the main sewer line and requires professional augering."]
    ]
  },

  "when-to-replace-water-heater": {
    slug: "when-to-replace-water-heater",
    title: "When Should You Replace Your Water Heater?",
    metaDesc: "Learn key indicators that signal it is time to replace your traditional or tankless water heater before catastrophic tank failure.",
    category: "Water Heaters",
    readTime: "5 min read",
    publishedDate: "2026-09-10",
    intro: "Water heaters work continuously behind the scenes to supply your home with hot water. Recognizing the signs of an aging or failing unit allows you to plan a replacement calmly before an emergency leak occurs.",
    sections: [
      {
        h2: "1. Unit Age Exceeds 10 to 12 Years",
        body: "Standard tank water heaters have an average operational lifespan of 8 to 12 years. If your unit's serial number indicates it is over a decade old, planning a replacement is recommended."
      },
      {
        h2: "2. Rusty or Discolored Hot Water",
        body: "If rusty reddish water flows exclusively from your hot water taps (while cold water runs completely clear), internal corrosion is eating away at the tank's protective lining."
      },
      {
        h2: "3. Rumbling, Popping, or Grinding Sounds",
        body: "Loud popping sounds during heating cycles indicate thick mineral sediment hardened at the bottom of the tank. As sediment heats, trapped water pockets boil and burst beneath the crust."
      },
      {
        h2: "4. Moisture or Standing Water Around the Base",
        body: "Puddles forming directly beneath the water heater body signal a fracture in the inner tank wall. Inner tank leaks cannot be repaired and require immediate unit replacement."
      }
    ],
    relatedServiceId: "water-heater-installation",
    faqs: [
      ["What is the difference between tank and tankless water heaters?", "Tank water heaters heat and store 40-50 gallons continuously, while tankless units heat water on-demand as it flows through high-powered heating exchangers, offering endless hot water and higher energy efficiency."],
      ["How long does a new water heater installation take?", "A standard tank-for-tank replacement typically takes between 2 to 4 hours, whereas upgrading to a tankless system can take 6 to 8 hours depending on gas line and venting modifications."]
    ]
  }
};
