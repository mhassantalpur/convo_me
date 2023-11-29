import Link from "next/link"
import { AspectRatio } from "./ui/aspect-ratio"
import Image from "next/image"
import LogoImage from '@logos/convo_me_logo-removebg-preview.png'

const Logo = () => {
  return (
    <Link href={'/'} className="overflow-hidden" prefetch={false}>
        <div className="flex items-center w-72 h-14">
            <AspectRatio
                ratio={16 / 9}
                className="flex items-center justify-content"
            >
            <Image
                height='60'
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