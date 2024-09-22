import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/Avatar.jsx';

export default function UserIcon({path}) {
    return (
        <div className="relative">
            <Avatar className="backdrop-blur-4xl bg-opacity-40 border-4 border-themeGray h-[3rem] w-[3rem] cursor-pointer">
                <AvatarImage
                    src={path}
                    alt="@player"
                />
                <AvatarFallback>JP</AvatarFallback>
            </Avatar>
        </div>
    );
}
