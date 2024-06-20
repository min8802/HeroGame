ERC 721 프로젝트

- HERR Hero NFT 프로젝트

  1. LocalStorage에 저장된 NFT 메타데이터들을 백엔드로 연결하면 GAME내에 
  IMPORT 해 볼 수 있는 기능 구현을 목적으로 제작한 프로젝트

  
  2. GAME으로 IMPORT 된 NFT를 다시 EXPORT 하여 전송, 거래가 가능하게 하는 것이
  목적
  3. GAME 페이지 내에서 뭔가 플레이를 즐기기 보다는
  기존 잘 만들어진 게임으로의 

- 페이지 구성
  1. Home, Mint, My, Game 4개의 페이지로 구성, 추후에 Market 추가
  2. Home 페이지는 스크롤 시 페이지가 자연 스럽게 넘어가기 위해 useObserve Hooks를 사용
  3. Mint 페이지는 mint가 완료된 카드는 localstorage에 id 정보를 저장하여 filter 함수로 제거
  
  
  - 페이지 구성
  
