import React, { useEffect, useState } from 'react'
import './Orders.css'
import { db } from '../firebase'
import { useStateValue } from '../StateProvider'

import Order from '../Order/Order'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue() // useContext(StateContext)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if(user) {  
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(doc => ({
            id: doc.uid,
            data: doc.data()
          })))
        ))
    } else {
      setOrders([])
    }
  }, [user])
  
  return (
    <div className="orders">
      <h1>Your orders</h1>

      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  )
}

export default Orders