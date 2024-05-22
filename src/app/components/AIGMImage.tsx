"use client"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export default function AIGMImage() {

    return (
        <section className="machine">
                        <span><h3>GM Image Generator</h3></span>
                        <div className="recessed-field3">
                            <img id="aiGeneratedImage" src="" alt="AI-generated visual content" />
                        </div>
                        <button id="generateImageButton" className="action-button">Generate</button>
                        <button id="copyImageButton" className="action-button">Copy</button>
        </section>
    )
}