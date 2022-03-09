import { Banner } from './components/Banner';

interface AppProps {
  showBanner?: boolean;
}

export default function App(props: AppProps) {
  return (
    <div>
      <h1>App Hello World</h1>
      {props.showBanner ? <Banner /> : null}
    </div>
  );
}
