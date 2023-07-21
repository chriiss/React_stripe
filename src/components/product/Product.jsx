import GetStripe from "../../api/GetStripe"
import db from "../../data/db.json"

const Product = () => {
    const dbProduct = db.product
    const handleCheckout = async () => {
        const stripe = await GetStripe();
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: import.meta.env.VITE_APP_STRIPE_PRICE_ID,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            successUrl: `${window.location.origin}/success`,
            cancelUrl: `${window.location.origin}/cancel`,
        });
        console.warn(error.message);
    }
    return (
        <article className="product_page">
            <div className="product_page_img">
                <img src="react_course.webp" alt="reactcourse" />
            </div>
            <div className="product_page_info">
                {dbProduct.card.map((data, i) => {
                    return(
                        <div key={i}>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>
                            <p>{data.price} &euro;</p>
                        </div>
                    )
                })
                }
                <button type="button" className="button" onClick={handleCheckout}>{dbProduct.addCart}</button>
            </div>
        </article>
    )
}

export default Product;