import { FlexContent, Hero, Sales, Stories } from "./components";
import {
  heroapi,
  highlight,
  popularsales,
  sneaker,
  toprateslaes,
  story,
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
        <Stories story={story} />
      </main>
    </>
  );
}

export default App;
