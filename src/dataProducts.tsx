import iphone15promax from './assets/Images/Products/Phones/Apple iPhone 15 Pro Max (256 GB) - Natural Titanium.jpg'
import galaxyS23Ultra from './assets/Images/Products/Phones/galaxyS23Ultra.jpg'
import pixel7Pro from './assets/Images/Products/Phones/pixel7Pro.jpg'
import onePlus11 from './assets/Images/Products/Phones/onePlus11.jpg'
import airpods3rdGen from './assets/Images/Products/Airpods/airpodsPro3rdGen.jpg'
import airpods2ndGen from './assets/Images/Products/Airpods/airpods2ndGen.jpg'
import airpodsMax from './assets/Images/Products/Airpods/airpodsMax.jpg'
import gpus4090 from './assets/Images/Products/GPUS/gpus4090.jpg'
import gpus7900XTX from './assets/Images/Products/GPUS/gpus7900XTX.jpg'
import gpus4080 from './assets/Images/Products/GPUS/gpus4080.jpg'
import laptopMacBookPro16 from './assets/Images/Products/Laptops/laptopMacBookPro16.jpg'
import laptopXPS13 from './assets/Images/Products/Laptops/laptopXPS13.jpg'
import laptopSpectrex360 from './assets/Images/Products/Laptops/laptopSpectrex360.jpg'
import pendriveSanDiskUltra from './assets/Images/Products/Pendrives/pendriveSanDiskUltra.jpg'
import pendriveKingstonDataTraveler from './assets/Images/Products/Pendrives/pendriveKingstonDataTraveler.jpg'
import pendriveSamsungBARPlus from './assets/Images/Products/Pendrives/pendriveSamsungBARPlus.jpg'
import processorsI9 from './assets/Images/Products/Processors/processorsI9.jpg'
import processorsRyzen9 from './assets/Images/Products/Processors/processorsRyzen9.jpg'
import processorsI7 from './assets/Images/Products/Processors/processorsI7.jpg'
import smartwatchAppleWatch8 from './assets/Images/Products/Smartwatches/smartwatchAppleWatch8.jpg'
import smartwatchGalaxyWatch5Pro from './assets/Images/Products/Smartwatches/smartwatchGalaxyWatch5Pro.jpg'
import smartwatchGarminFenix7X from './assets/Images/Products/Smartwatches/smartwatchGarminFenix7X.jpg'
import SpeakerSoundLinkRevolvePlus from './assets/Images/Products/Speakers/SpeakerSoundLinkRevolvePlus.jpg'
import SpeakerJBLCharge5 from './assets/Images/Products/Speakers/SpeakerJBLCharge5.jpg'
import SpeakerSonySRSXB43 from './assets/Images/Products/Speakers/SpeakerSonySRSXB43.jpg'

