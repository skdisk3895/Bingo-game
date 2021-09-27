<template>
	<div id="signupApp">
		<div class="signup-box" v-show="toggle">
			<div class="close">
				<i class="fas fa-times" @click="closeSignup()"></i>
			</div>
			<div class="signup">
				<div class="id">
					<div>
						<input type="text" placeholder="아이디" spellcheck="false" ref="user_id" />
					</div>
					<p v-show="idErrorMessage">{{ idErrorMessage }}</p>
				</div>
				<div class="password">
					<div>
						<input type="password" placeholder="비밀번호" ref="password" />
					</div>
					<p v-show="passwordErrorMessage">{{ passwordErrorMessage }}</p>
				</div>
				<div class="password-conform">
					<div>
						<input type="password" placeholder="비밀번호 확인" ref="password_confirm" />
					</div>
					<p v-show="passwordConfirmErrMessage">{{ passwordConfirmErrMessage }}</p>
				</div>
				<div class="email">
					<div>
						<input type="text" placeholder="이메일" spellcheck="false" ref="email" v-model="emailID" />
						<div>
							<span>@</span>
						</div>
						<select class="email-select" v-model="domain">
							<option value selected disabled hidden>메일 선택</option>
							<option value="naver.com">naver.com</option>
							<option value="gmail.com">gmail.com</option>
							<option value="nate.com">nate.com</option>
						</select>
						<button class="check-repeat" @click="requestSendCertification()">인증번호 전송</button>
					</div>
					<p>{{ emailErrorMessage }}</p>
				</div>
				<div class="email-certification" v-if="isSendCertification">
					<div>
						<input type="text" placeholder="인증번호" spellcheck="false" v-model="certificationNumber" />
						<button class="check-repeat" @click="requestCertification()">인증하기</button>
					</div>
				</div>
				<div class="signup-btn-box">
					<button @click="signup()">회원가입</button>
					<button @click="closeSignup()">취소</button>
				</div>
			</div>
		</div>
		<div class="shadow" v-show="toggle"></div>
	</div>
</template>

<script>
import { requestSignup, requestEmailCertification } from "@/api/auth/auth.js";

export default {
	props: ["toggle"],
	data() {
		return {
			idErrorMessage: "",
			passwordErrorMessage: "",
			passwordConfirmErrMessage: "",
			emailErrorMessage: "",
			isSendCertification: false,
			isCertification: false,
			certificationNumber: null,
			code: null,
			domain: "",
			emailID: "",
		};
	},
	methods: {
		// input value 값 다 초기화
		resetInput() {
			Object.entries(this.$refs).forEach(input => (input[1].value = ""));
		},
		// signup 창 닫기
		closeSignup() {
			this.$emit("close-signup");
			this.resetInput();
			this.clearErrorMessage();
			this.isSendCertification = false;
		},
		// 존재하는 모든 error message 초기화
		clearErrorMessage() {
			this.idErrorMessage = "";
			this.passwordErrorMessage = "";
			this.passwordConfirmErrMessage = "";
			this.emailErrorMessage = "";
		},
		// 입력된 값들 server에 request
		signup() {
			this.clearErrorMessage();
			const email = `${this.emailID}@${this.domain}`;
			requestSignup({
				user_id: this.$refs["user_id"].value,
				password: this.$refs["password"].value,
				password_confirm: this.$refs["password_confirm"].value,
				email: email,
				emailCertification: this.isSendCertification,
			})
				.then(() => {})
				.catch(error => {
					switch (error.response.data.message) {
						case "ID Validation error!":
							this.idErrorMessage = "아이디를 형식대로 입력해주세요";
							break;
						case "Already existed":
							this.idErrorMessage = "이미 존재하는 아이디에요";
							break;
						case "Password validation error!":
							this.passwordErrorMessage = "비밀번호를 형식대로 입력해주세요";
							break;
						case "Not same password":
							this.passwordConfirmErrMessage = "비밀번호가 서로 달라요";
							break;
						case "Email validation error!":
							this.emailErrorMessage = "이메일을 형식대로 입력해주세요";
							break;
						case "Email certification error!":
							this.emailErrorMessage = "이메일 인증을 해주세요";
							break;
					}
				});
		},
		// 인증번호 관련
		// 인증번호 전송 이벤트
		requestSendCertification() {
			this.clearErrorMessage();

			if (this.isSendCertification) {
				alert("이미 인증번호를 전송했습니다.");
				return;
			}
			// const email = `${this.emailID}@${this.domain}`;
			requestEmailCertification({
				email: `${this.emailID}@${this.domain}`,
			})
				.then(res => {
					this.code = res.data.code;
					console.log(this.code);
					this.isSendCertification = true;
				})
				.catch(error => {
					if (error.response.data.message === "Email validation error!")
						this.emailErrorMessage = "이메일을 형식대로 입력해주세요";
				});
		},
		requestCertification() {
			if (this.certificationNumber === this.code) {
				console.log("인증완료");
			} else {
				console.log("틀린 인증번호");
			}
		},
	},
};
</script>

<style>
.signup-box {
	width: 700px;
	height: 600px;
	padding: 20px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: #000000;
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	overflow-y: hidden;
	z-index: 2;
}

.signup-box .close {
	text-align: right;
	margin-bottom: 50px;
	color: rgb(219, 129, 26);
	font-size: 20px;
}

.signup-box .close i {
	cursor: pointer;
}

.signup-box .close i:hover {
	color: #28155f;
}

.signup-box .signup {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.signup input {
	width: 500px;
	height: 50px;
	margin: 10px 0;
	padding: 15px;
	font-size: 20px;
	border-radius: 20px;
	border: 3px solid #28155f;
	background-color: #000000;
	color: rgb(219, 129, 26);
}

.signup input:focus {
	outline: none;
}

.signup-btn-box {
	margin-top: 30px;
}

.signup-btn-box button {
	width: 200px;
	height: 50px;
	font-size: 20px;
	border-radius: 20px;
	border: 3px solid #28155f;
	background-color: #000000;
	color: rgb(219, 129, 26);
	margin: 0 30px;
	cursor: pointer;
}

.signup-btn-box button:hover {
	background-color: #28155f;
}

.shadow {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1;
}

.id div,
.email div,
.email-certification,
.certification-timer {
	display: flex;
}

.email div {
	align-items: center;
	justify-content: center;
}

.email button {
	width: 100px;
	height: 50px;
	border-radius: 20px;
	border: 3px solid #28155f;
	background-color: #000000;
	color: rgb(219, 129, 26);
	cursor: pointer;
}

.email-select {
	height: 50px;
	border-radius: 20px;
	border: 3px solid #28155f;
	background-color: #000000;
	color: rgb(219, 129, 26);
	margin-left: 10px;
	margin-right: 15px;
	padding: 5px;
}

.email-select:focus {
	outline: none;
}

.id button:hover,
.email button:hover,
.email-certification button:hover {
	background-color: #28155f;
}

.email input {
	width: 250px;
	margin-right: 10px;
}

.email-certification input {
	width: 320px;
	margin-right: 30px;
}

.email-certification button {
	width: 150px;
	height: 50px;
	border-radius: 20px;
	border: 3px solid #28155f;
	background-color: #000000;
	color: rgb(219, 129, 26);
	cursor: pointer;
	font-size: 20px;
}

.certification-timer {
	width: 200px;
	border: 3px solid #28155f;
	border-left: 0;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	align-items: center;
	justify-content: center;
	height: 50px;
	margin: 10px 0;
}
</style>
