import styled from "styled-components";

//HEADER//
export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 22px;
  background-color: var(--bcgBlue);
`;

export const DivTitleLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;
////////////////////////////////////////////////////
export const DivDashboardAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: var(--bcgBlue);
  margin: 10%;
  border-radius: 50px;
  height: 65%;
  width: 75%;
`;
export const DivAllHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

export const DivHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;
/////////////////////////////
//CARD USER///
export const DivCardUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  padding-left: 20px;
  gap: 10px;
  text-align: left;
`;
export const DivInfoRepo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 10px;
  gap: 15px;
`;
/////////////////////////////
////CARD REPOS///////
export const DivUserRepo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  padding-left: 20px;
  gap: 10px;
  text-align: left;
  border-radius: 10px;
  background-color: var(--purpleDull);
`;
export const UlRepos = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 15px;
`;
