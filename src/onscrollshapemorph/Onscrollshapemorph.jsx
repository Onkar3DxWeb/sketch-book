import React from 'react'
import "./css/base.css"
import img1 from "./asset/img/1.jpg"
import img2 from "./asset/img/2.jpg"
import img3 from "./asset/img/3.jpg"
import img4 from "./asset/img/4.jpg"
import img5 from "./asset/img/5.jpg"
import img6 from "./asset/img/6.jpg"
import img7 from "./asset/img/7.jpg"
import img8 from "./asset/img/8.jpg"
import img9 from "./asset/img/9.jpg"
import img10 from "./asset/img/10.jpg"
import img15 from "./asset/img/15.jpg"
import img16 from "./asset/img/16.jpg"
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
  
gsap.registerPlugin(ScrollTrigger)


const Onscrollshapemorph = () => {


  return (
    <div>
        <main>
			<div className="frame">
				<h1 className="frame__title">On-Scroll Shape Morph</h1>
				</div>
			<div className="intro">
				<div id="item-intro" className="content content--intro">
					<div className="content__img-wrap">
						<div className="content__img content__img--1">
							<div className="content__img-inner" style={{ backgroundImage: `url(${img1})` }}></div>
						</div>
					</div>
				</div>
				<h1 className="intro__title"> 
					<span className="intro__title-pre">Xtynct</span> 
				</h1> 
				<span className="intro__info">Scroll moderately for a better animation experience.</span> 
			</div>
			<div className="content-wrap">
				<div id="item-1" className="content">
					<div className="content__img-wrap">
						<div className="content__img content__img--1">
							<div className="content__img-inner" style={{ backgroundImage: `url(${img2})` }}></div>
							<div className="content__img-inner content__img-inner--hidden" style={{ backgroundImage: `url(${img3})` }}></div>
						</div>
					</div>
					<p className="content__text content__text--center content__text--large"><span data-splitting>Obey the silence</span><span data-splitting>Rebel in shadows</span></p>
				</div>
				<div id="item-2" className="content">
					<div className="content__img-wrap">
						<div className="content__img content__img--1">
							<div className="content__img-inner" style={{ backgroundImage: `url(${img4})` }}></div>
							<div className="content__img-inner content__img-inner--hidden" style={{ backgroundImage: `url(${img5})` }}></div>
						</div>
					</div>
					<p className="content__text content__text--left"><span>From Thrones to Chains</span> <span>Surrender of Sovereignty</span></p>
				</div>
				<div id="item-3" className="content">
					<div className="content__img-wrap">
						<div className="content__img content__img--2">
							<div className="content__img-inner" style={{ backgroundImage: `url(${img6})` }}></div>
							<div className="content__img-inner content__img-inner--hidden" style={{ backgroundImage: `url(${img7})` }}></div>
						</div>
					</div>
					<p className="content__text content__text--left">
						<span>You make me dream </span><span>Your dreams</span> 
						<span className="content__text-tiny">
							Do you ever dream of a dream so real it makes you question reality? What is reality? Do you question it? Turn off the light switch. Does it turn off? Question right now: is it a dream? You always wake up once you realize it's a dream. So, don't wake up. Realize it's a dream. That's how you enter the real world.
						</span>
					</p>
				</div>
				<div id="item-4" className="content">
					<div className="content__img-wrap">
						<div className="content__img content__img--4">
							<div className="content__img-inner" style={{ backgroundImage: `url(${img8})` }}></div>
							<div className="content__img-inner content__img-inner--hidden"  style={{ backgroundImage: `url(${img9})` }}></div>
						</div>
					</div>
					<p className="content__text content__text--center"><span>Your Willingness is</span> <span>Collective Triumph</span></p>
				</div>
				<div id="item-5" className="content">
					<div className="content__img-wrap">
						<div className="content__img content__img--5">
							<div className="content__img-inner"  style={{ backgroundImage: `url(${img10})` }}></div>
							<div className="content__img-inner content__img-inner--hidden"  style={{ backgroundImage: `url(${img15})` }}></div>
						</div>
					</div>
					<p className="content__text content__text--left"><span>Controlling my feelings</span> <span>for too long</span></p>
				</div>
				<div id="item-6" className="content">
					<div className="content__img-wrap">
						<div className="content__img content__img--6">
							<div className="content__img-inner"  style={{ backgroundImage: `url(${img16})` }}></div>
						</div>
					</div>
					<p className="content__text content__text--center"><span>You were never truly loved</span> <span>You have only been betrayed</span></p>
				</div>
			</div>
			
			
		</main>
    </div>
  )
}

export default Onscrollshapemorph