import OpenAI from 'openai';

export const completions = async function() {
  const openai = new OpenAI();
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: 'Say this is a test!',
    }],
  };
  const completion = await openai.chat.completions.create(params);
  console.log(completion.choices[0]?.message?.content);
};
