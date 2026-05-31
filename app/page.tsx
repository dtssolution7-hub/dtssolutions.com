import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <IndustriesPreview />
      <CaseStudiesPreview />
      <ResourcesPreview />
      <CTA />
    </>
  );
}
