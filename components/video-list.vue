<template>
	<view>
		<button @tap="listBtn">视频</button>
		<view>此处slider很正常：</view>
		<slider
			block-size="12"
			
			:step="1"
			:value="0"
			backgroundColor="#A8A8A8"
			activeColor="#FFEE83"
			block-color="#ff0"
			
		/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			listBtn() {
				uni.navigateTo({
					url: `/components/video`
				});
			}
		}
	}
</script>

<style>

</style>
