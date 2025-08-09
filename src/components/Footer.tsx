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
                    <div className="felx space-x-6 ">
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
                    {/* trending now section */}
                    <div>
                        <h1 className="text-lg font-bold mb-4">Trending Now</h1>
                        <ul className="space-y-2">
                            <li>
                                <a href="" className="hover:underline">
                                    New Arrivals
                                </a>
                            </li>
                            <li>
                                <a href="" className="hover:underline">
                                    Best Sellers
                                </a>
                            </li>
                            <li>
                                <a href="" className="hover:underline">
                                    Sale Items
                                </a>
                            </li>
                            <li>
                                <a href="" className="hover:underline">
                                    Featured Products
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* about us */}
                <div>
                    <h1 className="text-lg font-bold mb-4">About Us</h1>
                    <ul className="space-y-2">
                        <li>
                            <a href="" className="hover:underline">
                                Our Story
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Press
                            </a>
                        </li>
                    </ul>
                </div>
                {/*help */}
                <div>
                    <h1 className="text-lg font-bold mb-4">Help</h1>
                    <ul className="space-y-2">
                        <li>
                            <a href="" className="hover:underline">
                                Customer Support
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Shipping & Delivery
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Returns & Refunds
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
