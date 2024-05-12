import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./typedesktop1.module.css";

export type Typedesktop1Type = {
  icon?: boolean;

  /** Style props */
  typedesktopPosition?: CSSProperties["position"];
  typedesktopTop?: CSSProperties["top"];
  typedesktopLeft?: CSSProperties["left"];
};

const Typedesktop1: NextPage<Typedesktop1Type> = ({
  typedesktopPosition,
  typedesktopTop,
  typedesktopLeft,
  icon,
}) => {
  const typedesktopStyle: CSSProperties = useMemo(() => {
    return {
      position: typedesktopPosition,
      top: typedesktopTop,
      left: typedesktopLeft,
    };
  }, [typedesktopPosition, typedesktopTop, typedesktopLeft]);

  return (
    <div className={styles.typedesktop} style={typedesktopStyle}>
      <div className={styles.topHeader}>
        <div className={styles.topHeaderChild} />
        <div className={styles.account}>
          <div className={styles.button}>
            <div className={styles.v6IconFree}>
              <div className={styles.icon}></div>
            </div>
            <div className={styles.shopNow}>Account</div>
          </div>
          <div className={styles.button}>
            <div className={styles.v6IconFree}>
              <div className={styles.icon}></div>
            </div>
            <div className={styles.shopNow}>Shoping</div>
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.coral}>CORAL</div>
          <img className={styles.logoChild} alt="" src="/group-97.svg" />
          <img className={styles.logoItem} alt="" src="/group-97.svg" />
        </div>
        <div className={styles.v6IconFree2}>
          <div className={styles.icon2}></div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.itemMenu}>
          <div className={styles.item}>{`Jewelry & Accessories`}</div>
        </div>
        <div className={styles.itemMenu}>
          <div className={styles.item}>{`Clothing & Shoes`}</div>
        </div>
        <div className={styles.itemMenu}>
          <div className={styles.item}>{`Home & Living`}</div>
        </div>
        <div className={styles.itemMenu}>
          <div className={styles.item}>{`Wedding & Party`}</div>
        </div>
        <div className={styles.itemMenu}>
          <div className={styles.item}>{`Toys & Entertainment`}</div>
        </div>
        <div className={styles.itemMenu}>
          <div className={styles.item}>{`Art & Collectibles`}</div>
        </div>
        <div className={styles.itemMenu}>
          <div className={styles.item}>{`Craft Supplies & Tools`}</div>
        </div>
      </div>
    </div>
  );
};

export default Typedesktop1;
