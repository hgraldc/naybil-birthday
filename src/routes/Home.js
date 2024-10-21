import IconicAnimal from "../components/IconicAnimal";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Explore from "../components/Explore";
import CanvaEmbed from "./CanvaEmbed";
import { useEffect, useRef } from "react";
import audioFile from "../assets/music/Audio.mp3";
import bannerImg from "../assets/img/BannerImg.png"; // Gambar Banner


function Home() {

    const audioRef = useRef(null);

    useEffect(() => {
        // Memutar audio saat komponen dimount
        audioRef.current.play().catch(error => {
            console.error("Autoplay diblokir oleh browser:", error);
        });
    }, []);

    return (
        <div>
            <audio ref={audioRef} src={audioFile} loop autoPlay />
            <Navbar />
            <Hero
                cName="hero"
                heroImg={bannerImg} // Menggunakan gambar banner
                title="Find Your Animal"
                text="Choose an Animal that Describes You"
                buttonText="Let's ZOO!"
                url="/"
                btnClass="show"
            />
            <IconicAnimal/>
            <Explore/>
            <CanvaEmbed/>
            <Footer />
        </div>
    );
}

export default Home;
