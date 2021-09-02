import React, { Component } from 'react'

export default class SectionStock extends Component {
    render() {
        return (
            <div className="col-4 sm-offset-1-sm-6">
                <div className="cards">
                    <img src={this.props.article.img} className="card-img-top" alt="..." />
                    <div className={`card-body ${this.props.article.stock === 1 ? "bg-warning" : this.props.article.stock === 0 ? "bg-danger" : "bg-white"}`}>
                        <h4 className="card-title">{this.props.article.nom}</h4>
                        <p className="card-text">Prix : {this.props.article.prix}€</p>
                        <p className="card-text">{this.props.article.stock === 0 ? "Rupture de stock" : `Stock : ${this.props.article.stock} unités`}</p>
                        <button className={`btn btn-success ${this.props.article.stock === 0 || this.props.argent < this.props.article.prix ? "d-none" : ""}`} onClick={this.props.acheter}>Acheter</button>
                    </div>
                </div>
            </div>
        )
    }
}