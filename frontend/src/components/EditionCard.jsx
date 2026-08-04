function EditionCard() {
  return (
    <div className="edition-card">
      <div className="edition-card-image-container">
        <span className="edition-card-availability">
          Only 100 units available
        </span>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT2HaS0uYIpDAHalt2Ov5hPpegfsHa7aLUNx2Lom17rKkGSONXwCjm-OlKkR00sq6jfKsxmXwZzjO5cDCwSccTlxqmTxm8VqIinZIjRBf6OjeZfUEU6F9WWfO5P7XOjIJjzEgxvZwDKbJaC1PxPrICz3jj59c4j7MXXVo_Z8AKO0PDQSRmrAbU1oRqjT1PXqjExRVWd5mzNMBJZyDdjRTmsuTNimpujJnyXV7ctvxvISwKLxmRwW8HHdyBeggR3CJNCa1GaB3FkVz0"
          alt="Limited Edition"
          className="edition-card-image"
        />
      </div>
      <div className="edition-card-body card-body mt-3">
        <h5 className="edition-card-title">Nebula Collection</h5>
        <p className="edition-card-description">Available November 24th</p>
      </div>
    </div>
  );
}



export default EditionCard;
