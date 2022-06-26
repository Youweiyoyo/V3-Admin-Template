import Service from "@/utils/http";

export const login = (data: object) => {
    return Service({
        url: "/login",
        method: "post",
        data
    })
}