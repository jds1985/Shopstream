export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold mb-4">ShopStream</h1>
      <p className="text-xl mb-8 text-center">
        Live shopping for local stores.
      </p>

      <div className="max-w-md text-center space-y-4">
        <p>
          Go live. Show your products. Sell instantly to local customers.
        </p>
        <p>
          Discover and shop from real stores in your city, live.
        </p>
      </div>

      <button className="mt-10 px-6 py-3 bg-white text-black rounded-xl font-semibold">
        Join Early Access
      </button>
    </main>
  );
}
