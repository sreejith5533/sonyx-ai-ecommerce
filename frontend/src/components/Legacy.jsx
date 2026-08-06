import LegacyContent from "./LegacyContent";
import "../styles/legacy.css"

function Legacy(){
  return(
    <section className="legacy-section">
      <div className="row">
        <div className="col-md-6">
          <div className="legacy-img-div">
            <img loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeD2bANOCSHYQt8xV0Nlj50iE3CsfdzoI8n7fhsHRXCl9w8cW8eb0Lag6kPqS5-XBxXkhviSTI_n5vrw6WDLXJZXzJSliYzAVAEIy5NqcGTR2_0bsVIq4SVbhOAd_WAvpbVgddj_pbj-9oOKXdRfJtQcS-AdDxrOK_ijbJAmWUsw80-wxrI-76-f62DmWb_iL9rWVtcS22vM5ywE_e2kV1heSr6bBbEnLJ59OH_gTlcZCloWEEUxwXKo3K_6sA33l36ZG9cwgcEMAX" alt="img" />
          </div>
        </div>
        <div className="col-md-6">
          <LegacyContent />
        </div>
      </div>
    </section>
  )
}


export default Legacy