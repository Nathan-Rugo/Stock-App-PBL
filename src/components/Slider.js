// Write your Slider component here
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Slider = () => {
    const [data, setData] = useState(null);
    const api_key = process.env.STOCK_REACT_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
            try{
                const options = {
                    methods: 'GET',
                    url: "https://yfapi.net/v6/finance/quote/marketSummary",
                    header: {
                        'x_api_key': api_key
                    }
                };
                const response = await axios.request(options);
                setData(response.data.marketSummaryResponse.result);
            }
            catch(error){
                console.error(error);
            }
        }
        fetchData();
    }, [api_key]
    );
    return (
        <>
            {
                data ? (
                    <div className='slider'>
                        <div>
                            {
                                data.map((item, index) => {
                                    return item.regularMarketChange.raw > 0 ?
                                    (
                                        <span className='slider-market-raw' key={index}>
                                            <span className='slider-name'>{item.shortName}</span>
                                            {""}
                                            {item.regularMarketPrice.fmt}
                                        <span style={{color:"green"}}>{""}+{item.regularMarketChange.fmt}{""}(+{item.regularMarketChangePercent.fmt})</span>
                                        </span>
                                    ):
                                    (
                                        <span className='slider-maker-raw' key={index}>
                                            <span className='slider-name'>{item.shortName}</span>
                                            {""}
                                            {item.regularMarketPrice.fmt}
                                        <span style={{color:"red"}}>{""}+{item.regularMarketChange.fmt}{""}({item.regularMarketChangePercent.fmt})</span>                                      </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
                : (
                    <div>Loading...</div>
                )
            }
        </>
    )
}
export default Slider;