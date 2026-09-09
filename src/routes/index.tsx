import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeIndianRupee,
  BedDouble,
  Heart,
  Star,
  CheckCircle2,
  Building2,
  ChevronDown,
  Headphones,
  Home,
  House,
  LockKeyhole,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Users,
  UserRound,
  WalletCards,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/roomy-hero.jpg";
import pgImage from "@/assets/offer-pg.jpg";
import hostelImage from "@/assets/offer-hostel.jpg";
import colivingImage from "@/assets/offer-coliving.jpg";
import apartmentImage from "@/assets/offer-apartment.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROOMHY — Student Housing in India" },
      {
        name: "description",
        content: "Find verified PGs, hostels, co-living spaces and apartments in India's top cities.",
      },
      { property: "og:title", content: "ROOMHY — Student Housing in India" },
      {
        property: "og:description",
        content: "Find verified PGs, hostels, co-living spaces and apartments in India's top cities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const propertyTypes = [
  { label: "PG", icon: BedDouble },
  { label: "Hostels", icon: Building2 },
  { label: "Co-living", icon: Users },
  { label: "Apartments", icon: House },
];

const assurances = [
  { title: "Smart Bidding", subtitle: "Best price deals", icon: ShieldCheck },
  { title: "Verified Properties", subtitle: "100% verified listings", icon: ShieldCheck },
  { title: "Lowest Price Guarantee", subtitle: "Best price, always", icon: BadgeIndianRupee },
  { title: "24/7 Support", subtitle: "Always here to help", icon: Headphones },
  { title: "Safe & Secure", subtitle: "Your safety, our priority", icon: LockKeyhole },
];

const offers = [
  {
    title: "PG",
    text: "Comfortable and affordable stays near your college or workplace.",
    image: pgImage,
    icon: BedDouble,
  },
  {
    title: "Hostels",
    text: "Vibrant communities with essential amenities.",
    image: hostelImage,
    icon: Building2,
  },
  {
    title: "Co-living",
    text: "Modern living with like-minded people.",
    image: colivingImage,
    icon: Users,
  },
  {
    title: "Apartments",
    text: "Spacious and independent living options.",
    image: apartmentImage,
    icon: House,
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="ROOMHY home">
      ROOMHY<span>.com</span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav aria-label="Main navigation">
          <a className="active" href="#top">Home</a>
          <a href="#offers">Properties</a>
          <a href="#top">Cities</a>
          <a href="#top">FAQ</a>
          <a href="#top">About</a>
          <a href="#top">Contact</a>
        </nav>
        <div className="header-actions">
          <Button variant="outline" className="list-button"><Home /> List Your Property</Button>
          <Button className="bid-button"><Zap fill="currentColor" /> Bid Now</Button>
          <span className="profile-divider" aria-hidden="true" />
          <Button variant="ghost" className="profile-button" aria-label="Open Harsh's account menu">
            <UserRound /> <span>Harsh</span> <ChevronDown />
          </Button>
          <Button variant="ghost" size="icon" className="menu-button" aria-label="Open menu"><Menu /></Button>
        </div>
      </div>
    </header>
  );
}

