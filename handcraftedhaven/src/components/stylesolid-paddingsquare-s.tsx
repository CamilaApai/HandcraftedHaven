import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./stylesolid-paddingsquare-s.module.css";

export type StylesolidPaddingsquareSType = {
  iconName?: string;

  /** Style props */
  stylesolidPaddingsquareSWidth?: CSSProperties["width"];
  stylesolidPaddingsquareSHeight?: CSSProperties["height"];
  stylesolidPaddingsquareSPosition?: CSSProperties["position"];
  stylesolidPaddingsquareSTop?: CSSProperties["top"];
  stylesolidPaddingsquareSLeft?: CSSProperties["left"];
  iconWidth?: CSSProperties["width"];
  iconFontSize?: CSSProperties["fontSize"];
  iconColor?: CSSProperties["color"];
  iconHeight?: CSSProperties["height"];
  //iconWebkitTextStroke?: CSSProperties["webkitTextStroke"];
  iconFontFamily?: CSSProperties["fontFamily"];
};

const StylesolidPaddingsquareS: NextPage<StylesolidPaddingsquareSType> = ({
  iconName = "smile",
  stylesolidPaddingsquareSWidth,
  stylesolidPaddingsquareSHeight,
  stylesolidPaddingsquareSPosition,
  stylesolidPaddingsquareSTop,
  stylesolidPaddingsquareSLeft,
  iconWidth,
  iconFontSize,
  iconColor,
  iconHeight,
  // iconWebkitTextStroke,
  iconFontFamily,
}) => {
  const stylesolidPaddingsquareSStyle: CSSProperties = useMemo(() => {
    return {
      width: stylesolidPaddingsquareSWidth,
      height: stylesolidPaddingsquareSHeight,
      position: stylesolidPaddingsquareSPosition,
      top: stylesolidPaddingsquareSTop,
      left: stylesolidPaddingsquareSLeft,
    };
  }, [
    stylesolidPaddingsquareSWidth,
    stylesolidPaddingsquareSHeight,
    stylesolidPaddingsquareSPosition,
    stylesolidPaddingsquareSTop,
    stylesolidPaddingsquareSLeft,
  ]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      width: iconWidth,
      fontSize: iconFontSize,
      color: iconColor,
      height: iconHeight,
      // webkitTextStroke: iconWebkitTextStroke,
      fontFamily: iconFontFamily,
    };
  }, [
    iconWidth,
    iconFontSize,
    iconColor,
    iconHeight,
    //  iconWebkitTextStroke,
    iconFontFamily,
  ]);

  return (
    <div
      className={styles.stylesolidPaddingsquareS}
      style={stylesolidPaddingsquareSStyle}
    >
      <div className={styles.icon} style={iconStyle}>
        {iconName}
      </div>
    </div>
  );
};

export default StylesolidPaddingsquareS;
