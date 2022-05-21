import React from 'react'
import {AiOutlineTwitter,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'
import '../styles/footer.css'
function Footer() {
  return (<>
    <div class="footer-basic">
    <footer  >
        <div className='icon' >
          <center>
    <img style={{borderRadius:'50%',margin:'10px'}} width={100} height={100}  src='https://images-platform.99static.com/hi04QQRp8-wNDZxO5MJXc_Eee7c=/224x748:792x1316/500x500/top/smart/99designs-contests-attachments/92/92019/attachment_92019603' alt='logo'/>
<br/>
        <a  href='https://www.twitter.com' target='_blank'><AiOutlineTwitter size={30} /></a>
        <a  href='https://www.fb.com'target='_blank'><AiFillFacebook size={30} /></a>
        <a  href='https://www.instagram.com'target='_blank'><AiFillInstagram size={30} /></a>
        </center>
        </div>
        <ul class="list-inline">
            <li class="list-inline-item"><a  href="#">Home</a></li>
            <li class="list-inline-item"><a  href="#">Services</a></li>
            <li class="list-inline-item"><a  href="#">About</a></li>
            <li class="list-inline-item"><a  href="#">Terms</a></li>
            <li class="list-inline-item"><a  href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">Resto © 2018</p>
    </footer>
</div>


</> )
}

export default Footer