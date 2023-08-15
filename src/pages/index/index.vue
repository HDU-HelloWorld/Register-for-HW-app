<template>
	<view class="block" :style="{ height: capsuleTop + 'px' }"></view>
	<view class="icon-title" :style="{ height: capsuleHeight + 'px', lineHeight: capsuleHeight + 'px' }">HelloWorld报名
	</view>
	<!-- 写出一个表单里面包括stu_name stu_gender stu_number stu_phone_number stu_qq_number stu_email stu_major stu_hope_department stu_self_introduction stu_honor -->
	<view class="forms-wrapper">
		<form @submit="submit" @reset="formReset">
			<view class="uni-form-item">
				<view class="title">姓名</view>
				<input class="uni-input" confirm-type="next" v-model="userInfo.stu_name" name="stu_name" placeholder="请输入姓名" />
			</view>
			<view class="uni-form-item">
				<view class="title">性别</view>
				<radio-group name="stu_gender">
					<label style="margin-right: 25px;">
						<radio value="men" />
						<text>男</text>
					</label>
					<label>
						<radio value="women" /><text>女</text>
					</label>
				</radio-group>
			</view>
			<view class="uni-form-item">
				<view class="title">学号</view>
				<input class="uni-input" v-model="userInfo.stu_number" name="stu_number" type="number" placeholder="请输入学号" />
			</view>
			<view class="uni-form-item ">
				<view class="title">电话号码</view>
				<input class="uni-input" v-model="userInfo.stu_phone_number" name="stu_phone_number" type="tel"
					placeholder="请输入电话号码" />
			</view>
			<view class="uni-form-item ">
				<view class="title">QQ号码</view>
				<input class="uni-input" v-model="userInfo.stu_qq_number" name="stu_qq_number" type="number"
					placeholder="请输入QQ号码" />
			</view>
			<view class="uni-form-item ">
				<view class="title">邮箱</view>
				<input class="uni-input" v-model="userInfo.stu_email" name="stu_email" type="email" placeholder="请输入邮箱" />
			</view>
			<view class="uni-form-item ">
				<view class="title">专业</view>
				<input class="uni-input" v-model="userInfo.stu_major" name="stu_major" type="text" placeholder="请输入专业" />
			</view>
			<view class="uni-form-item ">
				<view class="uni-list-cell-left">
					志愿部门
				</view>
				<view class="uni-list-cell-db">
					<picker name="stu_hope_department" @change="bindPickerChange" :value="index" :range="departmentArr">
						<view class="uni-select">{{ departmentArr[index] }}
							<image :src="arrowDown" style="width: 20px; height: 20px;"></image>
						</view>
					</picker>
				</view>
			</view>
			<view class="uni-form-item ">
				<view class="title">自我介绍</view>
				<textarea v-model="userInfo.stu_self_introduction" name="stu_self_introduction" class="text-area"
					@blur="bindTextAreaBlur" auto-height placeholder="请输入自我介绍" />
			</view>
			<view class="uni-form-item ">
				<view class="title">荣誉</view>
				<textarea v-model="userInfo.stu_honor" name="stu_honor" class="text-area" @blur="bindTextAreaBlurHonor"
					auto-height placeholder="请输入荣誉没有则填无" />
			</view>
			<view class="uni-btn-v">
				<button form-type="submit">Submit</button>
				<button type="reset" form-type="reset">Reset</button>
			</view>
		</form>
	</view>
</template>


<script setup lang="ts">
import { ref } from "vue"
import arrowDown from '../../static/arrowDown.png'
import test from '../../static/text.png'
import { register } from "../../api/register";
const menuButtonObject = uni.getMenuButtonBoundingClientRect()
const capsuleTop = ref(menuButtonObject.top || 30)
const capsuleHeight = ref(menuButtonObject.height || 30)
const userInfo: any = ref({
	stu_name: '',
	stu_gender: '',
	stu_number: '',
	stu_phone_number: '',
	stu_qq_number: '',
	stu_email: '',
	stu_major: '',
	stu_hope_department: '',
	stu_self_introduction: '',
	stu_honor: ''
})
const index = ref(0)
const rules = {

}
const departmentArr = ref(['web', '后端', '人工智能', '行政'])
const change = (e: any) => {
	console.log(e)
}

