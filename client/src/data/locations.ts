export interface CityData {
  name: string;
  slug: string;
  metaDesc: string;
  heroLede: string;
  introH2: string;
  introP1: string;
  introP2: string;
  landmarks: string;
  emergencyH2: string;
  emergencyP: string;
  faqs: [string, string][];
}

export const locationPagesList = [
  "Fairfield",
  "Suisun City",
  "Vacaville",
  "Vallejo",
  "Benicia",
  "Dixon",
  "Rio Vista",
  "American Canyon",
  "Napa",
  "Martinez"
];

export const cityData: Record<string, CityData> = {
  "Fairfield": {
    name: "Fairfield",
    slug: "plumber-fairfield-ca",
    metaDesc: "Call A2Z Plumbing LLC for responsive, reliable plumbing service in Fairfield, California. Local support for leaks, drains, and water heaters.",
    heroLede: "A2Z Plumbing LLC helps Fairfield homeowners and local businesses with practical plumbing repairs, fixture service, drain work, water heater support, and more.",
    introH2: "Dedicated plumbing support close to home in Fairfield.",
    introP1: "Fairfield is our home base. From the communities near Travis AFB to Cordelia and Green Valley, we provide clear help with everyday plumbing issues, urgent leaks, fixture repairs, and larger system upgrades.",
    introP2: "Our approach in Fairfield is simple: keep the conversation focused on your actual symptoms, respect your property, and provide the most useful next step.",
    landmarks: "Serving central Fairfield, Cordelia, Green Valley, and neighborhoods near Travis AFB.",
    emergencyH2: "Need an emergency plumber in Fairfield?",
    emergencyP: "If a pipe has burst in your Fairfield home, or a major leak is threatening your property, shut off the main water valve if it is safe to do so, and call us immediately. We prioritize urgent Fairfield calls.",
    faqs: [
      ["How fast can you respond to a plumbing issue in Fairfield?", "Since we are based in Fairfield, we can typically respond to local calls on the same day. Call us directly for real-time availability."],
      ["Do you service older homes in Fairfield?", "Yes, we have extensive experience repairing plumbing systems in Fairfield's older neighborhoods, addressing issues like aging pipes and outdated fixtures."]
    ]
  },
  "Suisun City": {
    name: "Suisun City",
    slug: "plumber-suisun-city-ca",
    metaDesc: "Need a plumber in Suisun City, CA? A2Z Plumbing LLC provides trusted local plumbing repairs, drain cleaning, and emergency services.",
    heroLede: "When plumbing issues arise in Suisun City, A2Z Plumbing LLC delivers direct, reliable service for drains, fixtures, water heaters, and emergency repairs.",
    introH2: "Fast, practical plumbing help for Suisun City residents.",
    introP1: "As a neighboring community to our Fairfield headquarters, Suisun City receives prompt and focused plumbing support. Whether you live near the Suisun Marina or closer to Highway 12, we’re ready to assist.",
    introP2: "If a drain is slowing down, a fixture is leaking, or your hot water has disappeared, call us to talk through the issue. We prioritize clear communication and effective repairs.",
    landmarks: "Serving Suisun City Marina, Lawler Ranch, and surrounding local neighborhoods.",
    emergencyH2: "Emergency plumbing help for Suisun City.",
    emergencyP: "Water damage can spread quickly. If you have an active plumbing emergency in Suisun City, turn off the water at the source and contact us for prompt support.",
    faqs: [
      ["Are you familiar with plumbing issues common in Suisun City?", "Yes, being right next door, we frequently help Suisun City homeowners with everything from standard fixture replacements to local hard water and drain concerns."],
      ["Do you handle plumbing for properties near the water?", "Yes, we provide plumbing repairs for all homes and businesses in Suisun City, regardless of proximity to the marina."]
    ]
  },
  "Vacaville": {
    name: "Vacaville",
    slug: "plumber-vacaville-ca",
    metaDesc: "Professional plumbing services in Vacaville, CA. A2Z Plumbing LLC offers reliable residential and commercial plumbing repairs.",
    heroLede: "A2Z Plumbing LLC provides clear, responsive plumbing repairs for homeowners and businesses in Vacaville, handling everything from clogged drains to water heater installations.",
    introH2: "Dependable plumbing service for Vacaville properties.",
    introP1: "From Browns Valley to Leisure Town, Vacaville residents trust A2Z Plumbing LLC for straightforward answers and quality workmanship. We tackle everyday annoyances and serious system issues alike.",
    introP2: "We know that dealing with plumbing problems is frustrating. That’s why we focus on listening first, explaining the solution clearly, and respecting your Vacaville property during every visit.",
    landmarks: "Serving Browns Valley, Alamo Creek, Leisure Town, and all of Vacaville.",
    emergencyH2: "Reliable emergency plumbing in Vacaville.",
    emergencyP: "When a sudden leak or backup disrupts your day in Vacaville, you need practical answers fast. We provide responsive emergency service to mitigate damage and restore your plumbing.",
    faqs: [
      ["Do you offer water heater replacements in Vacaville?", "Absolutely. We repair, replace, and install traditional and tankless water heaters for Vacaville residents."],
      ["Can you clear tough clogs in older Vacaville homes?", "Yes, we use professional equipment to safely and effectively clear stubborn blockages in all types of plumbing systems."]
    ]
  },
  "Vallejo": {
    name: "Vallejo",
    slug: "plumber-vallejo-ca",
    metaDesc: "Looking for a plumber in Vallejo, CA? A2Z Plumbing LLC provides expert repairs, leak detection, and drain services.",
    heroLede: "Homeowners in Vallejo count on A2Z Plumbing LLC for practical plumbing solutions, clear communication, and high-quality repairs.",
    introH2: "Expert plumbing solutions in Vallejo.",
    introP1: "Serving Vallejo's diverse neighborhoods, from Glen Cove to the historic districts, A2Z Plumbing LLC addresses leaks, fixture malfunctions, and complex drain issues with professionalism.",
    introP2: "Our goal is to resolve your plumbing problems efficiently. We take the time to explain what’s happening so you can make informed decisions about your Vallejo home or business.",
    landmarks: "Serving Glen Cove, Hiddenbrooke, Mare Island, and central Vallejo.",
    emergencyH2: "Responsive emergency plumber in Vallejo.",
    emergencyP: "Don't let an active leak ruin your Vallejo property. We offer emergency plumbing response to quickly identify the source and stop the damage.",
    faqs: [
      ["Do you service Mare Island properties?", "Yes, we provide complete plumbing services to residents and businesses on Mare Island and throughout Vallejo."],
      ["Can you fix low water pressure issues?", "Yes, low water pressure can stem from various causes. We can diagnose and resolve pressure issues in your Vallejo home."]
    ]
  },
  "Benicia": {
    name: "Benicia",
    slug: "plumber-benicia-ca",
    metaDesc: "A2Z Plumbing LLC offers top-rated plumbing services in Benicia, CA. From leaks to water heaters, call us for honest service.",
    heroLede: "A2Z Plumbing LLC provides Benicia with straightforward, high-quality plumbing services, ensuring your home's systems run smoothly and safely.",
    introH2: "Trusted plumbing repairs for Benicia homeowners.",
    introP1: "Whether you're near the waterfront or in the Southampton neighborhood, A2Z Plumbing LLC is ready to assist Benicia residents with comprehensive plumbing repairs and installations.",
    introP2: "We understand the unique plumbing needs of Benicia's coastal climate and historic properties. We bring clear communication and practical solutions to every job.",
    landmarks: "Serving Southampton, the Arsenal, Downtown Benicia, and waterfront areas.",
    emergencyH2: "Emergency plumbing response for Benicia.",
    emergencyP: "If you experience a plumbing emergency in Benicia, such as a burst pipe or severe backup, our responsive team is ready to help mitigate the issue promptly.",
    faqs: [
      ["Do you work on historic homes in Benicia?", "Yes, we have experience navigating the specific plumbing challenges often found in older and historic homes in Benicia."],
      ["Can you help with noisy pipes?", "Yes, noisy pipes can indicate water hammer or loose mounts. We can identify the cause and quiet your plumbing system."]
    ]
  },
  "Dixon": {
    name: "Dixon",
    slug: "plumber-dixon-ca",
    metaDesc: "Need plumbing repairs in Dixon, CA? Call A2Z Plumbing LLC for reliable, local plumbing service and emergency support.",
    heroLede: "Residents of Dixon trust A2Z Plumbing LLC for clear, reliable plumbing repairs, from everyday fixture fixes to complex system installations.",
    introH2: "Dependable local plumbing for Dixon.",
    introP1: "A2Z Plumbing LLC proudly serves the Dixon community, offering practical support for leaks, drain issues, and water heater maintenance.",
    introP2: "We value clear communication and respect for your property. When you call us from Dixon, you can expect an honest assessment and a practical path forward.",
    landmarks: "Serving central Dixon and surrounding Solano County communities.",
    emergencyH2: "Emergency plumbing support in Dixon.",
    emergencyP: "A sudden plumbing failure in Dixon requires swift action. We are equipped to handle urgent plumbing issues to protect your home from extensive water damage.",
    faqs: [
      ["Do you replace old cast iron pipes?", "Yes, we can assess aging cast iron systems and provide replacement or repair options tailored to your Dixon home."],
      ["How do I know if my water heater needs replacing?", "If your unit is over 10-15 years old, leaking, or struggling to heat water consistently, it may be time for a replacement. We can evaluate it for you."]
    ]
  },
  "Rio Vista": {
    name: "Rio Vista",
    slug: "plumber-rio-vista-ca",
    metaDesc: "A2Z Plumbing LLC provides expert plumbing services in Rio Vista, CA. Contact us for leaks, drains, and comprehensive plumbing repairs.",
    heroLede: "A2Z Plumbing LLC supports Rio Vista homes and businesses with dependable plumbing repairs, focusing on clear answers and quality workmanship.",
    introH2: "Quality plumbing services in Rio Vista.",
    introP1: "Located along the river, Rio Vista properties have specific needs. A2Z Plumbing LLC provides tailored plumbing solutions, from routine maintenance to urgent leak repairs.",
    introP2: "We believe in listening to the customer first. When you contact us from Rio Vista, we work with you to understand the symptoms and provide the best repair options.",
    landmarks: "Serving Trilogy, Downtown Rio Vista, and riverfront properties.",
    emergencyH2: "Urgent plumbing repairs in Rio Vista.",
    emergencyP: "Don't let a plumbing emergency disrupt your life in Rio Vista. We provide direct support to tackle severe leaks, backups, and water heater failures.",
    faqs: [
      ["Do you service the Trilogy community in Rio Vista?", "Yes, we frequently provide plumbing services and repairs to residents in the Trilogy community."],
      ["Can you fix a constantly running toilet?", "Yes, running toilets waste a significant amount of water. We can quickly diagnose and replace the faulty components."]
    ]
  },
  "American Canyon": {
    name: "American Canyon",
    slug: "plumber-american-canyon-ca",
    metaDesc: "Professional plumber in American Canyon, CA. A2Z Plumbing LLC offers fast, reliable service for all your residential plumbing needs.",
    heroLede: "For honest and responsive plumbing service in American Canyon, homeowners turn to A2Z Plumbing LLC to keep their water systems functioning flawlessly.",
    introH2: "Responsive plumbing support in American Canyon.",
    introP1: "A2Z Plumbing LLC provides American Canyon residents with expert assistance for everyday fixture issues, stubborn drains, and water heater concerns.",
    introP2: "Our team is dedicated to respecting your home and your time. We deliver practical solutions that address the root cause of your plumbing problems in American Canyon.",
    landmarks: "Serving neighborhoods throughout American Canyon and southern Napa County.",
    emergencyH2: "Fast emergency plumber in American Canyon.",
    emergencyP: "If a plumbing disaster strikes in American Canyon, immediate action is crucial. We offer urgent repair services to get your home's plumbing back under control.",
    faqs: [
      ["Do you install garbage disposals?", "Yes, we can repair jammed disposals or install brand new, efficient units in your American Canyon kitchen."],
      ["What should I do if my drain is completely blocked?", "Avoid chemical drain cleaners as they can damage pipes. Call us for professional drain clearing to safely remove the blockage."]
    ]
  },
  "Napa": {
    name: "Napa",
    slug: "plumber-napa-ca",
    metaDesc: "Looking for a reliable plumber in Napa, CA? A2Z Plumbing LLC offers high-quality repairs, installations, and emergency plumbing services.",
    heroLede: "A2Z Plumbing LLC delivers premium plumbing repairs and installations to Napa residents, combining expert knowledge with respectful, clear communication.",
    introH2: "Premium plumbing services for Napa homes.",
    introP1: "From downtown Napa to the surrounding valley neighborhoods, A2Z Plumbing LLC provides comprehensive plumbing support. We handle intricate fixture repairs, leak detection, and system upgrades.",
    introP2: "We understand that your Napa home is an investment. Our plumbing services are designed to protect that investment through meticulous workmanship and practical, lasting solutions.",
    landmarks: "Serving Downtown Napa, Browns Valley, Alta Heights, and surrounding areas.",
    emergencyH2: "Emergency plumbing services in Napa.",
    emergencyP: "A plumbing emergency in Napa requires a calm, professional response. We are ready to tackle active leaks and severe backups to protect your property.",
    faqs: [
      ["Do you install high-end plumbing fixtures?", "Yes, we have extensive experience installing and servicing premium plumbing fixtures commonly found in Napa homes."],
      ["Can you help with outdoor plumbing leaks?", "Yes, we can diagnose and repair issues with outdoor hose bibs, main water lines, and other exterior plumbing components."]
    ]
  },
  "Martinez": {
    name: "Martinez",
    slug: "plumber-martinez-ca",
    metaDesc: "A2Z Plumbing LLC provides trusted local plumbing services in Martinez, CA. Call us for clear, professional support for your home or business.",
    heroLede: "Homeowners and businesses in Martinez rely on A2Z Plumbing LLC for straightforward plumbing solutions, from minor repairs to major system diagnostics.",
    introH2: "Trusted plumbing solutions in Martinez.",
    introP1: "A2Z Plumbing LLC is proud to cross the bridge to serve the Martinez community. We offer reliable repairs for drains, fixtures, and water heating systems.",
    introP2: "Our commitment to clear communication means you'll always understand the work being done in your Martinez home, empowering you to make the right choices for your plumbing.",
    landmarks: "Serving Downtown Martinez, Alhambra Valley, and surrounding neighborhoods.",
    emergencyH2: "Emergency plumber serving Martinez.",
    emergencyP: "When an urgent plumbing issue occurs in Martinez, quick and effective action is necessary. Contact us for direct support during plumbing emergencies.",
    faqs: [
      ["Do you charge for travel to Martinez?", "Our service calls include travel. We will clearly communicate any costs before beginning work so there are no surprises."],
      ["Can you repair a leaking shower pan?", "Yes, we can investigate shower leaks and provide the necessary repairs or coordinate with specialists if extensive reconstruction is needed."]
    ]
  }
};
