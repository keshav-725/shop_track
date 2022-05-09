import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {AiOutlineHeart,AiFillStar} from "react-icons/ai"
import {MdLocationPin} from "react-icons/md"
import "./shop.css";
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi"
import Filter from './Filter';

const Shop = () => {
    const [shop, setshop] = useState([])
    const [offer, setoffer] = useState(false)
    useEffect(async () => {
        const data = {
            user_id:"",
            category_ids:[],
            latitude: 22.4851231, 
            longitude: 88.3653907,
            order_by:"",
            order_mode:"" 
        }
        const res = await axios.post(" https://devfitser.com/Trendlie/api/get-business",data)
        setshop(res.data.data.business_data);
    }, [])
    const changeOffer=()=>{
        setoffer(!offer)
    }
    const setFilter=async(filter)=>{
        changeOffer()
        const data = {
            user_id:"",
            category_ids:[],
            latitude: 22.4851231, 
            longitude: 88.3653907,
            ...filter
        }
        const res = await axios.post(" https://devfitser.com/Trendlie/api/get-business",data)
        setshop(res.data.data.business_data);
    }
    return (
        <div>
            <div>
                <input type={"text"} className="inputText3"/>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
                <div>Business List</div>
                <div><GiHamburgerMenu onClick={changeOffer} color='#44A9FB' size={"1.5rem"} style={{marginRight:"10px"}}/><Link to="/map"><MdLocationPin color='#44A9FB' size={"1.5rem"}/></Link></div>
            </div>
            <div>
                {
                    shop.map((eachdata) => {
                        return <div key={eachdata.id} className='card'>
                            <div className='shopimagediv'>
                                <img className='shopimage' src={eachdata.business_image} alt=""/>
                            </div>
                            <div className='shopdetaildiv'>
                                <div className='premiumofferdiv'>
                                    <div style={{display:"flex"}}>
                                        <div className='premiumdiv'>PREMIUM</div>
                                        <div className='offerdiv'>OFFER AVAILABLE</div>
                                    </div>
                                    <div><AiOutlineHeart color='#A5B3BE' size={'1.5rem'}/></div>
                                </div>
                                <div className='shoptitle'>{eachdata.title}</div>
                                <div className='shoptype'>Restaurant</div>
                                <div className='shopreview'>
                                    <div><AiFillStar color='#44A9FB'/><span>{eachdata.avrg_rating}/5</span></div>
                                    <div><MdLocationPin color='#44A9FB'/><span>{eachdata.distance}&nbsp; miles</span></div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            {
                offer==true?<Filter setSelectedFilter={setFilter} changeOffer={changeOffer}/>:""
            }
        </div>
    )
}

export default Shop