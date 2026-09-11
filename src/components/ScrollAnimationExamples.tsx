"use client";

/**
 * Animation & Scroll Library Integration Guide
 * 
 * Your project now includes:
 * 1. Lenis - Smooth scrolling (SmoothScroll.tsx wrapper)
 * 2. GSAP + ScrollTrigger - Powerful animations
 * 3. Locomotive Scroll - Additional scroll patterns (optional)
 * 
 * Usage examples below:
 */

import Reveal from "./Reveal";
import ScrollEffects from "./ScrollEffects";

export default function ScrollAnimationExamples() {
  return (
    <div className="space-y-24 p-8">
      {/* Example 1: Reveal animation on scroll (fade + blur + translate) */}
      <Reveal delay={0} duration={0.8} y={32} blur={12}>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg text-white">
          <h2 className="text-2xl font-medium mb-4">Reveal Animation</h2>
          <p>
            This element appears with fade, blur, and translate animation when
            scrolling into view. Uses GSAP + ScrollTrigger.
          </p>
        </div>
      </Reveal>

      {/* Example 2: Multiple staggered reveals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 0.15} duration={0.8} y={40}>
            <div className="bg-gradient-to-br from-green-400 to-cyan-500 p-6 rounded-lg text-white h-48 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-medium text-lg mb-2">Card {i + 1}</h3>
                <p className="text-sm">Staggered reveal effect</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Example 3: Parallax effect with ScrollEffects */}
      <ScrollEffects parallaxStrength={0.5}>
        <div className="bg-gradient-to-r from-orange-400 to-red-500 p-12 rounded-lg text-white">
          <h2 className="text-2xl font-medium mb-4">Parallax Scroll Effect</h2>
          <p>This element moves at different speed as you scroll (parallax).</p>
        </div>
      </ScrollEffects>

      {/* Example 4: Scale on scroll */}
      <ScrollEffects scaleOnScroll={true}>
        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 p-12 rounded-lg text-white">
          <h2 className="text-2xl font-medium mb-4">Scale Animation</h2>
          <p>This element scales up smoothly as you scroll past it.</p>
        </div>
      </ScrollEffects>

      {/* Example 5: Rotation on scroll */}
      <ScrollEffects rotateOnScroll={true}>
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-12 rounded-lg text-white flex items-center justify-center h-64">
          <h2 className="text-2xl font-medium">Rotate Animation</h2>
        </div>
      </ScrollEffects>

      {/* Example 6: Combined animations */}
      <Reveal delay={0.1} duration={1} y={50} blur={15}>
        <ScrollEffects parallaxStrength={0.3}>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-12 rounded-lg text-white">
            <h2 className="text-2xl font-medium mb-4">Combined Effects</h2>
            <p>
              This uses both Reveal (fade-in) and Parallax effects together for
              a layered animation experience.
            </p>
          </div>
        </ScrollEffects>
      </Reveal>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="font-medium text-lg mb-4">📚 Component Reference</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-blue-600">
              &lt;SmoothScroll&gt;
            </h4>
            <p className="text-sm text-gray-700">
              Wrapper component providing Lenis smooth scrolling. Already
              integrated in layout.tsx.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-600">&lt;Reveal&gt;</h4>
            <p className="text-sm text-gray-700">
              Props: delay, duration, y (translateY), blur, once, className
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600">
              &lt;ScrollEffects&gt;
            </h4>
            <p className="text-sm text-gray-700">
              Props: parallaxStrength, scaleOnScroll, rotateOnScroll, className
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
