import React from 'react';
export default class Product extends React.Component {

	render() {
		return (
            <article className="gecko_product" itemProp="itemListElement" itemScope itemType="http://schema.org/Product">
                <a href="#">
                    <picture className="gecko_product_image">
                        <img itemProp="image" src={this.props.image} alt={this.props.name + " + " + this.props.description} />
                    </picture>
                    <section className="gecko_product_details" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <h3 itemProp="name">{this.props.name}</h3>
                        <p itemProp="description">{this.props.description}</p>
                        <button itemProp="price"><span itemProp="priceCurrency" content="USD">$</span>{this.props.price}</button>
                    </section>
                </a>
            </article>
		);
	}
}
