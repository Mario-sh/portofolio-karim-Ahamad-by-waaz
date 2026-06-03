export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  features: string[];
}

