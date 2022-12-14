import styled from 'styled-components';

export const ContentsWrapper = styled.section`
  position: relative;
  padding: 4px 0 4px 54px;
  width: 358px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProfileImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProfileWrapper = styled.div`
  flex-direction: row;
  gap: 12px;
`;

export const UserInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;

  img {
    position: absolute;
    width: 18px;
    right: 0;
  }
`;

export const UserName = styled.h2`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 18px;
`;

export const UserAccount = styled.p`
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #767676;
`;

export const PostContents = styled.div`
  font-size: 1.4rem;
  line-height: 1.8rem;
  /* gap: 16px; */

  p {
    margin-bottom: 16px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  img {
    width: 20px;
  }
  button {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: #767676;
  }
`;

export const PostDate = styled.p`
  color: #767676;
`;
