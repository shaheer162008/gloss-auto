import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/Services";
import { WorkPreview } from "@/components/WorkPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceArea } from "@/components/ServiceArea";
import { InstagramFeed } from "@/components/InstagramFeed";
import { ReviewCta } from "@/components/ReviewCta";
import { CtaBand } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WorkPreview />
      <WhyChooseUs />
      <ServiceArea />
      <InstagramFeed />
      <ReviewCta tone="white" />
      <CtaBand />
    </>
  );
}
