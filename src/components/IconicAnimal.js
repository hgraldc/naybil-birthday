import Kelinci1 from "../assets/img/Kelinci1.jpeg"
import Kelinci2 from "../assets/img/Kelinci2.jpeg"
import Panda1 from "../assets/img/Panda1.jpeg"
import Panda2 from "../assets/img/Panda2.jpeg"
import IconicAnimalData from "./IconicAnimalData"
import "./IconicAnimalStyles.css"

const IconicAnimal = () => {
    return (
        <div className="destination">
            <h1>Zoo's Iconic Animals</h1>
            <p>Discover iconic wildlife and animals that suit your personality</p>
            
            <IconicAnimalData
                className="first-des"
                heading="Kelinci"
                text='Kelinci adalah simbol kelembutan dan kedamaian. 
                Dengan perilaku yang pemalu dan hati-hati, hewan ini menggambarkan ketenangan dan kasih sayang. 
                Kelinci sangat menyukai tempat yang aman dan nyaman, mencerminkan kepribadian yang sensitif dan penuh perhatian. 
                Selain itu, bulu lembut dan tingkah laku menggemaskan mereka menjadikan kelinci favorit di kalangan pecinta hewan. 
                Kelinci sering dianggap membawa keberuntungan dan kebahagiaan, menjadikannya simbol kehidupan yang damai.'
                img1={Kelinci1}
                img2={Kelinci2}
            />
            <IconicAnimalData
                className="first-des-reverse"
                heading="Panda"
                text='Panda adalah hewan yang melambangkan ketenangan dan kedamaian. 
                Dengan sifatnya yang lembut dan cenderung menghindari konflik, panda dikenal sebagai hewan yang pemalu namun menyenangkan. 
                Kehidupannya yang damai di hutan bambu membuat panda menjadi simbol keseimbangan dan harmoni. 
                Selain itu, penampilannya yang lucu dan ekspresif menjadikan panda salah satu hewan paling dicintai di dunia. 
                Panda juga mengajarkan pentingnya hidup sederhana dan menghargai momen-momen kecil dalam kehidupan.'
                img1={Panda1}
                img2={Panda2}
            />
        </div>
    )
}

export default IconicAnimal;