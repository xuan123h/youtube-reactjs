import React from "react";
import styled from "styled-components";
import IconDislike from "../icons/IconDislike";
import IconHeart from "../icons/IconHeart";
import IconSave from "../icons/IconSave";
import IconShare from "../icons/IconShare";
import Card from "../module/Card";
import Comments from "../module/Comments";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft}; ;
`;
const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text}; ;
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  transform: translateY(-20px);
`;
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/LajUvSCmXO8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title> Test Video </Title>
        <Details>
          <Info> 7,948,154 views • Jun 22, 2022 </Info>
          <Buttons>
            <Button>
              <IconHeart></IconHeart> 123
            </Button>
            <Button>
              <IconDislike></IconDislike> Dislike
            </Button>
            <Button>
              <IconShare></IconShare> Share
            </Button>
            <Button>
              <IconSave></IconSave> Save
            </Button>
          </Buttons>
        </Details>
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s88-c-k-c0x00ffffff-no-rj"></Image>
            <ChannelDetail>
              <ChannelName> Lama Dev </ChannelName>
              <ChannelCounter> 200K subscribes </ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                id porro ab commodi, quidem enim voluptates voluptatibus
                accusamus quod cum voluptate praesentium maiores assumenda
                aliquid, dolor eligendi soluta doloremque! Suscipit!
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe> SUBSCRIBE </Subscribe>
        </Channel>
        <Hr />
        <Comments></Comments>
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
