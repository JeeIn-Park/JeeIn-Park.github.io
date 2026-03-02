import { Link } from "react-router-dom";

export default function Therago() {
  return (
    <main className="container mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-semibold mb-2">
        Therago | AI Assisted Mental Wellbeing WebApp
      </h1>
      <p className="opacity-80 mb-4">HTML · CSS · JavaScript</p>

      <img
        src="/image/image-project-thumbnail-therago.png"
        alt="Therago project thumbnail"
        className="rounded-xl mb-6 w-full"
      />

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Overview</h2>
        <p>
          Therago is a mental well-being web app that helps users express emotions,
          reflect through journaling, and get supportive guidance with AI-assisted
          sentiment analysis.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-medium mb-2">Key Features</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Voice or text mood input for easier emotional expression.</li>
          <li>AI-assisted responses to simulate supportive conversation.</li>
          <li>Journaling and to-do reminders to improve focus and well-being.</li>
          <li>Service matching and therapist appointment guidance when needed.</li>
        </ul>
      </section>

      <div className="mt-6 flex gap-3">
        <a
          className="px-4 py-2 rounded-full border"
          href="https://github.com/hyo-yeon-lee/EncodeAIHack"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <Link to="/projects" className="px-4 py-2 rounded-full border opacity-80">
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
