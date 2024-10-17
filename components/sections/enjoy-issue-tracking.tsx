"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Build. Customize.
            <br />
            Monetize.
          </>
        }
        image="/monetize.png"
        text="With ProsGPT, no technical skills are required to build your AI business. Our intuitive setup and advanced customization tools make launching and scaling effortless."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "AI That Remembers.",
            text: "Advanced Brain Integration, powered by OpenAI",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Completely Customizable.",
            text: "Tailor your theme, layout and domains effortlessly.",
          },
          {
            icon: CustomViewsIcon,
            title: "Monetization Flexibility.",
            text: "Offer trials, subscriptions, or one-time fees.",
          },
          {
            icon: DiscussionIcon,
            title: "No-Code Setup.",
            text: "Build and launch with zero technical knowledge.",
          },
          {
            icon: WorkflowsIcon,
            title: "Scalable Infrastructure.",
            text: "Handle high traffic with speed, at a low cost.",
          },
          {
            icon: IssuesIcon,
            title: "Advanced Analytics.",
            text: "Gain insights into user behavior and performance.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/users.png",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Advanced User Management",
            text: "Control exactly who uses your assistants, and set your own limits per user.",
          },
          {
            image: "/api-key.png",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Bring Your Own Keys",
            text: "Configure your own OpenAI API keys and save costs",
          },
        ]}
      />
    </Features>
  );
};
