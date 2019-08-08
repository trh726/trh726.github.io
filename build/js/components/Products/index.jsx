import React from 'react';
import axios from 'axios';
import Product from '../Product';
import {Helmet} from 'react-helmet';
export default class Products extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		}
	}

	componentDidMount(){
		const api = 'https://5d445466d823c30014771642.mockapi.io/api/v1/products';
		axios.get(api)
			.then(response => {
				if (response.status === 200) {
					const products = response.data;
					this.setState({products});				
				} else {
					throw new Error('Something went wrong on api server!');
				};
			}).then(response => {
				this.setState({
					requestedPostsThatWeGotFromGecko: response
				});
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>Develop With Gecko | View Our Products</title>
					<meta name="View all our products." content="Nested component" />
					<script type="application/ld+json">{`
								{
									"@context": "http://schema.org",
									"@type": "WebSite",
									"url": "https://trh726.github.io",
								}
					`}</script>
				</Helmet>
				<h1 className="gecko_products_header">Hi, { this.props.user }! View Our Products</h1>				
				<section className='gecko_products' itemScope itemType="http://schema.org/ItemList">
				<link itemProp="url" href="https://trh726.github.io" />
				<meta itemProp="numberOfItems" content={this.state.products.length} />
				{this.state.products.map(product => {
					return (
						<Product key={product.id} 
							image = {product.image}
							name = {product.name}
							description = {product.description}
							price = {product.price}
						/>										
					);
				})}
				</section>
			</React.Fragment>
		);
	}
}
