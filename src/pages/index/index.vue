<template>
	<view class="block" :style="{ height: capsuleTop + 'px' }"></view>
	<view class="icon-title" :style="{ height: capsuleHeight + 'px', lineHeight: capsuleHeight + 'px' }">ibee积分小站
	</view>
	<view class="user-info">
		<view class="user-info-left">
			<img :src="avter" alt="可爱捏" class="user-avter" />
			<view class="user-info-detail">
				<view class="user-info-detail-top">
					<view class="user-name">
						{{ userData.userName }}
					</view>
					<view class="user-leve">
						{{ userData.userLeve }}
					</view>
				</view>
				<view class="user-status">
					连续登录<span class="user-status-data">{{ userData.userLoginDay }}</span>天 累计刷题 <span class="user-status-data">{{
						userData.userBushQuetions }}</span>道
				</view>
			</view>
		</view>
		<view class="user-info-right">
			<view class="user-info-setting">
				<img :src="settingImg" alt="" class="setting-img">
			</view>
			<view class="user-info-money">
				<img :src="moneyImg" alt="" class="money-img">
				<view>{{ userData.userMoney }} 挨币</view>
			</view>
		</view>
	</view>
	<view class="banner-swiper">
		<swiper class="swiper" :indicator-color="ponitcolor" :indicator-active-color="currentcolor" circular="true"
			:indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="item in listimg">
				<view class="swiper-item"><img :src="item" alt="" class="swiper-img"></view>
			</swiper-item>
		</swiper>
	</view>
	<view class="tools-content">
		<view class="random-question" @click="goToQuestion">
			<view class="title">随缘刷题</view>
			<view class="detail">随机题型，随机难度<view>成为六边形大佬的必修课</view>
			</view>
		</view>
		<view class="class-question">
			<view class="title">分类刷题</view>
			<view class="detail">专项突破，补齐短板
				<view>
					下一个满绩的积佬就是你
				</view>
			</view>
		</view>
		<view class="featured-question">
			<view class="title">精选题库</view>
			<view class="detail">
				期中期末，竞赛考研
				<view>
					各类优质积分题目任君挑选
				</view>
			</view>
		</view>
		<view class="about-us">
			<view class="about">关于我们</view>
			<view class="thanks">特别鸣谢</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import avter from "@/static/user/avter.png"
import settingImg from '@/static/user/setting.png'
import moneyImg from '@/static/user/money.png'
import swiperImg1 from '@/static/swiper/1.png'
const menuButtonObject = uni.getMenuButtonBoundingClientRect()
const capsuleTop = ref(menuButtonObject.top || 30)
const capsuleHeight = ref(menuButtonObject.height || 30)
const userData = ref({
	userImg: avter,
	userName: "toki",
	userLeve: "积不如人",
	userLoginDay: "28",
	userBushQuetions: "13",
	userMoney: "100"
})
const indicatorDots = true,//是否显示面板指示点 就是下面那个小圆点
	autoplay = true,//是否自动播放
	ponitcolor = "#777676",//指示点的颜色
	currentcolor = "#D8D8D8",//当前指示点颜色
	interval = 2000,
	duration = 500


const listimg = [
	swiperImg1,
	swiperImg1,
	swiperImg1,
	swiperImg1
]

const goToQuestion = () => {
	uni.navigateTo({
		url: '/pages/bushquetions/index'
	})
}

</script>

<style scoped lang="less">
.icon-title {
	font-size: 18px;
	font-weight: 600;
	margin-left: 16px;
}

