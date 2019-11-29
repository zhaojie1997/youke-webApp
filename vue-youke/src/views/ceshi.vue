<template>
    <videoPlayer
            ref="videoPlayer"
            :options="videoOptions"
            class="vjs-custom-skin videoPlayer"
    />
</template>

<script>
    // import "video.js/dist/video-js.css";
    import { videoPlayer } from "vue-video-player";
    import "videojs-flash";
    export default {
        name: "app",
        data() {
            return {
                videoOptions: {
                    height: "260",
                    sources: [
                        {
                            type: "rtmp/mp4",
                            src:
                                "http://47.92.132.161:8000/video/youke/f6106bc8001046b8a5c314a51446518e15input.mp4/"
                        }
                    ],
                    techOrder: ['flash'],
                    muted: true, // 默认静音
                    preload: "auto", // 视频预加载
                    autoplay: true,
                    controls: true,
                    notSupportedMessage: "此视频暂无法播放，请稍后再试"
                }
            };
        },
        components: {
            videoPlayer
        }
    };
</script>