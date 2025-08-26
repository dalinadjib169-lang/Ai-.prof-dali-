import { OpenAI } from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // تأكد من وضع مفتاحك هنا في Vercel Environment Variables
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed" });
  }

  const { cycle, subject, level, docType, lang, topic } = req.body;

  if (!cycle || !subject || !level || !docType || !lang) {
    return res.status(400).json({ error: "جميع الحقول المطلوبة يجب ملؤها" });
  }

  try {
    const prompt = `أنت معلم. أنشئ ${docType} لمادة ${subject} للطور ${cycle}، المستوى ${level}, اللغة ${lang}${topic ? ", الموضوع: " + topic : ""}.`;
    
    const response = await client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const content = response.choices[0].message.content;
    res.status(200).json({ content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء إنشاء المستند" });
  }
}
