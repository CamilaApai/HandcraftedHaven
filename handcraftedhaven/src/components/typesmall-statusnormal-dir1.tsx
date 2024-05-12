import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./typesmall-statusnormal-dir1.module.css";

export type TypesmallStatusnormalDir1Type = {
  icon1?: string;
  filter?: string;
  icon?: boolean;

  /** Style props */
  typesmallStatusnormalDirBackgroundColor?: CSSProperties["backgroundColor"];
  typesmallStatusnormalDirPadding?: CSSProperties["padding"];
  typesmallStatusnormalDirGap?: CSSProperties["gap"];
  typesmallStatusnormalDirPosition?: CSSProperties["position"];
  typesmallStatusnormalDirTop?: CSSProperties["top"];
  typesmallStatusnormalDirLeft?: CSSProperties["left"];
  v6IconFreeWidth?: CSSProperties["width"];
  v6IconFreeHeight?: CSSProperties["height"];
  iconWidth?: CSSProperties["width"];
  iconFontSize?: CSSProperties["fontSize"];
  iconColor?: CSSProperties["color"];
  iconHeight?: CSSProperties["height"];
  filterFontFamily?: CSSProperties["fontFamily"];
  filterColor?: CSSProperties["color"];
  filterFontSize?: CSSProperties["fontSize"];
};

const TypesmallStatusnormalDir1: NextPage<TypesmallStatusnormalDir1Type> = ({
  icon1,
  filter,
  icon = true,
  typesmallStatusnormalDirBackgroundColor,
  typesmallStatusnormalDirPadding,
  typesmallStatusnormalDirGap,
  typesmallStatusnormalDirPosition,
  typesmallStatusnormalDirTop,
  typesmallStatusnormalDirLeft,
  v6IconFreeWidth,
  v6IconFreeHeight,
  iconWidth,
  iconFontSize,
  iconColor,
  iconHeight,
  filterFontFamily,
  filterColor,
  filterFontSize,
}) => {
  const typesmallStatusnormalDirStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: typesmallStatusnormalDirBackgroundColor,
      padding: typesmallStatusnormalDirPadding,
      gap: typesmallStatusnormalDirGap,
      position: typesmallStatusnormalDirPosition,
      top: typesmallStatusnormalDirTop,
      left: typesmallStatusnormalDirLeft,
    };
  }, [
    typesmallStatusnormalDirBackgroundColor,
    typesmallStatusnormalDirPadding,
    typesmallStatusnormalDirGap,
    typesmallStatusnormalDirPosition,
    typesmallStatusnormalDirTop,
    typesmallStatusnormalDirLeft,
  ]);

  const v6IconFreeStyle: CSSProperties = useMemo(() => {
    return {
      width: v6IconFreeWidth,
      height: v6IconFreeHeight,
    };
  }, [v6IconFreeWidth, v6IconFreeHeight]);

  const icon1Style: CSSProperties = useMemo(() => {
    return {
      width: iconWidth,
      fontSize: iconFontSize,
      color: iconColor,
      height: iconHeight,
    };
  }, [iconWidth, iconFontSize, iconColor, iconHeight]);

  const filterStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: filterFontFamily,
      color: filterColor,
      fontSize: filterFontSize,
    };
  }, [filterFontFamily, filterColor, filterFontSize]);

  return (
    <div
      className={styles.typesmallStatusnormalDir}
      style={typesmallStatusnormalDirStyle}
    >
      {icon && (
        <div className={styles.v6IconFree} style={v6IconFreeStyle}>
          <div className={styles.icon} style={icon1Style}>
            {icon1}
          </div>
        </div>
      )}
      <div className={styles.filter} style={filterStyle}>
        {filter}
      </div>
    </div>
  );
};

export default TypesmallStatusnormalDir1;
