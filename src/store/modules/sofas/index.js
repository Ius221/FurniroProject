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
          // tags: "hot",
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
        },
        {
          id: "SF_7850",
          title: "Crafty Stool",
          price: 45000,
          tags: "-10%",
          description: "Crafty Stool is a compact, handcrafted wooden stool with natural finish. Perfect for casual seating, footrest, or decor accent in modern and rustic interiors.",
          sku: "CRA-2025-7850-ST",
          category: ["stool", "wooden", "casual", "home"],
          image: ["img--11a", "img--11b", "img--11c", "img--11d"],
          liked: true,
          "large-description": [
            "The Crafty Stool features solid oak construction with a smooth, natural finish that highlights the grain. Its minimalist design fits in cozy corners or accompanies dining tables as extra seating.",
            "Lightweight yet sturdy, the wooden stool supports up to 100 kg and can be moved easily around the house. Its compact dimensions allow it to fit small spaces without sacrificing style or function.",
            "This versatile piece adds warmth and a handcrafted touch to interiors ranging from rustic farmhouse to modern minimalism. It also doubles as a footrest or a side table for books or plants."
          ],
          general: {
            "sales package": "1 Wooden Stool",
            "model number": "CRA-ST-7850",
            "secondary material": "Solid Oak",
            "configuration": "Single Seater",
            "material": "Natural Wood",
            "color": "Natural Oak"
          },
          product: {
            "filling material": "Not Applicable",
            "finish type": "Natural Matte Wood",
            "adjustable headrest": "No",
            "max load capacity": "100 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "32 cm",
            "height": "45 cm",
            "depth": "32 cm",
            "weight": "4 kg",
            "seat height": "45 cm",
            "leg height": "45 cm"
          },
          reviews: [
            "Simple, durable, and beautiful. Exactly what I wanted.",
            "Fits perfectly in my kitchen corner. Very sturdy for daily use.",
            "The wood grain is lovely and finish is smooth and natural.",
            "Compact but comfortable for short seating or resting feet.",
            "Great value for a handcrafted wood stool."
          ]
        },
        {
          id: "SF_7851",
          title: "Celeste Bench",
          price: 88000,
          description: "Celeste Bench is an elegantly designed wooden bench with cushioned seating. Ideal for dining halls, hallways, or entryway, it balances aesthetics with comfort.",
          sku: "CEL-2025-7851-BE",
          category: ["bench", "wood", "cushioned", "multi-purpose"],
          image: ["img--12a", "img--12b", "img--12c", "img--12d"],
          liked: false,
          "large-description": [
            "Designed with elegance and utility in mind, the Celeste Bench features a solid teak frame polished to a warm sheen, supporting a wide, padded seat upholstered in high-quality fabric.",
            "Its clean lines and slight curve on the backrest offer lumbar support, making it comfortable for longer seating periods. It is perfect for dining use, foyer seating, or as a decorative accent piece.",
            "Easy to match with various decor themes, Celeste complements modern and classic interiors alike. The cushioned top is plush yet firm, providing comfort while maintaining form."
          ],
          general: {
            "sales package": "1 Wooden Bench with Cushion",
            "model number": "CEL-BEN-7851",
            "secondary material": "Teak Wood",
            "configuration": "Bench with Backrest",
            "material": "Fabric Upholstery",
            "color": "Honey Brown"
          },
          product: {
            "filling material": "High-Density Foam",
            "finish type": "Polished Wood & Fabric",
            "adjustable headrest": "No",
            "max load capacity": "250 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "140 cm",
            "height": "85 cm",
            "depth": "40 cm",
            "weight": "18 kg",
            "seat height": "45 cm",
            "leg height": "40 cm"
          },
          reviews: [
            "Beautiful bench with great cushioning. Very sturdy.",
            "Perfect as an entryway seat; looks very refined.",
            "Comfortable and well-crafted. Delivery was on time.",
            "Bench is very durable and the wood finish is excellent.",
            "Cushions are supportive and fabric is soft to the touch."
          ]
        },
        {
          id: "SF_7852",
          title: "Lyra Recliner",
          price: 135000,
          tags: "hot",
          description: "Lyra Recliner features ergonomic design, adjustable footrest, and soft leather upholstery. Ideal for relaxing after a long day with smooth reclining control and excellent lumbar support.",
          sku: "LYR-2025-7852-RC",
          category: ["chair", "recliner", "leather", "living-room"],
          image: ["img--13a", "img--13b", "img--13c", "img--13d"],
          liked: true,
          "large-description": [
            "The Lyra Recliner combines luxury and functionality with supple leather upholstery and precision mechanics. An adjustable footrest and smooth tilt mechanism allow for multiple comfortable positions.",
            "Its high-density foam padding supports posture and enhances relaxation. The reclining action operates quietly and effortlessly, making it perfect for living room or home theater use.",
            "Lyra's elegant design, reinforced steel frame, and padded armrests make it a premium addition to your relaxation space offering durability and style."
          ],
          general: {
            "sales package": "1 Recliner Chair, Assembly Kit",
            "model number": "LYR-REC-7852",
            "secondary material": "Steel Frame",
            "configuration": "Single Seater Recliner",
            "material": "Leather",
            "color": "Cognac Brown"
          },
          product: {
            "filling material": "High-Density Foam",
            "finish type": "Leather",
            "adjustable headrest": "Yes",
            "max load capacity": "140 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "90 cm",
            "height": "105 cm",
            "depth": "98 cm",
            "weight": "45 kg",
            "seat height": "48 cm",
            "leg height": "15 cm"
          },
          reviews: [
            "Super comfortable and sturdy recliner with great leather.",
            "Smooth action, perfect for relaxing and reading.",
            "Looks great in my living room and very easy to assemble.",
            "Highly recommended for anyone wanting a quality recliner.",
            "Materials and build quality justify the price."
          ]
        },
        {
          id: "SF_7853",
          title: "Orion Chair",
          price: 69000,
          description: "Orion Chair is a sleek, compact office chair with breathable mesh back, cushioned seat, and adjustable height. Supports posture and comfort during long work hours.",
          sku: "ORI-2025-7853-OC",
          category: ["chair", "office", "compact", "mesh"],
          image: ["img--14a", "img--14b", "img--14c", "img--14d"],
          liked: false,
          "large-description": [
            "The Orion Chair improves workspace comfort with a lightweight, modern design. The ventilated mesh back enhances airflow, preventing heat build-up during extended use.",
            "Its adjustable pneumatic height and tilt function make it adaptable to various desks and tasks, while padded seat cushions provide lasting comfort without bulk.",
            "Orion fits into home offices and professional setups alike, balancing ergonomic needs with a small footprint."
          ],
          general: {
            "sales package": "1 Office Chair, Assembly Instructions",
            "model number": "ORI-MSH-7853",
            "secondary material": "Mesh Fabric & Plastic",
            "configuration": "Single Seater",
            "material": "Mesh & Foam",
            "color": "Black"
          },
          product: {
            "filling material": "High-Density Foam",
            "finish type": "Mesh Fabric",
            "adjustable headrest": "No",
            "max load capacity": "120 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "62 cm",
            "height": "115 cm",
            "depth": "62 cm",
            "weight": "16 kg",
            "seat height": "42-52 cm",
            "leg height": "Adjustable"
          },
          reviews: [
            "Good value office chair with decent comfort.",
            "Lightweight and easy to move around workspace.",
            "The mesh is breathable and keeps me cool while working.",
            "Adjustments are smooth and effective for my height.",
            "Perfect for small spaces."
          ]
        },
        {
          id: "SF_7854",
          title: "Zephyr Sofa",
          price: 158000,
          tags: "new",
          description: "Zephyr Sofa is a luxurious three-seat sofa with plush cushions, high-quality fabric, and stylish tufted back. Perfect for modern and traditional interiors seeking comfort and elegance.",
          sku: "ZEP-2025-7854-SF",
          category: ["sofa", "luxury", "living-room", "tufted"],
          image: ["img--15a", "img--15b", "img--15c", "img--15d"],
          liked: true,
          "large-description": [
            "The Zephyr Sofa combines classic tufted styling with contemporary comfort. Its dense foam cushions and soft textured upholstery offer a sumptuous seating experience for family and guests.",
            "A sturdy hardwood frame and solid craftsmanship ensure durability. The sofa’s neutral color and timeless design suit a variety of interior aesthetics, from modern chic to elegant traditional.",
            "Zephyr is designed for those who appreciate craftsmanship, comfort, and subtle sophistication in their living spaces."
          ],
          general: {
            "sales package": "1 Three-Seater Sofa, 3 Cushions",
            "model number": "ZEP-THR-7854",
            "secondary material": "Hardwood Frame",
            "configuration": "Three Seater",
            "material": "Premium Fabric",
            "color": "Light Grey"
          },
          product: {
            "filling material": "High Resilience Foam",
            "finish type": "Tufted Fabric",
            "adjustable headrest": "No",
            "max load capacity": "280 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "210 cm",
            "height": "90 cm",
            "depth": "95 cm",
            "weight": "72 kg",
            "seat height": "45 cm",
            "leg height": "12 cm"
          },
          reviews: [
            "Beautiful and comfortable sofa with perfect cushioning.",
            "Excellent fabric quality and looks great in my living room.",
            "Sturdy and well-made, feels like a luxury piece.",
            "Easy to maintain and clean, highly recommended.",
            "The tufting detail adds a fantastic touch of style."
          ]
        },
        {
          id: "SF_7855",
          title: "Orchid Chair",
          price: 73000,
          tags: "hot",
          description: "Orchid Chair boasts elegant curves with plush velvet upholstery and solid walnut legs. Ideal for living rooms or bedrooms, it combines style and comfort effortlessly.",
          sku: "ORC-2025-7855-CH",
          category: ["chair", "velvet", "living-room", "modern"],
          image: ["img--16a", "img--16b", "img--16c", "img--16d"],
          liked: true,
          "large-description": [
            "The Orchid Chair captivates with its classic silhouette accented by sumptuous velvet fabric and warm wooden legs. Designed for comfort and aesthetic appeal, this chair elevates any interior setting.",
            "Robust walnut legs ensure long-lasting support and stability. The velvet upholstery is soft to the touch and comes in a rich wine color, adding a burst of luxury to your living space.",
            "Perfect for cozy corners, reading nooks, or as an accent piece, Orchid Chair enriches your home decor while providing a comfortable seat."
          ],
          general: {
            "sales package": "1 Armchair, Care Guide",
            "model number": "ORC-LUX-7855",
            "secondary material": "Solid Walnut",
            "configuration": "Single Seater",
            "material": "Velvet Upholstery",
            "color": "Wine Red"
          },
          product: {
            "filling material": "High-Density Foam",
            "finish type": "Soft Velvet",
            "adjustable headrest": "No",
            "max load capacity": "125 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "80 cm",
            "height": "90 cm",
            "depth": "75 cm",
            "weight": "25 kg",
            "seat height": "47 cm",
            "leg height": "18 cm"
          },
          reviews: [
            "Soft velvet and sturdy legs, very comfortable chair!",
            "The wine color adds a perfect pop to my living room.",
            "Beautiful design, high quality craftsmanship.",
            "Easy to assemble and looks great.",
            "Ideal for relaxing with a good book."
          ]
        },
        {
          id: "SF_7856",
          title: "Pinnacle Sofa",
          price: 198000,
          tags: "-15%",
          description: "Pinnacle Sofa is a sleek and spacious modern three-seater crafted with premium leather upholstery and durable hardwood frame. A refined centerpiece for luxury living rooms.",
          sku: "PIN-2025-7856-SF",
          category: ["sofa", "leather", "luxury", "living-room"],
          image: ["img--17a", "img--17b", "img--17c", "img--17d"],
          liked: false,
          "large-description": [
            "The Pinnacle Sofa combines contemporary design with enduring comfort through plush leather seating and a tailored finish. Its generous dimensions make it an excellent choice for large living spaces.",
            "Crafted with a hardwood frame and premium cushioning, Pinnacle withstands daily use while maintaining its luxurious appearance. Its neutral beige tone blends seamlessly with multiple décor styles.",
            "Perfect for entertaining guests or unwinding with family, this sofa offers both style and functionality, with easy maintenance and elegant charm."
          ],
          general: {
            "sales package": "1 Three-Seater Sofa, 3 Cushions",
            "model number": "PIN-LTH-7856",
            "secondary material": "Hardwood Frame",
            "configuration": "Three Seater",
            "material": "Genuine Leather",
            "color": "Beige"
          },
          product: {
            "filling material": "High Resilience Foam",
            "finish type": "Leather",
            "adjustable headrest": "No",
            "max load capacity": "280 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "215 cm",
            "height": "85 cm",
            "depth": "90 cm",
            "weight": "78 kg",
            "seat height": "46 cm",
            "leg height": "12 cm"
          },
          reviews: [
            "Luxurious leather, very comfortable and durable.",
            "Perfect size for our family room.",
            "High quality and looks very elegant.",
            "Cushions retain shape well over time.",
            "Assembly was smooth and quick."
          ]
        },
        {
          id: "SF_7857",
          title: "Vivid Ottoman",
          price: 49000,
          description: "Vivid Ottoman is a soft, square ottoman covered in bright fabric with sturdy wooden legs. It doubles as extra seating or a stylish footrest.",
          sku: "VIV-2025-7857-OT",
          category: ["ottoman", "fabric", "seating", "footrest"],
          image: ["img--18a", "img--18b", "img--18c", "img--18d"],
          liked: true,
          "large-description": [
            "The Vivid Ottoman combines vibrant color choice with practical design, offering both comfort and function. Upholstered in high-quality fabric, it adds a cheerful accent to living or bedroom spaces.",
            "Its solid wooden legs provide stability, while the plush cushion supports relaxed seating or comfortable leg elevation.",
            "Lightweight and versatile, Vivid is perfect for compact spaces or as a flexible seating option that adds personality and comfort."
          ],
          general: {
            "sales package": "1 Ottoman",
            "model number": "VIV-OTT-7857",
            "secondary material": "Solid Wood",
            "configuration": "Single Piece",
            "material": "Fabric Upholstery",
            "color": "Bright Red"
          },
          product: {
            "filling material": "Polyurethane Foam",
            "finish type": "Fabric",
            "adjustable headrest": "No",
            "max load capacity": "100 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "50 cm",
            "height": "40 cm",
            "depth": "50 cm",
            "weight": "7 kg",
            "seat height": "40 cm",
            "leg height": "15 cm"
          },
          reviews: [
            "Bright color instantly lifts the room.",
            "Good quality wood and cushioning.",
            "Perfect size for footrest or extra seat.",
            "Fabric is soft and easy to clean.",
            "A great addition to my living room."
          ]
        },
        {
          id: "SF_7858",
          title: "Aura Chair",
          price: 65000,
          description: "Aura Chair features a modern minimalist design with padded seat and back in breathable fabric. Slim metal legs add stability while maintaining a sleek look.",
          sku: "AUR-2025-7858-CH",
          category: ["chair", "minimalist", "modern", "dining"],
          image: ["img--19a", "img--19b", "img--19c", "img--19d"],
          liked: false,
          "large-description": [
            "Offering understated elegance, the Aura Chair suits contemporary dining areas or home offices. Its padded seat and backrest provide comfort without bulk.",
            "The metal frame is coated for durability and resistance to scuffs. Light and sturdy, Aura can be moved easily and cleaned without hassle.",
            "Its neutral tone and clean lines allow it to blend seamlessly with various decor themes, enhancing your interior with minimal effort."
          ],
          general: {
            "sales package": "1 Chair",
            "model number": "AUR-MIN-7858",
            "secondary material": "Metal Frame",
            "configuration": "Single Seater",
            "material": "Fabric Upholstery",
            "color": "Light Grey"
          },
          product: {
            "filling material": "Foam",
            "finish type": "Fabric",
            "adjustable headrest": "No",
            "max load capacity": "120 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "55 cm",
            "height": "80 cm",
            "depth": "55 cm",
            "weight": "9 kg",
            "seat height": "45 cm",
            "leg height": "35 cm"
          },
          reviews: [
            "Simple and elegant design.",
            "Very comfortable for dining and office work.",
            "Sturdy and easy to clean fabric.",
            "Arrived quickly, assembly was easy.",
            "Fits well with all my furniture."
          ]
        },
        {
          id: "SF_7859",
          title: "Delta Sofa",
          price: 178000,
          tags: "new",
          description: "Delta Sofa blends plush cushions with firm support and premium fabric upholstery. Spacious three-seater perfect for living rooms that combine comfort with modern style.",
          sku: "DEL-2025-7859-SF",
          category: ["sofa", "modern", "living-room", "comfort"],
          image: ["img--20a", "img--20b", "img--20c", "img--20d"],
          liked: true,
          "large-description": [
            "The Delta Sofa offers comfort through layers of high-resilience foam and soft polyester fabric in a modern, sleek finishing touch. Its spacious seating invites relaxation.",
            "Crafted on a sturdy hardwood frame, Delta ensures long-term durability while maintaining design integrity. Its neutral beige color pairs well with many interior styles.",
            "Ideal for daily family use or relaxing evenings, it balances aesthetic appeal with functional comfort, suitable for a variety of living spaces."
          ],
          general: {
            "sales package": "1 Three-Seater Sofa, 3 Cushions",
            "model number": "DEL-THR-7859",
            "secondary material": "Hardwood Frame",
            "configuration": "Three Seater",
            "material": "Polyester Fabric",
            "color": "Beige"
          },
          product: {
            "filling material": "High Resilience Foam",
            "finish type": "Polyester Fabric",
            "adjustable headrest": "No",
            "max load capacity": "280 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "210 cm",
            "height": "85 cm",
            "depth": "90 cm",
            "weight": "70 kg",
            "seat height": "45 cm",
            "leg height": "12 cm"
          },
          reviews: [
            "Comfortable and stylish sofa.",
            "Fabric feels durable and soft.",
            "Good support for everyday seating.",
            "Arrived well packaged and on time.",
            "Highly recommend for modern homes."
          ]
        },
        {
          id: "SF_7860",
          title: "Bliss Chair",
          price: 67000,
          tags: "new",
          description: "Bliss Chair combines sleek metal legs with soft velvet upholstery to offer modern elegance and comfort, perfect for living rooms or dressing areas.",
          sku: "BLI-2025-7860-CH",
          category: ["chair", "velvet", "modern", "living-room"],
          image: ["img--21a", "img--21b", "img--21c", "img--21d"],
          liked: true,
          "large-description": [
            "The Bliss Chair uplifts your space with its plush velvet fabric and polished metal legs. Ideal for modern interiors, it offers both style and comfort in one compact package.",
            "Its ergonomic design supports natural sitting posture while providing softness that invites relaxation during conversations or reading.",
            "Durable and lightweight, it suits diverse uses including occasional seating or occasional desk chair."
          ],
          general: {
            "sales package": "1 Velvet Chair, Take Care Guide",
            "model number": "BLI-VEL-7860",
            "secondary material": "Metal Legs",
            "configuration": "Single Seater",
            "material": "Velvet Upholstery",
            "color": "Dusty Pink"
          },
          product: {
            "filling material": "High Density Foam",
            "finish type": "Soft Velvet",
            "adjustable headrest": "No",
            "max load capacity": "125 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "78 cm",
            "height": "88 cm",
            "depth": "75 cm",
            "weight": "22 kg",
            "seat height": "46 cm",
            "leg height": "18 cm"
          },
          reviews: [
            "Excellent chair for a pop of color!",
            "Soft and comfy, perfect for my lounge area.",
            "Lightweight and stylish.",
            "Very good quality velvet upholstery.",
            "Assembly was straightforward."
          ]
        },
        {
          id: "SF_7861",
          title: "Terra Sofa",
          price: 160000,
          tags: "-20%",
          description: "Terra Sofa is a sophisticated three-seater featuring linen fabric upholstery with cushioned seats on a hardwood frame. Perfect for modern and classic living rooms.",
          sku: "TER-2025-7861-SF",
          category: ["sofa", "linen", "modern", "classic"],
          image: ["img--22a", "img--22b", "img--22c", "img--22d"],
          liked: false,
          "large-description": [
            "The Terra Sofa balances comfort and style with soft linen upholstery and plush cushioning. It fits perfectly in both contemporary and traditional settings.",
            "Durably built with solid hardwood, it supports lasting use without compromising aesthetics or comfort.",
            "Its neutral hues blend easily with various décors, making it a versatile centerpiece for your living room."
          ],
          general: {
            "sales package": "1 Three-Seater Sofa, 3 Cushions",
            "model number": "TER-LIN-7861",
            "secondary material": "Hardwood Frame",
            "configuration": "Three Seater",
            "material": "Linen Fabric",
            "color": "Soft Taupe"
          },
          product: {
            "filling material": "High Resilience Foam",
            "finish type": "Linen Fabric",
            "adjustable headrest": "No",
            "max load capacity": "280 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "215 cm",
            "height": "90 cm",
            "depth": "92 cm",
            "weight": "75 kg",
            "seat height": "45 cm",
            "leg height": "12 cm"
          },
          reviews: [
            "Soft fabric with very comfortable seating.",
            "Looks great in living room, a classic staple.",
            "Sturdy and well-made sofa.",
            "Perfect for both modern and traditional spaces.",
            "Easy maintenance and durable fabric."
          ]
        },
        {
          id: "SF_7862",
          title: "Nexa Chair",
          price: 70000,
          description: "Nexa Chair offers ergonomic back support with breathable mesh and a padded seat for long sitting comfort. Ideal for office or home study.",
          sku: "NEX-2025-7862-OC",
          category: ["chair", "office", "ergonomic", "mesh"],
          image: ["img--23a", "img--23b", "img--23c", "img--23d"],
          liked: true,
          "large-description": [
            "Nexa Chair features breathable mesh to keep users cool and comfortable, an important feature during long working hours.",
            "Adjustable height and tilt functions provide customization for optimal ergonomic support, improving posture and reducing fatigue.",
            "Its sleek design makes it a great addition to any modern office or home workspace."
          ],
          general: {
            "sales package": "1 Office Chair, Assembly Manual",
            "model number": "NEX-MSH-7862",
            "secondary material": "Mesh & Plastic",
            "configuration": "Single Seater",
            "material": "Mesh Fabric",
            "color": "Black"
          },
          product: {
            "filling material": "High Density Foam",
            "finish type": "Mesh",
            "adjustable headrest": "No",
            "max load capacity": "130 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "64 cm",
            "height": "118 cm",
            "depth": "63 cm",
            "weight": "18 kg",
            "seat height": "44-54 cm",
            "leg height": "Adjustable"
          },
          reviews: [
            "Very comfortable for desk work.",
            "Breathable mesh keeps me cool.",
            "Easy to adjust and assemble.",
            "Fits well in home office.",
            "Good build quality for price."
          ]
        },
        {
          id: "SF_7863",
          title: "Opus Sofa",
          price: 122000,
          tags: "hot",
          description: "Opus Sofa combines classic tufted design with modern comfort, upholstered in durable fabric with deep cushions suitable for all day lounging.",
          sku: "OPU-2025-7863-SF",
          category: ["sofa", "tufted", "classic", "living-room"],
          image: ["img--24a", "img--24b", "img--24c", "img--24d"],
          liked: false,
          "large-description": [
            "Opus Sofa merges traditional elegance with contemporary comfort featuring tufted backs and plush foam cushions for excellent support.",
            "Its durable fabric is designed to withstand daily wear while providing a soft seating experience.",
            "Suitable for formal living rooms or cozy family spaces, Opus includes quality craftsmanship and timeless style."
          ],
          general: {
            "sales package": "1 Three-Seater Sofa, 2 Cushions",
            "model number": "OPU-TUF-7863",
            "secondary material": "Hardwood Frame",
            "configuration": "Three Seater",
            "material": "Fabric Upholstery",
            "color": "Muted Blue"
          },
          product: {
            "filling material": "High Resilience Foam",
            "finish type": "Textured Fabric",
            "adjustable headrest": "No",
            "max load capacity": "270 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "208 cm",
            "height": "92 cm",
            "depth": "89 cm",
            "weight": "70 kg",
            "seat height": "44 cm",
            "leg height": "12 cm"
          },
          reviews: [
            "The tufting adds a classy touch.",
            "Very comfortable cushions for long sitting.",
            "Fabric is durable and easy to maintain.",
            "Fits well with both modern and traditional rooms.",
            "Sturdy and quality sofa overall."
          ]
        },
        {
          id: "SF_7864",
          title: "Frost Chair",
          price: 68000,
          tags: "-15%",
          description: "Frost Chair is a minimalist metal frame chair with comfy, padded fabric seat and a gentle curve backrest, perfect for stylish dining areas or office spaces.",
          sku: "FRO-2025-7864-CH",
          category: ["chair", "minimalist", "dining", "metal"],
          image: ["img--25a", "img--25b", "img--25c", "img--25d"],
          liked: true,
          "large-description": [
            "The Frost Chair blends modern metal architecture and cushioned fabric seating for a sleek yet comfortable experience.",
            "Its ergonomic backrest supports users through prolonged sitting, and the compact profile fits well into smaller rooms or dining sets.",
            "Coated metal legs resist scuffs while upholstery fabric offers a soft texture that complements diverse interiors."
          ],
          general: {
            "sales package": "1 Dining Chair",
            "model number": "FRO-DIN-7864",
            "secondary material": "Metal Frame",
            "configuration": "Single Seater",
            "material": "Fabric Upholstery",
            "color": "Light Grey"
          },
          product: {
            "filling material": "High Density Foam",
            "finish type": "Fabric Upholstery",
            "adjustable headrest": "No",
            "max load capacity": "120 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "57 cm",
            "height": "82 cm",
            "depth": "55 cm",
            "weight": "10 kg",
            "seat height": "46 cm",
            "leg height": "36 cm"
          },
          reviews: [
            "Stylish and solid chair.",
            "Very suitable for dining and office.",
            "Simple assembly and great quality.",
            "Cushions are supportive and comfortable.",
            "Metal frame is sturdy and well-made."
          ]
        },
        {
          id: "SF_7865",
          title: "Mira Sofa",
          price: 132000,
          tags: "new",
          description: "Mira Sofa is a plush two-seater with soft velvet upholstery and elegant wooden legs. Its compact design fits perfectly in cozy living spaces or bedrooms.",
          sku: "MIR-2025-7865-SF",
          category: ["sofa", "velvet", "two-seater", "living-room"],
          image: ["img--26a", "img--26b", "img--26c", "img--26d"],
          liked: true,
          "large-description": [
            "The Mira Sofa combines luxury and space-saving design, making it ideal for apartments or intimate seating areas. Velvet upholstery offers softness and style.",
            "Its solid wood legs provide durability and a classic finish. The firm but comfortable cushions support posture and long sitting periods.",
            "Mira looks elegant alongside modern decor and is easy to maintain with its stain-resistant fabric."
          ],
          general: {
            "sales package": "1 Sofa, 2 Cushions",
            "model number": "MIR-TWO-7865",
            "secondary material": "Solid Wood",
            "configuration": "Two Seater",
            "material": "Velvet",
            "color": "Soft Pink"
          },
          product: {
            "filling material": "High Resilience Foam",
            "finish type": "Velvet Upholstery",
            "adjustable headrest": "No",
            "max load capacity": "180 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "150 cm",
            "height": "85 cm",
            "depth": "90 cm",
            "weight": "40 kg",
            "seat height": "43 cm",
            "leg height": "15 cm"
          },
          reviews: [
            "Lovely velvet fabric, very comfortable.",
            "Perfect size for my bedroom nook.",
            "Sturdy build and stylish design.",
            "Easy to clean and maintain.",
            "Great customer service and delivery."
          ]
        },
        {
          id: "SF_7866",
          title: "Pulse Chair",
          price: 62000,
          description: "Pulse Chair features a contemporary metal frame with padded fabric seating and ergonomic backrest, ideal for dining or office setups.",
          sku: "PUL-2025-7866-CH",
          category: ["chair", "metal", "office", "dining"],
          image: ["img--27a", "img--27b", "img--27c", "img--27d"],
          liked: false,
          "large-description": [
            "Modern design meets functionality in the Pulse Chair, constructed with a durable metal frame and cushioned seat for lasting comfort.",
            "Its ergonomic backrest supports posture during extended use, making it a versatile choice for dining rooms or workspaces.",
            "The sleek silhouette complements various decor styles, while the padded fabric upholstery adds softness and visual appeal."
          ],
          general: {
            "sales package": "1 Chair",
            "model number": "PUL-MET-7866",
            "secondary material": "Metal Frame",
            "configuration": "Single Seater",
            "material": "Fabric Upholstery",
            "color": "Charcoal"
          },
          product: {
            "filling material": "Foam Padding",
            "finish type": "Fabric",
            "adjustable headrest": "No",
            "max load capacity": "120 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "54 cm",
            "height": "80 cm",
            "depth": "56 cm",
            "weight": "11 kg",
            "seat height": "45 cm",
            "leg height": "35 cm"
          },
          reviews: [
            "Good chair for the price.",
            "Comfortable for dining and work.",
            "Metal frame feels durable.",
            "Fabric is soft and breathable.",
            "Simple but stylish design."
          ]
        },
        {
          id: "SF_7867",
          title: "Cielo Ottoman",
          price: 53000,
          tags: "-10%",
          description: "Cielo Ottoman is a cozy square ottoman with soft tufted fabric and wooden legs, perfect for extra seating or as a footrest in living rooms.",
          sku: "CIE-2025-7867-OT",
          category: ["ottoman", "tufted", "seating", "living-room"],
          image: ["img--28a", "img--28b", "img--28c", "img--28d"],
          liked: true,
          "large-description": [
            "The Cielo Ottoman offers soft support with high-density foam cushioned inside tufted fabric upholstery. Its compact design fits perfectly alongside sofas or chairs.",
            "The sturdy wooden legs provide reliable support, while the tufted detailing adds a classic and elegant look suitable for various decor styles.",
            "It serves as an ideal footrest or extra guest seating, enhancing comfort and functionality in your living space."
          ],
          general: {
            "sales package": "1 Ottoman",
            "model number": "CIE-OTT-7867",
            "secondary material": "Solid Wood",
            "configuration": "Single Piece",
            "material": "Fabric Upholstery",
            "color": "Cream"
          },
          product: {
            "filling material": "High-Density Foam",
            "finish type": "Textured Fabric",
            "adjustable headrest": "No",
            "max load capacity": "100 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "55 cm",
            "height": "42 cm",
            "depth": "55 cm",
            "weight": "8 kg",
            "seat height": "42 cm",
            "leg height": "14 cm"
          },
          reviews: [
            "Comfortable ottoman that enhances my living room.",
            "Elegant tufted design, matches well with sofa.",
            "Sturdy legs and soft cushion, perfect footrest.",
            "Easy to move around and feels durable.",
            "Great purchase, quality fabric and build."
          ]
        },
        {
          id: "SF_7868",
          title: "Luna Sofa",
          price: 172000,
          description: "Luna Sofa is a plush, spacious three-seater with soft microfiber upholstery and classic button tufting on the backrest. Its sturdy frame ensures longtime reliability.",
          sku: "LUN-2025-7868-SF",
          category: ["sofa", "microfiber", "tufted", "living-room"],
          image: ["img--29a", "img--29b", "img--29c", "img--29d"],
          liked: false,
          "large-description": [
            "Luna Sofa features elegant button tufting combined with dense cushioning for firm yet comfortable seating.",
            "Microfiber fabric offers stain resistance and soft texture, making this sofa suitable for families and pet owners.",
            "Built with durable hardwood framing, Luna promises years of wear resistance and support, while its neutral tone complements various decor styles."
          ],
          general: {
            "sales package": "1 Sofa, 3 Cushions",
            "model number": "LUN-MIC-7868",
            "secondary material": "Hardwood Frame",
            "configuration": "Three Seater",
            "material": "Microfiber Upholstery",
            "color": "Light Beige"
          },
          product: {
            "filling material": "High Resilience Foam",
            "finish type": "Microfiber Fabric",
            "adjustable headrest": "No",
            "max load capacity": "275 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "210 cm",
            "height": "88 cm",
            "depth": "93 cm",
            "weight": "73 kg",
            "seat height": "44 cm",
            "leg height": "13 cm"
          },
          reviews: [
            "Soft and durable microfiber fabric.",
            "Classic tufting with comfortable cushions.",
            "Strong frame and quality build.",
            "Easy to clean and maintain.",
            "Great sofa for families."
          ]
        },
        {
          id: "SF_7869",
          title: "Axis Chair",
          price: 69000,
          tags: "hot",
          description: "Axis Chair is a streamlined office chair with ergonomic mesh back, adjustable armrests, and memory foam seat for all-day comfort and support.",
          sku: "AXI-2025-7869-OC",
          category: ["chair", "office", "ergonomic", "mesh"],
          image: ["img--30a", "img--30b", "img--30c", "img--30d"],
          liked: true,
          "large-description": [
            "The Axis Chair offers ergonomic support with its breathable mesh back and padded memory foam seat, adaptable for long work or gaming sessions.",
            "Fully adjustable armrests, height, and tilt allow customized comfort, encouraging better posture and reducing fatigue.",
            "The sleek black design fits professional workspaces or home offices, balancing function with style."
          ],
          general: {
            "sales package": "1 Office Chair, Assembly Guide",
            "model number": "AXI-ERG-7869",
            "secondary material": "Mesh Fabric & Plastic",
            "configuration": "Single Seater",
            "material": "Mesh & Foam",
            "color": "Black"
          },
          product: {
            "filling material": "Memory Foam",
            "finish type": "Mesh Upholstery",
            "adjustable headrest": "Yes",
            "max load capacity": "140 kg",
            "origin": "Made in India"
          },
          dimension: {
            "width": "67 cm",
            "height": "120 cm",
            "depth": "65 cm",
            "weight": "21 kg",
            "seat height": "45-55 cm",
            "leg height": "Adjustable"
          },
          reviews: [
            "Very comfortable and supportive chair.",
            "Great ergonomic features, easy to customize.",
            "Breathable back keeps me cool all day.",
            "Modern design fits well in my office.",
            "Simple to assemble with clear instructions."
          ]
        }
      ]
    }
  },
  mutations,
  getters,
  actions
}
