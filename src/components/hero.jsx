import './hero.css';

function Hero(props) {
    return (
        <div className="hero-cards">
            
            <img className="hero-avatar" src={props.avatar} alt="Супергеройский супергерой"/>
            <h1 className="hero-name">{props.name}</h1>
            <h2>{props.universe}</h2>
            <div> <p>Альтер-эго:</p> {props.alter}</div>
            <div> <p>Деятельность:</p>{props.activity}</div>
            <div><p>Друзья:</p>{props.friends}</div>
            <div><p>Суперсилы:</p>{props.superpower}</div>
            
            
        </div>
    );
}

export default Hero;