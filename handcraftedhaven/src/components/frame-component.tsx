import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  rectangle2916?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
  propLeft1?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propColor?: CSSProperties["color"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  rectangle2916,
  propLeft,
  propTop,
  propLeft1,
  propBackgroundColor,
  propBorder,
  propColor,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const potrayHandcraftBottleContainerStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const buyNowStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.rectangleParent} style={frameDiv2Style}>
      <div className={styles.frameChild} />
      <img className={styles.frameItem} alt="" src={rectangle2916} />
      <div
        className={styles.potrayHandcraftBottleContainer}
        style={potrayHandcraftBottleContainerStyle}
      >
        <p className={styles.potrayHandcraftBottle}>Potray Handcraft Bottle</p>
        <p className={styles.p}>$17.89</p>
      </div>
      <div className={styles.buyNowWrapper} style={frameDiv3Style}>
        <div className={styles.buyNow} style={buyNowStyle}>
          Buy Now
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
