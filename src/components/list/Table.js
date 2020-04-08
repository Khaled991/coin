import React from 'react';
import './Table.css'
import { renderChange } from '../../helpers'
import {withRouter} from 'react-router-dom';


const Table = (props)=>{
    const {currencies,history} = props;
    return(
        <div className='Table-container'>
                
                <table className='Table'>
                    <thead className='Table-head'>
                        <tr>
                            <th>cryptocurrency</th>
                            <th>Price</th>
                            <th>Market</th>
                            <th>24H Change</th>
                        </tr>
                    </thead>
                    <tbody className='Table-body'>
                            {currencies.map((currency) =>
                            <tr 
                                key={currency.id}
                                    onClick={()=> history.push(`/currency/${currency.id}`)}
                            >

                                <td>
                                    <span className='Table-rank'>{currency.rank}</span>
                                        {currency.name}
                                </td>
                                <td>
                                    <span className='Table-dollar'>$</span>
                                    {currency.price}
                                </td>
                                <td>
                                    <span className='Table-rank'>$</span>
                                    {currency.marketCap}
                                </td>
                                <td>
                                    {renderChange(currency.percentChange24h)}
                                </td>
                            </tr> 
                        )}        
                    </tbody>
                </table>
            </div>
    );
}


export default withRouter(Table);