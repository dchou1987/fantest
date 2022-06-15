import React, { useEffect } from "react"
import { gsap } from "gsap"

const Cursor = () => {
  useEffect(() => {
    const $bigBall = document.querySelector(".cursor__ball--big")
    const $hoverables = document.querySelectorAll(".hoverable")

    // Listeners
    document.body.addEventListener("mousemove", onMouseMove)
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener("mouseenter", onMouseHover)
      $hoverables[i].addEventListener("mouseleave", onMouseHoverOut)
    }

    // Move the cursor
    function onMouseMove(e) {
      gsap.to($bigBall, 0.7, {
        x: e.pageX - 18 - window.scrollX,
        y: e.pageY - 18 - window.scrollY,
      })
    }

    // Hover an element
    function onMouseHover() {
      gsap.to($bigBall, 0.3, {
        scale: 4,
      })
    }
    function onMouseHoverOut() {
      gsap.to($bigBall, 0.3, {
        scale: 1,
      })
    }
  }, [])

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big ">
        <svg height="36" width="36">
          <circle cx="18" cy="18" r="15" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  )
}

export default Cursor
