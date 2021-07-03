import "./App.css";
import Button from "./components/Button";
import { LoadingButton } from "./components/Button";

// import Tag from './components/Tag'

// import { SimpleTag as STag } from "./components/Tag";

// import Code from "./components/Code";

function App() {
  const StarIcon = () => {
    return (
      <svg
        style={{ height: "10px", width: "10px" }}
        xmlns="http://www.w3.org/2000/svg"
        className="h-2 w-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  };
  return (
    <div style={{ backgroundColor: "white", marginBottom:'400px' }}>
      <button>Vanilla Button</button>
      <br />
      <br />
      <Button appearance="primary">Primary Button</Button>
      <br />
      <br />
      <Button appearance="subtle">Subtle Button</Button>
      <br />
      <br />
      <Button appearance="link">Link Button</Button>
      <br />
      <br />
      <Button appearance="subtle-link">Subtle link Button</Button>
      <br />
      <br />
      <Button appearance="warning">Warning Button</Button>
      <br />
      <br />
      <Button appearance="danger">Danger Button</Button>
      <br />
      <br />
      <Button appearance="primary" isDisabled>
        Disabled Button
      </Button>
      <br />
      <br />
      <Button isSelected>Selected Button</Button>
      <br />
      <br />
      <LoadingButton appearance="primary" isLoading>
        Loading Button
      </LoadingButton>
      <br />
      <br />
      <Button shouldFitContainer appearance="primary">
        Full Width Button
      </Button>
      <br />
      <br />
      <Button spacing="compact" appearance="primary">
        Compact
      </Button>
      <br />
      <br />
      <Button spacing="none" appearance="subtle-link">
        None
      </Button>
      <br />
      <br />
      <Button iconBefore={<StarIcon />} appearance="primary">
        Icon Before
      </Button>
      <br />
      <br />
      <Button iconAfter={<StarIcon />} appearance="primary">
        Icon After
      </Button>
      <br />
      <br />
      {/* <h1>Inline Code</h1>
      <p>
        To start creating a changeset, run <Code>bolt changeset</Code>. Then you
        will be prompted to select packages for release.
      </p>
      <br />
      <br />
      <br />
      <br />
      <Tag text="Tag"></Tag>
      <br />
      <br />
      <STag text="Simple"/>
      <br />
      <br />
      <STag href="http://www.google.com" text="Simple Link"/> */}
    </div>
  );
}

export default App;
