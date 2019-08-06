import React from 'react';
export default class Product extends React.Component {

	render() {
		return (
            <article className="gecko_product">
                <a href="#">
                    <picture className="gecko_product_image">
                        <img src={this.props.image} alt={this.props.name + " + " + this.props.description} />
                    </picture>
                    <section className="gecko_product_details">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.description}</p>
                        <button>${this.props.price}</button>
                    </section>
                </a>
            </article>
		);
	}
}
