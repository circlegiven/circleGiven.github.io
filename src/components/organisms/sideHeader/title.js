import React, { useMemo } from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import Icon from "../../atoms/icon";

const SideHeaderTitle = ({title}) => {

    const BlogTitle = useMemo(() => styled(Link)`
    display: block;
    color: inherit;
    font-weight: bold;
    margin-bottom: 0;
    margin-left: 10px;
    font-size: 30px;
    `, []);

    return (
        <BlogTitle to={"/"}><Icon className="fab fa-slack-hash"/>{title}</BlogTitle>
    );
};
export default SideHeaderTitle;
