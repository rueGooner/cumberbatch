import { motion, useScroll, useTransform } from "framer-motion";
import { FC, JSX } from "react";

interface ScrollAnimatedTextProps {
  content: string;
  classes?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const ScrollAnimatedText: FC<ScrollAnimatedTextProps> = ({
  content,
  classes,
  as: TypographyElement = "h3",
}) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0.2, 0.5], [20, 0]);

  const MotionTypographyElement = motion.create(
    TypographyElement as keyof JSX.IntrinsicElements
  );

  return (
    <MotionTypographyElement
      className={classes}
      style={{ opacity, y }}
    >
      {content}
    </MotionTypographyElement>
  );
};
