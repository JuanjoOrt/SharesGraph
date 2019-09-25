import React from 'react'
import Chart from 'react-apexcharts';



const ItemGraph = (props) => {


    return(
        <div className='graph-item'>
            {console.log(props)}
            <div className='graph-title'>
                <div className='graph-text'>{props.title}</div>
            </div>
            <div className='graph-content'>
                {props.children}
            </div>
        </div>
    )
}


export default ItemGraph;