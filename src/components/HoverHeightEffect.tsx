import React, { FC } from "react";
import styled from "styled-components";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

const Content = styled.div`
  z-index: 1;
`;

const Transition = styled.div`
  transition-property: transform;
  transition-timing-function: ease;
`;

const Bar = styled(Transition)`
  position: absolute;
  z-index: 0;
  background-color: var(--card-color);
  transition-property: transform;
  transition-timing-function: ease;
  transform-origin: 0px 100%;
`;

const Arrow = styled(Transition)`
  position: absolute;
`;

const LeftBar = styled(Bar)`
  height: 100%;
  top: 0;
  left: 0;
  width: 0.5rem;
  transform: scaleX(0);
`;

const BottomBar = styled(Bar)`
  width: 100%;
  bottom: 0;
  left: 0;
  height: 0.5rem;
  transform: scaleY(0);
`;

const TopLeftArrow = styled(Arrow)`
  top: 0;
  left: 0;
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-right: 0.5rem solid var(--card-color);
  transform-origin: left center;
  transform: translateY(-0.5rem) scale(0);
`;

const BottomRightArrow = styled(Arrow)`
  bottom: 0;
  right: 0;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-top: 0.5rem solid var(--card-color);
  transform-origin: center bottom;
  transform: translateX(0.5rem) scale(0);
`;

const Wrapper = styled.div<{ color: string }>`
  --card-color: ${({ color }) => color};

  :hover ${Content} {
    transform: translate3d(0.5rem, -0.5rem, 0px);
  }

  :hover ${LeftBar} {
    transform: scaleX(1);
  }

  :hover ${BottomBar} {
    transform: scaleY(1);
  }

  :hover ${BottomRightArrow} {
    transform: translateX(0.5rem) scale(1);
  }

  :hover ${TopLeftArrow} {
    transform: translateY(-0.5rem) scale(1);
  }
`;

export interface HoverHeightEffectProps {
  color?: string;
}

const HoverHeightEffect: FC<HoverHeightEffectProps> = ({
  color = fullConfig.theme.colors.primary.DEFAULT,
  children,
}) => {
  return (
    <Wrapper className="relative" color={color}>
      <LeftBar className="transition" />
      <BottomBar className="transition" />
      <TopLeftArrow className="transition" />
      <BottomRightArrow className="transition" />
      <Content className="transition">{children}</Content>
    </Wrapper>
  );
};

export default HoverHeightEffect;
