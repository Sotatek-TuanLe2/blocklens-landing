import React from 'react';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
  FallBackComponent?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error({ error, errorInfo });
  }

  _renderDefaultError() {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Oops...Something went wrong !!!</h1>
        <button
          onClick={() => this.setState({ hasError: false })}
          className="mt-3 text-2xl font-semibold"
        >
          Try again?
        </button>
      </div>
    );
  }

  _renderError() {
    return this.props.FallBackComponent || this._renderDefaultError();
  }

  _renderNoError() {
    return this.props.children;
  }

  render() {
    return this.state.hasError ? this._renderError() : this._renderNoError();
  }
}

export default ErrorBoundary;
