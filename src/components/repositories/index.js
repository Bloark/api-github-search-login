import React from "react";
import * as S from './styled';
import RepositoryItem from "../repository-item";



export const Repositories = () => {

    return <S.WrapperTabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
    >
        <S.WrapperTabList>
            <S.WrapperTab> Repositories </S.WrapperTab>
            <S.WrapperTab> Starred </S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
        <RepositoryItem
        name="app-ideas"
        linkToRepo="https://github.com/Bloark/app-ideas"
        fullName="Bloark/app-ideas"
        />
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
        <RepositoryItem
        name="Bloark"
        linkToRepo="https://github.com/Bloark/Bloark"
        fullName="Bloark/Bloark"

        /></S.WrapperTabPanel>

    </S.WrapperTabs>

}

export default Repositories;