
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getPhoneRecommendation(userQuery: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `身為一位專業的二手手機顧問，請根據使用者的需求提供建議。
      使用者需求：${userQuery}
      
      請以親切、專業的口吻回答。如果使用者問及特定型號，請分析其優缺點。
      如果需求模糊，請引導使用者提供預算或偏好品牌。`,
      config: {
        systemInstruction: "你是一位名為 RePhone AI 的智慧助手。你專精於二手手機市場，能夠根據性能、價格、機況和電池健康度為用戶提供最佳建議。",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    return "抱歉，我現在無法提供建議，請稍後再試。";
  }
}
