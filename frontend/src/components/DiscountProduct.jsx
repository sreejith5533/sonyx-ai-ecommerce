function DiscountProduct() {
  return (
    <div className="discoun-product-div">
      <span className="discount-span">
        SAVE $ 1,000
      </span>
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeqJVw6dnolD0j4wcY9JNJCoGt5xTh-ZIr575OZEWkh4bxlZ3P8iP98VFh3NwTKgwzO0VMib5uPTvDAlfng3TgSo1DMKrjDiHHsiJu9sexnuzQKOa9ETjx2uIzQcx2vm_JCtdH98DY7z9S4rcPHqL-8-AEW050kP_7h-T6sFTBqIwv2VgxRZcne6AeJ6n8xk7oEnpI-1EXLUsfYlFtyixJn6df8YKn3tTQIpPOzhCjupQX_ky325tbF2m0-HMs1g4pW4Vm2kghJ5qm"
        alt="discount-product"
      />
      <div className="discount-content">
        <h2 className="discount-title">SONYX 8K OLED</h2>
        <p>
          Experience the next dimension of visual fidelity. Over 33 million pixels
          meticulously controlled by our AI Neural Processor.
        </p>
        <h5 className="discount-price">$2,999 <span className="old-price">$3,999</span> </h5>
        <button className="btn shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
}

export default DiscountProduct;
