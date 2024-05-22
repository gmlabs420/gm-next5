"use client"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export default function GmsLeaderboard() {

    return (
            <section className="gm-leaderboard-section">          
                <h1>GM Leaderboard</h1>
                <h3 id="totalMinted">Minted: 0</h3>

                <ul id="leaderboardList"></ul>
                <button id="seeMoreButton1" className="see-more-btn">See More</button>
              
              <div id="gmGallery"></div>
            </section>

            
    )
}