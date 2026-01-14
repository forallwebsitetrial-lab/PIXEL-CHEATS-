export enum ProductType {
  PANEL = 'PANEL',
  COURSE = 'COURSE'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  type: ProductType;
  features: string[];
  imageGradient: string;
  detailedFeatures?: string;
}

export interface DiscordConfig {
  serverUrl: string;
  adminDmUrl: string;
}