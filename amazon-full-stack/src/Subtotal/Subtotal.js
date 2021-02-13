import React, { useEffect, useState } from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue() // useContext(StateContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalPrice = basket.reduce((accumulator, item) => {
      return accumulator + item.price
    }, 0)

    setTotal(totalPrice)
  }, [])

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal