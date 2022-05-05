(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{624:function(a,t,s){"use strict";s.r(t);var e=s(1),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"최신-퍼블릭-테스트넷에-참가하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#최신-퍼블릭-테스트넷에-참가하기"}},[a._v("#")]),a._v(" 최신 퍼블릭 테스트넷에 참가하기")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("최신 테스트넷")]),a._v(" "),s("p",[a._v("최신 테스트넷에 대한 정보는 다음의 "),s("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[a._v("테스트넷 리포"),s("OutboundLink")],1),a._v("를 참고하세요. 어떤 코스모스 SDK 버전과 제네시스 파일에 대한 정보가 포합되어있습니다.")])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",[s("strong",[a._v("여기에서 더 진행하시기 전에 "),s("RouterLink",{attrs:{to:"/ko/gaia-tutorials/installation.html"}},[a._v("gaia")]),a._v("가 꼭 설치되어있어야 합니다.")],1)])]),a._v(" "),s("h2",{attrs:{id:"새로운-노드-세팅하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#새로운-노드-세팅하기"}},[a._v("#")]),a._v(" 새로운 노드 세팅하기")]),a._v(" "),s("p",[a._v("다음 절차는 새로운 풀노드를 처음부터 세팅하는 절차입니다.")]),a._v(" "),s("p",[a._v("우선 노드를 실행하고 필요한 config 파일을 생성합니다:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgaW5pdCAmbHQ7eW91cl9jdXN0b21fbW9uaWtlciZndDsK"}}),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("참고")]),a._v(" "),s("p",[s("code",[a._v("--moniker")]),a._v("는 ASCII 캐릭터만을 지원합니다. Unicode 캐릭터를 이용하는 경우 노드 접근이 불가능할 수 있으니 참고하세요.")])]),a._v(" "),s("p",[s("code",[a._v("moniker")]),a._v("는 "),s("code",[a._v("~/.gaia/config/config.toml")]),a._v(" 파일을 통해 추후에 변경이 가능합니다:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBBIGN1c3RvbSBodW1hbiByZWFkYWJsZSBuYW1lIGZvciB0aGlzIG5vZGUKbW9uaWtlciA9ICZxdW90OyZsdDt5b3VyX2N1c3RvbV9tb25pa2VyJmd0OyZxdW90Owo="}}),a._v(" "),s("p",[a._v("최소 가스 가격보다 낮은 트랜잭션을 거절하는 스팸 방지 메커니즘을 활성화 하시려면 "),s("code",[a._v("~/.gaia/config/gaiad.toml")]),a._v(" 파일을 변경하시면 됩니다:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBUaGlzIGlzIGEgVE9NTCBjb25maWcgZmlsZS4KIyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90b21sLWxhbmcvdG9tbAoKIyMjIyMgbWFpbiBiYXNlIGNvbmZpZyBvcHRpb25zICMjIyMjCgojIFRoZSBtaW5pbXVtIGdhcyBwcmljZXMgYSB2YWxpZGF0b3IgaXMgd2lsbGluZyB0byBhY2NlcHQgZm9yIHByb2Nlc3NpbmcgYQojIHRyYW5zYWN0aW9uLiBBIHRyYW5zYWN0aW9uJ3MgZmVlcyBtdXN0IG1lZXQgdGhlIG1pbmltdW0gb2YgYW55IGRlbm9taW5hdGlvbgojIHNwZWNpZmllZCBpbiB0aGlzIGNvbmZpZyAoZS5nLiAxMHVhdG9tKS4KCm1pbmltdW0tZ2FzLXByaWNlcyA9ICZxdW90OyZxdW90Owo="}}),a._v(" "),s("p",[a._v("이제 풀노드가 활성화 되었습니다!")]),a._v(" "),s("h2",{attrs:{id:"제네시스와-시드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#제네시스와-시드"}},[a._v("#")]),a._v(" 제네시스와 시드")]),a._v(" "),s("h3",{attrs:{id:"제네시스-파일-복사하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#제네시스-파일-복사하기"}},[a._v("#")]),a._v(" 제네시스 파일 복사하기")]),a._v(" "),s("p",[a._v("테스트넷의 "),s("code",[a._v("genesis.json")]),a._v("파일을 "),s("code",[a._v("gaiad")]),a._v("의 config 디렉토리로 가져옵니다.")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvLmdhaWEvY29uZmlnCmN1cmwgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvc21vcy9sYXVuY2gvbWFzdGVyL2dlbmVzaXMuanNvbiAmZ3Q7ICRIT01FLy5nYWlhL2NvbmZpZy9nZW5lc2lzLmpzb24K"}}),a._v(" "),s("p",[a._v("위 예시에서는 최신 테스트넷에 대한 정보가 포함되어있는 "),s("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[a._v("launch repo"),s("OutboundLink")],1),a._v("의 "),s("code",[a._v("latest")]),a._v(" 디렉토리를 이용하는 것을 참고하세요.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[a._v("만약 다른 퍼블릭 테스트넷에 연결하신다면 "),s("RouterLink",{attrs:{to:"/ko/gaia-tutorials/join-testnet.html"}},[a._v("여기")]),a._v("에 있는 정보를 확인하세요.")],1)]),a._v(" "),s("p",[a._v("설정이 올바르게 작동하는지 확인하기 위해서는 다음을 실행하세요:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),a._v(" "),s("h3",{attrs:{id:"시드-노드-추가하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#시드-노드-추가하기"}},[a._v("#")]),a._v(" 시드 노드 추가하기")]),a._v(" "),s("p",[a._v("이제 노드가 다른 피어들을 찾는 방법을 알아야합니다. "),s("code",[a._v("$HOME/.gaia/config/config.toml")]),a._v("에 안정적인 시드 노드들을 추가할 차례입니다. "),s("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[s("code",[a._v("launch")]),s("OutboundLink")],1),a._v(" repo에 몇 개 시드 노드 링크가 포함되어있습니다.")]),a._v(" "),s("p",[a._v("만약 해당 시드가 작동하지 않는다면, 추가적인 시드와 피어들을 코스모스 허브 익스플로러에서 확인하세요(목록은 "),s("a",{attrs:{href:"https://cosmos.network/launch",target:"_blank",rel:"noopener noreferrer"}},[a._v("launch"),s("OutboundLink")],1),a._v(" 페이지에 있습니다.)")]),a._v(" "),s("p",[a._v("이 외에도 "),s("a",{attrs:{href:"https://riot.im/app/#/room/#cosmos-validators:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("밸리데이터 라이엇 채팅방"),s("OutboundLink")],1),a._v("을 통해서 피어 요청을 할 수 있습니다.")]),a._v(" "),s("p",[a._v("시드와 피어에 대한 더 많은 정보를 원하시면 "),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/develop/docs/tendermint-core/using-tendermint.md#peers",target:"_blank",rel:"noopener noreferrer"}},[a._v("여기"),s("OutboundLink")],1),a._v("를 확인하세요.")]),a._v(" "),s("h3",{attrs:{id:"가스와-수수료에-대해서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#가스와-수수료에-대해서"}},[a._v("#")]),a._v(" 가스와 수수료에 대해서")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",[a._v("코스모스 메인넷에서는 "),s("code",[a._v("uatom")]),a._v(" 단위가 표준 단위로 사용됩니다. "),s("code",[a._v("1atom = 1,000,000uatom")]),a._v("으로 환산됩니다.")])]),a._v(" "),s("p",[a._v("코스모스 허브 네트워크는 트랜잭션 처리를 위해 트랜잭션 수수료를 부과합니다. 해당 수수료는 트랜잭션을 실행하기 위한 가스로 사용됩니다. 공식은 다음과 같습니다:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"7IiY7IiY66OMKEZlZSkgPSDqsIDsiqQoR2FzKSAqIOqwgOyKpCDqsJIoR2FzUHJpY2VzKQo="}}),a._v(" "),s("p",[a._v("위 공식에서 "),s("code",[a._v("gas")]),a._v("는 전송하는 트랜잭션에 따라 다릅니다. 다른 형태의 트랜잭션은 각자 다른 "),s("code",[a._v("gas")]),a._v("량을 필요로 합니다. "),s("code",[a._v("gas")]),a._v(" 수량은 트랜잭션이 실행될때 계산됨으로 사전에 정확한 값을 확인할 수 있는 방법은 없습니다. 다만, "),s("code",[a._v("gas")]),a._v(" 플래그의 값을 "),s("code",[a._v("auto")]),a._v("로 설정함으로 예상 값을 추출할 수는 있습니다. 예상 값을 수정하기 위해서는 "),s("code",[a._v("--gas-adjustment")]),a._v(" (기본 값 "),s("code",[a._v("1.0")]),a._v(") 플래그 값을 변경하셔서 트랜잭션이 충분한 가스를 확보할 수 있도록 하십시오.")]),a._v(" "),s("p",[s("code",[a._v("gasPrice")]),a._v("는 각 "),s("code",[a._v("gas")]),a._v(" 유닛의 가격입니다. 각 검증인은 직접 최소 가스 가격인 "),s("code",[a._v("min-gas-price")]),a._v("를 설정하며, 트랜잭션의 "),s("code",[a._v("gasPrice")]),a._v("가 설정한 "),s("code",[a._v("min-gas-price")]),a._v("보다 높을때 트랜잭션을 처리합니다.")]),a._v(" "),s("p",[a._v("트랜잭션 피("),s("code",[a._v("fees")]),a._v(")는 "),s("code",[a._v("gas")]),a._v(" 수량과 "),s("code",[a._v("gasPrice")]),a._v("를 곱한 값입니다. 유저는 3개의 값 중 2개의 값을 입력하게 됩니다. "),s("code",[a._v("gasPrice")]),a._v("가 높을수록 트랜잭션이 블록에 포함될 확률이 높아집니다.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[a._v("메인넷 권장 "),s("code",[a._v("gas-prices")]),a._v("는 "),s("code",[a._v("0.0025uatom")]),a._v(" 입니다.")])]),a._v(" "),s("h2",{attrs:{id:"최소-가스-가격-minimum-gas-prices-설정하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#최소-가스-가격-minimum-gas-prices-설정하기"}},[a._v("#")]),a._v(" 최소 가스 가격("),s("code",[a._v("minimum-gas-prices")]),a._v(") 설정하기")]),a._v(" "),s("p",[a._v("풀노드는 컨펌되지 않은 트랜잭션을 멤풀에 보관합니다. 스팸 트랜잭션으로부터 풀노드를 보호하기 위해서 노드 멤풀에 보관되기 위한 트랜잭션의 최소 가스 가격("),s("code",[a._v("minimum-gas-prices")]),a._v(")을 설정할 것을 권장합니다. 해당 파라미터는 "),s("code",[a._v("~/.gaia/config/gaiad.toml")]),a._v("에서 설정하실 수 있씁니다.")]),a._v(" "),s("p",[a._v("기본 권장 "),s("code",[a._v("minimum-gas-prices")]),a._v("는 "),s("code",[a._v("0.0025uatom")]),a._v("이지만, 추후 바꾸실 수 있습니다.")]),a._v(" "),s("h2",{attrs:{id:"풀노드-운영하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#풀노드-운영하기"}},[a._v("#")]),a._v(" 풀노드 운영하기")]),a._v(" "),s("p",[a._v("다음 커맨드로 풀노드를 시작하세요:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),a._v(" "),s("p",[a._v("모든 것이 잘 작동하고 있는지 확인하기 위해서는:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhdHVzCg=="}}),a._v(" "),s("p",[a._v("네트워크 상태를 "),s("a",{attrs:{href:"https://cosmos.network/launch",target:"_blank",rel:"noopener noreferrer"}},[a._v("코스모스 익스플로러"),s("OutboundLink")],1),a._v("에서 확인하세요.")]),a._v(" "),s("h2",{attrs:{id:"상태-내보내기-export-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#상태-내보내기-export-state"}},[a._v("#")]),a._v(" 상태 내보내기(Export State)")]),a._v(" "),s("p",[a._v("Gaia는 현재 애플리케이션의 상태를 JSON파일 형태로 내보낼 수 있습니다. 이런 데이터는 수동 분석과 새로운 네트워크의 제네시스 파일로 이용될 때 유용할 수 있습니다.")]),a._v(" "),s("p",[a._v("현재 상태를 내보내기 위해서는:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0ICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),a._v(" "),s("p",[a._v("특정 블록 높이의 상태를 내보낼 수 있습니다(해당 블록 처리 후 상태):")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),a._v(" "),s("p",[a._v("만약 해당 상태를 기반으로 새로운 네트워크를 시작하시려 한다면, "),s("code",[a._v("--for-zero-height")]),a._v(" 플래그를 이용하셔서 내보내기를 실행해주세요:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdIC0tZm9yLXplcm8taGVpZ2h0ICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),a._v(" "),s("h2",{attrs:{id:"메인넷-검증하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메인넷-검증하기"}},[a._v("#")]),a._v(" 메인넷 검증하기")]),a._v(" "),s("p",[a._v("각 폴노드에서 invariant를 실행하여 검증 중 위험한 상황이 발생하는 것을 방지하세요. Invariant를 사용하여 메인넷의 상태(state)가 올바른 상태인 것을 확인합니다. 중요한 invariant 검증 중 하나는 프로토콜 예상 범위 밖에서 새로운 아톰이 생성되거나 사라지는 행위를 미리 감지하고 예빵합니다. 이 외에도 다양한 invariant check가 모듈 내 내장되어있습니다.")]),a._v(" "),s("p",[a._v("Invariant check는 블록체인 연산력을 상당하게 소모하기 때문에, 기본적으로 비활성화 되어있습니다. Invariant check를 실행한 상태로 노드를 시작하기 원하시는 경우 "),s("code",[a._v("inv-check-period")]),a._v(" 플래그를 추가하세요:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQgLS1pbnYtY2hlY2stcGVyaW9kIFtibG9jay1jb3VudF0K"}}),a._v(" "),s("p",[a._v("만약 노드 내 invariant가 문제를 감지하는 경우, 노드는 패닉하여 메인넷을 중지하는 트랜잭션을 전송합니다. 예시 메시지는 다음과 같습니다:")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW52YXJpYW50IGJyb2tlbjoKICAgIGxvb3NlIHRva2VuIGludmFyaWFuY2U6CiAgICAgICAgcG9vbC5Ob3RCb25kZWRUb2tlbnM6IDEwMAogICAgICAgIHN1bSBvZiBhY2NvdW50IHRva2VuczogMTAxCiAgICBDUklUSUNBTCBwbGVhc2Ugc3VibWl0IHRoZSBmb2xsb3dpbmcgdHJhbnNhY3Rpb246CiAgICAgICAgZ2FpYWQgdHggY3Jpc2lzIGludmFyaWFudC1icm9rZW4gc3Rha2luZyBzdXBwbHkKCg=="}}),a._v(" "),s("p",[a._v("Invariant-broken 트랜잭션을 전송하는 경우 블록체인이 중지되기 떄문에 수수료가 없습니다.")]),a._v(" "),s("h2",{attrs:{id:"검증인-노드로-업그레이드-하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#검증인-노드로-업그레이드-하기"}},[a._v("#")]),a._v(" 검증인 노드로 업그레이드 하기")]),a._v(" "),s("p",[a._v("이제 풀노드 설정을 완료하셨습니다. 원하신다면 풀노드를 코스모스 검증인으로 업그레이드 하실 수 있습니다. 보팅 파워 상위 100위 검증인은 코스모스 허브의 새로운 블록 프로포즈 과정에 참여할 수 있습니다. "),s("RouterLink",{attrs:{to:"/ko/gaia-tutorials/validators/validator-setup.html"}},[a._v("검증인 세팅하기")]),a._v("를 확인하세요.")],1)],1)}),[],!1,null,null,null);t.default=v.exports}}]);