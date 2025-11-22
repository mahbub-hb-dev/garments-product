import Products from "./components/Products";

const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://plus.unsplash.com/premium_photo-1675186049297-035b3f692c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D',
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans.',
    category: "men's clothing",
    image: 'https://media.istockphoto.com/id/2188303168/photo/mens-wear-trainers.jpg?s=1024x1024&w=is&k=20&c=B6Hy5ZiyrHAxFhVZIA7OHjTfCMi-IMTuB8pahtRI7Qc=',
    rating: {
      rate: 4.1,
      count: 259
    }
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://media.istockphoto.com/id/1364208715/photo/pink-wool-knitted-sweater-flies-as-if-dancing-hands-up-levitates-on-cyan-background-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=JoUDLrdlKuRv3tYCGdZdKfv2jSGhcngPNDqftjZyBbc=',
    rating: {
      rate: 4.7,
      count: 500
    }
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww',
    rating: {
      rate: 2.1,
      count: 430
    }
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0fGVufDB8fDB8fHww',
    rating: {
      rate: 4.6,
      count: 400
    }
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fHww',
    rating: {
      rate: 3.9,
      count: 70
    }
  }
];
function App() {

  return (
    <>
      <Products data={products} />
    </>
  )
}

export default App
