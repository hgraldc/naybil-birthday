import IconicAnimal from "../components/IconicAnimal";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Explore from "../components/Explore";
import CanvaEmbed from "./CanvaEmbed";
import { useRef } from "react";
import audioFile from "../assets/music/Audio.mp3";
import bannerImg from "../assets/img/BannerImg.png"; // Gambar Banner

function Home() {
    const audioRef = useRef(null);

    const handlePlayAudio = () => {
        audioRef.current.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    };

    return (
        <div>
            <audio ref={audioRef} src={audioFile} loop />
            <Navbar />
            <Hero
                cName="hero"
                heroImg={bannerImg} // Menggunakan gambar banner
                title="Find Your Animal"
                text="Choose an Animal that Describes You"
                buttonText="Let's ZOO!"
                url="/"
                btnClass="show"
                onButtonClick={handlePlayAudio} // Pass the function as a prop
            />
            <IconicAnimal />
            <Explore />
            <CanvaEmbed />
            <Footer />
        </div>
    );
}

export default Home;
