import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

function History() {
    const [todayprice, updatetodayprice] = useState({}),
        [yesterdayprice, updateyesterdayprice] = useState({}),
        [twodaysprice, updatetwodaysprice] = useState({}),
        [threedaysprice, updatethreedaysprice] = useState({}),
        [fourdaysprice, updatefourdaysprice] = useState({})
    
    const getETHPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date)
    }
    const getBitcoinPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date)
    }
    const getLTCPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date)
    }

    const getTodayPrice = () => {
        let t = moment().unix()
        axios.all([getETHPrices(t), getBitcoinPrices(t), getLTCPrices(t)])
        .then(axios.spread((eth, btc, ltc) => {
            let f = {
                date: moment.unix(t).format("MMMM Do YYYY"),
                eth: eth.data.ETH.USD,
                btc: btc.data.BTC.USD,
                ltc: ltc.data.LTC.USD,
            }
            updatefourdaysprice(f)
        }))
    }

    useEffect(() => {
        getTodayPrice()
    })

    return (
        <div className="history--section container">
            <h2>History (Past 5 days)</h2>
            <div className="history--section__box">
                <div className="history--section__box__inner">
                    <h4>15/02/2020</h4>
                    <div className="columns">
                        <div className="column">
                            <p>1 BTC = ${todayprice.btc}</p>
                        </div>
                        <div className="column">
                            <p>1 ETH = ${todayprice.eth}</p>
                        </div>
                        <div className="column">
                            <p>1 LTC = ${todayprice.ltc}</p>
                        </div>
                    </div>
                </div>
                <div className="history--section__box__inner">
                <h4>15/02/2020</h4>
                    <div className="columns">
                        <div className="column">
                            <p>1 BTC = ${yesterdayprice.btc}</p>
                        </div>
                        <div className="column">
                            <p>1 ETH = ${yesterdayprice.eth}</p>
                        </div>
                        <div className="column">
                            <p>1 LTC = ${yesterdayprice.ltc}</p>
                        </div>
                    </div>
                </div>
                <div className="history--section__box__inner">
                    <h4>15/02/2020</h4>
                    <div className="columns">
                        <div className="column">
                            <p>1 BTC = ${twodaysprice.btc}</p>
                        </div>
                        <div className="column">
                            <p>1 ETH = ${twodaysprice.eth}</p>
                        </div>
                        <div className="column">
                            <p>1 LTC = ${twodaysprice.ltc}</p>
                        </div>
                    </div>
                </div>
                <div className="history--section__box__inner">
                    <h4>15/02/2020</h4>
                    <div className="columns">
                        <div className="column">
                            <p>1 BTC = ${threedaysprice.btc}</p>
                        </div>
                        <div className="column">
                            <p>1 ETH = ${threedaysprice.eth}</p>
                        </div>
                        <div className="column">
                            <p>1 LTC = ${threedaysprice.ltc}</p>
                        </div>
                    </div>
                </div>
                <div className="history--section__box__inner">
                    <h4>15/02/2020</h4>
                    <div className="columns">
                        <div className="column">
                            <p>1 BTC = ${fourdaysprice.btc}</p>
                        </div>
                        <div className="column">
                            <p>1 ETH = ${fourdaysprice.eth}</p>
                        </div>
                        <div className="column">
                            <p>1 LTC = ${fourdaysprice.ltc}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default History