import "./HeroStyles.css";

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="Hero Banner" />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <button onClick={props.onButtonClick} className={props.btnClass}>
                        {props.buttonText}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Hero;
