import { Banner } from './components/Banner';

interface AppProps {
  showBanner?: boolean;
  appTitle: string;
}

export default function App(props: AppProps) {
  return (
    <div>
      <h1>{props.appTitle}</h1>
      {props.showBanner ? <Banner /> : null}
    </div>
  );
}
