import { MessageSquareHeart } from "lucide-react";
import { Contact } from "lucide-react";
import { Dumbbell } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { PartyPopper } from "lucide-react";
import { Globe } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About Us", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Office Worker",
    image: user1,
    text: "This app has completely changed my social life! I've met so many amazing people and made lifelong friends. Highly recommended!",
  },
  {
    user: "Jane Smith",
    company: "Teacher",
    image: user2,
    text: "I love how easy it is to find and meet new people through this app. The events and meetups are always so fun and engaging!",
  },
  {
    user: "David Johnson",
    company: "Engineer",
    image: user3,
    text: "Fantastic app for anyone looking to expand their social circle. The user interface is intuitive and the community is very welcoming.",
  },
  {
    user: "Ronee Brown",
    company: "Doctor",
    image: user4,
    text: "This app made it so simple to connect with like-minded people in my area. I've had some of the best experiences meeting new friends here.",
  },
  {
    user: "Michael Wilson",
    company: "Artist",
    image: user5,
    text: "I was hesitant at first, but this app has proven to be a great way to meet new friends. The features are great and the people I've met are wonderful.",
  },
  {
    user: "Emily Davis",
    company: "Student",
    image: user6,
    text: "From casual hangouts to interesting events, this app offers it all. I've built a network of friends that I wouldn't have met otherwise.",
  },
];

export const features = [
  {
    icon: <MessageSquareHeart />,
    text: "Chatting Function",
    description:
      "Easy designed chatting function with great features to keep in touch with your new friends!",
  },
  {
    icon: <Dumbbell />,
    text: "For Any Meetup",
    description:
      "Application to find someone to gym, play sports or socialize with. There are limitless posibilites!",
  },
  {
    icon: <PartyPopper />,
    text: "Great Events",
    description: "Jumpstart your events and celebrate",
  },
  {
    icon: <Contact />,
    text: "Custom profile",
    description:
      "Preview your highly customizable profile page just like in the old days. Make visually appealing profile pages.",
  },
  {
    icon: <Gamepad2 />,
    text: "Want to game?",
    description:
      "Find new friends to game with, may it be online or offline. The choice is yours!",
  },
  {
    icon: <Globe />,
    text: "Global!",
    description: "Available gloabally for everyone to use.",
  },
];

export const checklistItems = [
  {
    title: "New friends around the corner",
    description: "Check for nearby events or parties around your location",
  },
  {
    title: "Check the list of your choice",
    description: "Choose whatever you want to do in our custom list from users",
  },
  {
    title: "Chat with new people",
    description: "Chat with new people within seconds.",
  },
  {
    title: "Share your memories",
    description: "Create new memories and share them with the community",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Platform Usage",
      "5 Free Meetups",
      "Chat Function",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Platform Usage",
      "Unlimited Meetups",
      "Chat & Video Function",
      "Create Meetups",
    ],
  },
  {
    title: "Enterprise",
    price: "$20",
    features: [
      "Platform Usage",
      "Unlimited Meetups",
      "Chat, Video & Group Chats",
      "Nearby Function",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Meetups Guide" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "Other" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "About Us" },
  { href: "#", text: "Jobs" },
];
