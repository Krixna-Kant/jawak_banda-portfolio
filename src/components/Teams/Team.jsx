import React from 'react'
import teamCSS from './../Teams/Team.module.css'

import star from './../../assets/star.png'

import Team1 from './../../assets/team1.jpg'
import Team2 from './../../assets/team2.png'
import Team3 from './../../assets/team3.png'

function Team() {
  return (
    <div className={teamCSS.teamWrapper}>
        <div className={teamCSS.anim_text}>
            <div>
                <h3>Meet Out Team <img src={star} alt='' /> </h3>
                <h3>Meet Out Team <img src={star} alt='' /> </h3>
                <h3>Meet Out Team <img src={star} alt='' /> </h3>
                <h3>Meet Out Team <img src={star} alt='' /> </h3>
                <h3>Meet Out Team <img src={star} alt='' /> </h3>
                <h3>Meet Out Team <img src={star} alt='' /> </h3>
            </div>
            <div>
            <h3>Meet Out Team <img src={star} alt='' /> </h3>
            <h3>Meet Out Team <img src={star} alt='' /> </h3>
            <h3>Meet Out Team <img src={star} alt='' /> </h3>
            <h3>Meet Out Team <img src={star} alt='' /> </h3>
            <h3>Meet Out Team <img src={star} alt='' /> </h3>
            <h3>Meet Out Team <img src={star} alt='' /> </h3>
            </div>
        </div>

        <h1 className='section_title'>
            We Have Team of <br/> Creative People
            <img src={star} alt="" />
        </h1>

        <div className={teamCSS.Teams_Cards}>
            <div className={teamCSS.card}>
                <img src={Team1} alt=''/>
                <h3>Krishna</h3>
                <p>Creative Team</p>
            </div>
            <div className={teamCSS.card}>
                <img src={Team1} alt=''/>
                <h3>Ashish</h3>
                <p>Web technologies Team</p>
            </div>
            <div className={teamCSS.card}>
                <img src={Team1} alt=''/>
                <h3>Samar</h3>
                <p>Social Media Team</p>
            </div>
        </div>
    </div>
  )
}

export default Team