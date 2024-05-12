import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  rectangle2908?: string;
  coffeCup?: string;
  shopNow?: string;
  vector?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propLeft2?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  rectangle2908,
  coffeCup,
  shopNow,
  vector,
  propLeft,
  propLeft1,
  propWidth,
  propLeft2,
  propPadding,
  propGap,
}) => {
  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth,
    };
  }, [propLeft1, propWidth]);

  const ceramicsCoffeCupContainerStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.frameChild}
        alt=""
        src={rectangle2908}
        style={rectangleIconStyle}
      />
      <div className={styles.ceramicsCoffeCupParent} style={frameDivStyle}>
        <b
          className={styles.ceramicsCoffeCupContainer}
          style={ceramicsCoffeCupContainerStyle}
        >
          <p className={styles.ceramics}>{`Ceramics `}</p>
          <p className={styles.ceramics}>{coffeCup}</p>
        </b>
        <div className={styles.shopNowParent} style={frameDiv1Style}>
          <div className={styles.shopNow}>{shopNow}</div>
          <img className={styles.vectorIcon} alt="" src={vector} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
