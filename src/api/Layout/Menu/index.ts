import Service from "@/utils/http";

export const getMenuList = () => {
    return Service({
        url: "/menus",
        method: "get"
    })
}