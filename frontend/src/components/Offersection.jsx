import OfferTextContent from "./OfferTextContent"
import DiscountProduct from "./DiscountProduct"
import "../styles/offer.css"

function OfferSection(){
  return(
    <section className="offer-section">
      <div className="row g-4">
        <div className="col-md-6">
          <OfferTextContent />
        </div>
        <div className="col-md-6">
          <DiscountProduct />
        </div>
      </div>
    </section>
  )
}

export default OfferSection