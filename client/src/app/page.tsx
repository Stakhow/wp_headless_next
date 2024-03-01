export default function Home() {
  return (
      <div className={"flex min-h-screen flex-col justify-between"}>
          <header className={"w-full"}>header</header>
          <main className="w-full flex-grow">
              <span className={"heading-1 text-highlight"}>xalupa</span>
              <span className={"heading-2 dima"}>test 2</span>
              <span className={"heading-3 text-testtest"}>  test 3</span>
              <span className={"heading-4"}>test 4</span>
              <span className={"heading-5"}>test 5</span>
          </main>
          <footer className={"w-full"}>
            footer
          </footer>
      </div>
  );
}