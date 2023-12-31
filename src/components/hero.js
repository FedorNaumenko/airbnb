import photogrid from '../images/photo-grid.jpg';

export default function Hero() {
    return (
        <section className="hero">
            <img src={photogrid} alt="hero" className='hero--photo'/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Unique activities we can do together, led by a world of hosts.</p>
        </section>
    )
}