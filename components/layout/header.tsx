import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "../theme-toggle"

export default function Header() {
    return <div className="flex justify-center absolute w-full">
        <div className="flex justify-between m-4 w-full bg-background p-2 border rounded-2xl max-w-4xl">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">Home</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
        </div>
    </div>
}
