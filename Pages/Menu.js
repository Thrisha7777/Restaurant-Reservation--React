import React from "react";
import "./Menu.css";

const menuItems = [
  {
    id: 1,
    name: "Idly",
    price: 150,
    image: "idly.jpg",
    rating: 5,
    description:
      "Our soft and fluffy Idly, made from rice and lentils, is steamed to perfection for a light, healthy meal. Served with coconut chutney and hot sambar, it's a satisfying South Indian delight.",
  },
  {
    id: 2,
    name: "Dosa",
    price: 280,
    image: "dosa.jpg",
    rating: 5,
    description:
      "Crispy, golden-brown dosa, a South Indian delicacy, is a thin, savory crepe made from rice and lentil batter. Served with flavorful chutneys and sambar, it's the perfect blend of crunch and taste!",
  },
  {
    id: 3,
    name: "Poori",
    price: 100,
    image: "poori.jpg",
    rating: 5,
    description:
      "Fluffy, golden-brown poori is a deep-fried Indian bread made from whole wheat flour. Perfectly puffed and light, it pairs beautifully with curries, sabzis, or sweet dishes like halwa.",
  },
  {
    id: 4,
    name: "Pongal",
    price: 150,
    image: "Pongal.jpg",
    rating: 5,
    description:
      "Ven Pongal is a creamy and savory South Indian dish made with rice and moong dal, flavored with ghee, black pepper, and aromatic spices. A comforting and wholesome meal!",
  },
  {
    id: 5,
    name: "Full Meals",
    price: 200,
    image: "Meal.jpg",
    rating: 5,
    description:
      "A traditional South Indian full meal is a wholesome feast served on a banana leaf, featuring steamed rice, sambar, rasam, curries, chutneys, and more. A perfect balance of taste and nutrition.",
  },
  {
    id: 6,
    name: "Fried Rice",
    price: 250,
    image: "FriedRice.webp",
    rating: 5,
    description:
      "Fried Rice is a flavorful dish made by stir-frying cooked rice with vegetables, eggs, and proteins like chicken or shrimp, seasoned with soy sauce and aromatic spices. It's versatile and quick!",
  },
  {
    id: 7,
    name: "Briyani",
    price: 300,
    image: "Briyani.jpg",
    rating: 5,
    description:
      "Chicken Briyani is a fragrant and flavorful dish made by layering aromatic basmati rice with spiced, marinated chicken and slow-cooking to perfection. It's a hearty, rich meal!",
  },
  {
    id: 8,
    name: "Parota",
    price: 150,
    image: "Parotta.jpg",
    rating: 5,
    description:
      "Parota is a flaky, layered flatbread made from maida, kneaded with oil, and cooked on a griddle until golden. A popular South Indian delicacy often served with curries or chutneys.",
  },
  {
    id: 9,
    name: "Grill Chicken",
    price: 300,
    image: "Grill.jpg",
    rating: 4,
    description:
      "Grilled chicken is tender and juicy, with a smoky, charred flavor from cooking over open flames. Its crispy, golden-brown exterior complements the flavorful, seasoned meat inside. The smoky aroma enhances the savory taste, making each bite irresistible. Perfectly paired with a variety of sides.",
  },
  {
    id: 10,
    name: "Chicken 65",
    price: 250,
    image: "65.jpg",
    rating: 4,
    description:
      "Chicken 65 is a popular South Indian dish known for its bold, spicy flavor. Bite-sized pieces of chicken are marinated in a blend of yogurt, spices, and herbs, then deep-fried until crispy. The dish is typically garnished with curry leaves and green chilies, offering a perfect balance of heat and tanginess",
  },
  {
    id: 11,
    name: "Mutton Curry",
    price: 250,
    image: "mutton.jpg",
    rating: 4,
    description:
      "Mutton curry is a rich, flavorful dish made with tender pieces of mutton slow-cooked in a spiced gravy. The meat absorbs the deep flavors of aromatic spices like garam masala, cumin, and coriander, creating a hearty and savory sauce. Often served with rice , it's a comforting meal .",
  },
  {
    id: 12,
    name: "Fish Fry",
    price: 300,
    image: "fish.jpg",
    rating: 4.5,
    description:
      "Fish fry is a crispy, golden-brown dish where marinated fish fillets are shallow or deep-fried to perfection. The fish is coated in a flavorful blend of spices, creating a deliciously crunchy crust while keeping the inside tender and juicy .",
  },
  {
    id: 13,
    name: "Ice Cream",
    price: 150,
    image: "ice.jpg",
    rating: 4,
    description:
      "Ice cream is a creamy, sweet frozen dessert made from milk, cream, sugar, and a variety of flavorings. It’s smooth and rich, with endless flavor possibilities ranging from classic vanilla to decadent chocolate, fruit, or nut variations.",
  },
  {
    id: 14,
    name: "MilkShake",
    price: 200,
    image: "milk.jpg",
    rating: 4,
    description:
      "Milkshakes are creamy, sweet beverages made by blending milk, ice cream, and flavored syrups or fruits. Rich and indulgent, they can be customized with various toppings like whipped cream, chocolate chips, or fruit, making each sip a .",
  },
  {
    id: 15,
    name: "CheeseCake",
    price: 250,
    image: "cheese.jpeg",
    rating: 4.5,
    description:
      "Cheesecake is a rich, velvety dessert with a smooth, creamy filling made from cream cheese, sugar, and eggs, set on a buttery, crumbly graham cracker crust. Often topped with fresh fruits, chocolate, or caramel, it offers a perfect balance of tangy and sweet flavors, making it a beloved treat for dessert lovers",
  },
  {
    id: 16,
    name: "Fruit Juice",
    price: 200,
    image: "fruit.jpg",
    rating: 4,
    description:
      "Fruit juice is a refreshing, naturally sweet beverage made by extracting the liquid from fresh fruits. Bursting with vibrant flavors and essential vitamins, it’s a healthy, hydrating drink that can be enjoyed on its own or as a base for smoothies and cocktails.",
  },
];

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">
        Our Menu
        <br />A vibrant restaurant showcasing India's culinary diversity,
        blending North's tandoori traditions with South's coastal spices in one
        comprehensive dining experience.
      </h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-header">
              <h2 className="menu-name">{item.name}</h2>
              <span className="menu-price">₹ {item.price}</span>
            </div>
            <div className="menu-rating">★★★★</div>
            <p className="menu-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
