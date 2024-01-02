import SocialIcon from "./SocialIcon"
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Whatsapp from '../assets/whatsapp.png'
import Youtube from '../assets/youtube.png'

function Social() {
return <>
<div className="social-block">
    <p>Follow us:</p>
    <ul>
        <SocialIcon image={Facebook} />
        <SocialIcon image={Twitter} />
        <SocialIcon image={Whatsapp} />
        <SocialIcon image={Youtube} />
    </ul>
</div>
</>
}
export default Social