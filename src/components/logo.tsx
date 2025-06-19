import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href='/'>
            <Image src={logo} alt="petsoft logo" width={75} height={75} />
        </Link>
    )
}