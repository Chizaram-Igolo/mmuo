import React, { Component } from "react";
import { withToastManager } from "react-toast-notifications";

class ConnectivityListener extends Component {
  state = {
    isOnline: typeof window !== "undefined" ? window.navigator.onLine : false,
  };

  // NOTE: add/remove event listeners omitted for brevity

  onlineCallback = () => {
    //@ts-ignore
    this.props.toastManager.remove(this.offlineToastId);
    //@ts-ignore
    this.offlineToastId = null;
  };
  offlineCallback = (id) => {
    //@ts-ignore
    this.offlineToastId = id;
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { isOnline } = this.state;

    if (prevState.isOnline !== isOnline) {
      return { isOnline };
    }

    return null;
  }
  componentDidMount() {
    console.log(this.state.isOnline);
  }

  componentDidUpdate(props, state, snapshot) {
    if (!snapshot) return;

    const { toastManager } = props;
    const { isOnline } = snapshot;

    const content = (
      <div>
        <strong>{isOnline ? "Online" : "Offline"}</strong>
        <div>
          {isOnline
            ? "Editing is available again"
            : "Changes you make may not be saved"}
        </div>
      </div>
    );

    const callback = isOnline ? this.onlineCallback : this.offlineCallback;

    toastManager.add(
      content,
      {
        appearance: "info",
        autoDismiss: isOnline,
      },
      callback
    );
  }
  render() {
    return null;
  }
}

export default withToastManager(ConnectivityListener);
