import { JSXElement, createSignal, onCleanup, onMount } from "solid-js";

const SwitchingTitle = (): JSXElement => {
  const [title, setTitle] = createSignal(true);

  const interval = setInterval(() => setTitle((c) => !c), 2000);
  onCleanup(() => clearInterval(interval));

  return (
    <div>
      {title() ? (
        <p class="font-extrabold text-6xl mb-[17px] transition-transform">
          function algoHelper()
        </p>
      ) : (
        <p class="font-extrabold text-6xl mb-[17px] transition-transform">
          func algo_helper()
        </p>
      )}
    </div>
  );
};

export default SwitchingTitle;
