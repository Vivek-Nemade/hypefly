import React from 'react'
import data from '../products.json'
import {AiOutlineHeart} from 'react-icons/ai'
import styles from  '../moduleCSS/sneakers.module.css'

const Sneakers = () => {
    // console.log(data)
  return (
    <div className={styles.topDiv} >
        <div >
            <p  style={{fontSize:"32px", fontWeight:"700",fontFamily:"Avenir,Manrope, sans-serif",paddingTop:"60px", paddingBottom:"30px"}}>SNEAKERS</p>
        </div>
        <div className={styles.prodDiv} >
            {
                data.sneakers.map((el)=>(
                    <div className={styles.prod} key={el.id}>
                        <div style={{display:"flex",justifyContent:"space-between",width:"276px",margin:"auto",marginTop:"5px"}}>
                            <AiOutlineHeart size={20} />
                            <p style={{backgroundColor:"rgb(229, 62, 62)", color:"white",padding:"0 7.5px",fontSize:"16px", fontWeight:"600"}}>SALE</p>
                        </div>
                        <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
                            <img style={{width:"276px", height:"276px"}} src={el.Imgurl} alt={el.prodName} />
                        </div>
                        <p style={{fontSize:"16px",width:"276px",margin:"auto", fontFamily:"Avenir,Manrope, sans-serif", fontWeight:"400"}}>{el.prodName}</p>
                        <div style={{display:'flex',width:"276px",margin:"auto",justifyContent:"center",gap:"10px",alignItems:"center",marginTop:"10px", marginBottom:"35px"}}>
                            <p style={{fontSize:"14px",fontFamily:"Avenir,Manrope, sans-serif", fontWeight:"600",color:"#718096"}}>{el.salePrice}</p>
                            <p style={{fontSize:"12px",fontFamily:"Avenir,Manrope, sans-serif", fontWeight:"600",color:"#C53030",textDecoration:"line-through"}}>{el.MRP}</p>
                        </div>
                       
                    </div>
                ))
            }
        </div>
        <div style={{display:"flex",justifyContent:"center",textAlign:'center'}}>
            <p style={{padding:"10px 16px",fontWeight:"700",marginBottom:"50px",lineHeight:"1.2",verticalAlign:"center",marginTop:'10px',fontSize:"16px",border:"1px solid black"}}>VIEW ALL</p>
        </div>
    </div>
  )
}

export default Sneakers