import styled from "styled-components";
import Image from "gatsby-image";
import React from "react";

const Thumbnail = styled(Image)`
    width: 120px;
    height: 120px;
    border-radius: 10px;
`;

const PostListThumbnail = ({ cover }) => {
    const isCover = !!cover;

    return isCover ? (
        <div>
            <Thumbnail fixed={cover.childImageSharp.fixed}/>
        </div>
    ) : null;
};
export default PostListThumbnail;