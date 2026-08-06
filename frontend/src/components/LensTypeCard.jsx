function LensTypeCard() {
  return (
    <div className="lens-type-card">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgWFTsj5zIVKxSaZ9K3qpAgi0Y7N2JP_XLppg1MR1tYCuXU4GqG_mcwEiU9wjaRMhpmdSDFgeVR4q-d_i65jt8hg5CcBNR0xJhJbDPLi1fG6PSidK7ZxIWdvGbcxrTGQ5GpedmSP3GUV5yofJJQbE_4zsZGp6JIpKBVcSjCA_qAO3Cgfxolw1ae2TCaQYhU8gpW9nfhQcnPEzRvm1Q4gKtK3K_JM3j9ghJOd3al79HtQa9vcyUIzz9P_xv-4lnFRsUyruvwIcWkQ1p"
        loading="lazy"
        alt="img"
      />
      <div className="lens-type-card-body card-body mt-3">
        <p className="lens-type-card-subtitle">Optical Perfection</p>
        <h5 className="card-title lens-type-card-title">G-Master Series</h5>
        <p className="card-text lens-type-card-description">
          Redefining resolution and bokeh. Every element crafted for the ultimate clarity in every frame, no matter the conditions.
        </p>
        <button className="lens-type-card-button">
          View all Lenses
        </button>
      </div>
    </div>
  );
}

export default LensTypeCard;
