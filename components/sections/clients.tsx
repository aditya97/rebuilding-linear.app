import { CharLogo } from "../logos/charai";
import { PhotoaiLogo } from "../logos/photoai";
import { HeadshotLogo } from "../logos/headshot";

import { AcelyLogo } from "../logos/acely";
import { ReplikaLogo } from "../logos/replika";

import { DescriptLogo } from "../logos/descript";
import { MercuryLogo } from "../logos/mercury";
import { PitchLogo } from "../logos/pitch";
import { RampLogo } from "../logos/ramp";
import { RaycastLogo } from "../logos/raycast";
import { RetoolLogo } from "../logos/retool";
import { VercelLogo } from "../logos/vercel";

export const Clients = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl">
      <span className="text-primary-text">
        Join the world's highest growing AI businesses.
      </span>
      <br className="hidden md:block" /> From next-gen startups to established
      enterprises.
    </p>

    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      {/* <RampLogo />
      <LoomLogo className="hidden md:block" />
      <VercelLogo />
      <DescriptLogo className="hidden md:block" />
      <CashAppLogo />
      <RaycastLogo />
      <MercuryLogo />
      <RetoolLogo /> */}
      <CharLogo className="hidden md:block" />
      <ReplikaLogo className="hidden md:block" />
      <PhotoaiLogo className="hidden md:block" />
      <HeadshotLogo className="hidden md:block" />
      <AcelyLogo className="hidden md:block" />
    </div>
  </>
);
