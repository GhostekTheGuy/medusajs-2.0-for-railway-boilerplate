import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { BoltSolid } from "@medusajs/icons"
import imgHERO from "./images/kanapa.png"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <div>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-white font-bold"
          >
            Our new stock is coming out!
          </Heading>
          <Heading
            level="h2"
            className="text-xl leading-10 text-ui-bg-base-hover font-normal"
          >
            Get ready and buy preorder.
          </Heading>
        </div>
        <a
          href="/new-arrivals"
          target="_blank"
        >
          <Button variant="secondary" aria-label="Discover New Arrivals">
            Discover New Arrivals
            <BoltSolid />
          </Button>
        </a>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img src={imgHERO} alt="Kanapa" loading="lazy" />
      </div>
    </div>
  )
}

export default Hero
