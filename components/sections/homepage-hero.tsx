import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="https://calendly.com/prosgpt/30min"
      variant="secondary"
      size="small"
    >
      <span>Open for Select Customers - Join Our Waitlist</span>{" "}
      <Highlight>→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Build your own profitable
      <br className="hidden md:block" /> AI Business
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
    Create, manage, and monetize personalized AI solutions for your clients.
      <br className="hidden md:block" /> Turn Your AI Dreams into Reality.
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="https://calendly.com/prosgpt/30min"
      variant="primary"
      size="large"
    >
      <span>Get Started </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
