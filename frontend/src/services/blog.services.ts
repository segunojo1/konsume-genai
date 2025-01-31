import { axiosKonsumeInstance } from "@/http/konsume";

export class BlogServices {
    static API_URL = process.env.NEXT_PUBLIC_API_URL as string;

    static async getAllBlogs() {
        try {
            const { data } = await axiosKonsumeInstance.get('/api/Blog/GenerateAllBlogs');

            return data;
        } catch (error) {
            console.log(error);
        }
    }
}