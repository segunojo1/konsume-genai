import { axiosKonsumeInstance } from "@/http/konsume";

export class ChatServices {
    static API_URL = process.env.NEXT_PUBLIC_API_URL as string;

    static async sendChat(payload: {userMessage: string}) {
        try {
            const {data} = await axiosKonsumeInstance.post("/api/ChatBot/ChatBot", null, {
                params: {
                  profileId: 2,
                  request: payload.userMessage
                }
              });

            return data;
        } catch (error) {
            console.log(error);
        }
    }
}