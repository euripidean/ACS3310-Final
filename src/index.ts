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

const data = require("../data.json") as SalesData[];
const { startCase } = require("lodash");
const { formatDistanceToNow } = require("date-fns");

// Challenge 1
function capitalizeStr(value: string): string {
  return startCase(value);
}

// Challenge 2
function purchaseDate(date: string): string {
  const options = { month: "long", day: "numeric", year: "numeric" } as const;
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return `${formattedDate}`;
}

// Challenge 3
function showLastPaymentDistance(date: string): string {
  const formattedDate = new Date(date);
  const distance = formatDistanceToNow(formattedDate, { addSuffix: true });
  return `${distance}`;
}

// Challenge 4
function formatPhoneNumber(phone: string | number): string {
  const phoneString = String(phone).replace(/\D/g, "");

  if (phoneString.length !== 10) {
    throw new Error("Phone number must be 10 digits");
  }

  const areaCode = phoneString.slice(0, 3);
  const firstThree = phoneString.slice(3, 6);
  const lastFour = phoneString.slice(6, 10);

  return `(${areaCode}) ${firstThree}-${lastFour}`;
}

// output all data
function formatData() {
  data.forEach((item) => {
    console.log(
      `\n${capitalizeStr(item.first_name)} ${capitalizeStr(item.last_name)}\n
      ${capitalizeStr(item.make)} ${capitalizeStr(item.model)}\n
      Purchased: ${purchaseDate(item.purchased)}\n
      Last Payment: ${showLastPaymentDistance(item.lastpayment)}\n
      Phone: ${formatPhoneNumber(item.phone)}\n
      City: ${capitalizeStr(item.city)}
      \n`
    );
  });
}

// Check in the terminal by uncommenting this line and running the file.
// formatData();

export { formatPhoneNumber };
