/// <reference path="../json.d.ts" />

// fetch the data from data.json
const data = require("../data.json") as SalesData[];
const { capitalize } = require("lodash");
const { formatDistanceToNow } = require("date-fns");

// Challenge 1
function presentName(firstName: string, lastName: string): string {
  return `${capitalize(firstName)} ${capitalize(lastName)}`;
}

// Challenge 2
function purchaseDate(date: string): string {
  const options = { month: "long", day: "numeric", year: "numeric" } as const;
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return `Purchased: ${formattedDate}`;
}

// Challenge 3
function showLastPaymentDistance(date: string): string {
  const formattedDate = new Date(date);
  const distance = formatDistanceToNow(formattedDate, { addSuffix: true });
  return `Last payment: ${distance}`;
}

// Challenge 4
export function readPhoneNumber(phone: string | number): string {
  // strip out any non-numerical characters if phone number is a string
  if (typeof phone === "string") {
    phone = phone.replace(/\D/g, "");
  }
  const phoneString = phone.toString();
  // if phone number is not ten characters or digits, return error
  if (phoneString.length !== 10) {
    throw new Error("Phone number must be 10 digits");
  }
  const areaCode = phoneString.slice(0, 3);
  const firstThree = phoneString.slice(3, 6);
  const lastFour = phoneString.slice(6, 10);
  return `(${areaCode}) ${firstThree}-${lastFour}`;
}

function formatData() {
  const formattedData = data.map((item) => {
    const { first_name, last_name, purchased, lastpayment, phone } = item;
    const name = presentName(first_name, last_name);
    const date = purchaseDate(purchased);
    const distance = showLastPaymentDistance(lastpayment);
    const phoneNumber = readPhoneNumber(phone);
    return { name, date, distance, phoneNumber };
  });
  console.log(formattedData);
}

formatData();
