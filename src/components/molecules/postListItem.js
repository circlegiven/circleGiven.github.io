import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import TextEllipsis from "components/atoms/textEllipsis";
import PostInfo from "components/molecules/postInfo";
import PostListThumbnail from "./postListItemThumbnail";

const PostItem = styled(Link)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`;

const TextContents = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    h2 {
        margin: 0;
        margin-bottom: 5px;
        padding-bottom: 0;
        border-bottom: none;
        color: ${props => props.theme.postlistitem.title};
    }

    p:nth-child(2) {
        color: ${props => props.theme.postlistitem.content};
    }

    div {
        color: ${props => props.theme.postlistitem.info};

        #circle {
            background-color: ${props => props.theme.postlistitem.info};
        }
    }
`;

const PostListItem = ({ node }) => {
    return (
        <PostItem to={node.fields.slug}>
            <TextContents>
                <h2>
                    <TextEllipsis line={1} text={node.frontmatter.title} />
                </h2>

                <TextEllipsis line={2} text={node.excerpt} />

                <PostInfo
                    date={node.frontmatter.date}
                    category={node.frontmatter.category}
                />
            </TextContents>
            <PostListThumbnail cover={node.frontmatter.cover}/>
        </PostItem>
    );
};

export default PostListItem;
