/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import React, { useState } from "react";

function Product(props) {
  function handlePlus(e) {
    e.preventDefault();
    // logic to vote a product
    props.onVote(props.name, 1);
  }

  function handleMinus(e) {
    e.preventDefault();
    // logic to unvote a product
    props.onVote(props.name, -1);
  }

  return (
    <li>
      <span>
        {props.name} - votes: {props.votes}
      </span>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </li>
  );
}

export function Grocery({ products }) {
  function handleVote(productName, increment) {
    setProductsList((prevList) => prevList.map((product) => (product.name === productName ? { ...product, votes: Math.max(0, product.votes + increment) } : product)));
  }

  // eslint-disable-next-line no-unused-vars
  const [productsList, setProductsList] = useState(products); // TODO: implement this state variable!
  return (
    <ul>
      {productsList &&
        productsList.map((product, key) => (
          <React.Fragment key={key}>
            <Product name={product?.name} votes={product.votes} onVote={handleVote} />
          </React.Fragment>
        ))}
      {/* Render an array of products, which should call onVote when + or - is clicked */}
    </ul>
  );
}
