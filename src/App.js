// Importing Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const galleryImages = [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/c7/63/3b/c7633bafc96595fa55cfe174517f3a30.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/236x/43/ef/35/43ef3564f2217f6d4b7dcc85b1c1225b.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/236x/4e/e2/1c/4ee21c1296822c29ca9a6de19384c36b.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/236x/de/c4/62/dec462cce6e3bd7683e51ae88f312fb8.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div>
          <Banner
            title="Your Ultimate Travel Companion"
            text="Embark on an extraordinary journey to uncover the world's most breathtaking destinations. From the serene beaches of the Maldives to the bustling streets of Tokyo, explore diverse cultures, stunning landscapes, and unforgettable experiences. Join us in creating memories that will last a lifetime and adventures that you'll cherish forever. Whether you're seeking relaxation or adventure, we've got the perfect destination for you."
            btnPrimaryText="Learn More"
            btnSecondaryText="Contact Us"
          />
          <Gallery images={galleryImages} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
