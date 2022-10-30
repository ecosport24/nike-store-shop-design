import {
  Cart,
  FlexContent,
  Footer,
  Hero,
  Navbar,
  Sales,
  Stories,
} from "./components";
import {
  heroapi,
  highlight,
  popularsales,
  sneaker,
  toprateslaes,
  story,
  footerAPI,
} from "./data/data";
function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
}

export default App;
