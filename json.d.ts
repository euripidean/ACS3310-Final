interface SalesData {
  id: number;
  first_name: string;
  last_name: string;
  purchased: string;
  lastpayment: string;
  phone: string;
  make: string;
  model: string;
  city: string;
}

declare module "*.json" {
  const value: SalesData[];
  export default value;
}
