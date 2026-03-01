import { Link } from "react-router-dom";

export default function QuoteWidgetShortcut() {
  return (
    <main className="container mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-semibold mb-2">Quote Widget Shortcut</h1>
      <p className="opacity-80 mb-4">iOS Shortcuts · HTML · CSS · Workflow</p>

      <img
        src="/image/image-project-thumbnail-quote-widget-shortcut.png"
        alt="Quote Widget Shortcut"
        className="rounded-xl mb-6 w-full"
      />

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Overview</h2>
        <p>
          A shortcut that takes user-entered quotes and sources, converts them into
          image cards using HTML, and saves them to a single photo album.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-medium mb-2">What It Enables</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>White background + black text quote cards for clean readability.</li>
          <li>A unified album that can be selected as a home-screen widget source.</li>
          <li>Quick personal quote capture and display flow on iPhone.</li>
        </ul>
      </section>

      <div className="mt-6 flex gap-3">
        <a
          className="px-4 py-2 rounded-full border"
          href="https://www.icloud.com/shortcuts/6ef8a9c5f4304ed1832a8cdf16573e06"
          target="_blank"
          rel="noreferrer"
        >
          Open Shortcut
        </a>
        <Link to="/projects" className="px-4 py-2 rounded-full border opacity-80">
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