let products = [
  // Airpods
  {
    name: 'Apple AirPods Pro (2nd generation)',
    image: airpods2ndGen,
    price: '399$ AUD',
    description: `
REVOLUTIONARY SOUND — Apple-designed H2 chip with new low-distortion audio driver and custom amplifier for rich, deep bass and crisp, clear high notes. Adaptive Transparency and Personalized Spatial Audio with dynamic head tracking.
ACTIVE NOISE CANCELLATION — More powerful Active Noise Cancellation and Adaptive Transparency to let you hear the world around you, reducing the intensity of loud noises.
`,
    category: 'Airpods',
  },
  {
    name: 'Apple AirPods (3rd generation)',
    image: airpods3rdGen,
    price: '279$ AUD',
    description: `
SPATIAL AUDIO — With dynamic head tracking places sound all around you.
LONG BATTERY LIFE — Up to 6 hours of listening time and up to 30 hours total listening time with the MagSafe Charging Case.
SWEAT AND WATER RESISTANT — For AirPods and charging case.
`,
    category: 'Airpods',
  },
  {
    name: 'Apple AirPods Max',
    image: airpodsMax,
    price: '899$ AUD',
    description: `
HIGH-FIDELITY AUDIO — Custom-built driver delivers high-fidelity playback with ultra-low distortion across the entire audible range.
ACTIVE NOISE CANCELLATION — Blocks outside noise, so you can immerse yourself in music.
COMFORTABLE DESIGN — With a knit-mesh canopy and memory foam ear cushions for an exceptional fit.
`,
    category: 'Airpods',
  },
  // GPUs
  {
    name: 'NVIDIA GeForce RTX 4090',
    image: gpus4090,
    price: '2999$ AUD',
    description: `
ULTIMATE PERFORMANCE — Powered by NVIDIA’s 2nd gen RTX architecture, the 4090 delivers stunning visuals, incredibly realistic ray-traced graphics, and cutting-edge AI features.
BOOST CLOCK — Up to 1800 MHz.
MEMORY — 24GB GDDR6X.
`,
    category: "GPU's",
  },
  {
    name: 'AMD Radeon RX 7900 XTX',
    image: gpus7900XTX,
    price: '2399$ AUD',
    description: `
EXTREME GAMING PERFORMANCE — Powered by the RDNA 3 architecture, the RX 7900 XTX offers incredible gaming experiences with ultra-high resolutions and frame rates.
BOOST CLOCK — Up to 2500 MHz.
MEMORY — 16GB GDDR6.
`,
    category: "GPU's",
  },
  {
    name: 'NVIDIA GeForce RTX 4080',
    image: gpus4080,
    price: '1999$ AUD',
    description: `
ULTIMATE GRAPHICS — Featuring enhanced RT Cores, Tensor Cores, and new streaming multiprocessors.
BOOST CLOCK — Up to 1710 MHz.
MEMORY — 16GB GDDR6X.
`,
    category: "GPU's",
  },
  // Laptops
  {
    name: 'Apple MacBook Pro 16-inch (M1 Max)',
    image: laptopMacBookPro16,
    price: '4299$ AUD',
    description: `
POWERHOUSE PERFORMANCE — Featuring the M1 Max chip with a 10-core CPU and 32-core GPU.
STUNNING DISPLAY — 16-inch Liquid Retina XDR display for extreme dynamic range and incredible color accuracy.
LONG BATTERY LIFE — Up to 21 hours of battery life.
`,
    category: 'Laptops',
  },
  {
    name: 'Dell XPS 13',
    image: laptopXPS13,
    price: '2499$ AUD',
    description: `
PREMIUM DESIGN — Compact and lightweight with an aluminum chassis.
STUNNING DISPLAY — 13.4-inch FHD+ InfinityEdge display.
HIGH PERFORMANCE — Powered by the latest Intel Core i7 processor.
`,
    category: 'Laptops',
  },
  {
    name: 'HP Spectre x360',
    image: laptopSpectrex360,
    price: '2199$ AUD',
    description: `
2-IN-1 CONVERTIBLE — Flexibility to use as a laptop or tablet.
POWERFUL PERFORMANCE — Equipped with Intel Core i7 and 16GB RAM.
AMAZING DISPLAY — 13.3-inch 4K UHD touchscreen display.
`,
    category: 'Laptops',
  },
  // Pendrives
  {
    name: 'SanDisk Ultra 128GB USB 3.0 Flash Drive',
    image: pendriveSanDiskUltra,
    price: '49$ AUD',
    description: `
HIGH-SPEED PERFORMANCE — Transfer files up to 10 times faster than standard USB 2.0 drives.
LARGE CAPACITY — 128GB storage capacity.
COMPATIBILITY — Backward compatible with USB 2.0 ports.
`,
    category: 'Pendrives',
  },
  {
    name: 'Samsung BAR Plus 64GB USB 3.1 Flash Drive',
    image: pendriveSamsungBARPlus,
    price: '39$ AUD',
    description: `
DURABLE AND RELIABLE — Shock-proof, waterproof, temperature-proof, magnet-proof, and X-ray-proof.
HIGH-SPEED TRANSFER — Up to 300MB/s read speed.
MODERN DESIGN — Sleek, metal casing for durability.
`,
    category: 'Pendrives',
  },
  {
    name: 'Kingston DataTraveler 32GB USB 3.0 Flash Drive',
    image: pendriveKingstonDataTraveler,
    price: '29$ AUD',
    description: `
COMPACT AND PORTABLE — Lightweight and easy to carry.
RELIABLE STORAGE — 32GB capacity for storing documents, photos, and videos.
FAST TRANSFER SPEEDS — USB 3.0 performance for quick file transfers.
`,
    category: 'Pendrives',
  },
  // Phones
  {
    name: 'Apple iPhone 15 Pro Max (256 GB) - Natural Titanium',
    image: iphone15promax,
    price: '2143$ AUD',
    description: `
FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.
ADVANCED DISPLAY. 
`,
    category: 'Phones',
  },
  {
    name: 'Samsung Galaxy S23 Ultra (512 GB) - Phantom Black',
    image: galaxyS23Ultra,
    price: '2199$ AUD',
    description: `
PREMIUM DESIGN — Sleek and durable with Gorilla Glass Victus 2 and an aluminum frame.
HIGH PERFORMANCE — Snapdragon 8 Gen 2 processor with 12GB RAM.
REVOLUTIONARY CAMERA — 200MP wide camera, 10MP periscope telephoto with 10x optical zoom.
`,
    category: 'Phones',
  },
  {
    name: 'Google Pixel 7 Pro (256 GB) - Snow',
    image: pixel7Pro,
    price: '1599$ AUD',
    description: `
GOOGLE’S BEST CAMERA — Triple rear camera system with advanced computational photography.
HIGH PERFORMANCE — Google Tensor G2 processor with Titan M2 security.
STUNNING DISPLAY — 6.7-inch QHD+ OLED display with a 120Hz refresh rate.
`,
    category: 'Phones',
  },
  {
    name: 'OnePlus 11 (256 GB) - Eternal Green',
    image: onePlus11,
    price: '1299$ AUD',
    description: `
FLAGSHIP PERFORMANCE — Snapdragon 8 Gen 2 with 16GB RAM.
ADVANCED CAMERA SYSTEM — Triple rear camera with Hasselblad Color Calibration.
SUPER-FAST CHARGING — 100W fast charging for a full day’s power in just 25 minutes.
`,
    category: 'Phones',
  },
  // Processors
  {
    name: 'Intel Core i9-13900K',
    image: processorsI9,
    price: '949$ AUD',
    description: `
ULTIMATE PERFORMANCE — 13th Gen Intel Core processor with 24 cores and 32 threads.
HIGH CLOCK SPEEDS — Base clock of 3.0 GHz with boost clock up to 5.8 GHz.
UNLOCKED AND OVERCLOCKABLE — For extreme performance tuning.
`,
    category: 'Processors',
  },
  {
    name: 'AMD Ryzen 9 7950X',
    image: processorsRyzen9,
    price: '899$ AUD',
    description: `
EXTREME GAMING AND CONTENT CREATION — 16 cores and 32 threads based on AMD's Zen 4 architecture.
HIGH CLOCK SPEEDS — Base clock of 4.5 GHz with boost clock up to 5.7 GHz.
UNLOCKED FOR OVERCLOCKING — Tailor your performance needs.
`,
    category: 'Processors',
  },
  {
    name: 'Intel Core i7-13700K',
    image: processorsI7,
    price: '599$ AUD',
    description: `
HIGH PERFORMANCE — 13th Gen Intel Core processor with 16 cores and 24 threads.
HIGH CLOCK SPEEDS — Base clock of 3.4 GHz with boost clock up to 5.4 GHz.
UNLOCKED AND OVERCLOCKABLE — For advanced performance tuning.
`,
    category: 'Processors',
  },
  // Smartwatches
  {
    name: 'Apple Watch Series 8 (GPS, 45mm) - Midnight Aluminum Case with Midnight Sport Band',
    image: smartwatchAppleWatch8,
    price: '799$ AUD',
    description: `
ADVANCED HEALTH FEATURES — ECG, blood oxygen, and temperature sensors.
DURABLE DESIGN — Crack-resistant front crystal and water-resistant up to 50 meters.
LONG BATTERY LIFE — Up to 18 hours of all-day battery life.
`,
    category: 'Smartwatches',
  },
  {
    name: 'Samsung Galaxy Watch 5 Pro (45mm) - Titanium',
    image: smartwatchGalaxyWatch5Pro,
    price: '649$ AUD',
    description: `
PREMIUM DESIGN — Sapphire crystal glass and titanium case.
HEALTH MONITORING — Advanced sleep tracking, body composition analysis, and more.
LONG BATTERY LIFE — Up to 80 hours on a single charge.
`,
    category: 'Smartwatches',
  },
  {
    name: 'Garmin Fenix 7X Sapphire Solar',
    image: smartwatchGarminFenix7X,
    price: '1499$ AUD',
    description: `
ULTIMATE MULTISPORT WATCH — Built-in sports apps, topographical maps, and music storage.
SOLAR CHARGING — Power Glass solar charging lens for extended battery life.
DURABILITY — Rugged, weather-resistant design.
`,
    category: 'Smartwatches',
  },
  // Speaker
  {
    name: 'Bose SoundLink Revolve+ (Series II)',
    image: SpeakerSoundLinkRevolvePlus,
    price: '499$ AUD',
    description: `
360° SOUND — True 360° sound for consistent, uniform coverage.
PORTABLE DESIGN — Durable, water-resistant, and easy to carry.
LONG BATTERY LIFE — Up to 17 hours of playtime on a single charge.
`,
    category: 'Speakers',
  },
  {
    name: 'JBL Charge 5',
    image: SpeakerJBLCharge5,
    price: '299$ AUD',
    description: `
POWERFUL SOUND — Bold JBL Pro Sound with an optimized long excursion driver.
LONG BATTERY LIFE — Up to 20 hours of playtime.
WATERPROOF DESIGN — IP67 waterproof and dustproof rating.
`,
    category: 'Speakers',
  },
  {
    name: 'Sony SRS-XB43',
    image: SpeakerSonySRSXB43,
    price: '399$ AUD',
    description: `
EXTRA BASS — Deep, punchy sound with dual passive radiators.
PARTY CONNECT — Sync up to 100 compatible speakers.
DURABLE DESIGN — IP67 waterproof, dustproof, and rustproof.
`,
    category: 'Speakers',
  },
]

export default products
