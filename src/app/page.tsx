"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Music, Star, Utensils, Wine } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Accueil",
          id: "hero",
        },
        {
          name: "À Propos",
          id: "about",
        },
        {
          name: "Formules",
          id: "pricing",
        },
        {
          name: "Soirées",
          id: "features",
        },
        {
          name: "Réservation",
          id: "contact",
        },
      ]}
      brandName="Fiesta Grill"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="Fiesta Grill - Faire la fête autrement"
      description="Restaurant buffet à volonté et soirées dansantes tous les week-ends."
      buttons={[
        {
          text: "Réserver votre table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/layered-glasses-with-shampagne_8353-9952.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-christmas-interior-decoration_181624-32583.jpg",
          alt: "Diner 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/christmas-illumination-gift-box_23-2147724353.jpg",
          alt: "Diner 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elegant-girls-black-playing-cards-drinking-champagne_132075-13785.jpg",
          alt: "Diner 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/after-new-year-s-celebration_637285-12907.jpg",
          alt: "Diner 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-man-restaurant_23-2147861975.jpg",
          alt: "Diner 5",
        },
      ]}
      avatarText="Rejoignez nos 500+ clients satisfaits chaque mois"
      marqueeItems={[
        {
          type: "text",
          text: "Buffet à volonté",
        },
        {
          type: "text",
          text: "Soirées dansantes",
        },
        {
          type: "text",
          text: "Ambiance festive",
        },
        {
          type: "text",
          text: "Cocktails signature",
        },
        {
          type: "text",
          text: "Réservations ouvertes",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="À Propos"
      title="Une expérience unique à chaque visite"
      description="Le Fiesta Grill est plus qu'un simple buffet. C'est un lieu de rencontre, de gourmandise et de fête."
      subdescription="Chaque week-end, nous transformons votre dîner en une célébration inoubliable avec nos soirées dansantes."
      icon={Wine}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-different-meals-seafood-inside-white-plate-along-with-green-leafs-sliced-lemons-table_140725-11612.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: Music,
          title: "Soirées Dansantes",
          description: "Tous les week-ends, ambiance festive garantie sur notre piste de danse.",
        },
        {
          icon: Star,
          title: "Bar à Cocktails",
          description: "Profitez d'une sélection variée de boissons et cocktails signature.",
        },
        {
          icon: Utensils,
          title: "Buffet Gourmand",
          description: "Une cuisine variée, fraîche et généreuse à volonté.",
        },
      ]}
      title="Nos Services & Soirées"
      description="Découvrez tout ce qui fait le charme du Fiesta Grill."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Grillades & Viandes",
          price: "Buffet",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-bakery-with-berries-fruits-served-white-plate_8353-628.jpg",
        },
        {
          id: "p2",
          name: "Bar à Salades",
          price: "Buffet",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chopping-board-red-cabbage-cherry-tomato-dill-coriander-parsley-radish-apples-lettuce-cauliflower-bell-peppers-persimmons_140725-144683.jpg",
        },
        {
          id: "p3",
          name: "Fruits de Mer",
          price: "Buffet",
          imageSrc: "http://img.b2bpic.net/free-photo/festive-woven-gift-basket-man-with-crayfish-lemons_132075-5870.jpg",
        },
        {
          id: "p4",
          name: "Desserts Maison",
          price: "Buffet",
          imageSrc: "http://img.b2bpic.net/free-photo/chocolate-pastry_1203-1344.jpg",
        },
        {
          id: "p5",
          name: "Spécialités du Chef",
          price: "Buffet",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-meat-with-cheese-green_140725-4683.jpg",
        },
        {
          id: "p6",
          name: "Bar à Fruits",
          price: "Buffet",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-fruit-plate-with-ice-cream-red-sauce-top_140725-10735.jpg",
        },
      ]}
      title="Nos Formules Buffet"
      description="Qualité et choix pour tous les appétits."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Julie M.",
          role: "Cliente régulière",
          testimonial: "La meilleure soirée dansante du week-end!",
          imageSrc: "http://img.b2bpic.net/free-photo/young-passionate-woman-with-flower-table_23-2148001712.jpg",
        },
        {
          id: "2",
          name: "Marc L.",
          role: "Habitué",
          testimonial: "Super buffet, choix énorme et très frais.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-table_23-2149213367.jpg",
        },
        {
          id: "3",
          name: "Sophie P.",
          role: "Anniversaire",
          testimonial: "Un lieu parfait pour faire la fête entre amis.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-having-fun-party_23-2150188405.jpg",
        },
        {
          id: "4",
          name: "Thomas D.",
          role: "Client",
          testimonial: "Le personnel est accueillant et dynamique.",
          imageSrc: "http://img.b2bpic.net/free-photo/new-year-spend-with-friends-celebrating_23-2149196973.jpg",
        },
        {
          id: "5",
          name: "Chloé B.",
          role: "Cliente",
          testimonial: "Expérience globale top, je recommande vivement.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-with-long-blonde-hair-holding-delicious-chocolate-muffin-hand_23-2147974685.jpg",
        },
      ]}
      title="Ce que nos clients disent"
      description="L'ambiance est incroyable, la nourriture est délicieuse et le service est toujours au top."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Faut-il réserver ?",
          content: "Il est vivement conseillé de réserver, surtout les soirs de week-end.",
        },
        {
          id: "2",
          title: "Quels sont les horaires ?",
          content: "Nous sommes ouverts du vendredi soir au dimanche midi.",
        },
        {
          id: "3",
          title: "Proposez-vous des formules groupe ?",
          content: "Oui, nous organisons régulièrement des fêtes privées pour les groupes.",
        },
      ]}
      sideTitle="Questions Fréquentes"
      sideDescription="Besoin d'en savoir plus sur Fiesta Grill ?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static",
      }}
      text="Réservez dès maintenant pour une expérience mémorable. Nous avons hâte de vous accueillir."
      buttons={[
        {
          text: "Réserver",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Fiesta Grill"
      leftLink={{
        text: "Politique de confidentialité",
        href: "#",
      }}
      rightLink={{
        text: "Copyright © 2026 Fiesta Grill",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
