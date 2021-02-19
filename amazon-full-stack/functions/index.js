const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');
const { request } = require("express");
require('dotenv').config()
const { REACT_APP_STRIPE_API_KEY } = process.env
const stripe = require('stripe')(REACT_APP_STRIPE_API_KEY)

// API 
// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send('Hello'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total

  console.log('Payment Request Recieved!!!!!!', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  })

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  })
})

// Listen commands
exports.api = functions.https.onRequest(app)

// Example endpoint
// firebase emulators:start
// http://localhost:5001/clone-c74b2/us-central1/api