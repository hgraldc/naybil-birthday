import "./FooterStyles.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>myZOO</h1>
                    <p>Choose an Animal that Describes You.</p>
                </div>
                <div>
                    <a href="https://www.instagram.com/h.grald/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://x.com/hfzhgrldchndr">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="https://github.com/hgraldc">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/hafizhgc/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">Lisence</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Lisence</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;