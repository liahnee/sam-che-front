# json 설명

## disclaimer
j_로 시작하는 것들은 지금 반환해주는 값을 그대로 저장한 값

데이터마다 일관성이 하나도 없는 점에 대해서는 난개발의 영향이므로 안타깝게 생각 ㅜㅜㅜ...

내무부, 감찰부, 내 정보&설정, 거래장, 중원 정보, 연감에 대해서는 아직 json을 뭘로 잡아야할지 생각도 못해봄

## 파일별 설명
- `current_city.json` - 도시 정보 초안

## 자료 규격들

### 지도 출력 방식
`base_map.js`의 `cityPosition`, `region`과 도시 정보를 `j_map.json`과 조합. 출력은 div 중첩

`cityList`의 값 순서는 다음과 같음

- cityID 
- level - 진수관이소중대특
- state - 도시 상태 코드. 재해, 전투중 등
- nationID
- region
- supply - 보급(깃)

### 예턴/사령턴 표시 규격
`j_get_reserved_command.json`과 `j_chief_turn.json`의 두종류가 있지만 `j_get_reserved_command.json`쪽이 원래 구현 의도에 맞는 상황

### 턴 Object 정보
- action:string - 턴 Class명. 놀랍게도 https://storage.hided.net/gogs/devsam/core/src/devel/hwe/sammo/Command 에 있는 php파일 이름과 같음.
- brief:string - 턴의 실제 설명. Class에서 `getBrief()`를 호출해서 캐시해둠
- arg - argument 가능한 종류는 다음이 있음
  - uint - `year`, `month`, `crewType`, `destGeneralID`, `destCityID`, `destNationID`, `amount`, `colorType`, `srcArmType`, `destArmType`
  - bool - `isGold`, `buyRice`
  - uintArray - `destNatioIDList`, `destGeneralIDList`, `amountList`
  - string - `nationName`, `itemType`, `itemCode`, `commandType`, `optionText`

### 장수 목록 표시 규격
`j_get_nation_general_list.json`과 `j_get_general_list.json`의 표현형이 다르지만 `j_get_nation_general_list.json`쪽이 구현 의도에 좀 더 가까움. (맞다는 의미는 아니고...)

개발 중 항목이 100개가 넘어간다고 판단한 경우 column과 row를 분리하고, 클라이언트에서 이 둘을 합쳐서 object로 변환한 다음 처리하도록 구현해오고 있음.

단지 column을 하드코딩해서 따로 넣어두느냐, json에 미리 넣어두느냐인데, json에 넣는게 맞긴 할 듯... ㅜ (난개발...)

#### 장수 Object 정보
원본 DB의 정보를 그대로 가져오다보니...

- `no`:uint - 장수 코드. 다른 json에서는 generalID 으로 표현됨
- `name`:string - 이름
- `nation`:uint - 국가 코드. 다른 곳에서는 nationID로 표현중
- `city`:uint -  도시 코드. 
- `npc`:uint - NPC Type
  - 0(유저), 1(빙의유저), 2(빙의가능 시나리오NPC), 3(인탐장), 4(의병장(전략)), 5(부대장), 6(빙의불가 시나리오NPC), 9(오랑캐(예약))
- `injury`:uint - 부상정도 0-100
- `leadership`:uint - 통솔
- `strength`:uint - 무력
- `intel`:uint - 지력
- `experience`:uint - 누적경험치
- `explevel`:uint - 레벨
- `dedication`:uint - 누적공헌도
- `dedlevel`:uint - 계급(봉급)
- `gold`:uint - 금
- `rice`:uint - 쌀
- `killturn`:uint - 삭턴
- `picture`:string - 이미지 상대 경로
- `imgsvr`:uint - 이미지 서버 시작주소. 0:static, 1:dynamic
- `age`:uint - 연령
- `special`:string - 내정특기 내부적으로는 `che_상재` 등으로 사용하며, 표현형으로는 단순히 `상재`로 표현
- `special2`:string - 전투특기. 내부적으로는 `che_견고`, `event_슈퍼특기` 등으로 사용하며, 표현형으로는 단순히 `견고`로 표현
- `personal`:string - 성격. `che_은둔` -> `은둔`
- `belong`:uint - 임관년도. 임관시 1로 시작
- `connect`:uint - 벌점
- `officerLevel`:uint - 관직 등급. 0재야, 1일반, 2종사, 3군사, 4태수, 5-11수뇌, 12군주
- `officerLevelText`:string - 국가 레벨에 따른 관직명
- `lbonus`:uint - 관직에 따른 통솔
- `ownerName`:string - 원본 장수명. 깃수가 종료시 값이 채워짐
- `honorText`: explevel에 따라 명성 등급을 적당히 분류

#### current_city 한정 별도 표기 규격
- `iconPath`:string - `imgsvr와` `picture를` 같이 써서 통합한 녀석. (`imgsvr`,`picture`)와 `iconPath` 중에 어느게 더 나은지는 아직도 결론 못내림.

### 메시지 표시 규격
`j_msg_get_old.json`과 `j_msg_get_recnet.json` 모두 구현 의도에 맞게 되어있음.

`id`, `msgType`, `src`, `dest`, `text`, `option`(수락/거절 관련), `time`이 메시지 상세 정보이고

`j_msg_get_old.json`의 `keepRecent`는 받아온 메시지가 이전에 받아온 메시지에 계속해서 덧붙여나가면 된다는 의미
양 파일 모두 `sequence`는 가져온 메시지보다 이전 정보를 가져오려면 몇번부터 요청하면 되는지 알려줌


### 국가 정보
DB 그대로 ㅜㅜ
어떤건 DB Table Column, 어떤건 json, 어떤건 key-value인건 마찬가지로 난개발...
- `nation` Table
  - `nation`:uint - NationID
  - `name`:string - 국가명. 보통 12글자로 자름
  - `color`:string - RGB Hex 6 (ffffff)
  - `capital`:uint - CityID
  - `gennum`:uint - 실효 장수 수
  - `gold`:uint - 금
  - `rice`:uint - 쌀
  - `bill`:uint - 지급률
  - `rate`:uint - 세율 INT(3) NULL DEFAULT 0,
  - `secretlimit`:uint - 암행부 조회 가능한 임년 년도 수
  - `chief_set`:uint(실제로는 bitset) - 수뇌 임관 여부 `chief_set |= 1<<(officerLevel-5)` 같은 느낌.
  - `scout`:bool - 임관 불가(거꾸로다!)
  - `war`:bool - 전쟁 허용(거꾸로다!)
  - `strategic_cmd_limit`:uint - 전역 전략 사용 불가 기간
  - `surlimit`:uint - 특수 외교 커맨드 사용 불가 기간
  - `tech`:float - 기술
  - `power`:uint - 국력
  - `spy`:json - 첩보된 도시. `spy[CityID]=remainSpyMonth` 형태라는 무시무시한 구조
  - `level`:uint - 국가 등급
  - `type`:string - 국가 종류 className. `che_명가`
  - `aux` LONGTEXT NOT NULL DEFAULT '{}',
- `nationAux` json Encoding
  - `capset`:uint - 수도 설정 여부(legacy)
  - `can국기변경`:bool
- `nationEnv` KeyValue Map
  - 너무 많아서 지금 모름


### 도시 정보
`current_city.json`이 현재 도시.

세력 도시의 정보에서는 `current_city.json`에서 `cityInfo`가 배열로 늘어선 형태