function SearchPanel() {
  return (
    <form className="search-panel" onSubmit={(event) => event.preventDefault()}>
      <div className="property-tabs" role="tablist" aria-label="Property type">
        {propertyTypes.map(({ label, icon: Icon }, index) => (
          <Button key={label} type="button" variant="ghost" className={index === 0 ? "property-tab selected" : "property-tab"}>
            <Icon /> <span>{label}</span>
          </Button>
        ))}
      </div>
      <div className="search-controls">
        <label className="location-field">
          <MapPin />
          <input aria-label="Location" placeholder="Search city, locality or landmark (e.g. Koramangala, Mumbai)" />
        </label>
        <Button type="button" variant="ghost" className="filter-button"><UserRound /> Any Gender <ChevronDown /></Button>
        <Button type="button" variant="ghost" className="filter-button"><WalletCards /> Any Budget <ChevronDown /></Button>
        <Button type="submit" className="search-button"><Search /> Search</Button>
      </div>
    </form>
  );
}

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src={heroImage} alt="A warm modern student room overlooking a city" width={1920} height={768} />
      <div className="hero-wash" />
      <p className="left-note">Better<br />Students<br />Brighter<br />Tomorrows</p>
      <p className="right-note">Same<br />City<br />New<br />Stories ♡</p>
      <div className="hero-copy">
        <p>India's #1 broker-free student housing platform</p>
        <h1 id="hero-title">Find a place<br />that feels like home</h1>
        <span>Verified PGs, Hostels, Co-living spaces and Apartments in top cities.</span>
      </div>
      <SearchPanel />
      <div className="trust-curve">
        <div className="assurance-row">
          {assurances.map(({ title, subtitle, icon: Icon }) => (
            <div className="assurance" key={title}>
              <span className="assurance-icon"><Icon /></span>
              <span><strong>{title}</strong><small>{subtitle}</small></span>
            </div>
          ))}
        </div>
        <div className="student-proof">
          <span className="avatars" aria-hidden="true"><i>H</i><i>A</i><i>R</i></span>
          <span><strong>50,000+ students</strong><small>already found their home</small></span>
          <ArrowRight />
        </div>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section id="offers" className="offers" aria-labelledby="offers-title">
      <svg className="offer-leaves offer-leaves-left" viewBox="0 0 200 400" aria-hidden="true">
        <defs>
          <g id="roomhy-leaf">
            <path fill="rgba(140, 180, 120, 0.38)" d="M0 -110C46 -62 62 -12 58 40C55 82 32 106 0 118C-32 106 -55 82 -58 40C-62 -12 -46 -62 0 -110Z" />
            <path fill="none" stroke="rgba(110, 150, 100, 0.45)" strokeWidth="2.5" strokeLinecap="round" d="M0 -104V112" />
          </g>
        </defs>
        <use href="#roomhy-leaf" transform="translate(58 128) rotate(-24) scale(0.95)" />
        <use href="#roomhy-leaf" transform="translate(24 254) rotate(-58) scale(0.8)" />
        <use href="#roomhy-leaf" transform="translate(104 320) rotate(14) scale(0.68)" />
      </svg>
      <svg className="offer-leaves offer-leaves-right" viewBox="0 0 200 400" aria-hidden="true">
        <use href="#roomhy-leaf" transform="translate(58 128) rotate(-24) scale(0.95)" />
        <use href="#roomhy-leaf" transform="translate(24 254) rotate(-58) scale(0.8)" />
        <use href="#roomhy-leaf" transform="translate(104 320) rotate(14) scale(0.68)" />
      </svg>


      <p className="offers-left-note">Live<br />Learn<br />Belong</p>
      <p className="offers-right-note">A Better<br />Place<br />To Be ♡</p>
      <div className="offer-heading">
        <p>Explore your living options</p>
        <h2 id="offers-title">What We Offer</h2>
        <span>Choose from a variety of accommodation types tailored for students and professionals.</span>
      </div>
      <Button variant="outline" className="view-all">View all options <ArrowRight /></Button>
      <div className="offer-grid">
        {offers.map(({ title, text, image, icon: Icon }) => (
          <article className="offer-card" key={title}>
            <div className="offer-image-wrap">
              <img src={image} alt={`${title} student accommodation`} width={900} height={560} loading="lazy" />
              <span className="offer-chip"><Icon /> {title}</span>
            </div>
            <div className="offer-body">
              <p>{text}</p>
              <a href="#top" aria-label={`Explore ${title}`}><ArrowRight /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const featured = [
  {
    name: "Sunrise Student PG",
    location: "Koramangala, Bengaluru",
    price: "₹8,499",
    rating: "4.8",
    image: pgImage,
    type: "PG",
  },
  {
    name: "Campus Nest Hostel",
    location: "Powai, Mumbai",
    price: "₹7,999",
    rating: "4.7",
    image: hostelImage,
    type: "Hostel",
  },
  {
    name: "Urban Hive Co-living",
    location: "Hinjewadi, Pune",
    price: "₹11,499",
    rating: "4.9",
    image: colivingImage,
    type: "Co-living",
  },
  {
    name: "Greenview Apartments",
    location: "Sector 62, Noida",
    price: "₹14,999",
    rating: "4.6",
    image: apartmentImage,
    type: "Apartment",
  },
];

function Featured() {
  return (
    <section className="featured" aria-labelledby="featured-title">
      <div className="featured-heading">
        <p>Handpicked for you</p>
        <h2 id="featured-title">Featured Properties</h2>
        <span>Discover verified spaces in the most popular student cities.</span>
      </div>
      <Button variant="outline" className="featured-view-all">View all properties <ArrowRight /></Button>
      <div className="featured-grid">
        {featured.map(({ name, location, price, rating, image, type }) => (
          <article className="featured-card" key={name}>
            <div className="featured-image-wrap">
              <img src={image} alt={`${name} — ${type} in ${location}`} width={900} height={560} loading="lazy" />
              <span className="verified-chip"><CheckCircle2 /> Verified</span>
              <button type="button" className="wishlist-button" aria-label={`Save ${name} to wishlist`}><Heart /></button>
            </div>
            <div className="featured-body">
              <div className="featured-title-row">
                <h3>{name}</h3>
                <span className="featured-rating"><Star fill="currentColor" /> {rating}</span>
              </div>
              <p className="featured-location"><MapPin /> {location}</p>
              <div className="featured-price-row">
                <span className="featured-price">{price}<small>/month</small></span>
                <span className="featured-type">{type}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return <main><Header /><Hero /><Offers /><Featured /></main>;
}