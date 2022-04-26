import { utilService } from "../services/util.service.js";

export function Home() {
  return (
    <main>
      <article className="home flex">
        <h2>Welcome Back!</h2>
        <p>{utilService.makeLorem()}</p>
      </article>
    </main>
  );
}
