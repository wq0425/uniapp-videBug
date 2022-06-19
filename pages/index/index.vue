<template>
	<view class="content">
		<button @tap="btn">跳转video-list.vue页面</button>
		<button @tap="btn2">跳转video-list2.nvue页面</button>
	</view>
</template>

<script>
	import VideoList3 from '@/components/video-list3.nvue'
	export default {
		components: {
			VideoList3
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			btn() {
				uni.navigateTo({
					url: `/components/video-list`
				});
			},
			btn2() {
				uni.navigateTo({
					url: `/components/video-list2`
				});
			}
		}
	}
</script>

<style>
	
</style>
