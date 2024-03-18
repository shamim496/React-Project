import React from "react";

const Product = (items) => {
    const {title, price, category, desc,} = items;

    return (
        <article className="product">
            <img className="product__img" src={items.image} alt="" />
            <div className="product__details">
                <h4 className="product__title">{title}</h4>
                <p className="product__price">Price: {price}</p>
                <p className="product__category">Category: {category}</p>
                <p className="product__desc">Description: {desc}</p>
                <p></p>
                <button className="product__btn btn">Add Cart</button>
            </div>
        </article>
    );
};

export default Product;