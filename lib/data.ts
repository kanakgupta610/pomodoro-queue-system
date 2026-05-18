export const HERO_SCENES = [
  {
    video: "/assets/v1.mp4",
    title: "Step inside the door",
    text: "Bandra's 16th Road. The arched green gate. The smell of fresh basil.",
  },
  {
    video: "/assets/v2.mp4",
    title: "Watch the pasta come alive",
    text: "Hand-rolled. Hand-shaped. The dough kneaded fresh every morning.",
  },
  {
    video: "/assets/v3.mp4",
    title: "Hear the kitchen sing",
    text: "Pans hissing. Espresso pulling. Cheese being shaved tableside.",
  },
  {
    video: "/assets/v4.mp4",
    title: "Taste why we exist",
    text: "Every plate is a love letter to the Italian table.",
  },
];

export type MenuItem = {
  category: string;
  name: string;
  desc?: string;
  price: string;
  cat: "antipasti" | "pasta" | "coffee" | "dolci";
};

export const MENU_PREVIEW: MenuItem[] = [
  { category: "Antipasti", name: "Scarpetta", desc: "Herbed Cheese, Sundried Tomato, Capers, Roasted Almonds, Pickled Onions, Bread of the Day", price: "₹ 400", cat: "antipasti" },
  { category: "Antipasti", name: "Under The Amalfi Sun", desc: "Fresh Arugula, Kalamata Olives, Avocado, Salt Fermented Orange, Fried Onions", price: "₹ 450", cat: "antipasti" },
  { category: "Antipasti", name: "Burrata Caponata", desc: "Sicilian-Style Eggplant, Bell Pepper, Celery, Carrot, Raisin, Burratina, Pine Nut", price: "₹ 475", cat: "antipasti" },
  { category: "Antipasti", name: "Diavola Prawns", desc: "Jalapeño Spiked Marinara Sauce, Fresh Basil, Bread of the Day", price: "₹ 500", cat: "antipasti" },
  { category: "Antipasti", name: "Arancini · Funghi", desc: "Golden fried risotto balls stuffed with mushroom", price: "₹ 550", cat: "antipasti" },
  { category: "Antipasti", name: "Chicken Parmigiana", desc: "Buttermilk-soaked Chicken Tenders, Caper Salt, Parmesan & Tomato Passata", price: "₹ 500", cat: "antipasti" },
  { category: "Artisanal Pasta", name: "Such A Cheeser", desc: "Tagliatelle, Swirled in a Parmigiano Reggiano Wheel with Black Pepper", price: "₹ 650", cat: "pasta" },
  { category: "Artisanal Pasta", name: "Truffle'd Chitarra", desc: "Butter, Parmesan & Shaved Truffle", price: "₹ 750", cat: "pasta" },
  { category: "Artisanal Pasta", name: "Tajarin Alla Vongole", desc: "Charcoal Tajarin, Shrimp, Garlic, Parmesan, Cherry Tomato, Lemon", price: "₹ 700", cat: "pasta" },
  { category: "Stuffed Pasta", name: "Herbed Burrata Ravioli", desc: "Hung Burrata, Dual Striped Pasta, Parmesan Shavings", price: "₹ 600", cat: "pasta" },
  { category: "Stuffed Pasta", name: "Truffle Funghi Tortellini", desc: "Charcoal Tortellini, Mixed Mushroom, Truffle-butter, Crispy Shimeji", price: "₹ 700", cat: "pasta" },
  { category: "Gnocchi", name: "Gnocchi Alfredo Tartufo", desc: "Potato & Parmesan Gnocchi in truffle alfredo", price: "₹ 600", cat: "pasta" },
  { category: "Espresso Corner", name: "Espresso", desc: "A Little Shot of Perfection", price: "₹ 180", cat: "coffee" },
  { category: "Chilled & Refreshing", name: "Pistachio Latte", desc: "Sicilian Style Pistachio and Coffee Blended Delicacy", price: "₹ 410", cat: "coffee" },
  { category: "Non-Coffee", name: "Love & Lemon", desc: "Whipped Lemonade, Pomodoro Style!", price: "₹ 350", cat: "coffee" },
  { category: "Dolci", name: "Tiramisu", desc: "Espresso-soaked Savoiardi, Mascarpone, Cocoa Powder", price: "₹ 500", cat: "dolci" },
  { category: "Dolci", name: "Gelato Pistachio", desc: "Per scoop · also in dark chocolate & vanilla", price: "₹ 275", cat: "dolci" },
  { category: "Coffee · Dessert", name: "Tiramisu Latte", desc: "Espresso, Sweet Cream and Cocoa Powder", price: "₹ 380", cat: "dolci" },
];

