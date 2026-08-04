import ProtocolForm from "./ProtocolForm";
function Protocol() {
  return (
    <section className="protocol-section mt-5">
      <div className="protocol-heading-div">
        <h2 className="protocol-heading">Protocol Initialization</h2>
        <p className="protocol-paragraph">Formalize your intent via the encrypted channel below.</p>
      </div>
      <ProtocolForm />
    </section>
  );
}


export default Protocol