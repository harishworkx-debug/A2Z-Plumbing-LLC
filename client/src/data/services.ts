export interface ServiceData {
  slug: string;
  name: string;
  title: string; 
  description: string;
  image: string;
  intro: string;
  signsH2: string;
  signs: string[];
  commonH2: string;
  common: string[];
  servicesH2: string;
  services: string[];
  emergencyH2: string;
  emergencyP: string;
  faqs: [string, string][];
}

export const servicesData: Record<string, ServiceData> = {
  "plumber": {
    slug: "plumber",
    name: "General Plumber",
    title: "Plumber in {city}, CA",
    description: "A2Z Plumbing LLC provides professional plumbing services in {city}, CA, including plumbing repairs, drain services, water heater services and more.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=85",
    intro: "A2Z Plumbing LLC provides practical, responsive plumbing service for {city} homes and businesses. From a small fixture issue to an urgent leak, call for a clear next step.",
    signsH2: "Signs You Need a Plumber in {city}",
    signs: [
      "Unexplained increases in your monthly water bill",
      "Low water pressure across multiple fixtures",
      "Slow draining sinks or frequent backups",
      "Damp spots on ceilings, walls, or under cabinets"
    ],
    commonH2: "Common Plumbing Problems We Fix",
    common: [
      "Leaking pipes and loose connections",
      "Running toilets and broken flush mechanisms",
      "Clogged drains and sewer line issues",
      "Water heater failures or inconsistent temperatures"
    ],
    servicesH2: "Our {city} Plumbing Services",
    services: [
      "Comprehensive diagnostic inspections",
      "Fixture repair and replacement",
      "Pipe repair, rerouting, and repiping",
      "Preventative plumbing maintenance"
    ],
    emergencyH2: "Emergency Plumber in {city}",
    emergencyP: "Burst pipes, active leaks, and sudden loss of water need a calm, direct response. We prioritize urgent plumbing calls in {city} to limit water damage and restore your system quickly.",
    faqs: [
      ["How much does a plumber cost in {city}?", "Pricing depends on the specific repair. We assess the issue first and provide a clear, upfront explanation of the repair path and costs before beginning work."],
      ["How quickly can you arrive in {city}?", "We are based locally and prioritize emergencies. We can often provide same-day service for urgent plumbing issues in {city}."],
      ["Do you guarantee your plumbing work?", "Yes, A2Z Plumbing LLC stands by the quality of our repairs with professional warranties. We want you to feel confident in the work we do in your home."]
    ]
  },
  "residential-plumbing": {
    slug: "residential-plumbing",
    name: "Residential Plumbing",
    title: "Residential Plumbing in {city}, CA",
    description: "Professional residential plumbing services in {city}. We handle everyday plumbing repairs, fixture upgrades, and whole-home plumbing solutions.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    intro: "Comfortable homes depend on plumbing that works quietly and reliably. A2Z Plumbing helps {city} homeowners with repairs, upgrades, and the everyday issues that interrupt a normal day.",
    signsH2: "Signs Your {city} Home Needs Plumbing Service",
    signs: [
      "Constant dripping from faucets or showerheads",
      "Gurgling sounds from drains when flushing toilets",
      "Inconsistent hot water or sudden temperature drops",
      "Visible rust or corrosion on exposed pipes"
    ],
    commonH2: "Common Residential Plumbing Problems",
    common: [
      "Worn out fixture cartridges causing drips",
      "Hair and soap scum buildup in bathroom drains",
      "Failed toilet flappers leading to constant running",
      "Sediment buildup in aging water heaters"
    ],
    servicesH2: "Our Residential Plumbing Services",
    services: [
      "Kitchen and bathroom fixture repair",
      "Toilet troubleshooting and rebuilding",
      "Water pressure adjustments and PRV installation",
      "Whole-home plumbing safety inspections"
    ],
    emergencyH2: "Urgent Residential Plumbing in {city}",
    emergencyP: "If a plumbing issue threatens your {city} home's interior, shut off the main water valve and call us immediately. We respond quickly to prevent extensive property damage.",
    faqs: [
      ["Do you handle plumbing for older homes in {city}?", "Yes, we regularly repair and upgrade plumbing in older homes, dealing with aging galvanized pipes, cast iron drains, and outdated fixtures."],
      ["How do I prevent my drains from clogging?", "Avoid putting grease down the kitchen sink and use hair catchers in your showers. We can also provide professional drain cleaning if buildup is already severe."],
      ["Can you fix a constantly running toilet?", "Yes, this is a common and usually quick repair that saves significant water. We stock the necessary parts to rebuild most residential toilets."]
    ]
  },
  "emergency-plumber": {
    slug: "emergency-plumber",
    name: "Emergency Plumber",
    title: "Emergency Plumber in {city}, CA",
    description: "Need an emergency plumber in {city}? Call A2Z Plumbing LLC for rapid response to burst pipes, severe leaks, and major backups.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=85",
    intro: "Burst pipes, active leaks, overflowing fixtures, and sudden loss of water need a calm, direct response. Call A2Z Plumbing in {city} and describe what you are seeing.",
    signsH2: "When to Call an Emergency Plumber in {city}",
    signs: [
      "Water is actively pouring or spraying from a pipe",
      "Sewage is backing up into your bathtubs or showers",
      "You have no running water anywhere in the house",
      "Your water heater has ruptured and is flooding the floor"
    ],
    commonH2: "Common Plumbing Emergencies",
    common: [
      "Frozen or burst water supply lines",
      "Main sewer line blockages",
      "Failed washing machine hoses",
      "Major slab leaks causing foundation issues"
    ],
    servicesH2: "Our Emergency Plumbing Services",
    services: [
      "Immediate water shut-off and containment",
      "Rapid leak detection and repair",
      "Emergency drain and sewer clearing",
      "Water heater isolation and replacement"
    ],
    emergencyH2: "24/7 Emergency Support in {city}",
    emergencyP: "We know that emergencies don't wait for business hours. We offer direct phone support and rapid dispatch to address urgent plumbing crises in {city}.",
    faqs: [
      ["What is considered a plumbing emergency?", "Any situation where water is actively damaging your property, sewage is backing up, or you are completely without water or gas is an emergency."],
      ["What should I do while waiting for the plumber?", "Locate and turn off your main water shut-off valve to stop the flow of water. Clear the area of valuables and avoid touching any wet electrical outlets."],
      ["Do you charge extra for emergency calls in {city}?", "Emergency dispatch may have different rates depending on the time of day, but we will always communicate the dispatch fee clearly on the phone before we arrive."]
    ]
  },
  "plumbing-repair": {
    slug: "plumbing-repair",
    name: "Plumbing Repair",
    title: "Plumbing Repair in {city}, CA",
    description: "Expert plumbing repair in {city}. We fix leaks, noisy pipes, and broken fixtures with practical, long-lasting solutions.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85",
    intro: "When a plumbing system is noisy, slow, leaking, or simply not working as it should, the right repair begins with a useful diagnosis. A2Z Plumbing serves {city} with practical repair support.",
    signsH2: "Signs You Need Plumbing Repair in {city}",
    signs: [
      "Loud banging or rattling when turning off faucets (water hammer)",
      "Persistent dripping sounds inside walls",
      "Fixtures that are loose or difficult to turn",
      "Low hot water pressure compared to cold"
    ],
    commonH2: "Common Plumbing Repairs We Handle",
    common: [
      "Repairing pinhole leaks in copper pipes",
      "Replacing faulty pressure reducing valves (PRV)",
      "Fixing loose or leaking p-traps under sinks",
      "Repairing damaged outdoor hose bibs"
    ],
    servicesH2: "Our Plumbing Repair Services",
    services: [
      "Thorough system diagnostics",
      "Precision leak repair",
      "Valve replacement and installation",
      "Code-compliant pipe repairs"
    ],
    emergencyH2: "Urgent Plumbing Repair in {city}",
    emergencyP: "If a minor issue suddenly escalates into a major leak, our {city} repair team is ready to respond. We focus on stabilizing the situation and performing a lasting repair.",
    faqs: [
      ["How long does a typical plumbing repair take?", "Most standard repairs, like fixing a leak under a sink or replacing a valve, can be completed in 1-2 hours once we are on-site in {city}."],
      ["Do you use high-quality repair parts?", "Yes, we use professional-grade materials and parts to ensure that our repairs in your {city} home last for years, not just weeks."],
      ["Can I ignore a small drip?", "We do not recommend ignoring leaks. Even a small drip can waste hundreds of gallons of water over time and eventually cause severe water damage to cabinetry or framing."]
    ]
  },
  "drain-cleaning": {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    title: "Drain Cleaning in {city}, CA",
    description: "Professional drain cleaning services in {city}. We clear stubborn clogs and slow drains to get your plumbing moving again.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    intro: "Slow sinks, backed-up showers, and recurring clogs are signs that a drain needs more than another quick rinse. A2Z Plumbing helps {city} customers get to the cause.",
    signsH2: "Signs You Need Drain Cleaning in {city}",
    signs: [
      "Water pooling around your feet in the shower",
      "Sinks that take several minutes to empty",
      "Foul, sewage-like odors coming from the drain",
      "Multiple fixtures draining slowly at the same time"
    ],
    commonH2: "Common Causes of Clogged Drains",
    common: [
      "Accumulation of hair and soap in bathroom drains",
      "Grease, fat, and food particles in kitchen sinks",
      "Tree root intrusion in the main sewer line",
      "Flushing non-degradable items like wipes"
    ],
    servicesH2: "Our {city} Drain Cleaning Services",
    services: [
      "Professional drain snaking and augering",
      "Kitchen and bathroom sink clearing",
      "Tub and shower drain unblocking",
      "Main line clog removal"
    ],
    emergencyH2: "Emergency Drain Service in {city}",
    emergencyP: "A completely blocked drain can render your {city} home unusable. If sewage is backing up into your fixtures, call us for emergency drain clearing to restore sanitation and function.",
    faqs: [
      ["Are chemical drain cleaners safe to use?", "We strongly advise against chemical drain cleaners. They rarely solve the root issue and the harsh chemicals can severely damage your pipes and create hazards for our plumbers."],
      ["Why does my drain keep clogging?", "Recurring clogs usually mean there is a deeper blockage, a belly in the pipe, or tree roots. We can snake the drain to properly clear the obstruction."],
      ["How much does drain cleaning cost in {city}?", "The cost depends on the location and severity of the clog. Clearing a simple sink p-trap is less involved than augering a main sewer line. We provide clear estimates upon assessing the drain."]
    ]
  },
  "leak-detection-repair": {
    slug: "leak-detection-repair",
    name: "Leak Detection & Repair",
    title: "Leak Detection & Repair in {city}, CA",
    description: "Expert leak detection and repair in {city}. We find and fix hidden leaks in walls, ceilings, and under slabs to protect your home.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1400&q=85",
    intro: "A damp cabinet, unexplained water bill, ceiling mark, or hissing sound can all point to a leak. A2Z Plumbing helps {city} homeowners narrow down the source and the next repair step.",
    signsH2: "Signs You Have a Hidden Leak in {city}",
    signs: [
      "A sudden, unexplained spike in your water bill",
      "The sound of running water when all fixtures are off",
      "Warm spots on your floor (potential slab leak)",
      "Musty odors or visible mold growth on walls"
    ],
    commonH2: "Common Sources of Leaks",
    common: [
      "Failing connections at the water heater",
      "Deteriorating supply lines behind drywall",
      "Leaking shower pans or bathtub drains",
      "Corroded or damaged underground main water lines"
    ],
    servicesH2: "Our Leak Detection Services",
    services: [
      "Non-invasive leak tracing",
      "Meter testing and pressure checks",
      "Pinpointing slab and wall leaks",
      "Direct and permanent pipe repair"
    ],
    emergencyH2: "Emergency Leak Repair in {city}",
    emergencyP: "If a leak is actively damaging your {city} property, time is critical. Turn off your main water valve and call our emergency team to locate and repair the leak immediately.",
    faqs: [
      ["How do you find a leak behind a wall without tearing it down?", "We use a combination of experience, pressure testing, and moisture meters to isolate the area of the leak, minimizing the amount of drywall that needs to be removed."],
      ["Will my homeowner's insurance cover leak repair?", "Insurance often covers the resulting water damage, but they typically do not cover the cost of repairing the plumbing itself. We recommend checking your specific policy."],
      ["What is a slab leak?", "A slab leak occurs when a water line running underneath the concrete foundation of your {city} home develops a leak. These require specialized detection and repair methods."]
    ]
  },
  "water-heater-repair": {
    slug: "water-heater-repair",
    name: "Water Heater Repair",
    title: "Water Heater Repair in {city}, CA",
    description: "Reliable water heater repair in {city}. We fix lack of hot water, leaks, and strange noises for both tank and tankless systems.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1400&q=85",
    intro: "A cold shower, rumbling tank, inconsistent temperature, or visible moisture around a water heater deserves attention. A2Z Plumbing helps {city} customers work through water heater problems.",
    signsH2: "Signs Your Water Heater Needs Repair in {city}",
    signs: [
      "Water is lukewarm or runs cold entirely too quickly",
      "The tank makes loud popping or rumbling noises",
      "Water from the hot tap appears rusty or discolored",
      "Puddles or moisture are forming around the base of the unit"
    ],
    commonH2: "Common Water Heater Problems",
    common: [
      "Failed heating elements or faulty thermostats",
      "Extinguished pilot lights or bad thermocouples",
      "Heavy sediment buildup inside the tank",
      "Leaking temperature and pressure relief (TPR) valves"
    ],
    servicesH2: "Our Water Heater Repair Services",
    services: [
      "Gas and electric tank water heater repair",
      "Tankless water heater troubleshooting",
      "Thermostat and element replacement",
      "System flushing and preventative maintenance"
    ],
    emergencyH2: "Emergency Water Heater Problems in {city}",
    emergencyP: "If your water heater is actively leaking from the tank itself, it cannot be repaired and risks flooding your {city} home. Shut off the cold water supply valve above the tank and call us right away.",
    faqs: [
      ["How much does water heater repair cost in {city}?", "Repair costs vary depending on the part. Replacing a thermocouple or heating element is relatively inexpensive, while repairing complex gas control valves costs more. We provide clear estimates before starting."],
      ["How do I know if my water heater needs repair or replacement?", "If your tank is over 10-12 years old, requires frequent repairs, or is leaking from the tank body, replacement is usually the most cost-effective choice. We will give you an honest assessment."],
      ["How long does a water heater repair take?", "Most standard water heater repairs, such as replacing an element or flushing the system, can be completed in 1 to 2 hours once our plumber arrives at your {city} home."],
      ["Do you repair both tank and tankless water heaters?", "Yes, our plumbers are experienced in diagnosing and repairing traditional storage-tank water heaters as well as modern, high-efficiency tankless units."]
    ]
  },
  "water-heater-installation": {
    slug: "water-heater-installation",
    name: "Water Heater Installation",
    title: "Water Heater Installation in {city}, CA",
    description: "Professional water heater installation in {city}. We expertly install standard and tankless water heaters tailored to your home.",
    image: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1400&q=85",
    intro: "A new water heater should match the household, the available space, and the way hot water is used. A2Z Plumbing helps {city} customers plan a safe, tidy installation.",
    signsH2: "Signs It's Time for a New Water Heater in {city}",
    signs: [
      "Your current tank is over 12 years old",
      "The tank itself is leaking from the bottom",
      "You frequently run out of hot water",
      "Repair costs are mounting on an aging unit"
    ],
    commonH2: "Water Heater Options for Your Home",
    common: [
      "Standard gas water heaters (40-50 gallon)",
      "Standard electric water heaters",
      "High-efficiency tankless water heaters",
      "Heat pump (hybrid) water heaters"
    ],
    servicesH2: "Our {city} Installation Services",
    services: [
      "Removal and proper disposal of the old unit",
      "Code-compliant installation of the new heater",
      "Upgrading gas lines or venting if necessary",
      "Seismic strapping and expansion tank installation"
    ],
    emergencyH2: "Urgent Water Heater Replacement in {city}",
    emergencyP: "Living without hot water is a major disruption. If your water heater has completely failed, we work efficiently to provide urgent replacement services in {city} so you can return to your normal routine.",
    faqs: [
      ["Should I upgrade to a tankless water heater?", "Tankless units offer endless hot water and save space, but they require a higher upfront investment and sometimes gas line upgrades. We can help you weigh the pros and cons for your {city} home."],
      ["How long does it take to install a new water heater?", "A standard like-for-like tank replacement usually takes 2-4 hours. Upgrading to a tankless system can take a full day depending on the necessary plumbing and venting modifications."],
      ["Will you take away my old water heater?", "Yes, our installation service includes draining, removing, and properly disposing of your old water heater unit."]
    ]
  },
  "toilet-repair": {
    slug: "toilet-repair",
    name: "Toilet Repair",
    title: "Toilet Repair in {city}, CA",
    description: "Fast toilet repair services in {city}. We fix running, leaking, and clogged toilets to restore function to your bathroom.",
    image: "https://images.unsplash.com/photo-1584622781867-1f5b3f6f2b85?auto=format&fit=crop&w=1400&q=80",
    intro: "A running, rocking, clogging, or leaking toilet can waste water and disrupt a bathroom quickly. A2Z Plumbing provides {city} toilet repair for common fixture problems.",
    signsH2: "Signs You Need Toilet Repair in {city}",
    signs: [
      "The toilet runs constantly or intermittently on its own",
      "Water is pooling around the base of the toilet",
      "The toilet rocks or moves when you sit on it",
      "You experience frequent or stubborn clogs"
    ],
    commonH2: "Common Toilet Problems We Fix",
    common: [
      "Worn flappers causing continuous running",
      "Failed wax rings leading to base leaks",
      "Broken fill valves and flush assemblies",
      "Hard water buildup in the rim jets"
    ],
    servicesH2: "Our Toilet Repair Services",
    services: [
      "Complete toilet tank rebuilding",
      "Wax ring replacement and reseating",
      "Clearing deep toilet clogs",
      "Installation of new, efficient toilets"
    ],
    emergencyH2: "Emergency Toilet Problems in {city}",
    emergencyP: "An overflowing toilet is a serious sanitation issue. Turn off the shut-off valve behind the toilet immediately and call us. We provide rapid response in {city} to clear the blockage safely.",
    faqs: [
      ["Why does my toilet keep running?", "A running toilet is usually caused by a deteriorated flapper that no longer seals, or a faulty fill valve. This is a quick repair that saves a lot of water."],
      ["Is a wobbly toilet a big deal?", "Yes, a rocking toilet can break the wax seal underneath, leading to hidden leaks that rot the floor and subfloor over time. It should be reset and secured promptly."],
      ["Should I repair or replace my older toilet?", "If your toilet requires frequent repairs, is badly stained, or uses a high volume of water (over 1.6 gallons per flush), upgrading to a new, efficient model is often the better investment."]
    ]
  },
  "faucet-repair": {
    slug: "faucet-repair",
    name: "Faucet Repair",
    title: "Faucet Repair in {city}, CA",
    description: "Professional faucet repair in {city}. Stop the drip and fix under-sink leaks with our reliable fixture repair services.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    intro: "A dripping faucet, stiff handle, loose base, or under-sink leak is more than an annoyance. A2Z Plumbing helps {city} homes and businesses restore everyday fixtures.",
    signsH2: "Signs Your Faucet Needs Attention",
    signs: [
      "A steady drip from the spout even when fully off",
      "Water leaking from the base of the handle",
      "Handles that are extremely stiff or squeaky",
      "Inconsistent water flow or spraying from the aerator"
    ],
    commonH2: "Common Faucet Issues",
    common: [
      "Worn out O-rings, seats, and springs",
      "Corroded or broken internal cartridges",
      "Mineral buildup obstructing flow",
      "Leaking supply lines beneath the sink"
    ],
    servicesH2: "Our {city} Faucet Services",
    services: [
      "Kitchen and bathroom faucet repair",
      "Shower valve cartridge replacement",
      "Outdoor hose bib repair",
      "Installation of new client-supplied fixtures"
    ],
    emergencyH2: "Urgent Faucet Leaks in {city}",
    emergencyP: "If a faucet handle breaks off and water is spraying, or a supply line under the sink bursts, turn off the angle stops (valves under the sink) or the main water valve and call us for immediate help.",
    faqs: [
      ["Can all leaking faucets be repaired?", "Most modern faucets can be repaired by replacing the internal cartridge or seals. However, if the brass body of the faucet is corroded or cracked, replacement is necessary."],
      ["Why is my water pressure low in just one faucet?", "Isolated low pressure is typically caused by a clogged aerator at the tip of the spout, or a blockage inside the faucet cartridge itself."],
      ["Do you supply the faucets or do I need to buy one?", "We can supply standard, high-quality fixtures, or you are welcome to purchase a faucet of your choice for us to professionally install in your {city} home."]
    ]
  },
  "garbage-disposal-repair": {
    slug: "garbage-disposal-repair",
    name: "Garbage Disposal Repair",
    title: "Garbage Disposal Repair in {city}, CA",
    description: "Garbage disposal repair and installation in {city}. We fix jammed, humming, and leaking disposals efficiently.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1400&q=85",
    intro: "A humming, jammed, leaking, or non-starting garbage disposal can bring a kitchen routine to a stop. A2Z Plumbing helps {city} customers troubleshoot the next right move.",
    signsH2: "Signs of a Failing Garbage Disposal",
    signs: [
      "The disposal makes a humming noise but doesn't grind",
      "Water is leaking from the bottom of the unit",
      "The disposal frequently trips its internal reset switch",
      "It takes much longer to grind food than it used to"
    ],
    commonH2: "Common Disposal Problems We Fix",
    common: [
      "Jams caused by hard objects (bones, glass) or fibrous foods",
      "Broken internal impellers (blades)",
      "Leaking seals between the sink and the disposal flange",
      "Electrical connection issues"
    ],
    servicesH2: "Our Garbage Disposal Services",
    services: [
      "Safe unjamming and clearing of disposals",
      "Leak repair and seal replacement",
      "Installation of new standard or continuous-feed units",
      "Clearing clogs in the attached drain lines"
    ],
    emergencyH2: "Urgent Kitchen Sink Backups in {city}",
    emergencyP: "A broken disposal often leads to a completely backed-up kitchen sink. If you cannot use your sink, we provide prompt service to clear the blockage and repair or replace the disposal.",
    faqs: [
      ["What should I do if my disposal is just humming?", "Turn it off immediately to prevent burning out the motor. This usually means it is jammed. You can try pressing the red reset button on the bottom, or call us to safely clear the jam."],
      ["What foods should I never put in my disposal?", "Avoid fibrous foods (celery, onion skins), expandable foods (pasta, rice), coffee grounds, eggshells, and large amounts of grease or fat."],
      ["Is it better to repair or replace a leaking disposal?", "If a disposal is leaking from the bottom (the motor housing), internal seals have failed and the unit must be replaced. Leaks at the top flange can sometimes be repaired by reseating the unit."]
    ]
  },
  "sewer-line-repair": {
    slug: "sewer-line-repair",
    name: "Sewer Line Repair",
    title: "Sewer Line Repair in {city}, CA",
    description: "Expert sewer line repair in {city}. Call us for solutions to major backups, root intrusion, and damaged sewer lines.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    intro: "Repeated backups, slow drains throughout the home, or unusual yard moisture can signal a larger sewer-line concern. A2Z Plumbing helps {city} customers understand the pattern and options.",
    signsH2: "Warning Signs of a Sewer Line Problem",
    signs: [
      "Sewage backing up into lower-level drains (like showers)",
      "Gurgling sounds from toilets when other fixtures are used",
      "Lush, overly green patches of grass in your yard",
      "Persistent sewage odors around your property"
    ],
    commonH2: "Common Sewer Line Issues in {city}",
    common: [
      "Tree root intrusion breaking through older clay pipes",
      "Bellied or sagging pipes that collect waste",
      "Severe grease buildup reducing pipe diameter",
      "Collapsed or shifted underground lines"
    ],
    servicesH2: "Our Sewer Line Services",
    services: [
      "Professional augering and clearing",
      "Locating and diagnosing blockages",
      "Targeted spot repairs for damaged sections",
      "Cleanout installation"
    ],
    emergencyH2: "Emergency Sewer Backups in {city}",
    emergencyP: "A raw sewage backup is a severe health hazard. Stop using all water in the house immediately to prevent further flooding and call our emergency team to address the main line blockage.",
    faqs: [
      ["How do you clear roots from a sewer line?", "We use heavy-duty commercial augers with specialized cutting blades to tear through tree roots and restore flow to the sewer line."],
      ["Why does my shower back up when I flush the toilet?", "Because the shower is the lowest drain point, a blockage in the main sewer line forces wastewater to back up there first when a large volume of water (like a flush) is introduced."],
      ["Who is responsible for the sewer line in {city}?", "In most municipalities, the homeowner is responsible for the lateral sewer line from the house all the way to the connection with the city main, even if it runs under the sidewalk or street."]
    ]
  },
  "repiping": {
    slug: "repiping",
    name: "Repiping",
    title: "Repiping Services in {city}, CA",
    description: "Whole-home repiping in {city}. Upgrade your aging or leaking pipes with durable, modern plumbing systems.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1400&q=85",
    intro: "When a home has recurring leaks, poor pressure, or aging supply lines, repiping may be part of the conversation. A2Z Plumbing helps {city} homeowners evaluate the practical signs.",
    signsH2: "Signs Your {city} Home Needs Repiping",
    signs: [
      "Frequent, recurring pinhole leaks in different areas",
      "Noticeably rusty or discolored water when you turn on the tap",
      "Significant drop in water pressure over time",
      "Your home still has original galvanized steel piping"
    ],
    commonH2: "The Risks of Aging Pipes",
    common: [
      "Galvanized pipes corroding from the inside out",
      "Polybutylene pipes degrading and splitting",
      "Deteriorating copper pipes in hard water areas",
      "Accumulated rust restricting water flow"
    ],
    servicesH2: "Our Repiping Services",
    services: [
      "Comprehensive pipe evaluation",
      "Whole-home or partial system repiping",
      "Upgrading to modern PEX or copper materials",
      "Coordination to minimize disruption to your home"
    ],
    emergencyH2: "Addressing Major Pipe Failures in {city}",
    emergencyP: "While repiping is usually a planned project, a catastrophic failure of an old pipe requires immediate action. We handle the emergency repair first, then help you evaluate if a full repipe is necessary.",
    faqs: [
      ["What is the best material for repiping a home?", "PEX (cross-linked polyethylene) is highly recommended for its durability, flexibility, and resistance to corrosion and scale buildup. Copper remains a premium, long-lasting option as well."],
      ["Will repiping damage my walls?", "Some drywall removal is unavoidable to access the pipes, but we plan carefully to minimize the number of cuts. We explain exactly what needs to be opened before work begins."],
      ["How long does it take to repipe a house?", "A typical whole-home repipe takes between 2 to 5 days depending on the size of the house, the number of bathrooms, and accessibility."]
    ]
  }
};
