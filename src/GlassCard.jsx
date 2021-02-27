import { useSpring, config } from "react-spring";

import me from "./assets/me.jpg";
import {
  StyledContainer,
  StyledName,
  StyledRole,
  StyledUserPhoto,
} from "./Lib";
import { calc, trans } from "./helper";

export default function GlassCard() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  return (
    <StyledContainer
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <StyledUserPhoto src={me} />
      <StyledName>Gabriel Linassi</StyledName>
      <StyledRole>Front-End Web Developer</StyledRole>
    </StyledContainer>
  );
}
