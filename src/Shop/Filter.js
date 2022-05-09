import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Filter = (props) => {
    const history = useHistory();
    const [filter, setfilter] = useState([])
    const selectFilter =(e)=>{
        const {name,value} = e.target
        if(value=="nameatz"){
            const arr = {
                order_by:"business_name",
                order_mode:"ASC"
            }
            setfilter(arr)
        }else if(value=="namezta"){
            const arr = {
                order_by:"business_name",
                order_mode:"DESC"
            }
            setfilter(arr)
        }else if(value=="distancelth"){
            const arr = {
                order_by:"distance",
                order_mode:"ASC"
            }
            setfilter(arr)
        }else if(value=="distancehtl"){
            const arr = {
                order_by:"distance",
                order_mode:"DESC"
            }
            setfilter(arr)
        }else if(value=="reviewslth"){
            const arr = {
                order_by:"avrg_rating",
                order_mode:"ASC"
            }
            setfilter(arr)
        }else if(value=="reviewshtl"){
            const arr = {
                order_by:"avrg_rating",
                order_mode:"DESC"
            }
            setfilter(arr)
        }
        console.log(filter)
    }
  return (
    <div className='filterdiv'>
        <div onClick={props.changeOffer} style={{height:"65%"}}></div>
        <div className='filterinnerdiv'>
            <div>Filter</div>
            <div><input onClick={selectFilter} value="nameatz" name='offerselected' type={"radio"}/>Name A-Z</div>
            <div><input onClick={selectFilter} value="namezta" name='offerselected' type={"radio"}/>Name Z-A</div>
            <div><input onClick={selectFilter} value="distancelth" name='offerselected' type={"radio"}/>By Distance (Low to High)</div>
            <div><input onClick={selectFilter} value="distancehtl" name='offerselected' type={"radio"}/>By Distance (High to Low)</div>
            <div><input onClick={selectFilter} value="reviewslth" name='offerselected' type={"radio"}/>Reviews (Low to High)</div>
            <div><input onClick={selectFilter} value="reviewshtl" name='offerselected' type={"radio"}/>Reviews (High to Low)</div>
            <div className='buttondiv'>
                <div onClick={()=>{props.setSelectedFilter(filter)}} className='buttoninnerdiv'>Apply</div>
            </div>
        </div>
    </div>
  )
}

export default Filter