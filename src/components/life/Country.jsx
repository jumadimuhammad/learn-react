import React, {useState, useEffect} from 'react'

export default function Country() {
    const [data, setData] = useState([])
    useEffect(()=>{
        const url = 'https://restcountries.eu/rest/v2/all'

        fetch(url).then ((response) => {
            return response.json()
        })
        .then((result) =>{
            setData(result)
        }

        )
    }, [])
    console.log(data)
    return (
        <div>
            <hr/>
             {Array.isArray(data) &&
                    data.map((element, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col-4 mt-2">
                                    <img
                                        className="img-thumbnail"
                                        src={element.flag}
                                        alt=""
                                    />
                                </div>
                                <div className="col">
                                    <h1>{element.name}</h1>
                                    <p>{element.capital}</p>
                                    <p>{element.region}</p>
                                    <p>{element.subregion}</p>
                                </div>
                            </div>
                        );
                    })}
        </div>
    )
}
