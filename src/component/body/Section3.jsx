/*-------------- lien JSX --------------*/
import React, { Component } from 'react'

export default class Section3 extends Component {

    constructor (props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            email:'',
            message:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }
    render() {

        return (
            <section id="section3">
                <div className="formulaire container-fluid p-0">
                
                    <button type="button" className="contactBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Contact me
                    </button>

                    
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

                        <div className="modal-dialog">
                            <div className="modal-content myCont">
                                
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel"> Me contacter</h5>
                                    <button type="button" className="btn-close btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">x</button>
                                </div>
                                <div className="modal-body bac">
                                    <div className="row">
                                        <div className="col-sm-offset-2 col-sm-8">
                                            <label htmlFor="nom" className="px-2" > Entrez votre nom</label>
                                            <input className="mb-2" type="text" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-offset-2 col-sm-8">
                                            <label htmlFor="prenom" className="px-2"> Entrez votre prénom</label>
                                            <input className="mb-2" type="text" id="prenom" name="prenom" value={this.state.prenom} onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-offset-2 col-sm-8">
                                            <label htmlFor="email" className="px-2" > Entrez votre mail</label>
                                            <input className="mb-2" type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-offset-2 col-sm-8">
                                            <label htmlFor="message" className="px-2" > Entrez votre message</label>
                                            <textarea cclassName="mb-4" type="text" id="message" name="message" cols="20" rows="7" value={this.state.message} onChange={this.handleChange}></textarea>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                    <button onClick={()=>{ alert('votre mail à bien été envoyer'); }} type="button" class="btn btn-dark">Envoyer</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}


