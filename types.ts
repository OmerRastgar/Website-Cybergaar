import React from 'react';

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  image: string;
  stars: number;
}

export interface Service {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  linkedin: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TimelineStep {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  content?: string;
}