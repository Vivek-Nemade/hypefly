import React from 'react'
import data from '../products.json'
import {AiOutlineHeart} from 'react-icons/ai'
import styles from  '../moduleCSS/shoes.module.css'

const Shoes = () => {
  return (
    <div className={styles.topDiv}>
        <div style={{display:"flex", justifyContent:"center",alignItems:'center'}}>
            <p style={{fontSize:"32px", fontWeight:"700",fontFamily:"Avenir,Manrope, sans-serif",paddingTop:"60px", paddingBottom:"30px"}}>STREETWEAR</p>
        </div>
        <div className={styles.prodDiv}>
            {
                data.shoes.map((el)=>(
                    <div  key={el.id} className={styles.prod}>
                        <div className={styles.prod} >
                            <AiOutlineHeart size={20}/>
                            <p >SALE</p>
                        </div>
                        <div className={styles.prod2div} >
                            <img src={el.Imgurl} alt={el.prodName} />
                        </div>
                        <p className={styles.prodname}  >{el.prodName}</p>
                         <div className={styles.prod3div} >
                            <p className={styles.prod3mrp} >{el.salePrice}</p>
                             {/* <p style={{fontSize:"12px",fontFamily:"Avenir,Manrope, sans-serif", fontWeight:"600",color:"#C53030",textDecoration:"line-through"}}>{el.MRP}</p> */}
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

export default Shoes