import React, { useState } from "react";
import Ant from "./ant";
import './profile.css'
import { FaAngleUp } from 'react-icons/fa';
import { ArrowDownOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons'
import profile from './screen/profile1.jpg'
function Profile() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 600) {
            setVisible(true)
        }
        else if (scrolled <= 600) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <div>
                <div className="top-to-btm">
                    <FaAngleUp className="icon-position icon-style" onClick={scrollToTop}
                        style={{ display: visible ? 'inline' : 'none' }} />
                </div>
                <nav>
                    <ul>
                        <li> <a href="#social" >Social</a></li>
                        <li> <a href="#visual">Visual</a></li>
                        <li> <a href="#project">Project</a></li>
                        <li> <a href="#h">Home</a></li>
                    </ul>
                    <br />
                    <div className="pro_div">
                        <img src={profile} />
                    </div>
                </nav>
                <div className="Ant"> <Ant /> </div>
                <div id="h"></div>
                <div className="profil">
                    <img src={profile} />
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="creat">
                    <h1>
                        CREATIVE <b>  PORTFOLIO</b>
                    </h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="design">
                    <h1>i am <b>Programmer</b></h1>
                    <img src={'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/04175ff1b3bf5f11a20c0152/a9dcc2d3-077b-4cbf-35f1-05a7ca2b6438.jpg?version='} />
                    <img className="design_1" src={'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/75f097b361975b92a095e949/ret-min.jpg'} />
                    <h2 className="background"></h2>
                    <h3 > i am<b> designer </b></h3>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="build">
                    <h3>We </h3 > <h4> Build</h4> <h5> <b>Digital</b> </h5>
                    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led.</p>
                </div>
                <br />

                <div className="line">
                    <h1> We design People Inspired Experiences that create positive change in people's lives.</h1>
                    <ArrowDownOutlined style={{ fontSize: '50px', marginTop: '20px' }} />
                    <p style={{ fontSize: '30px', marginTop: '20px' }}>View PORTFOLIO</p>
                </div>


                <section className="card_body">
                    <div id="project"></div>
                    <div className="container">

                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <h2>3D LOGO MOCKUP</h2>
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/478f8e09ef285d919a09ab42/mockup-with-gold-logo_136295-386.jpg'} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <h2>MODERN FACADE</h2>
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/3a4ecd0b020456b6b0478600/logo-mockup-black-facade-sign_145275-281.jpg'} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <h2>SHOPPING BAG</h2>
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/c8c9484a16775321829e9f33/abstract-mock-up-logo-shopping-bag_23-2148834294.jpg'} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <h2>MINIMALISTIC DESIGN</h2>

                                </div>
                            </div>
                            <div className="face face2">
                                <img src={'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/1315d23424d4541ca7adc6d4/rr.jpg'} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <h2>LUXURY BLACK FACADE</h2>

                                </div>
                            </div>
                            <div className="face face2">
                                <img src={'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/b4dfb8b00d5d5b8bba7df721/logo-mockup-luxury-black-facade-sign_145275-288.jpg'} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <h2>BUSINESS CARD</h2>
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/dd72e366e32a571ba4c46256/rounded-corner-business-cards-mockup_358694-108.jpg'} />
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <div className="visual">
                        <div id="visual"></div>
                        <h2>
                            <b> Visual communication </b> <p>  for brands and people</p>
                        </h2>
                        <p className="vis_p">
                            Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Magna fring urna portt rhoncus dolor purus non enim praesent. Magna etiam tempor orci eu lobort elemen nibh tellus molestie. Tellus cras adipiscing enim eu turpis egestas pretium aenean.</p>

                        <p className="visu_p">Viverra nibh cras pulvinar mattis nunc sed. Pulvinar mattis nunc sed blant libero. Rhoncus aenean vel elit scele. Diam donec adipis trise risus nec feugiat.  leo vel fring est ullam eget nulla facilisi. Quis eleifend quam adipiscing vitae proin sagittis.</p>
                    </div>

                </div>
                <div className="footer">
                    <img src={'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/1d7522477e8255a697949ad4/w4-min.jpg?version='} />
                    <p>We want to stay in touch with you! Please follow us on social media so we can keep in touch.<br /></p>
                    <div className="icon">
                        <div id="social" ></div>
                        <a href="https://www.facebook.com/profile.php?id=100077274297058">   <FacebookOutlined style={{ padding: '10px', color: 'white' }} /></a>
                        <LinkedinOutlined style={{ padding: '10px' }} />
                        <TwitterOutlined style={{ padding: '10px' }} />
                        <InstagramOutlined style={{ padding: '10px' }} />
                    </div>
                </div>
                <div className="foot">
                    <p>Sample text. Click to select the text box. </p><p className="pp"> Click again or double click to start editing the text.</p>
                </div>
            </div>
        </>
    )
}
export default Profile