export type FullMenuSection = {
  title: string;
  items: { name: string; desc?: string; price: string }[];
};

export const FULL_MENU: FullMenuSection[] = [
  {
    title: "Antipasti · Small Plates, Big Flavours",
    items: [
      { name: "Scarpetta", desc: "Herbed Cheese, Sundried Tomato, Capers, Roasted Almonds, Pickled Onions", price: "₹400" },
      { name: "Under The Amalfi Sun", desc: "Fresh Arugula, Kalamata Olives, Avocado, Salt Fermented Orange", price: "₹450" },
      { name: "Burrata Caponata", desc: "Sicilian-Style Mix of Eggplant, Bell Pepper, Burratina, Pine Nut", price: "₹475" },
      { name: "Red White Green", desc: "Honey Roasted Tomato, Stracciatella, Pesto, Bread of the Day", price: "₹475" },
      { name: "Diavola — Mushroom / Prawns", desc: "Jalapeño Spiked Marinara Sauce, Fresh Basil", price: "₹450 / ₹500" },
      { name: "Thick Cut Fries", desc: "Caper & Paprika Salt · or Parmesan-Truffle Oil", price: "₹350 / ₹450" },
      { name: "Arancini — Mac & Cheese / Funghi", price: "₹500 / ₹550" },
      { name: "Chicken Parmigiana", desc: "Buttermilk-soaked Chicken, Caper Salt, Parmesan & Tomato Passata", price: "₹500" },
    ],
  },
  {
    title: "Stuffed Pastas",
    items: [
      { name: "Herbed Burrata Ravioli", desc: "Hung Burrata, Dual Striped Pasta, Parmesan Shavings", price: "₹600" },
      { name: "Truffle Funghi Tortellini", desc: "Charcoal Tortellini, Mixed Mushroom, Truffle-butter Emulsion", price: "₹700" },
      { name: "Caramelo Gamberetti", desc: "Spicy Prawn Mix, Seafood Saffron Brodo", price: "₹700" },
      { name: "Lasagna Verde", desc: "Herbed Pasta Sheet, Mixed Vegetables, Tomato & Cheese Fonduta", price: "₹700" },
    ],
  },
  {
    title: "Artisanal Pasta",
    items: [
      { name: "Such A Cheeser", desc: "Tagliatelle swirled in a Parmigiano Reggiano Wheel with Black Pepper", price: "₹650" },
      { name: "Olio Peperoncino", desc: "Tajarin, Extra Virgin Olive Oil, Garlic, Chili, Parsley", price: "₹600" },
      { name: "Truffle'd Chitarra", desc: "Butter, Parmesan & Shaved Truffle", price: "₹750" },
      { name: "The Pomodoro", desc: "Fettuccine, Tomato & Parmesan Emulsion, Fresh Basil", price: "₹600" },
      { name: "Linguine Alla Pesto Genovese", desc: "Homemade Basil Cream, Parmesan, Cherry Tomato, Pine Nuts", price: "₹600" },
      { name: "Tajarin Alla Vongole", desc: "Charcoal Tajarin, Shrimp, Garlic, Parmesan, Cherry Tomato", price: "₹700" },
      { name: "Fettucine Bolognese", desc: "Slow-cooked Lamb Ragu, Basil", price: "₹700" },
      { name: "Orzetto Rosso", desc: "Tomato Base, Mixed Seasonal Vegetables, Asparagus", price: "₹650" },
      { name: "Orzetto Parmigiana", desc: "Garlic Chili Butter Crab", price: "₹750" },
      { name: "Gnocchi · 3 Sauces", desc: "Potato & Parmesan Gnocchi · Pesto / Alfredo Tartufo / Pomodoro", price: "₹600" },
      { name: "Gnudi", desc: "Baked Spinach & Ricotta Gnudi, Nilah Sauce, Crispy Sage", price: "₹650" },
    ],
  },
  {
    title: "Dolci · Always Room for Dessert",
    items: [
      { name: "Tiramisu", desc: "Espresso-soaked Savoiardi, Mascarpone, Cocoa Powder", price: "₹500" },
      { name: "Gelato Speciale", desc: "Dark Chocolate / Vanilla / Pistachio — Per Scoop", price: "₹225 / ₹225 / ₹275" },
    ],
  },
  {
    title: "☕ Espresso Corner",
    items: [
      { name: "Espresso", desc: "A Little Shot of Perfection", price: "₹180" },
      { name: "Doppio", desc: "Double Espresso, Double the Magic", price: "₹220" },
      { name: "Sunshine Espresso (Cold)", desc: "Espresso with Orange Juice", price: "₹260" },
      { name: "Long Black · Hot / Iced", price: "₹230 / ₹250" },
      { name: "Cappuccino · Flat White · Café Latte", price: "₹250" },
      { name: "Hazelnut Latte · Cinnamon & Vanilla Dolce Latte", price: "₹280" },
      { name: "Hot Chocolate", price: "₹300" },
    ],
  },
  {
    title: "🧊 Chilled & Refreshing",
    items: [
      { name: "Pomodoro's House Cold Coffee", desc: "Double Espresso, Vanilla, Dash of Milk", price: "₹280" },
      { name: "Pistachio Latte", desc: "Sicilian Style Pistachio and Coffee", price: "₹410" },
      { name: "Iced Caramel Macchiato", desc: "Double Espresso, Salted Caramel Cream", price: "₹330" },
      { name: "Tiramisu Latte", desc: "Espresso, Sweet Cream, Cocoa", price: "₹380" },
    ],
  },
  {
    title: "🍋 Non-Coffee Delights",
    items: [
      { name: "Love & Lemon", desc: "Whipped Lemonade, Pomodoro Style", price: "₹350" },
      { name: "Elder & Verde", desc: "Elderflower, Basil, Tonic, Cucumber", price: "₹300" },
      { name: "Ruby Limone", desc: "Mixed Berry Puree, Lime, Basil Seeds, Soda", price: "₹300" },
      { name: "Passion Infusion", desc: "Passionfruit Iced Tea", price: "₹300" },
      { name: "Fresh Juice (Juice of the Day)", price: "₹350" },
    ],
  },
];

