import React from 'react'
import {PiArrowsCounterClockwiseLight} from 'react-icons/pi'
import {FiLock} from 'react-icons/fi'
import {ImCheckmark2} from 'react-icons/im'
import styles from '../moduleCSS/pictures.module.css'

const Pictures = () => {
  return (
    <div className={styles.topDiv} >
        <div style={{margin:"auto"}}>
            <img style={{width:"100%", height:"auto"}} src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_01.webp" alt="abc" />
        </div>
        <div className={styles.picdiv} >
            <div>
              <img style={{width:"100%", height:"auto"}} src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_02.webp" alt="" />
            </div>
            <div>
                  <img style={{width:"100%", height:"auto"}}  src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_03.webp" alt="" />
            </div>
           
        </div>
        <div className={styles.pic} style={{display:"flex"}}>
            <div >
                <div>
                 <PiArrowsCounterClockwiseLight size={40}/>
                </div>
               
                <p style={{marginTop:"10px", fontWeight:"600", fontSize:"18px"}}>Trust</p>
            </div>
            <div style={{}}>
                <div style={{display:'flex', justifyContent:"center"}}>
                    <FiLock size={40}/>
                </div>
               
                <p style={{marginTop:"10px", fontWeight:"600", fontSize:"18px"}}>Secure Payments</p>
            </div>
            <div>
                <div style={{display:'flex', justifyContent:"center"}}>
                    <ImCheckmark2 size={40}/>
                </div>
                <p style={{marginTop:"10px", fontWeight:"600", fontSize:"20px"}}>Legitimacy</p>
            </div>
            
        </div>
    </div>
  )
}

export default Pictures