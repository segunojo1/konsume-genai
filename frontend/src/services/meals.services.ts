import { axiosKonsumeInstance } from "@/http/konsume";

export class MealServices {
    static API_URL = process.env.NEXT_PUBLIC_API_URL as string;

     static async getAllMeals() {
        try {
            const { data } = await axiosKonsumeInstance.get(
                "/api/MealRecommendation/GenerateMeals",
                {
                  params: { profileId: await getProfileID() },
                }
              );
            return data;
        } catch (error) {
            console.log(error);
            
        }
    }
}