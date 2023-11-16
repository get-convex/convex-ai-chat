import { ConvexAiChat } from "@/aiChat";
import { Link } from "@/components/typography/link";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <main className="container max-w-2xl flex flex-col gap-8">
      <h1 className="text-4xl font-extrabold my-8 text-center">
        AI Chat with Convex Vector Search
      </h1>
      <p>Click the button to open the chat window</p>
      <p>
        <ConvexAiChat
          convexUrl={import.meta.env.VITE_CONVEX_URL as string}
          name="Lucky AI Bot"
          infoMessage="AI can make mistakes. Verify answers."
          welcomeMessage="Hey there, what can I help you with?"
          renderTrigger={(onClick) => (
            <Button onClick={onClick}>Open AI chat</Button>
          )}
        />
      </p>
      <p>
        Check out{" "}
        <Link target="_blank" href="https://docs.convex.dev/home">
          Convex docs
        </Link>
      </p>
    </main>
  );
}

export default App;
