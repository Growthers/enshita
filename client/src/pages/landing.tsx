import type { FC } from "react";
import { Link } from "wouter";
import AnchorButton from "~/components/button/anchor-button";
import styles from "~/styles/pages/landing.module.scss";
import ImageContainer from "~/components/image-container";

const enshitaContents = [
  {
    alt: "post new LT",
    content: "簡単にLTを\n開催できる.",
    src: "/statics/undraw_post_re_mtr4.svg",
  },
  {
    alt: "talking on stage",
    content: "簡単にLTに\n登壇できる.",
    src: "/statics/undraw_business_plan_re_0v81.svg",
  },
  {
    alt: "manage LT",
    content: "簡単にLTを\n運営できる.",
    src: "/statics/undraw_schedule_re_2vro.svg",
  },
];

const LandingPage: FC = () => (
  <section className={styles["enshita-landing-page"]}>
    <section className={styles["enshita-landing-page-hero-section"]}>
      <h1
        className={styles["enshita-landing-page-hero-title"]}
      >{`LT運営の負担を少しでも軽くする.\nLT開催支援システム.`}</h1>
      <img
        src="/statics/lyrics.svg"
        alt="enshita logo"
        className={styles["enshita-landing-page-hero-logo"]}
      />
    </section>
    <section className={styles["enshita-landing-page-contents-section"]}>
      <h1 className={styles["enshita-landing-page-contents-title"]}>
        <span className={styles["enshita-landing-page-enshita"]}>enshita</span>
        を使えば
      </h1>
      <div className={styles["enshita-landing-page-contents"]}>
        {enshitaContents.map(enshitaContent => (
          <ImageContainer
            alt={enshitaContent.alt}
            src={enshitaContent.src}
            key={enshitaContent.src}
          >
            {enshitaContent.content}
          </ImageContainer>
        ))}
      </div>
    </section>
    <section className={styles["enshita-landing-page-anchor"]}>
      <h1>enshitaからLTに参加してみよう</h1>
      <Link to="/portal">
        <AnchorButton
          variant="normal"
          boxStyles={styles["enshita-landing-page-anchor-button"]}
        >
          ポータルサイトへ
        </AnchorButton>
      </Link>
    </section>
  </section>
);

export { LandingPage };
