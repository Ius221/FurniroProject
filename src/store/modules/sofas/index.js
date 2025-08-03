import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      sofas: [
        {
          id: "SF_7840",
          title: "Luxora Beanbag",
          price: 52000,
          tags: "new",
          description: "The Luxora Beanbag redefines casual seating with premium memory foam filling and a luxury fabric cover. Perfect for gaming, reading or relaxation, this oversized bean bag molds to your body shape while maintaining support and comfort for hours of use.",
          sku: "LUX-2024-7840-BB",
          category: ["bean-bag", "casual", "gaming", "youth", "comfort"],
          image: ["img--1a", "img--1b", "img--1c", "img--1d"],
          "large-description": [
            "Transform your relaxation experience with the Luxora Memory Foam Bean Bag, featuring innovative shredded memory foam filling that provides superior comfort compared to traditional bean bags. The premium microfiber outer cover is both soft to touch and durable for daily use. Unlike conventional bean bags that lose shape over time, this memory foam construction maintains its supportive properties while conforming to your body's natural contours.",
            "Designed for modern lifestyles, this bean bag is perfect for gaming sessions, movie nights, or casual reading. The oversized design accommodates adults comfortably while the memory foam filling eliminates pressure points that cause discomfort during extended sitting. The removable cover features a hidden zipper and is machine washable, making maintenance effortless for busy households.",
            "Built with quality materials and attention to detail, the Luxora bean bag offers a sophisticated alternative to traditional casual seating. The neutral grey color complements any decor style, while the durable construction ensures years of comfortable use. Lightweight yet supportive, this bean bag can be easily moved between rooms, making it a versatile addition to any home entertainment setup."
          ],
          general: {
            "sales package": "1 Memory Foam Bean Bag, 1 Extra Cover, Care Instructions",
            "model number": "LUX-MEM-7840",
            "secondary material": "High-Grade Memory Foam Shreds",
            "configuration": "Oversized Single Seater",
            "material": "Premium Microfiber",
            "color": "Storm Grey"
          },
          product: {
            "filling material": "Shredded Memory Foam with Virgin Foam Mix",
            "finish type": "Soft Touch Microfiber",
            "adjustable headrest": "Self-Adjusting",
            "max load capacity": "120 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "100 cm",
            "height": "120 cm",
            "depth": "100 cm",
            "weight": "12 kg",
            "seat height": "Variable",
            "leg height": "Floor Level"
          },
          reviews: [
            "Amazing comfort! Much better than regular bean bags. The memory foam really makes a difference for long gaming sessions.",
            "Perfect for my teenage son's room. The quality is excellent and it's so much more comfortable than expected.",
            "Love this bean bag! Great for reading and watching TV. The washable cover is a huge plus with kids.",
            "Surprisingly supportive for a bean bag. The memory foam doesn't flatten like traditional filling.",
            "Excellent quality and comfort. It's become everyone's favorite spot in the living room.",
            "Great investment! The memory foam maintains its shape and the cover is easy to clean and maintain."
          ]
        },
        {
          id: "SF_7841",
          title: "Harmony Set",
          price: 98000,
          tags: "hot",
          description: "The Harmony Set offers four stylish dining chairs with plush charcoal upholstery, blending comfort and refinement for your dining area. Solid wood construction ensures years of durability, while their versatile look matches both classic and contemporary spaces.",
          sku: "HAR-2024-7841-DS",
          category: ["chair", "dining", "set", "furniture", "home"],
          image: ["img--2a", "img--2b", "img--2c", "img--2d"],
          "large-description": [
            "Refresh your dining space with the Harmony Set. The ergonomic design provides exceptional comfort, thanks to premium foam seats and expertly contoured backs. Their rich walnut finish and charcoal upholstery add sophistication to everyday dining as well as special gatherings.",
            "Crafted from solid mango wood and finished with multiple lacquer coats, each chair resists stains and wear. Reinforced joints ensure sturdiness even with daily use, so these chairs maintain their looks and support for years.",
            "Their understated style fits seamlessly with most tables and decor themes. Lightweight yet stable, Harmony chairs are easy to move around your home and perfect for lively weeknight dinners or leisurely weekend brunches."
          ],
          general: {
            "sales package": "4 Dining Chairs, Assembly Hardware, Furniture Care Kit",
            "model number": "HAR-DIN-7841",
            "secondary material": "High-Density Foam Padding",
            "configuration": "Set of 4 Dining Chairs",
            "material": "Solid Mango Wood",
            "color": "Walnut Charcoal"
          },
          product: {
            "filling material": "High-Density Foam",
            "finish type": "Lacquer Finish",
            "adjustable headrest": "No",
            "max load capacity": "110 kg per chair",
            "origin": "Made in India"
          },
          dimension: {
            "width": "45 cm",
            "height": "90 cm",
            "depth": "50 cm",
            "weight": "8 kg per chair",
            "seat height": "45 cm",
            "leg height": "45 cm"
          },
          reviews: [
            "Chairs are very sturdy, and the upholstery feels premium.",
            "Perfect size and they look amazing with my table.",
            "Assembly was simple, and delivery was on time.",
            "Seats are comfortable for long dinners with friends.",
            "The quality exceeded my expectations!"
          ]
        },
        {
          id: "SF_7842",
          title: "Slumber Bed",
          price: 145000,
          tags: "-25%",
          description: "Slumber Bed transforms from a plush three-seat sofa to a comfy guest bed in seconds. It features soft fabric upholstery, a smooth conversion mechanism, and handy storage space, perfect for compact apartments and guest rooms.",
          sku: "CON-2024-7842-SB",
          category: ["sofa", "bed", "convertible", "guest"],
          image: ["img--3a", "img--3b", "img--3c", "img--3d"],
          "large-description": [
            "Enjoy flexibility with the Slumber Bed, a clever convertible sofa that adapts to your needs. The durable wood frame ensures lasting support while the thick upholstery delivers exceptional comfort for lounging or overnight guests.",
            "Switching between sofa and bed is effortless, with a sturdy metal mechanism and high resilience foam mattress. Neutral beige fabric fits any décor, inviting relaxation whether you're entertaining or sleeping.",
            "The seat lifts to reveal a hidden storage compartment—ideal for bedding, throws, or books. Easy to maintain, it’s perfect for small apartments or multifunctional rooms."
          ],
          general: {
            "sales package": "1 Convertible Sofa Bed, 2 Throw Pillows",
            "model number": "CON-SLE-7842",
            "secondary material": "Engineered Wood",
            "configuration": "3-Seater Convertible",
            "material": "Fabric Upholstery",
            "color": "Warm Beige"
          },
          product: {
            "filling material": "High-Resilience Foam",
            "finish type": "Stain-Resistant Fabric",
            "adjustable headrest": "No",
            "max load capacity": "200 kg (sofa), 180 kg (bed)",
            "origin": "Made in India"
          },
          dimension: {
            "width": "190 cm",
            "height": "85 cm",
            "depth": "90 cm / 180 cm (extended)",
            "weight": "55 kg",
            "seat height": "42 cm",
            "leg height": "12 cm"
          },
          reviews: [
            "Excellent for small rooms, love the storage feature!",
            "Converts to bed very easily. Mattress is comfortable enough for guests.",
            "Looks modern and stylish. Sofa is firm and supportive.",
            "Setup took less than 30 minutes. Would buy again.",
            "Fabric is soft and hasn’t stained even with heavy use."
          ]
        },
        {
          id: "SF_7843",
          title: "Aristo Chair",
          price: 115000,
          description: "Aristo Chair is a velvet wing-back classic, perfect for reading corners and formal rooms. The high back and tufted details add a touch of British sophistication, while plush foam padding guarantees comfort.",
          sku: "ARI-2024-7843-WB",
          category: ["chair", "wing-back", "classic", "reading"],
          image: ["img--4a", "img--4b", "img--4c", "img--4d"],
          "large-description": [
            "The Aristo Chair captures timeless elegance with a tall winged back and deep button tufting in navy velvet. Built on a solid hardwood frame, it’s designed to be both a showpiece and a cozy seat for your reading nook or living room.",
            "Comfort is ensured by high-density foam cushioning, while the enveloping wings create a sense of privacy and luxury. Sturdy construction and brass nail head trim complete the refined look.",
            "It sits beautifully in libraries, bedrooms, or entryways. The navy velvet holds color and texture over time, making it a lasting addition to your décor."
          ],
          general: {
            "sales package": "1 Wing Back Chair, Care Instructions",
            "model number": "ARI-WIN-7843",
            "secondary material": "Solid Hardwood",
            "configuration": "Single Seater",
            "material": "Velvet",
            "color": "Royal Blue"
          },
          product: {
            "filling material": "High-Density Foam",
            "finish type": "Tufted Velvet",
            "adjustable headrest": "No",
            "max load capacity": "130 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "85 cm",
            "height": "110 cm",
            "depth": "80 cm",
            "weight": "28 kg",
            "seat height": "45 cm",
            "leg height": "15 cm"
          },
          reviews: [
            "Makes my office look upscale and feels great to sit in.",
            "Deep seat is ideal for reading. Velvet fabric feels premium.",
            "Just the right blend of firm and plush. Love the color!",
            "Arrived quickly, assembly was easy. Would recommend.",
            "Stunning appearance, perfect for corner of the lounge."
          ]
        },
        {
          id: "SF_7844",
          title: "Modu Set",
          price: 78000,
          tags: "hot",
          description: "Modu Set is a versatile six-piece ottoman collection for flexible living spaces. Arrange the ottomans for extra seating, lounging, or coffee table needs—each piece sturdy, comfy, and covered in easy-care fabric.",
          sku: "MOD-2024-7844-OS",
          category: ["ottoman", "modular", "versatile", "seating", "multi-functional"],
          image: ["img--5a", "img--5b", "img--5c", "img--5d"],
          "large-description": [
            "Revolutionize your living space with Modu Set. Each of the six ottomans can be configured together as a large coffee table, multiple seats, or a cozy lounging area. Use individually as footstools for guests or combine for game nights or casual gatherings.",
            "The high-density foam cushioning and durable performance fabric ensure comfort and long-lasting use. Hidden connecting mechanisms keep them secure in any arrangement, and the neutral grey color fits every décor.",
            "Lightweight yet sturdy, Modu Set adapts easily as your needs change—perfect for apartments, kid's rooms, or multipurpose living areas. Refresh your space endlessly with this smart, creative set."
          ],
          general: {
            "sales package": "6 Modular Ottomans, Connecting Hardware",
            "model number": "MOD-INF-7844",
            "secondary material": "High-Density Foam",
            "configuration": "Set of 6 Modular Pieces",
            "material": "Performance Fabric",
            "color": "Neutral Grey"
          },
          product: {
            "filling material": "High-Density Foam",
            "finish type": "Textured Fabric",
            "adjustable headrest": "Not Applicable",
            "max load capacity": "100 kg per ottoman",
            "origin": "Made in India"
          },
          dimension: {
            "width": "50 cm per piece",
            "height": "40 cm",
            "depth": "50 cm per piece",
            "weight": "6 kg per piece",
            "seat height": "40 cm",
            "leg height": "Not Applicable"
          },
          reviews: [
            "Love how easy it is to move and rearrange the pieces.",
            "Very practical, especially for hosting guests.",
            "Quality feels premium, and fabric is holding up well.",
            "Great for small spaces—works as both table and seats.",
            "Kids enjoy building little forts with the ottomans!"
          ]
        },
        {
          id: "SF_7845",
          title: "Nova Sofa",
          price: 184000,
          tags: "-30%",
          description: "Nova Sofa delivers plush comfort with durable woven upholstery, a sturdy hardwood frame, and deep cushions—an inviting centerpiece for family lounges and modern living rooms.",
          sku: "NOV-2024-7845-SF",
          category: ["sofa", "modern", "living-room", "comfort"],
          image: ["img--6a", "img--6b", "img--6c", "img--6d"],
          "large-description": [
            "The Nova Sofa brings style and lasting comfort to your living space. Its deep seating, plush backrest, and wide armrests make it ideal for lounging, while the neutral color and minimalist lines suit modern interiors.",
            "The sofa’s hardwood frame and high-density foam cushions guarantee years of support. Easy-to-clean upholstery resists daily wear, making Nova perfect for busy homes with kids or pets.",
            "Assembly is simple, and the lightweight design allows for repositioning when you refresh your space. Nova is perfect for relaxing, entertaining, or everyday movie nights."
          ],
          general: {
            "sales package": "1 Sofa, 3 Back Cushions, Assembly Kit",
            "model number": "NOV-MOD-7845",
            "secondary material": "Engineered Wood",
            "configuration": "Three Seater",
            "material": "Woven Polyfabric",
            "color": "Graphite Grey"
          },
          product: {
            "filling material": "High-Density Foam",
            "finish type": "Matte Woven Finish",
            "adjustable headrest": "No",
            "max load capacity": "250 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "210 cm",
            "height": "88 cm",
            "depth": "95 cm",
            "weight": "60 kg",
            "seat height": "42 cm",
            "leg height": "13 cm"
          },
          reviews: [
            "Extremely comfortable, easy to clean, looks modern.",
            "Supportive seat and love the color; fits my apartment perfectly.",
            "Cushions are plush and don’t sag with use.",
            "Big enough for our family, kids love movie night here!",
            "Assembly instructions were clear, and quality exceeds expectations."
          ]
        },
        {
          id: "SF_7846",
          title: "Echo Lounge",
          price: 69000,
          tags: "new",
          description: "Echo Lounge is a minimalist accent chair combining Scandinavian inspiration with ergonomic support. The solid oak frame and soft linen seat offer timeless appeal and comfort for any room.",
          sku: "ECH-2024-7846-CH",
          category: ["chair", "accent", "nordic", "modern"],
          image: ["img--7a", "img--7b", "img--7c", "img--7d"],
          "large-description": [
            "Echo Lounge brings a touch of Scandinavian calm to your home. The elegant oak frame, paired with gentle curves and a pale linen seat, makes this chair perfect for relaxing, reading, or casual seating anywhere.",
            "Its lightweight construction enables easy movement, while the ergonomic design provides lasting support during long periods of sitting. The natural wood finish and understated shape blend beautifully with most interior styles.",
            "Designed for versatility, Echo works as a side chair in the living room, a reading nook, or as extra seating in a study or bedroom."
          ],
          general: {
            "sales package": "1 Lounge Chair, Care Guide",
            "model number": "ECH-NOR-7846",
            "secondary material": "Solid Oak",
            "configuration": "Single Seater",
            "material": "Linen Blend",
            "color": "Natural Oak / Cream"
          },
          product: {
            "filling material": "Medium Firm Foam",
            "finish type": "Matte Wood Finish",
            "adjustable headrest": "No",
            "max load capacity": "110 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "72 cm",
            "height": "78 cm",
            "depth": "76 cm",
            "weight": "17 kg",
            "seat height": "41 cm",
            "leg height": "25 cm"
          },
          reviews: [
            "Beautiful Scandi look, very comfortable for reading.",
            "Well crafted, wood finish is smooth and natural.",
            "Chair is light but sturdy, perfect for my corner.",
            "Minimalist style matches my décor, and fabric is soft.",
            "Arrived on time, simple to put together."
          ]
        },
        {
          id: "SF_7847",
          title: "Prime Chair",
          price: 74000,
          description: "Prime Chair is a robust office chair with an ergonomic mesh back, adjustable arms, and memory foam seat. Enjoy breathable comfort and support all day in your study or workspace.",
          sku: "PRI-2024-7847-OC",
          category: ["chair", "office", "ergonomic", "workspace", "mesh"],
          image: ["img--8a", "img--8b", "img--8c", "img--8d"],
          "large-description": [
            "Prime Chair supports healthy posture with its contoured mesh back, built-in lumbar support, and adjustable seat height. The memory foam cushion eases pressure during long work sessions.",
            "The chair rotates 360°, offers smooth recline, and includes adjustable arms for customizable comfort. Its design is perfect for professional or home use.",
            "Durable casters and sturdy frame ensure stability even with daily use. Prime Chair’s simple look blends well in all modern workspaces."
          ],
          general: {
            "sales package": "1 Office Chair, Assembly Instructions",
            "model number": "PRI-OFC-7847",
            "secondary material": "Aluminum Base",
            "configuration": "Executive Chair",
            "material": "Mesh & Foam",
            "color": "Black"
          },
          product: {
            "filling material": "Memory Foam",
            "finish type": "Mesh Fabric",
            "adjustable headrest": "Yes",
            "max load capacity": "135 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "66 cm",
            "height": "120 cm",
            "depth": "64 cm",
            "weight": "20 kg",
            "seat height": "48-58 cm",
            "leg height": "Adjustable"
          },
          reviews: [
            "Great value, highly ergonomic for long work hours.",
            "Mesh stays cool, adjustment features work flawlessly.",
            "Simple assembly, rolls smoothly on all floor types.",
            "Seat is cushioned and comfortable for 8+ hours.",
            "Perfect chair for home or office desk."
          ]
        },
        {
          id: "SF_7848",
          title: "Opal Sofa",
          price: 117000,
          tags: "-20%",
          description: "Opal Sofa is a sleek two-seater, featuring contemporary lines, firm padding, and stain-resistant fabric. A modern solution for compact living or stylish guest seating.",
          sku: "OPA-2024-7848-SF",
          category: ["sofa", "compact", "modern", "living-room"],
          image: ["img--9a", "img--9b", "img--9c", "img--9d"],
          "large-description": [
            "Opal Sofa’s space-saving design allows for comfortable seating in smaller living rooms, bedrooms, or studios. Its minimalist profile and textured upholstery add instant sophistication.",
            "Firm but comfortable, the sofa features precisely stitched edges and strong support. The high-performance fabric resists stains and fading, making it suitable for busy households.",
            "Opal is easy to clean and maintain, making it a favorite for young professionals or as a stylish guest spot in larger homes."
          ],
          general: {
            "sales package": "1 Sofa, 2 Cushions",
            "model number": "OPA-CMP-7848",
            "secondary material": "Plywood Base",
            "configuration": "Two Seater",
            "material": "Polyester Fabric",
            "color": "Slate Blue"
          },
          product: {
            "filling material": "Medium Firm Foam",
            "finish type": "Stain Resistant",
            "adjustable headrest": "No",
            "max load capacity": "170 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "150 cm",
            "height": "78 cm",
            "depth": "85 cm",
            "weight": "38 kg",
            "seat height": "44 cm",
            "leg height": "10 cm"
          },
          reviews: [
            "Perfect for small flats and easy to clean.",
            "Firm, modern feel – looks great against my wall.",
            "Fabric feels durable and color is rich.",
            "Great as a guest sofa, surprisingly comfortable.",
            "Setup was quick, instructions were clear."
          ]
        },
        {
          id: "SF_7849",
          title: "Vega Recliner",
          price: 141000,
          tags: "hot",
          description: "Vega Recliner features a plush back, adjustable headrest, and smooth mechanism. Enjoy movie nights or relaxing afternoons in this soft and supportive modern recliner.",
          sku: "VEG-2024-7849-RC",
          category: ["chair", "recliner", "living-room", "comfort"],
          image: ["img--10a", "img--10b", "img--10c", "img--10d"],
          "large-description": [
            "Vega Recliner welcomes you with deep cushioning, ergonomic armrests, and a built-in headrest. Effortlessly recline for reading, napping, or watching TV in comfort.",
            "The durable steel frame and soft-touch microfiber ensure longevity, while the simple lever mechanism allows infinite adjustment of your lounging position.",
            "Easy to clean and scratch resistant, Vega is a practical and stylish choice for any home’s relaxation zone."
          ],
          general: {
            "sales package": "1 Recliner, Instruction Manual",
            "model number": "VEG-REC-7849",
            "secondary material": "Steel Frame",
            "configuration": "Single Seater",
            "material": "Microfiber",
            "color": "Dark Brown"
          },
          product: {
            "filling material": "Memory Foam & Polyfiber",
            "finish type": "Microfiber Finish",
            "adjustable headrest": "Yes",
            "max load capacity": "140 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "88 cm",
            "height": "105 cm",
            "depth": "96 cm",
            "weight": "42 kg",
            "seat height": "47 cm",
            "leg height": "14 cm"
          },
          reviews: [
            "Most comfortable chair I’ve owned! Reclines smoothly.",
            "Material is soft, easy to wipe clean, and feels high-end.",
            "Back support is excellent for long TV marathons.",
            "Well-packaged, arrived in perfect shape.",
            "Worth the investment for relaxation in our living room."
          ]
        }
      ]


    }
  },
  mutations,
  getters,
  actions
}
