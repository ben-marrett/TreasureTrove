import React, { useState, useEffect } from 'react'

function ItemList() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/items')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  console.log(items)

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - {item.year} - {item.genre}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList;