const submit = async (e: any) => {
	var formdata = e.detail.value
	// 遍历formdata赋值给userInfo
	for (let key in formdata) {
		userInfo.value[key] = formdata[key]
	}
	userInfo.value.stu_hope_department = departmentArr.value[userInfo.value.stu_hope_department]
	if (userInfo.value.stu_gender == 'men') {
		userInfo.value.stu_gender = '男'
	} else if (userInfo.value.stu_gender == 'women') {
		userInfo.value.stu_gender = '女'
	}
	// 表单验证
	if (userInfo.value.stu_name == '') {
		showInfomation('none', '姓名不能为空')
		return
	}
	// 学号验证 要求必须是8位数字
	if (userInfo.value.stu_number == '') {
		showInfomation('none', '学号不能为空')
		return
	}
	if (userInfo.value.stu_number.length != 8) {
		showInfomation('none', '学号必须是8位数字')
		return
	}
	// 电话号码验证 要求必须是11位数字
	if (userInfo.value.stu_phone_number == '') {
		showInfomation('none', '电话号码不能为空')
		return
	}
	if (userInfo.value.stu_phone_number.length != 11) {
		showInfomation('none', '电话号码无效')
		return
	}
	// QQ号码验证 要求必须是6-11位数字
	if (userInfo.value.stu_qq_number == '') {
		showInfomation('none', 'QQ号码不能为空')
		return
	}
	if (userInfo.value.stu_qq_number.length < 6 || userInfo.value.stu_qq_number.length > 11) {
		showInfomation('none', 'QQ号码无效')
		return
	}
	// 邮箱验证
	if (userInfo.value.stu_email == '') {
		showInfomation('none', '邮箱不能为空')
		return
	}
	// 专业验证
	if (userInfo.value.stu_major == '') {
		showInfomation('none', '专业不能为空')
		return
	}
	// 自我介绍验证
	if (userInfo.value.stu_self_introduction == '') {
		showInfomation('none', '写点自我介绍趴')
		return
	}
	// 荣誉验证
	if (userInfo.value.stu_honor == '') {
		showInfomation('none', '写点荣誉吧(没有则填无)')
		return
	}
	// 提交表单
	try {
		console.log('userInfo:', userInfo.value)
		const res = await register({
			...userInfo.value
		})
		console.log('sucess:', res)
	} catch (error) {
		console.log('fail:', error)
	}
}
const formReset = (e: any) => {
	console.log(e)
	// 重置表单 重置userInfo
	for (let key in userInfo.value) {
		userInfo.value[key] = ''
	}
}
const bindPickerChange = (e: any) => {
	index.value = e.detail.value
}
const bindTextAreaBlur = (e: any) => {
	console.log(e.detail.value)
}
const bindTextAreaBlurHonor = (e: any) => {
	console.log(e.detail.value)
}

const showInfomation = (type: any, title: string) => {
	uni.showToast({
		title: title,
		icon: type,
		duration: 2000,
		mask: true,
		position: 'top',
		success: () => {
			console.log('success')
		},
		fail: () => {
			console.log('fail')
		},
		complete: () => {
			console.log('complete')
		}
	})
}
</script>

<style scoped lang="less">
.icon-title {
	font-size: 18px;
	font-weight: 600;
	margin-left: 16px;
}

.forms-wrapper {
	margin-top: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	// 表单样式
	.uni-form-item {
		display: flex;
		align-items: flex-start;
		width: 90%;
		flex-direction: column;
		margin-top: 10px;

		.title {
			font-size: 16px;
			font-weight: 600;
			margin-bottom: 10px;
		}

		.uni-input {
			width: 100%;
			height: 40px;
			border: 1px solid #ccc;
			border-radius: 5px;
			padding: 0 10px;
			font-size: 14px;

			&::-webkit-input-placeholder {
				color: #ccc;
			}
		}
	}

	.uni-list-cell-left {
		// width: 100px;
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 10px;
		// width: 100%;
	}

	.uni-list-cell-db {
		width: 100%;
		font-size: 20px;

		.uni-select {
			width: 100%;
			height: 40px;
			// border: 1px solid #ccc;
			border-radius: 5px;
			padding: 0 5px;
			font-size: 18px;
			display: flex;
			align-items: center;
			border-top: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
			justify-content: space-between;

			&::-webkit-input-placeholder {
				color: #ccc;
			}
		}
	}

	.text-area {
		// width: 100%;
		height: 200px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 10px;
		font-size: 14px;
		margin-bottom: 10px;

		&::-webkit-input-placeholder {
			color: #ccc;
		}
	}

	.uni-btn-v {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-top: 20px;

		button {
			width: 40%;
			height: 40px;
			border-radius: 5px;
			border: 1px solid #ccc;
			background-color: #fff;
			font-size: 16px;
			font-weight: 600;
		}
	}
}
</style>
