import React, { ErrorInfo } from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  // Define a state variable to track whether is an error or not
  public state = {
    hasError: false,
  };

  constructor(props: Props) {
    super(props);
  }

  public static getDerivedStateFromError(_: Error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log("Uncaught error:", error, errorInfo);
  }

  public render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI

      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
