const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  console.log(data);
  let productLink;
  if (data.color === "Biały") {
    productLink = "price_1NZUg9C7fozaq5WnSaxyOT4Y";
  } else if (data.color === "Czarny") {
    productLink = "price_1NWzc1C7fozaq5WnCKgEEQCi";
  } else productLink = "price_1NZUkYC7fozaq5WnIKZpGfsd";

  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: [data.paymentMethod],
    mode: "payment",
    success_url: "http://handheld-console.web.app/paymentOk",
    cancel_url: "http://handheld-console.web.app/store",
    // prettier-ignore
    line_items: [{price: productLink, quantity: 1}],
  });

  return {
    id: session.id,
  };
});

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const stripe = require("stripe")(functions.config().stripe.token);
  let event;

  try {
    const whSec = functions.config().stripe.payments_webhook_secret;

    event = stripe.webhooks.constructEvent(req.rawBody, req.headers["stripe-signature"], whSec); // eslint-disable-line
  } catch (err) {
    console.error("Signature error!");
    return res.sendStatus(400);
  }

  const dataObject = event.data.object;

  await admin.firestore().collection("orders").doc(dataObject.id).set({
    checkoutSessionId: dataObject.id,
    paymentStatus: dataObject.payment_status,
  });

  return res.sendStatus(200);
});
