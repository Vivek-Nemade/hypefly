import React from 'react'
import data from '../products.json'
import {AiOutlineHeart} from 'react-icons/ai'
import styles from  '../moduleCSS/accesories.module.css'

const Accesories = () => {
  return (
    <div className={styles.topDiv}>
        <div style={{display:"flex", justifyContent:"center",alignItems:'center'}}>
            <p style={{fontSize:"32px", fontWeight:"700",fontFamily:"Avenir,Manrope, sans-serif",paddingTop:"60px", paddingBottom:"30px"}}>ACCESORIES</p>
        </div>
        <div className={styles.prodDiv}>
            {
                data.accesories.map((el)=>(
                    <div key={el.id} className={styles.prod}>
                        <div >
                            <AiOutlineHeart size={20}/>
                            <p >SALE</p>
                        </div>
                        <div  className={styles.prod2div} >
                            <img  src={el.Imgurl} alt={el.prodName} />
                        </div>
                        <p className={styles.prodname} >{el.prodName}</p>
                        {/* <div style={{display:'flex',width:"276px",margin:"auto",justifyContent:"center",gap:"10px",alignItems:"center",marginTop:"10px", marginBottom:"35px"}}> */}
                            <p style={{fontSize:"14px",paddingBottom:"20px",textAlign:"center",fontFamily:"Avenir,Manrope, sans-serif", fontWeight:"600",color:"#718096"}}>{el.salePrice}</p>
                            {/* <p style={{fontSize:"12px",fontFamily:"Avenir,Manrope, sans-serif", fontWeight:"600",color:"#C53030",textDecoration:"line-through"}}>{el.MRP}</p> */}
                        {/* </div> */}
                       
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

export default Accesories