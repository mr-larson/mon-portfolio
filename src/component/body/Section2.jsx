import React from 'react'

export default function Section2() {
    return (
        <section id="section2" className="card container-fluid">
            <h3 className="text-light pt-4">Lastest projects</h3>
                <div class="row">
                    <div class="box col-sm-12 col-md-offset-1 col-md-3" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
                        
                        <span></span>
                        <div className="content">
                            <img class="card-img-top" src="./img/awa img.png" alt="img de site"></img>
                            <h2>Site Roster</h2>
                            <p>Durant cette exercice mon objectif était de créer un classement automatisé de lutteurs ce mettant à jour après chaque combats</p>
                            <a href="https://github.com/mr-larson/championship_guacamolito" target="_blank"> Read more</a>
                        </div>
                        
                    </div>
                    <div class="box col-sm-12 col-md-4" data-tilt data-tilt-reverse="true">
                        <span></span>
                        <div className="content">
                            <img class="card-img-top" src="./img/Emporium img.png" alt="img de site"></img>
                            <h2>Site Emporium</h2>
                            <p>Durant la création de se site j'ai pu exploiter plusieurs méthodes JS afin de créer un formulaire, un e-shop, et bien plus...</p>
                            <a href="https://github.com/mr-larson/cs17_emporium_js_Gauthier" target="_blank">  Read more</a>
                        </div>
                    </div>

                    <div class="box col-sm-12 col-md-3" data-tilt data-tilt-reverse="true">
                        <span></span>
                        <div className="content">
                            <img class="card-img-top" src="./img/site du chef img.png" alt="img de site"></img>
                            <h2>Site du chef</h2>
                            <p>première reproduction de site à l'identique qui m'a permis optimisé au mieux mes compétences en HTML, CSS et SASS</p>
                            <a href="https://github.com/mr-larson/C17_Gauthier_ChefMain" target="_blank"> Read more</a>
                        </div>
                    </div>

                </div>
        </section>
    )
}
