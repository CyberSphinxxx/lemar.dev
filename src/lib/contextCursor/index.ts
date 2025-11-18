import type { CProps } from "./types";
import { addCursor, setStyles } from "./chunks";
import contextMode from "./modes/contextMode";
import propNames from "./propNames";

const contextCursor = (props: Partial<CProps> = {}) => {
  // Default props
  const fullProps: CProps = {
    radius: props.radius || 20,
    transitionSpeed: props.transitionSpeed || 0.16,
    parallaxIndex: props.parallaxIndex || 10,
    hoverPadding: props.hoverPadding || 6,
  };

  // Set base
  setStyles();
  const cCursor = addCursor(fullProps) as HTMLElement;

  // Load mode when page is loaded
  window.onload = () => {
    let interactElements = document.querySelectorAll(
      `[${propNames.dataAttr}]`
    ) as NodeListOf<Element>;
    contextMode(cCursor, fullProps, interactElements);
  };
};

export default contextCursor;
