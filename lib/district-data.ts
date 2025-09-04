// If you already had a file here, this preserves a simple structure that matches typical usage.

export type Localized = string | { en: string; hi: string }

export type District = {
  id: string
  name: Localized
  region?: Localized
  description?: Localized
  population?: number
  areaKm2?: number
  headquarters?: string
  imageUrl?: string
  slug?: string
}

export const districts: District[] = [
  {
    id: "almora",
    name: { en: "Almora", hi: "अल्मोड़ा" },
    region: { en: "Kumaon", hi: "कुमाऊँ" },
    description: {
      en: "Cultural heritage hill town with panoramic views and traditional markets.",
      hi: "सांस्कृतिक विरासत वाला पहाड़ी नगर, मनमोहक दृश्य और पारंपरिक बाज़ारों के लिए प्रसिद्ध।",
    },
    headquarters: "Almora",
    slug: "almora",
    imageUrl: "/almora-town-hill-view.jpg",
  },
  {
    id: "pithoragarh",
    name: { en: "Pithoragarh", hi: "पिथौरागढ़" },
    region: { en: "Kumaon (Border)", hi: "कुमाऊँ (सीमांत)" },
    description: {
      en: "The 'Little Kashmir' of Uttarakhand with stunning valleys and border significance.",
      hi: "उत्तराखंड का 'लिटिल कश्मीर' जिसकी मनोहारी घाटियाँ और सीमांत महत्व है।",
    },
    headquarters: "Pithoragarh",
    slug: "pithoragarh",
    imageUrl: "/pithoragarh-valley.jpg",
  },
  {
    id: "dehradun",
    name: { en: "Dehradun", hi: "देहरादून" },
    region: { en: "Garhwal", hi: "गढ़वाल" },
    description: {
      en: "State capital and education hub nestled in the Doon valley.",
      hi: "राजधानी और शिक्षा केंद्र, दून घाटी में बसा हुआ।",
    },
    headquarters: "Dehradun",
    slug: "dehradun",
    imageUrl: "/dehradun-city.jpg",
  },
  {
    id: "nainital",
    name: { en: "Nainital", hi: "नैनीताल" },
    region: { en: "Kumaon", hi: "कुमाऊँ" },
    description: {
      en: "Lakeside hill station famed for Naini Lake and surrounding peaks.",
      hi: "झीलों का सुंदर पहाड़ी शहर, नैनी झील और आसपास की चोटियों के लिए प्रसिद्ध।",
    },
    headquarters: "Nainital",
    slug: "nainital",
    imageUrl: "/nainital-lake.jpg",
  },
]

// Separate shape for the interactive map: numeric id + localized name
export type DistrictMapItem = { id: number; name: { en: string; hi: string } }

export const districtsData: DistrictMapItem[] = [
  { id: 1, name: { en: "Dehradun", hi: "देहरादून" } },
  { id: 2, name: { en: "Haridwar", hi: "हरिद्वार" } },
  { id: 3, name: { en: "Uttarkashi", hi: "उत्तरकाशी" } },
  { id: 4, name: { en: "Tehri Garhwal", hi: "टिहरी गढ़वाल" } },
  { id: 5, name: { en: "Pauri Garhwal", hi: "पौड़ी गढ़वाल" } },
  { id: 6, name: { en: "Rudraprayag", hi: "रुद्रप्रयाग" } },
  { id: 7, name: { en: "Chamoli", hi: "चमोली" } },
  { id: 8, name: { en: "Almora", hi: "अल्मोड़ा" } },
  { id: 9, name: { en: "Bageshwar", hi: "बागेश्वर" } },
  { id: 10, name: { en: "Pithoragarh", hi: "पिथौरागढ़" } },
  { id: 11, name: { en: "Champawat", hi: "चंपावत" } },
  { id: 12, name: { en: "Nainital", hi: "नैनीताल" } },
  { id: 13, name: { en: "Udham Singh Nagar", hi: "उधम सिंह नगर" } },
]
