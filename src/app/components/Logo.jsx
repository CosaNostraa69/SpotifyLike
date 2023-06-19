import Image from "next/image";
import logoImage from "/public/assets/spotify.png"

export default function LogoHeader(){
    return(
        <Image className="max-sm:w-1/6 max-sm:h-1/6"
            src={logoImage}
            width={100}
            height={100}
            alt="Logo Spotify"
        />
    )
}