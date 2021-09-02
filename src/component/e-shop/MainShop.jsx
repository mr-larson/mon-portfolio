import SectionStock from './SectionStock'
import SectionPanier from './SectionPanier'


import React, { Component } from 'react'

export default class MainShop extends Component {
    state = {
        argent: 10,
        panier: [],
        articles: [
          {
            nom : "Pure Infusion Black Tea",
            prix : 1,
            stock : 5,
            img : "https://www.di.be/dw/image/v2/AATN_PRD/on/demandware.static/-/Sites-master-catalog-di/default/dw9c62a160/zoom/40045615_M.jpg?sw=980&sh=980&sm=fit"
            
          },
          {
            nom : "Pure Infusion White Tea",
            prix : 1,
            stock : 5,
            img : "https://www.di.be/dw/image/v2/AATN_PRD/on/demandware.static/-/Sites-master-catalog-di/default/dw41dbf2a0/zoom/40045613_M.jpg?sw=980&sh=980&sm=fit"
            
          },
          {
            nom : "Pure Infusion Green Tea",
            prix : 1,
            stock : 5,
            img : "https://www.di.be/dw/image/v2/AATN_PRD/on/demandware.static/-/Sites-master-catalog-di/default/dw6d94363b/zoom/40045614_M.jpg?sw=2000&sh=2000&sm=fit"
            
          }
        ]
      }
    
      acheter = (i) => {
        if (this.state.articles[i].stock !== 0 && this.state.argent >= this.state.articles[i].prix) {
          let x = this.state
    
          x.argent -= x.articles[i].prix;
          x.articles[i].stock--;
          x.panier.push(x.articles[i]);
    
          this.setState({ x });
        }
      }
    
      retirer = (i) => {
        let x = this.state
    
        x.argent += x.panier[i].prix;
        x.articles[x.articles.indexOf(x.panier[i])].stock++;
        x.panier.splice(i, 1);
    
        this.setState({ x });
      }
    
      render() {
        return (
          <div className="eshop container p-5">
            <h1>Exemple de e-shop</h1>
            <h2>Argent : {this.state.argent} €</h2>
            <div className="row">
              {this.state.articles.map((e, i) => {
                return (
                  <SectionStock
                    key={i}
                    article={e}
                    argent={this.state.argent}
                    acheter={() => this.acheter(i)}
                  />
                )
              })}
            </div>
            <h2 className="mt-3">Panier : </h2>
            <ul className="list-group">
              {this.state.panier.map((e, i) => {
                return (
                  <SectionPanier
                    key={i}
                    article={e}
                    retirer={() => this.retirer(i)}
                  />
                )
              })}
            </ul>
          </div>
        )
      } 
}

