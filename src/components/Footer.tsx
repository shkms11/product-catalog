import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8  ">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                {/* social medias */}
                <div>
                    <h1 className="text-lg font-bold mb-4">Connect with us</h1>
                    <div className="felx space-x-6">
                        <a
                            href="https://facebook.com"
                            aria-label="Facebook"
                            className="hover:text-blue-600"
                        >
                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </a>
                        <a
                            href="https://instagram.com"
                            aria-label="Instagram"
                            className="hover:text-pink-500"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a
                            href="https://youtube.com"
                            aria-label="Youtube"
                            className="hover:text-red-600"
                        >
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                        <a
                            href="https://pinterest.com"
                            aria-label="Pinterest"
                            className="hover:text-red-500"
                        >
                            <FontAwesomeIcon icon={faPinterestP} size="lg" />
                        </a>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-bold">trending now</h1>
                </div>
                <div className="flex flex-row justify-between">
                    <h1 className="text-lg font-bold">about us</h1>
                </div>
                <div>
                    <h1 className="text-lg font-bold">help</h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
