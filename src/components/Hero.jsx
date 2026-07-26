// Another way by which a child component can pick up property coming from the parent.
// This method is called: DESTRUCTURING

function Hero({cats}) {

    return (
        <div className="row py-5">
            {
                cats.map(function(cat, index){
                    return(
                        <div className="col-md-2 border border-primary" key={index} >
                            <p>{cat}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Hero;