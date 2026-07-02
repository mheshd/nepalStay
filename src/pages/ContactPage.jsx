import ContactSection from "../components/ContactSection";
import PageHero from "../components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start Your Booking Request"
        text="Send your dates and travel preferences. NepalStay will help you choose the right room and services."
        image="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1800&q=85"
      />
      <ContactSection />
    </>
  );
}