.user-info {
	height: 65px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;

	.user-info-left {
		display: flex;
		height: 65px;
		width: 250px;
		justify-content: flex-start;
		align-items: center;
		margin-left: 16px;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.user-avter {
			width: 64px;
			height: 64px;
			border-radius: 50%;
		}

		.user-info-detail {
			margin-left: 12px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: flex-start;

			.user-info-detail-top {
				display: flex;
				align-items: center;
				height: 22px;

				.user-name {
					font-size: 16px;
					font-weight: 600;
					line-height: 22px;
					letter-spacing: -0.2800000011920929px;
					text-align: center;
				}

				.user-leve {
					width: 50px;
					height: 16px;
					font-size: 10px;
					text-align: center;
					background-color: #DCBD71;
					margin-left: 10px;
					border-radius: 4px;
				}
			}

			.user-status {
				margin-top: 5px;
				width: 173px;
				height: 14px;
				font-size: 12px;
				font-weight: 400;
				line-height: 17px;
				letter-spacing: 1px;
				text-align: left;
				color: #777676;

				.user-status-data {
					color: #000;
				}
			}
		}
	}

	.user-info-right {
		width: 100px;
		// background-color: red;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 65px;
		justify-content: space-around;

		.user-info-setting {
			.setting-img {
				width: 25px;
				height: 25px;
			}
		}

		.user-info-money {
			// width: 100px;
			height: 40px;
			// background-color: #ccc;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 12px;

			.money-img {
				width: 25px;
				height: 25px;
				margin-left: 5px;
			}
		}
	}
}

.banner-swiper {
	width: 393px;
	height: 152px;
	// background-color: red;
	display: flex;
	justify-content: center;
	align-items: center;

	.swiper {
		width: 393px;
		height: 152px;
		display: flex;
		justify-content: center;
		align-items: center;

		.swiper-item {
			width: 393px;
			height: 152px;
			position: relative;

			.swiper-img {
				left: 9px;
				top: 3px;
				position: absolute;
				width: 357px;
				height: 152px;
			}
		}
	}

}

.tools-content {
	margin-left: 10px;
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: flex-start;

	.random-question {
		height: 150px;
		width: 174px;
		border-radius: 10px;
		box-shadow: 0px 4px 4px 0px #00000040;
		background: rgba(217, 141, 141, 1);
		overflow: hidden;
		padding: 10px;
		box-sizing: border-box;

		.title {
			font-size: 18px;
			font-weight: 400;
			line-height: 25px;
			letter-spacing: 0em;
			text-align: left;
			margin-left: 5px;
		}

		.detail {
			font-size: 12px;
			margin-left: 5px;
			line-height: 15px;
		}
	}

	.class-question {
		height: 150px;
		width: 174px;
		border-radius: 10px;
		box-shadow: 0px 4px 4px 0px #00000040;
		background: rgba(113, 207, 220, 0.8);

		overflow: hidden;
		margin-left: 7px;
		padding: 10px;
		box-sizing: border-box;

		.title {
			font-size: 18px;
			font-weight: 400;
			line-height: 25px;
			letter-spacing: 0em;
			text-align: left;
			margin-left: 5px;
		}

		.detail {
			font-size: 12px;
			margin-left: 5px;
			line-height: 15px;
		}
	}

	.featured-question {
		height: 150px;
		width: 174px;
		border-radius: 10px;
		box-shadow: 0px 4px 4px 0px #00000040;
		background: rgba(220, 216, 113, 0.8);
		margin-top: 20px;
		overflow: hidden;
		// margin-left: 5px;
		padding: 10px;
		box-sizing: border-box;

		.title {
			font-size: 18px;
			font-weight: 400;
			line-height: 25px;
			letter-spacing: 0em;
			text-align: left;
			margin-left: 5px;
		}

		.detail {
			font-size: 12px;
			margin-left: 5px;
			line-height: 15px;
		}
	}

	.about-us {
		height: 150px;
		width: 174px;
		border-radius: 10px;
		box-shadow: 0px 4px 4px 0px #00000040;
		margin-top: 20px;
		overflow: hidden;
		margin-left: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		.about {
			width: 174px;
			height: 70.16831970214844px;
			border-radius: 10px;
			box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
			background: rgba(113, 220, 123, 0.8);
			font-size: 18px;
			font-weight: 400;
			padding: 10px 8px;
			box-sizing: border-box;
		}

		.thanks {
			width: 174px;
			height: 70.16831970214844px;
			border-radius: 10px;
			box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
			background: rgba(115, 113, 220, 0.8);
			font-size: 18px;
			font-weight: 400;
			padding: 10px 8px;
			box-sizing: border-box;
		}

	}
}
</style>
