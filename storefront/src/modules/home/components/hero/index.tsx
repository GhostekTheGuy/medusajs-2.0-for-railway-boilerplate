import { BoltSolid } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"


const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
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
        </span>
        <a
          href="/store"
          target="_blank"
        >
          <Button variant="secondary">
            Check our style
            <BoltSolid />
          </Button>
        </a>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img src="https://cdn.discordapp.com/attachments/1285889428929253386/1285976654602174536/kanapa.png?ex=6701fb56&is=6700a9d6&hm=5932b221f3314bb379e99c00ccccb4d1c8abd8a694fbf02c6de8abfeff7e6130&" alt="LORI" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Hero
