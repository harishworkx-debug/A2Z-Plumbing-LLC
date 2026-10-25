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
  },

  "water-heater-repair-vs-replacement-guide": {
    slug: "water-heater-repair-vs-replacement-guide",
    title: "Water Heater Repair vs. Replacement: A Homeowner's Decision Guide",
    metaDesc: "Should you repair or replace your failing water heater? Use our 50% rule, age breakdown, and component analysis to make an informed decision.",
    category: "Water Heaters",
    readTime: "6 min read",
    publishedDate: "2026-10-15",
    intro: "When your water heater acts up, choosing between an inexpensive repair and a full system replacement can feel daunting. Using straightforward industry benchmarks like the 50% rule and tank age can save you thousands of dollars.",
    sections: [
      {
        h2: "1. The 50% Rule for Plumbing Equipment",
        body: "A reliable rule of thumb among licensed plumbing professionals: if the repair quote exceeds 50% of the cost of installing a brand-new water heater—and the current unit is past half its anticipated lifespan—replacement is almost always the more economical financial choice."
      },
      {
        h2: "2. The Age Factor (Under 8 Years vs. 10+ Years)",
        body: "Traditional tank heaters operate under constant thermal stress and water pressure for 8 to 12 years. If your unit is under 6 or 7 years old, components like the thermocouple, heating element, or anode rod can typically be replaced affordably to gain years of additional service."
      },
      {
        h2: "3. Easily Repairable Components",
        body: "Problems with exterior fittings, faulty gas valves, electric thermostats, upper or lower heating coils, and dripping temperature-pressure (T&P) relief valves are standard mechanical repairs that do not necessitate a whole unit replacement."
      },
      {
        h2: "4. Fatal Failures Requiring Mandatory Replacement",
        body: "If moisture or active rust is seeping from the structural seam or the steel base of the tank, the inner vitreous glass lining has ruptured. No epoxy or patch can repair a compromised pressurized vessel; immediate replacement is mandatory to prevent structural flooding."
      }
    ],
    relatedServiceId: "water-heater-repair",
    faqs: [
      ["Is it worth repairing a 10-year-old water heater?", "Generally no. Even if a small component is repaired, the internal tank steel is near the end of its life, and secondary catastrophic leaks often follow within 12 to 18 months."],
      ["How much can a high-efficiency replacement save on energy bills?", "Modern heat pump (hybrid) or high-efficiency tankless water heaters can reduce residential water heating energy consumption by 25% to 50% compared to aging 10-year-old standard tanks."]
    ]
  },

  "what-causes-recurring-drain-clogs": {
    slug: "what-causes-recurring-drain-clogs",
    title: "What Causes Recurring Drain Clogs? (Beyond Surface Blockages)",
    metaDesc: "Tired of plunging the same slow drain? Discover the deep systemic causes of recurring plumbing clogs, from pipe belly to tree root intrusion.",
    category: "Drain Cleaning",
    readTime: "5 min read",
    publishedDate: "2026-10-12",
    intro: "If you find yourself plunging your shower, bathroom sink, or kitchen drain every few weeks, you are treating a symptom rather than the underlying cause. Persistent recurring clogs point to deeper issues inside the drainage system.",
    sections: [
      {
        h2: "1. Severe Mineral & Grease Crystallization on Pipe Walls",
        body: "Over years of use, cooking oils, soaps, and Solano County's hard mineral deposits congeal along the interior circumference of drain lines. Even if a plunger punch clears a tiny hole through the middle, the narrowed pipe quickly snags hair and food particles again."
      },
      {
        h2: "2. Tree Root Infiltration into Sewer Lateral Joints",
        body: "Older homes in Fairfield, Vallejo, and Vacaville often have vitrified clay or cast iron sewer lines. Microscopic moisture vapor escaping from pipe joints attracts thirsty tree roots. Roots penetrate the seam, growing into dense fibrous root masses that repeatedly trap waste."
      },
      {
        h2: "3. Pipe Belly (Sagging Section in Underground Lines)",
        body: "Ground settling or seismic shifting can cause underground sewer pipes to sag downward, creating a low spot called a 'belly'. Water and solids pool in the dip rather than flowing downstream with gravity, forming chronic recurring sludge dams."
      },
      {
        h2: "4. Blocked Plumbing Vent Stacks on the Roof",
        body: "Plumbing systems require airflow from rooftop vent pipes to equalize drainage pressure. If bird nests, leaves, or debris choke your vent stack, drains create negative suction, leading to gurgling sounds, slow flow, and recurring siphon clogs."
      }
    ],
    relatedServiceId: "drain-cleaning",
    faqs: [
      ["Why does chemical liquid not fix recurring clogs permanently?", "Liquid cleaners only burn a pencil-thin opening through the softest part of the clog, leaving 80% of the buildup on the pipe walls intact, which re-clogs within days."],
      ["What is the permanent solution for deep recurring clogs?", "A professional video camera sewer inspection followed by high-pressure hydro-jetting strips pipe walls clean back to their original diameter, removing both roots and hardened scale."]
    ]
  },

  "signs-of-a-leaking-water-line": {
    slug: "signs-of-a-leaking-water-line",
    title: "Signs of a Leaking Main Water Line (And How to Test It)",
    metaDesc: "Learn how to spot the early warning signs of an underground main water line leak and run a simple DIY meter test before foundation damage happens.",
    category: "Leak Detection",
    readTime: "6 min read",
    publishedDate: "2026-10-08",
    intro: "Your main water service line brings pressurized municipal water from the street meter into your home. A underground fracture in this line can waste thousands of gallons of water and undermine foundation footings if left unnoticed.",
    sections: [
      {
        h2: "1. Unexplained Drops in Whole-House Water Pressure",
        body: "If water pressure simultaneously drops across all indoor fixtures—showers, kitchen taps, and outdoor bibs—water is escaping underground before it ever reaches your household manifold."
      },
      {
        h2: "2. The Meter Dial Test (DIY Leak Verification)",
        body: "Ensure all indoor and outdoor faucets, ice makers, and irrigation zones are shut completely off. Walk to your water meter box at the street curb. If the small triangular or star-shaped flow indicator dial is spinning, water is actively leaking between the meter and your home."
      },
      {
        h2: "3. Spongy, Unusually Lush Green Patches in the Yard",
        body: "An underground supply line buried 2 to 3 feet deep will saturate the surrounding soil. Noticeable soggy patches, puddles on sunny days, or strips of grass that are dramatically greener than the rest of the lawn are classic signs of a cracked supply line."
      },
      {
        h2: "4. Hissing or Rumbling Sound Near the Main Shut-Off",
        body: "High-pressure water escaping a subterranean pipe creates a continuous acoustic hiss or rushing vibration that resonates through copper or PEX lines right near where the main line enters the foundation."
      }
    ],
    relatedServiceId: "leak-detection-repair",
    faqs: [
      ["Who is responsible for repairing a main water line leak?", "In California municipalities, the homeowner is responsible for all pipes spanning from the water meter connection on the property boundary into the house."],
      ["Can main water line leaks be repaired without digging up the entire lawn?", "Yes. Modern trenchless pipe pulling and pneumatic pipe bursting methods allow plumbers to replace supply lines with minimal excavation at two small access pits."]
    ]
  },

  "when-should-a-sewer-line-be-inspected": {
    slug: "when-should-a-sewer-line-be-inspected",
    title: "When Should You Schedule a Sewer Line Camera Inspection?",
    metaDesc: "Discover the critical times a sewer line camera inspection is essential, from pre-purchase home inspections to chronic multi-drain backups.",
    category: "Sewer Line Repair",
    readTime: "5 min read",
    publishedDate: "2026-10-04",
    intro: "Because your main sewer line is buried beneath your front yard, driveway, or concrete foundation, visual problems are impossible to see with the naked eye until sewage backs up. A high-definition sewer camera inspection removes the guesswork.",
    sections: [
      {
        h2: "1. Buying an Older Home (Pre-Purchase Inspection)",
        body: "Standard home inspectors do not inspect the interior of buried sewer pipes. A specialized sewer scope during the escrow period can reveal hidden root intrusion, collapsed clay tiles, or offset joints, potentially saving thousands in renegotiation."
      },
      {
        h2: "2. Multiple Fixtures Backing Up Simultaneously",
        body: "If flushing your toilet causes wastewater to gurgle up into your shower stall or bathtub drain, the obstruction is located in the main building sewer lateral rather than an individual secondary fixture line."
      },
      {
        h2: "3. Frequent Sewer Gas Odors Inside or Outside the Property",
        body: "A cracked or separated sewer pipe allows toxic hydrogen sulfide sewer gas to escape into your basement, crawlspace, or yard. A camera inspection pinpoints the exact fracture location."
      },
      {
        h2: "4. Large, Mature Trees Near the Sewer Easement",
        body: "If your front yard features mature oak, redwood, or eucalyptus trees within 15 feet of your underground sewer trench, scheduling a preventive camera inspection every 2 to 3 years ensures root hairline invasions are caught before line collapse."
      }
    ],
    relatedServiceId: "sewer-line-repair",
    faqs: [
      ["How does a plumber conduct a sewer camera inspection?", "A licensed plumber inserts a flexible fiberglass push rod equipped with a self-leveling, high-resolution waterproof camera and radio transmitter sonde into your main cleanout pipe, recording real-time footage."],
      ["How long does a sewer camera inspection take?", "A comprehensive lateral camera inspection typically takes between 45 to 90 minutes and includes a digital video recording for your records."]
    ]
  },

  "what-to-do-before-an-emergency-plumber-arrives": {
    slug: "what-to-do-before-an-emergency-plumber-arrives",
    title: "What to Do While Waiting for an Emergency Plumber",
    metaDesc: "Panicking over a burst pipe or sewage leak? Follow these 5 immediate safety and damage-mitigation steps while our emergency technician is on the way.",
    category: "Emergency Plumbing",
    readTime: "4 min read",
    publishedDate: "2026-10-01",
    intro: "When water is gushing into your home or a sewer line is backing up, the 20 to 45 minutes between calling the plumber and their arrival are critical. Taking immediate defensive action can prevent thousands of dollars in drywall, flooring, and mold damage.",
    sections: [
      {
        h2: "1. Immediately Shut Off the Main Water Valve",
        body: "Locate your property's main water shutoff valve immediately—typically found in your garage, basement, ground-level exterior wall, or in the street meter box. Turn the gate valve clockwise or pull the quarter-turn ball valve lever perpendicular to the pipe."
      },
      {
        h2: "2. Relieve Residual Pipe Pressure",
        body: "After closing the main shutoff, open lowest-level outdoor garden hose bibs and indoor sink faucets. This drains residual water from your home's vertical plumbing stack outdoors rather than leaking through the fracture inside your home."
      },
      {
        h2: "3. De-energize Water Heaters and Electrical Circuits",
        body: "If water is flooding near electrical outlets or subpanels, do not step in the water. Shut off power at the main electrical breaker if safe. If you have shut off the water supply, turn off the breaker or gas supply to your water heater to prevent burnout."
      },
      {
        h2: "4. Photograph and Document the Damage for Insurance",
        body: "Before clearing soaked carpets or setting down towels, take clear digital photos and video footage of the active leak, water levels, and damaged property. Your homeowner's insurance adjuster will require timestamped proof for claims."
      }
    ],
    relatedServiceId: "emergency-plumber",
    faqs: [
      ["What tools should I keep on hand for plumbing emergencies?", "Every homeowner should own a high-quality water meter curb key, an adjustable pipe wrench, plumber's tape, and clearly know the location of their main shut-off valve."],
      ["Will homeowner's insurance cover sudden plumbing water damage?", "Most standard policies cover sudden and accidental water damage (such as a burst pipe), but exclude gradual long-term leaks or neglected maintenance."]
    ]
  }
};
