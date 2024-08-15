import Anchor from "./Anchor"

import { Store, ShoppingCart, Users, Package } from "lucide-react"

const navLinks = [
    { 
        text: "Marketplace",
        icon: <Store />
    },
    { 
        text: "Clientes",
        icon: <Users />
    },
    { 
        text: "Vendas",
        icon: <ShoppingCart />
    },
    {   
        text: "Estoque",
        icon: <Package />
    }
]

export default function Nav() {
    return (
        <nav className="hidden lg:flex items-center gap-4">
            {
                navLinks.map( (link, index) => (
                    <Anchor 
                        key={ index }
                        data={ link }
                        link={ "#" } 
                        style={ "flex gap-2 text-primary hover:text-primary-light transition all" } 
                    />
                ))
            }
        </nav>
    )
}