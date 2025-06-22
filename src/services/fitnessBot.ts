// fitnessBot.ts

// Function to send a question to the FastAPI backend and get the bot's response
export async function generateBotResponse(userMessage: string, prompt_type: string = "instruct"): Promise<string> {
  try {
    const response = await fetch("http://localhost:8000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: userMessage, prompt_type }),
    });

    if (!response.ok) {
      return "Sorry, I couldn't reach the fitness bot server. Please try again later.";
    }

    const data = await response.json();
    return data.answer || "Sorry, I couldn't generate a response. Please try rephrasing your question.";
  } catch (error) {
    return "An error occurred while contacting the fitness bot. Please check your connection and try again.";
  }
}