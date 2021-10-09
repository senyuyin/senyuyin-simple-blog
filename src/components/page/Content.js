import "./content.css";
import HeadSection from "./components/HeadSection";

import { CardLatest } from "./components/CardLatest";
import { CardPanel } from "./components/CardPanel";

import CodeImg1 from "./components/code-1.png";
import CodeImg2 from "./components/code-2.png";
import CodeImg3 from "./components/code-3.png";

import { HighlightSection } from "./components/HighlightSection";
import { SeeMore } from "./components/SeeMore";

export function Content() {
  return (
    <div>
      <HeadSection />
      <CardLatest />

      <div className="card-set">
        <CardPanel cardImg={CodeImg1} />
        <CardPanel cardImg={CodeImg2} />
        <CardPanel cardImg={CodeImg3} />
      </div>

      <HighlightSection />
      <SeeMore />
    </div>
  );
}
