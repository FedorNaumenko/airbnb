import katie from '../images/katie-zaferes.jpg';
import star from '../images/red-star.jpg';

export default function Card() {
    return (
        <div classname = "card">
            <img src = {katie} alt = "card" className = "card--photo"/>
            <div className = "card--stats">
                <img src = {star} alt = "card" className = "card--star"/>
                <span>5.0</span>
                <span className="grey">*</span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}