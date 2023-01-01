import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from './CheckoutForm'
import axios from 'axios'

const stripePromise = loadStripe(
  'pk_test_51MLPX2BSkpeWGmBNHMg6gwuasWyMM1ahwb8HcglsCta8cxJs7Iz1JCI6HjCnAPoBor0osRGzTXYvr62DwJJC7PhZ009OyMgCt0',
)

const Index = ({ price }) => {
  const [clientSecret, setClientSecret] = useState('')

  const getSecretToken = async () => {
    try {
      const res = await axios.post(
        'http://localhost:3002/create-payment-intent',
        { items: price },
      )
      console.log('res', res)
      setClientSecret(res.data.clientSecret)
    } catch (error) {}
  }

  useEffect(() => {
    console.log('price', price)
    if (price != undefined) getSecretToken()
    // Create PaymentIntent as soon as the page loads
    // fetch('http://localhost:3002/create-payment-intent', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setClientSecret(data.clientSecret))
  }, [price])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }
  return (
    <div>
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  )
}

export default Index
