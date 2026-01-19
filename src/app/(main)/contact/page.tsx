import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </div>
  );
}
