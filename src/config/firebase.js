import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { loadStripe } from "@stripe/stripe-js";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDBDNn9R--mJ4D8OYy9LKtQ9MwprG_xmm4",
  authDomain: "handheld-console.firebaseapp.com",
  projectId: "handheld-console",
  storageBucket: "handheld-console.appspot.com",
  messagingSenderId: "37812059498",
  appId: "1:37812059498:web:83af0ae8309d14e333f913",
  measurementId: "G-55DK4YG7MD",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions();

const createStripeCheckout = httpsCallable(functions, "createStripeCheckout");
let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    // Create the stripePromise only once to avoid duplicate requests.
    stripePromise = loadStripe("pk_test_51NWEpMC7fozaq5WnYbQkIZH8qZoosDGoUNnQZkCB3En6cC9RRozw39X6XcDegoCPP18FpaOoPVEVATmfdnGcAjTo00r1pgKpKC");
  }
  return stripePromise;
};
let stripe;
let sessionId;
export const paymentHandler = async function (paymentMethod, color) {
  console.log();
  try {
    const response = await createStripeCheckout({ paymentMethod, color });
    stripe = await getStripe(); // Wait for stripePromise to resolve and get the stripe object.
    sessionId = response.data.id;
    return sessionId;
  } catch (error) {
    console.error("Error during payment:", error);
    // Handle error if necessary...
  }
};
export const redirectPayment = async function () {
  try {
    await stripe.redirectToCheckout({ sessionId: sessionId });
  } catch (error) {
    console.error("Error during payment:", error);
    // Handle error if necessary...
  }
};
