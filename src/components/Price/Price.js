import './Price.css';

function Price({ price }) {
    return (
        <div className="price">
            <h2>{price.activity}</h2>
        </div>
    );
}

export default Price;