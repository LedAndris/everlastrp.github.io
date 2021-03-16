import Link from "next/link"

const Footer = () => {
    return (
        <footer>
             <span><Link href="https://discord.gg/bDtPpfm3n5"><a>Discord</a></Link></span>
             <span><Link href="https://github.com/EverlastRP"><a>Github</a></Link>  </span>
             <span><Link href="https://twitter.com/everlastrp"><a>Twitter</a></Link>  </span>
             <span><Link href="https://forum.everlastrp.xyz"><a>Forums</a></Link>  </span>
             <span><Link href="https://tiktok.com/@everlastrp"><a>Tiktok</a></Link>  </span>
            <p>Copyright pending</p>
        </footer>
    );
}
 
export default Footer;