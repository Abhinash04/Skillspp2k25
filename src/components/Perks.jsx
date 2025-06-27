import week0 from "../assets/images/week0.png"
import week1 from "../assets/images/week1.png"
import week2 from "../assets/images/week2.png"
import week3 from "../assets/images/week3.png"

export default function Perks() {
    return (
        <div className="perks-wrapper wrapper">
            <div className="perks-head topic-head">The Perks</div>
            <div className="certificate blue-head">Badges and Certificate</div>
            <div className="perks-desc hero-desc">Level up and earn a new badge each week, and collect all four to receive a certificate of completion after your fourth successful submission, marking your mastery of the program.</div>

            <div className="all-badges">
                <img src={week0} alt="" />
                <img src={week1} alt="" />
                <img src={week2} alt="" />
                <img src={week3} alt="" />
            </div>
        
        
        </div>
    )
}