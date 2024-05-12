import type { NextPage } from "next";
import TypesmallStatusnormalDir1 from "./typesmall-statusnormal-dir1";
import styles from "./product-grid-container.module.css";

const ProductGridContainer: NextPage = () => {
  return (
    <div className={styles.gridProducts}>
      <div className={styles.sectionTitle}>
        <div className={styles.orSubscribeTo}>
          Or subscribe to the newsletter
        </div>
      </div>
      <div className={styles.topSectionProducts}>
        <div className={styles.category}>
          <div className={styles.itemTab}>
            <div className={styles.item}>all products</div>
          </div>
          <div className={styles.itemTab1}>
            <div className={styles.item}>t-shirt</div>
          </div>
          <div className={styles.itemTab2}>
            <div className={styles.item}>hoodies</div>
          </div>
          <div className={styles.itemTab3}>
            <div className={styles.item}>jacket</div>
          </div>
        </div>
        <TypesmallStatusnormalDir1
          icon1=""
          filter="filter"
          icon
          typesmallStatusnormalDirBackgroundColor="#1e2832"
          typesmallStatusnormalDirPadding="var(--padding-8xs) var(--padding-mini)"
          typesmallStatusnormalDirGap="4px"
          typesmallStatusnormalDirPosition="unset"
          typesmallStatusnormalDirTop="unset"
          typesmallStatusnormalDirLeft="unset"
          v6IconFreeWidth="20px"
          v6IconFreeHeight="20px"
          iconWidth="16px"
          iconFontSize="14px"
          iconColor="#fff"
          iconHeight="unset"
          filterFontFamily="'Open Sans'"
          filterColor="#fff"
          filterFontSize="16px"
        />
      </div>
      <div className={styles.products}>
        <div className={styles.card}>
          <div className={styles.topProduct}>
            <img className={styles.img15Icon} alt="" src="/img15@2x.png" />
            <div className={styles.ribbon}>
              <div className={styles.background} />
              <div className={styles.hot}>hot</div>
            </div>
          </div>
          <div className={styles.bottomProduct}>
            <div className={styles.bag}>Dress</div>
            <div className={styles.div}>$63.85</div>
            <div className={styles.titleProduct}>
              <div className={styles.nikeSportswearFutura}>
                Adicolor Classics Joggers
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card1}>
          <div className={styles.topProduct}>
            <img className={styles.img15Icon} alt="" src="/img11@2x.png" />
            <div className={styles.ribbon1}>
              <div className={styles.background} />
              <div className={styles.hot}>hot</div>
            </div>
          </div>
          <div className={styles.bottomProduct}>
            <div className={styles.bag}>Dress</div>
            <div className={styles.div1}>$236.00</div>
            <div className={styles.titleProduct1}>
              <div className={styles.nikeSportswearFutura}>
                Basic Dress Green
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.topProduct}>
            <img className={styles.img15Icon} alt="" src="/img14@2x.png" />
            <div className={styles.ribbon}>
              <div className={styles.background} />
              <div className={styles.hot}>hot</div>
            </div>
          </div>
          <div className={styles.bottomProduct}>
            <div className={styles.bag}>Bag</div>
            <div className={styles.div1}>$130.00</div>
            <div className={styles.titleProduct2}>
              <div className={styles.nikeSportswearFutura}>
                Nike Sportswear Futura Luxe
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.topProduct}>
            <img className={styles.img15Icon} alt="" src="/img12@2x.png" />
            <div className={styles.ribbon1}>
              <div className={styles.background3} />
              <div className={styles.sale}>sale</div>
            </div>
          </div>
          <div className={styles.bottomProduct3}>
            <div className={styles.bag3}>shoe</div>
            <div className={styles.div3}>$198.00</div>
            <div className={styles.div4}>$220.00</div>
            <div className={styles.titleProduct3}>
              <div className={styles.nikeSportswearFutura}>
                Nike Air Zoom Pegasus
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.topProduct}>
            <img className={styles.img15Icon} alt="" src="/img13@2x.png" />
            <div className={styles.ribbon}>
              <div className={styles.background} />
              <div className={styles.hot}>hot</div>
            </div>
          </div>
          <div className={styles.bottomProduct}>
            <div className={styles.bag}>scarf</div>
            <div className={styles.div}>$53.00</div>
            <div className={styles.titleProduct4}>
              <div className={styles.nikeSportswearFutura}>
                Geometric print Scarf
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card5}>
          <div className={styles.topProduct}>
            <img className={styles.img15Icon} alt="" src="/img17@2x.png" />
            <div className={styles.ribbon}>
              <div className={styles.background} />
              <div className={styles.hot}>hot</div>
            </div>
          </div>
          <div className={styles.bottomProduct}>
            <div className={styles.bag}>Dress</div>
            <div className={styles.div1}>$120.50</div>
            <div className={styles.titleProduct5}>
              <div className={styles.nikeSportswearFutura}>
                Nike Repel Miler
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card6}>
          <div className={styles.topProduct}>
            <img className={styles.img15Icon} alt="" src="/img04@2x.png" />
            <div className={styles.ribbon1}>
              <div className={styles.background3} />
              <div className={styles.sale}>sale</div>
            </div>
          </div>
          <div className={styles.bottomProduct3}>
            <div className={styles.bag3}>Dress</div>
            <div className={styles.div3}>$155.00</div>
            <div className={styles.div4}>$364.00</div>
            <div className={styles.titleProduct6}>
              <div className={styles.nikeSportswearFutura}>
                Yellow Reserved Hoodie
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card7}>
          <div className={styles.topProduct}>
            <img className={styles.img15Icon} alt="" src="/img16@2x.png" />
            <div className={styles.ribbon}>
              <div className={styles.background} />
              <div className={styles.hot}>hot</div>
            </div>
          </div>
          <div className={styles.bottomProduct}>
            <div className={styles.bag}>Glasses</div>
            <div className={styles.div1}>$160.00</div>
            <div className={styles.titleProduct2}>
              <div className={styles.nikeSportswearFutura}>
                Nike Sportswear Futura Luxe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridContainer;
