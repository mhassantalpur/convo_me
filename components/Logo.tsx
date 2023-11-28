import Link from "next/link"
import { Button } from "./ui/button"
import { AspectRatio } from "./ui/aspect-ratio"
import Image from "next/image"
import LogoImage from '@logos/convo_logo-removebg-preview.png'

const Logo = () => {
  return (
    <Link href={'/'} className="overflow-hidden" prefetch={false}>
        <div className="flex items-center w-72 h-15">
            <AspectRatio
                ratio={16 / 9}
                className="flex items-center justify-content"
            >
            <Image 
                priority
                src={LogoImage}
                alt="logo"
                className="dark:filter dark:invert"
            />
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo