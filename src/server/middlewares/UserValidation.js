import zod from "zod"

export const validation = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string()
})
