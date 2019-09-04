class ProductList extends React.Component {
    render(){
        const productComponents = Seed.products.map((product) => (
                <Product
                    key={`product-${product.id}`}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
        ));
        return(
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}
//55
class Product extends React.Component {
    render() { 
        const {id, title, description, url, votes, submitterAvatarUrl, productImageUrl} = this.props;
        return(
            <div className='item'>
                <div className='image'>
                    <img src={productImageUrl}/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a>
                            <i className='large caret up icon'/>
                        </a>
                        {votes}
                    </div>
                    <div className='description'>
                        <a href={url}>
                            {title}
                        </a>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={submitterAvatarUrl}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);