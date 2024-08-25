import naruto from "./assets/naruto.jpg"

function Card() {

    return(
        <>
            <div className="Card">
                <img src={naruto} alt="some kind of pic"/>
                <h2>Naruto Uzumaki</h2>
                <hr className="hr" />
                <p>I will become the hokage some day!</p>
            </div> 
        </>
    );

}

export default Card;