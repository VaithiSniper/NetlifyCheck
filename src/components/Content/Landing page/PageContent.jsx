import React from 'react';
import { useMediaPredicate } from "react-media-hook";
import PageContentMobile from './PageContentMobile';
import PageContentPC from './PageContentPC'

function PageContent(){
    const smallerThan560 = useMediaPredicate("(max-width: 560px)");//media-query hook  
    return(!smallerThan560?<PageContentPC/>:<PageContentMobile/>);
}
export default PageContent;