function CameraTypeCard() {
  return (
    <div className="camera-type-card">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_YS0WsEvUfgU_9xqX_7YqztK5V5k9Cx12CwsaNOSrRWdBDY_wXVnp-3flWPOyiqZyFh1v7G_FSjji3H3O9EskbSSjiEp2W7X-pTZjvCb_XhlmSkhLTh_-WJ0_hueBE6F7HHT2kIXRGn5OZ7sMm0Bc-FHoVHxA095aNCaOX90FS8LN5vGKAFaTGfE3MsUaFqaMK1aflqkgTDmY4bkY8sZ5pd2pS6USQG33udS1eC6zT_frGedBKEum4MuCyVqmS2mrnEgMvPJFBV_6"
        alt="img"
        className="camera-type-card-img"
      />

      <div className="camera-type-card-body card-body mt-3">
        <p className="camera-type-card-subtitle">Cinema Mastery</p>
        <h5 className="card-title camera-type-card-title">The Director's Choice</h5>
        <p className="card-text camera-type-card-description">
          Uncompromising 8K fidelity for the world's most demanding
          cinematographers. Discover the tools behind the biggest blockbusters.
        </p>
        <button className="btn camera-type-card-button">
          Explore Cinema Lines
        </button>
      </div>
    </div>
  );
}

export default CameraTypeCard;
