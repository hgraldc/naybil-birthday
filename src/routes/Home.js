import IconicAnimal from "../components/IconicAnimal";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Explore from "../components/Explore";
import CanvaEmbed from "./CanvaEmbed";
import { useRef } from "react";
import audioFile from "../assets/music/Audio.mp3"; // Audio file
import bannerImg from "../assets/img/BannerImg.png"; // Gambar Banner

function Home() {
    const audioRef = useRef(new Audio(audioFile));

    const handlePlayAudio = () => {
        audioRef.current.currentTime = 0; // Set to start
        audioRef.current.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    };

    return (
        <div>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={bannerImg}
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
