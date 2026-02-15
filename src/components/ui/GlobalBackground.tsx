"use client";

import React from "react";

/**
 * GlobalBackground Component
 * 
 * Northwestern "Cinematic Depth" Background System
 * - Fixed position behind all content (z-index: -50)
 * - Subtle Northwestern Purple gradients with breathing animation
 * - Professional off-white base with texture
 * - Works across all pages without section conflicts
 */
export function GlobalBackground() {
  return (
    <div className="global-background">
      {/* Base Layer - Off-white professional background */}
      <div className="global-background-base" />
      
      {/* Depth Layer - Northwestern Purple orbs with breathing animation */}
      <div className="global-background-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>
      
      {/* Texture Layer - Subtle grid for structure */}
      <div className="global-background-texture" />
    </div>
  );
}