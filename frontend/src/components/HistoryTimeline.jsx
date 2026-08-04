
import TimelineItem from "./TimelineItem";

function HistoryTimeline() {
  const history = [
    {
      year: "12",
      title: "ZERO-LEAK",
      description:
        "INAUGURAL PATENTS FOR LIQUID-COOLING CONTAINMENT IN MOBILE ARCHITECTURES.",
    },
    {
      year: "16",
      title: "UNIBODY",
      description:
        "THE FIRST MONOLITHIC CHASSIS MILLED FROM A SINGLE BLOCK OF GRADE-5 Ti.",
    },
    {
      year: "20",
      title: "ALPHA Z",
      description:
        "SETTING THE GLOBAL STANDARD FOR LOW-LATENCY WIRELESS AUDIO TRANSMISSION.",
    },
    {
      year: "24",
      title: "NEURO-LINK",
      description:
        "INTRODUCTION OF PREDICTIVE HARDWARE DIAGNOSTICS VIA INTEGRATED AI.",
      active: true,
    },
  ];


  return(
    <div className="timeline">
      {history.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  )
}


export default HistoryTimeline;