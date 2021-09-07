import React from "react";
import * as S from './styled'
import useGithub from "../../hooks/github-hooks";


const Profile = () => {

    const {githubState} = useGithub();

    return <S.Wrapper>

        <S.WrapperImage src="https://avatars.githubusercontent.com/u/46271114?v=4" alt="Avatar of user" />
        <S.WrapperInforUser>
            <div>
                <h1>{githubState.user.name}</h1>
                <S.WrapperUsername>
                    <h3>UserName:</h3>
                    <a 
                    href={githubState.user.html_url}
                    target="_blank"
                    rel="noreferrer"                   
                    
                    >{githubState.user.login}</a>
                </S.WrapperUsername>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>{githubState.user.follower}</span>
                </div>
                <div>
                    <h4>Following</h4>
                    <span>{githubState.user.following}</span>
                </div>
                <div>
                    <h4>Gists</h4>
                    <span>{githubState.user.public_gists}</span>
                </div>
                <div>
                    <h4>Repos</h4>
                    <span>{githubState.user.public_repos}</span>
                </div>

            </S.WrapperStatusCount>
        </S.WrapperInforUser>
    </S.Wrapper>

}

export default Profile;