import Interactions from "@/components/interactions";
import Closing from "@/features/contact/closing";
import Experience from "@/features/experience/experience";
import Hero from "@/features/hero/hero";
import Marquee from "@/features/shell/marquee";
import ScrollProgress from "@/features/shell/scroll-progress";
import SiteFooter from "@/features/shell/site-footer";
import TopBar from "@/features/shell/top-bar";
import Work from "@/features/work/work";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Experience />
        <Closing />
      </main>
      <SiteFooter />
      <Interactions />
    </>
  );
}
