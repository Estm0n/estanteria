import { LibrosGrid } from "./LibrosGrid";

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Libreria</h1>
      </header>
      <main>
        <LibrosGrid />
      </main>
    </div>
  );
}