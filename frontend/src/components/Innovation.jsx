import InnovationContent from "./InnovationContent";
import InnovationImage from "./InnovationImage";



function Innovation(){
  return(
    <section className="row innovation-section g-3">
      <div className="col-md-6">
        <InnovationContent />
      </div>
      <div className="col-md-6">
        <InnovationImage />
      </div>
    </section>
  )
}


export default Innovation;