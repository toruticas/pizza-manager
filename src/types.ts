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

export interface Order {
  id: string;
  address: string;
  time: string;
  accepted: boolean;
  transit: boolean;
  completed: boolean;
  canceled: boolean;
}
