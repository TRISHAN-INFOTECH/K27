export const MENU_ITEMS = [
  // Chaat
  { id: 1, name: "Pani Puri (8 pc)", description: "Crisp puris, spiced mint water, tamarind, potato-chana masala.", price: 99, category: "Chaat", tags: ["veg", "spicy", "popular"], recommended: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=60&auto=format&fit=crop" },
  { id: 2, name: "Aloo Tikki Chaat", description: "Griddled potato tikki, curd, chutneys, pomegranate, sev.", price: 129, category: "Chaat", tags: ["veg", "popular"], recommended: true, image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&q=60&auto=format&fit=crop" },
  { id: 3, name: "Vegan Samosa Chaat", description: "Crushed samosa, chole, onions, vegan mint & tamarind chutney.", price: 139, category: "Chaat", tags: ["vegan", "spicy"], recommended: false, image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600&q=60&auto=format&fit=crop" },
  { id: 4, name: "Dahi Puri", description: "Cool curd, potato, three chutneys, coriander & crunchy sev.", price: 119, category: "Chaat", tags: ["veg"], recommended: false, image: "https://images.unsplash.com/photo-1610508500445-a4592435e27e?w=600&q=60&auto=format&fit=crop" },
  // Sandwiches
  { id: 5, name: "Veg Grilled Sandwich", description: "Triple layer, mint mayo, beet-carrot-cucumber, grilled golden.", price: 149, category: "Sandwiches", tags: ["veg", "popular"], recommended: true, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=60&auto=format&fit=crop" },
  { id: 6, name: "Vegan Paneer Tikka Sandwich", description: "Smoky tofu-paneer tikka, vegan mayo, sourdough toast.", price: 179, category: "Sandwiches", tags: ["vegan", "spicy"], recommended: false, image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600&q=60&auto=format&fit=crop" },
  { id: 7, name: "Corn Mayo Sandwich", description: "Creamy corn, capsicum, cracked pepper, soft toasted bread.", price: 139, category: "Sandwiches", tags: ["veg"], recommended: false, image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&q=60&auto=format&fit=crop" },
  // Pizza
  { id: 8, name: "Margherita Blast", description: "San Marzano tomato, mozzarella, basil, cold-pressed olive oil.", price: 249, category: "Pizza", tags: ["veg", "popular"], recommended: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=60&auto=format&fit=crop" },
  { id: 9, name: "Vegan Farmhouse Pizza", description: "Vegan cheese, mushrooms, peppers, onions, oregano dust.", price: 299, category: "Pizza", tags: ["vegan"], recommended: true, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=60&auto=format&fit=crop" },
  { id: 10, name: "Paneer Tikka Pizza", description: "Fiery paneer tikka, makhani base, pickled onions, coriander.", price: 299, category: "Pizza", tags: ["veg", "spicy", "popular"], recommended: true, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=60&auto=format&fit=crop" },
  // Pasta
  { id: 11, name: "White Sauce Pasta", description: "Silky bechamel, exotic veggies, garlic butter, parmesan.", price: 229, category: "Pasta", tags: ["veg", "popular"], recommended: false, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=60&auto=format&fit=crop" },
  { id: 12, name: "Arrabbiata Pasta (Vegan)", description: "Spicy tomato-basil, garlic, olive oil, no dairy.", price: 219, category: "Pasta", tags: ["vegan", "spicy"], recommended: false, image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=600&q=60&auto=format&fit=crop" },
  { id: 13, name: "Pesto Basil Pasta", description: "Fresh basil pesto, pine nuts, cherry tomatoes, olive oil.", price: 259, category: "Pasta", tags: ["veg"], recommended: true, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=60&auto=format&fit=crop" },
  // Garlic Bread
  { id: 14, name: "Classic Garlic Bread", description: "Buttery, garlicky, oregano & chilli flakes — wood-oven baked.", price: 129, category: "Garlic Bread", tags: ["veg"], recommended: false, image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&q=60&auto=format&fit=crop" },
  { id: 15, name: "Cheesy Garlic Bread Supreme", description: "Loaded mozzarella, sweet corn, jalapeños, garlic butter.", price: 179, category: "Garlic Bread", tags: ["veg", "popular", "spicy"], recommended: true, image: "https://images.unsplash.com/photo-1619531040576-f9416740661b?w=600&q=60&auto=format&fit=crop" },
  // Drinks
  { id: 16, name: "Mango Lassi", description: "Alphonso mango, creamy curd, cardamom, saffron strand.", price: 129, category: "Drinks", tags: ["veg", "popular"], recommended: true, image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=60&auto=format&fit=crop" },
  { id: 17, name: "Vegan Cold Coffee", description: "Slow-brewed, oat milk, jaggery, cocoa dust.", price: 149, category: "Drinks", tags: ["vegan"], recommended: false, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=60&auto=format&fit=crop" },
  { id: 18, name: "Masala Shikanji", description: "Nimbu cooler, roasted jeera, mint, black salt.", price: 79, category: "Drinks", tags: ["vegan"], recommended: false, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=60&auto=format&fit=crop" },
  // Desserts
  { id: 19, name: "Sizzling Brownie", description: "Warm walnut brownie, vanilla scoop, hot chocolate pour.", price: 179, category: "Desserts", tags: ["veg", "popular"], recommended: true, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=60&auto=format&fit=crop" },
  { id: 20, name: "Vegan Coconut Payasam", description: "Coconut milk kheer, jaggery, cardamom, toasted nuts.", price: 139, category: "Desserts", tags: ["vegan"], recommended: false, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=60&auto=format&fit=crop" },
];

export const CATEGORIES = ["All", "Chaat", "Sandwiches", "Pizza", "Pasta", "Garlic Bread", "Drinks", "Desserts"];
export const FILTERS = ["All", "Veg", "Vegan", "Spicy", "Popular"];