export const ATMOSPHERE_STEPS = [
  {
    num: "01",
    label: "The Cup",
    title: '"Bandra runs on this."',
    desc: "It starts before you even sit down. The takeaway cups, stacked in their warm sunlit corner — three little words printed on the side, a quiet promise. Our coffee is the first thing this neighbourhood reaches for in the morning.",
    image: "/assets/IMG_8109.jpg",
    alt: "Pomodoro paper cups - Bandra runs on this",
  },
  {
    num: "02",
    label: "The Entrance",
    title: "A green door on 16th Road.",
    desc: "The cream awning. The arched iron gate, painted sage green. The little circular Pomodoro sign swaying in the Bandra breeze. The Hindi script पोमो'डोरो wrapping the entrance. You haven't walked in yet, but you already know.",
    image: "/assets/IMG_8106.jpg",
    alt: "Pomodoro entrance - green arched door",
  },
  {
    num: "03",
    label: "The Seating",
    title: "Where conversation slows down.",
    desc: "Tomato-red ceiling. Honey-toned wood booths. Yellow hexagonal floor tiles that feel like a Sicilian villa. A marble counter where you can sit alone and feel held. The chalkboard always reads a day's special — \"Cacio e Pepe\" today, who knows tomorrow.",
    image: "/assets/IMG_8107.jpg",
    alt: "Pomodoro seating area - dining room with red ceiling",
  },
  {
    num: "04",
    label: "The Espresso Bar",
    title: "A shot of perfection.",
    desc: "Our sunshine-yellow La Marzocco. Two streams of espresso falling into a red Pomodoro cup. The smell of fresh grounds in the morning. This is where the day starts, where the long blacks happen, where every drink begins with thirty seconds of beautiful science.",
    image: "/assets/IMG_8108.jpg",
    alt: "Pomodoro espresso bar - La Marzocco yellow machine pulling shot",
  },
  {
    num: "05",
    label: "The Kitchen",
    title: "An open invitation.",
    desc: "We don't hide what we do — we built the kitchen so you could watch. Marble counter, fryers humming, the pasta extruder ready, our signature red oil bottles standing like soldiers. Pull up a stool, watch your dinner being born ten feet in front of you.",
    image: "/assets/kitchen_new.jpg",
    alt: "Pomodoro kitchen - marble bar facing open kitchen",
  },
];

