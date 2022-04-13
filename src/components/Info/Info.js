import React from 'react'
import { Button, TopLine, BtnWrap, Column1, Heading, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, Column2, ImgWrap, Img } from './InfoElements'

const Info = ({lightBg,imgStart,topLine,
    lightText,headline, darkText, description,id,
     buttonLabel,img,alt }) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>

                        <BtnWrap>
                            <Button to="home">{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>

                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default Info