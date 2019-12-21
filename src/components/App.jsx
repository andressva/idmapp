import React from 'react'
import SideBar from './SideBar.jsx'
import Panel from './Panel.jsx'
import '../styles/index.scss'


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            game: {playing: false, waitInput: false, voting: false, winner: false},
            pointsToWin: 20,
            scoreTotal: 0,
            sellers: [],
            loading: {sellers: false, facture: false},
            facture: {}
        }
    }

    start =  async() =>{
        this.setState({game: {playing: true}, loading: {sellers: true}});
        this.getSellers()
    }

    getSellers = async () => {
        let Base64Auth = btoa(`${process.env.EMAIL}:${process.env.API_KEY_ALEGRA}`)
        try{
            let resAPI = await fetch("https://api.alegra.com/api/v1/sellers/", {
                headers: new Headers ({
                  Accept: "application/json",
                  Authorization: `Basic ${Base64Auth}`,
                  "Content-Type": "application/json"
                })
              })

            let data = await resAPI.json()
            this.completeSeller(data)
            this.setState({
                game: {
                    playing: true,
                    waitInput: true,
                    voting: false,
                    winner: false
                }, 
                loading: {
                    sellers: false
                }
            })
        }catch(err){
            console.log('ERROR: ' + err)
        }
    }

    completeSeller = (data) => {    
        let sellers = data.map(s => {
            s.points = 0
            s.image = ''
            s.isWinner = false
            return s
        })
        this.state.sellers = sellers
    }

    searchImages = async (keyword) =>{

        let resGoogleAPI = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY_GOOGLE}&cx=${process.env.SEACRH_ENGINE_ID_GOOGLE}&searchType=image&q=${keyword}` )
        let data = await resGoogleAPI.json()
        this.addImgSeller(data)
        this.setState({
            game: {
                playing: true,
                waitInput: false,
                voting: true,
                winner: false
            }, 
            loading: {
                sellers: false
            }
        }) 
    }

    addImgSeller = (data) => {
        this.state.sellers.forEach( (s, i) => {
            s.image = data.items[i].link
        })
    }

    addPoints = async (id) => {
        const seller = this.state.sellers[id]
        seller.points += 3
        this.state.scoreTotal += 3
        if(seller.points >= this.state.pointsToWin){
            seller.isWinner = true
            this.setState({
                game: {
                    playing: true,
                    waitInput: false,
                    voting: false,
                    winner: true
                }, 
                loading: {
                    sellers: false,
                    facture: true
                }
            })
            this.postDataFacture(seller);
        }else{
            this.setState({
                game: {
                    playing: true,
                    waitInput: true,
                    voting: false,
                    winner: false
                }, 
                loading: {
                    sellers: false
                }
            })
        }
    }

    postDataFacture = async (seller) => {
        let Base64Auth = btoa(`${process.env.EMAIL}:${process.env.API_KEY_ALEGRA}`)
        let obj = this.createDataToPOST(seller)
        try{
            const resAPI = await fetch('https://api.alegra.com/api/v1/invoices/', {
                method: 'POST',
                headers: new Headers ({
                    Accept: "application/json",
                    Authorization: `Basic ${Base64Auth}`,
                    "Content-Type": "application/json",
                }),
                body: obj
            })
            const facture = await resAPI.json()
            this.setState({
                game: {
                    playing: true,
                    waitInput: false,
                    voting: false,
                    winner: true
                }, 
                loading: {
                    sellers: false,
                    facture: false
                },
                facture: facture
            })
        }catch(err){
            console.log('ERROR POST: ' + err)
        }

    }

    createDataToPOST = (seller) => {
        let dateNow = new Date().toJSON().toString().split('T')[0]
        let price = this.state.scoreTotal
        let obj = {
            "date": dateNow,
            "dueDate": dateNow,
            "client": 1,
            "items": [{"id": 1, "price": price, "quantity": 1}],
            "seller": {"id": seller.id}
        }

        return JSON.stringify(obj)
    }

    reset = () => {
        this.setState({
            game: {
                playing: false,
                waitInput: false,
                voting: false,
                winner: false
            }, 
            loading: {
                sellers: false,
                facture: false
            },
            scoreTotal: 0
        })
    }

    render(){
        return(
            <div className="container">
                <SideBar loading={this.state.loading} game={this.state.game} start={this.start} sellers={this.state.sellers} />
                <Panel gameState={this.state.game} loading={this.state.loading} facture={this.state.facture} addPoints={this.addPoints} sellers={this.state.sellers} sendKeyword={this.searchImages} reset={this.reset} />
            </div>
        )
    }
}

export default App