/*-------------- lien JSX --------------*/
import Particles from "react-particles-js"

import Nav from './component/header/Nav'
import Header from './component/header/Header'
import Section1 from './component/body/Section1'
import Section2 from './component/body/Section2'
import Vanilla from './component/body/Vanilla' 
import Section3 from './component/body/Section3'
import MainShop from './component/e-shop/MainShop'
import Footer from './component/footer/Footer'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



import React from 'react'

export default function App() {
  return (
    <div>
  
        <Router>

          <Nav />
          <Switch>

            <Route path="/Section1">
            <Particles
                params={{
                  particles: {
                    number: {
                      value: 20,
                      density:{
                        enable: true,
                        value_area: 900
                      }
                    }
                  }
                }}
              />
              <Section1/>
              <Section3/>
            </Route>

            <Route path="/Section2">
            <Particles
                params={{
                  particles: {
                    number: {
                      value: 50,
                      density:{
                        enable: true,
                        value_area: 600
                      }
                    }
                  }
                }}
              />
              <Section2/>
              <Section3/>
              <Vanilla/>
            </Route>

            <Route path="/MainShop">
              <MainShop/>
              <Section3/>
            </Route>

            <Route path="/">
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 60,
                      density:{
                        enable: true,
                        value_area: 900
                      }
                    }
                  }
                }}
              />
              <Header/>
            </Route>

          </Switch>
          <Footer/>

        </Router>
    
        
        
        
    </div>
  )
}


