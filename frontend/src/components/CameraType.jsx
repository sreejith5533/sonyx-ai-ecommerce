import CameraTypeCard from "./CameraTypeCard"
import LensTypeCard from "./LensTypeCard"

function CameraType() {
  return(
    <section className="camera-type-section mt-5">
      <div className="row">
        <div className="col-md-6 camera-type-card-column">
          <CameraTypeCard />
        </div>
        <div className="col-md-6 lens-type-card-column">
          <LensTypeCard />
        </div>
      </div>
    </section>
  )
}


export default CameraType;