import openai from "./config.js";

async function query(msg) {
  try{
    const completion = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [{role: "system", content: "Hi"}, {role: "system", content: msg}],
      temperature: 0.3,
      max_tokens: 150
    });
    return completion.choices[0].message.content;
  } catch (error){
    console.error("Internal error: ", error.message);
    throw error;
  }
};
let response = query("How are you?");
console.log(response);