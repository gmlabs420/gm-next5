"use client"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export default function GmsMinted() {

    return (
            <section className="recent-gms">          
                <h1>Recent GMs</h1>
                <div className="recessed-field">
                    <p id="aiGeneratedText">Your inspirational quote will appear here...</p>
                </div>           
              <div id="gmGallery"></div>
            </section>
    )
}