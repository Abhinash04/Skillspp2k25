import bike from "../assets/images/bike.png"

export default function Timeline() {
    return (
        <div className="grid-bg">
            <div className="timeline-wrapper wrapper">
                <div className="time-left">
                    <div className="time-head topic-head">The Timeline</div>
                    <div className="timeline-weeks">
                        <div className="left-time">
                            <div className="time" style={{color: "#FF5A01"}}>Recap Weekend</div>
                            <div className="time">Week Zero:</div>
                            <div className="time">Week One:</div>
                            <div className="time">Week Two:</div>
                            <div className="time">Week Three:</div>
                        </div>
                        <div className="right-time">
                            <div className="time" style={{color: "#FF5A01"}}>04th Jul - 06th Jul</div>
                            <div className="time">07th Jul - 13th Jul</div>
                            <div className="time">14th Jul - 20th Jul</div>
                            <div className="time">21st Jul - 27th Jul</div>
                            <div className="time">28th Jul - 3rd Aug</div>
                        </div>
                    </div>
                </div>
                <div className="time-right">
                    <img src={bike} alt="" />
                </div>
            </div>
        </div>
    )
}