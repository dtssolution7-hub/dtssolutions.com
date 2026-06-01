import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { SupportPlansPreview } from "@/components/sections/SupportPlansPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { JobsPreview } from "@/components/sections/JobsPreview";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProcessPreview />
      <SupportPlansPreview />
      <WhyChooseUs />
      <IndustriesPreview />
      <CaseStudiesPreview />
      <ResourcesPreview />
      <JobsPreview />
      <FAQPreview />
      <CTA />
    </>
  );
}