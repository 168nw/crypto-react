import { createContext, useState, useEffect} from "react";
import { fakeFeatchCrypto, featchAssets } from '../../api.js';
import { percentDifference} from '../../utils.js'
import React from "react";


const CryptoContext = createContext({
    assets: [], 
    crypto: [], 
    loading : false,
})

export function CryptoContextProvider() { 
    const [loading, setLoading] = useState(false)
    const [crypto, setCrypto] = useState([])
    const [assets, setAssets] = useState([])

    useEffect(() => {
        async function preload() {
            setLoading(true)
            const { result } = await fakeFeatchCrypto()
            const assets = await featchAssets() 

            setAssets(assets.map(asset => {
                const coin = result.find((c) => c.id === asset.id )
                return {
                    grow: asset.price < coin.price,
                    growPercent: percentDifference(asset.price, coin.price),
                    totalAmount: asset.amount * coin.price,
                    totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                    ...asset
                }
            }))
           setCrypto(result)
           setLoading(false)
        }
        preload()
    }, [])
    return (
    <CryptoContext.Provider value={{loading, crypto, assets}}></CryptoContext.Provider>
    );
}


export default CryptoContext;