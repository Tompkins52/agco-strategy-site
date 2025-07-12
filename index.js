export default function StrategySessionSite() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">AGCO Demand Fulfillment Strategy Session</h1>
        <p className="text-lg">Operations (NA & SA) and Global Customer Care | 3-Day Planning Workshop</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Interactive 5-Year Roadmaps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Operations Roadmap</h3>
            <p className="mb-2">Focus: Fulfillment, Automation, Visibility, Sustainability</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">View Roadmap</button>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Customer Care Roadmap</h3>
            <p className="mb-2">Focus: Omnichannel Support, Self-Service, AI/Automation</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl">View Roadmap</button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Workshop Agenda</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Day 1:</strong> Teaching, Industry Trends, Brainstorming</li>
          <li><strong>Day 2:</strong> Operations 5-Year Roadmap Build</li>
          <li><strong>Day 3:</strong> Customer Care 5-Year Roadmap Build</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Roadmap Tracker Preview</h2>
        <div className="border rounded-2xl p-4 shadow bg-gray-50">
          <p className="mb-2">Click below to access the live tracker prototype (coming soon).</p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-xl">Launch Tracker</button>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} AGCO Strategy Session | Built by ChatGPT
      </footer>
    </main>
  );
}