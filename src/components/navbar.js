import airbnblogo from '../images/airbnb-logo.jpg';

export default function Navbar() {
    return (
        <nav>
            <img src={airbnblogo} alt="airbnb logo" className='nav--logo'/>
        </nav>
    )
}