export type Review = {
  name: string;
  initial: string;
  date: string;
  source: string;
  stars: number;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Shreeya Mehrotra",
    initial: "S",
    date: "3 months ago · Google Local Guide",
    source: "★ Google",
    stars: 5,
    text: '"From the service to the food, I truly enjoyed every bit of the experience. The pasta is absolutely hand-rolled perfection — you can tell how much care goes into every dish."',
  },
  {
    name: "Rahul V.",
    initial: "R",
    date: "2 months ago",
    source: "★ Google",
    stars: 4,
    text: '"Portions are perfectly sized for the price. The freshness of ingredients made every bite worthwhile, despite the wait. The truffle pasta is something else entirely."',
  },
  {
    name: "Ananya S.",
    initial: "A",
    date: "1 month ago",
    source: "★ Google",
    stars: 5,
    text: '"We ordered the Diavola Prawns, Herb Burrata Ravioli, and the Tiramisu. Every single dish was outstanding. The ravioli filling is ridiculously good."',
  },
  {
    name: "Priya K.",
    initial: "P",
    date: "5 months ago",
    source: "🍕 Zomato",
    stars: 5,
    text: '"The Pistachio Latte alone is worth the trip. Bandra has been waiting for a coffee shop that takes espresso this seriously. The vibe inside is beautiful — warm, intimate, Italian."',
  },
  {
    name: "Milan D.",
    initial: "M",
    date: "4 months ago",
    source: "★ Google",
    stars: 4,
    text: '"The open kitchen concept is genius — watching them make pasta live is entertainment in itself. The Cacio e Pepe special we had was deeply satisfying. Will be back."',
  },
  {
    name: "Nisha B.",
    initial: "N",
    date: "2 months ago",
    source: "🍕 Zomato",
    stars: 5,
    text: '"Pomodoro is everything Bandra needed. Casual, cool, affordable for the quality. The Truffle Funghi Tortellini is the most flavourful thing I\'ve had in Mumbai in months."',
  },
];

export type QueueEntry = {
  id?: number
  name: string
  guests: number
  time: string
  status: "waiting" | "next" | "seated"
}

export const INITIAL_QUEUE: QueueEntry[] = [
  { name: "Arjun & Party", guests: 4, time: "7:15pm", status: "next" },
  { name: "Priya", guests: 2, time: "7:25pm", status: "waiting" },
  { name: "Sharma Family", guests: 6, time: "7:40pm", status: "waiting" },
  { name: "Nisha", guests: 3, time: "7:50pm", status: "waiting" },
];
