import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export const UserAvatar = (avatar: any) => {

    console.log(avatar)
    return (
        <Avatar>
            <AvatarImage src={avatar?.avatar} alt="profile picture"/>
            <AvatarFallback>SH</AvatarFallback>
        </Avatar>
    )
}