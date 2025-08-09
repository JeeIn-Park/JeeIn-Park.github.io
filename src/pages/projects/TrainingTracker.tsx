import { Link } from "react-router-dom";

export default function TrainingTracker() {
  return (
    <main className="container mx-auto max-w-4xl p-6">
      <nav className="text-sm mb-3">
        <Link to="/" className="underline">Home</Link> /{" "}
        <Link to="/projects" className="underline">Projects</Link> /{" "}
        <span>Training Tracker</span>
      </nav>

      <h1 className="text-3xl font-semibold mb-2">Training Tracker</h1>
      <p className="opacity-80 mb-4">Kotlin · Jetpack Compose · MVVM</p>

      <img src="/posters/RepVizPoster.png" alt="Training Tracker" className="rounded-xl mb-6 w-full" />

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Overview</h2>
        <p>운동 기록/분석 앱으로 사용자 참여 15%↑, 크래시 21%↓, 평점 54%↑를 달성했습니다.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-medium mb-2">Key Achievements</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>태깅/근육상태 시각화/동적 필터/피드백 수집</li>
          <li>견고한 에러 핸들링과 테스트</li>
        </ul>
      </section>

      <div className="mt-6 flex gap-3">
        <a
          className="px-4 py-2 rounded-full border"
          href="https://github.com/JeeIn-Park/Training-Tracker-Workout-Monitoring"
          target="_blank" rel="noreferrer"
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
