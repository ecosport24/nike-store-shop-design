import { FlexContent, Hero, Sales } from "./components";
import {
  heroapi,
  highlight,
  popularsales,
  sneaker,
  toprateslaes,
} from "./data/data";
function App() {
  return (
    <>
      <main className="flex flex-col gap-16">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
      </main>
    </>
  );
}

export default App;
