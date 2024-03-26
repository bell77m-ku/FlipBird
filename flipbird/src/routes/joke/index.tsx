import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
 

export const useDadJoke = routeLoader$(async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  return (await response.json()) as {
    id: string;
    status: number;
    joke: string;
  };
});
 
export default component$(() => {
  useStylesScoped$(STYLES);
  const dadJokeSignal = useDadJoke();
  return (
    <section class="center">
      <p>{dadJokeSignal.value.joke}</p>
    </section>
  );
});

export const STYLES = `
    .center {
        text-align: center;
        margin: auto;
    }
`
