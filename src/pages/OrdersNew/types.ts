export interface Items {
  size: string;
  toppings: string[];
}

export interface FormValues {
  name: string;
  email: string;
  address: string;
  contact: string;
  items: Items[];
}
