import { useState } from "react";
import SideBar from "./sidebar/sidebar";

interface IContent {
  navWidth: number;
  handleChangeWidth: () => void;
  shouldHideNavText: boolean;
  expandIcon: string;
  contentClassName: string;
}

const Content: React.FC<IContent> = (props) => {
  return (
    <>
      <SideBar
        width={props.navWidth}
        handleChangeWidth={props.handleChangeWidth}
        shouldHideNavText={props.shouldHideNavText}
        expandIcon={props.expandIcon}
      />
      <div
        className={props.contentClassName}
        style={{
          overflow: "hidden",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

const CRMLayout: React.FC = ({ children }): JSX.Element => {
  const [navWidth, setNavWidth] = useState(80);
  const [widthOffset, setWidthOffset] = useState(140);
  const [contentClassName, setContentClassName] = useState(
    "content-container-expanded"
  );
  const [shouldHideNavText, setShouldHideNavText] = useState(true);
  const [expandIcon, setExpandIcon] = useState("right");

  function handleChangeWidth() {
    if (navWidth === 250) {
      setNavWidth(80);
      setWidthOffset(140);
      setContentClassName("content-container-expanded");
      setShouldHideNavText(true);
      setExpandIcon("right");
    } else {
      setNavWidth(250);
      setWidthOffset(310);
      setContentClassName("content-container-collapsed");
      setShouldHideNavText(false);
      setExpandIcon("left");
    }
  }

  return (
    <Content
      navWidth={navWidth}
      contentClassName={contentClassName}
      shouldHideNavText={shouldHideNavText}
      expandIcon={expandIcon}
      handleChangeWidth={handleChangeWidth}
    >
      {children}
    </Content>
  );
};

export default CRMLayout;
