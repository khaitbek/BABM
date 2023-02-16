import * as zod from "zod";
export const CourseSchema = zod.object({
    bodyRu: zod.string(),
    bodyUz: zod.string(),
    id: zod.string(),
    imageId: zod.string(),
    number: zod.string(),
    titleRu: zod.string(),
    titleUz: zod.string(),
});

export const NewsSchema = zod.object({
    bodyRu: zod.string(),
    bodyUz: zod.string(),
    id: zod.string(),
    imageId: zod.string(),
    sourceRu: zod.string(),
    sourceUz: zod.string(),
    time: zod.string(),
    titleRu: zod.string(),
    titleUz: zod.string(),
});

export const PartnerSchema = zod.object({
    id: zod.string(),
    imageId: zod.string(),
    number: zod.string(),
    titleRu: zod.string(),
    titleUz: zod.string(),
    url: zod.string()
});

export const LoginSchema = zod.object({
    password: zod.string(),
    username: zod.string()

})