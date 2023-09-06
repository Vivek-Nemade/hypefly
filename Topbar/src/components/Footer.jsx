import React from 'react'
import {AiOutlineMail,AiOutlineInstagram,AiOutlineShoppingCart,AiOutlineUser} from 'react-icons/ai'
import {BsFacebook,} from 'react-icons/bs'
// import {FaCircleUser} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'
import styles from  '../moduleCSS/footer.module.css'
import { background } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div className={styles.topDiv} >
        <div className={styles.mainDiv} >
            <div>
                <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU8AAACNCAYAAAA3mvj5AAAACXBIWXMAABYlAAAWJQFJUiTwAAAKsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDMtMjlUMTM6MDA6NDcrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDYtMjBUMjM6NTk6NDYrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTIwVDIzOjU5OjQ2KzA1OjMwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYzOGE4NDQxLTg4MTktZjM0Mi1iM2I0LTcxYWM1M2ZhMmEwZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjI4NDIzYzU4LTU4ZTItMTQ0YS04MDQxLWVhNDgwZTgwOTdmOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjczOTgyMDc1LTE3NWMtNGUxZi04MTYxLWNhMGRlYThmODc0ZSIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iMTQ0MDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iMTQ0MDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpDb2xvclNwYWNlPSIxIiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMTAyNCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEwMjQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjczOTgyMDc1LTE3NWMtNGUxZi04MTYxLWNhMGRlYThmODc0ZSIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0yOVQxMzowMDo0NyswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0ZGQ4NzE3LWFhODYtNGQ4OC05MzdkLTYxODExNWJhMDhkNCIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0yOVQxNDo0ODoxNSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjMzMTcwY2EyLTRhZTYtNDUzYi1iMzUzLWJmMTk5NjU4ZWUzNiIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0yOVQxNDo0ODoxNSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzOGE4NDQxLTg4MTktZjM0Mi1iM2I0LTcxYWM1M2ZhMmEwZiIgc3RFdnQ6d2hlbj0iMjAyMS0wNi0yMFQyMzo1OTo0NiswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NGRkODcxNy1hYTg2LTRkODgtOTM3ZC02MTgxMTViYTA4ZDQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3OTk3YzhiOS1lOWFiLTAyNDctOTY2Mi1mMmM5ZDZmNTNiZjkiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3Mzk4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" alt="" />
                <div style={{display:"flex",columnGap:'30px',marginTop:'20px'}}>
                    <AiOutlineInstagram color='white' size={22}/>
                    <BsFacebook  color='white' size={22}/>
                    <AiOutlineMail  color='white' size={22}/>
                </div>
                <p style={{color:"#4299E1", fontSize:"18px",marginTop:'20px',textAlign:'left'}}>BUSINESS SOLUTIONS</p>
                <p style={{color:"white",marginTop:'10px',textAlign:'left'}}>contact@hypefly.co.in</p>
            </div>
            <div>
                <p style={{color:"#4299E1", fontSize:"18px",marginTop:'20px',textAlign:'left',marginBottom:'10px'}}>PAGES</p>
                <ul style={{color:"white",fontSize:'16px',listStyle:"none",textAlign:'left', display: "flex",
  flexDirection: "column",
  gap: "10px"}}>
                    <li>Home</li>
                    <li>Sneakers</li>
                    <li>Streetwear</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
            <p style={{color:"#4299E1", fontSize:"18px",marginTop:'20px',textAlign:'left',marginBottom:'10px'}}>POLICIES</p>
                <ul style={{color:"white",fontSize:'16px',listStyle:"none",textAlign:'left', display: "flex",
  flexDirection: "column",
  gap: "10px"}}>
                    <li>Return Policy</li>
                    <li>Terms of Service</li>
                    <li>Seller Policy</li>
                    <li>Privacy Policy</li>
                    <li>Shipping Policy</li>
                </ul>
            </div>
            <div>
                <div>
                    <p>BLOG</p>
                    <div>
                        <input style={{color:"rgba(0, 0, 0, 0.06)", backgroundColor:"#1a202c"}} type="email" name="" id="" placeholder='Your email address' />
                        <button style={{marginLeft:"10px"}}>
                            <BiMailSend color='white'/>
                        </button>
                    </div>
                </div>
                <div>
                    <p style={{color:"#4299E1", fontSize:"18px",marginTop:'20px',textAlign:'left',marginBottom:'10px'}}>ACCOUNT</p>
                    <div style={{display:"flex"}}>
                        <AiOutlineUser color='white' size={22}/>
                        <AiOutlineShoppingCart color='white' size={22}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer