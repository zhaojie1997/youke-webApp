<template>
    <div>
        <div style="height: 40px;font-size: 20px;display: flex;justify-content: center;align-items: center; background-color: #f8f8f8">
            <div style="width: 40px;display: flex;justify-content: space-between; align-items: center;">
                <img src="../../../public/images/1213.png" alt="" style="width: 30px;height: 30px"></div>
            <div style="width: 400px">常见问题</div>
        </div>

        <van-collapse v-model="activeNames">
            <van-collapse-item title="账号如何升级，如何获取经验值？" name="1">
                1.每日登录使用柚课，获得10经验
                2.每日观看视频，获得10经验
                3.为视频关注，每个硬币获得10经验，每日上限50经验
                4.每日首次点击分享视频至其他App（除复制链接）后直接返回柚课App，获得5经验值
                5.完善账号信息奖励，第一次绑定邮箱获得20经验值，第一次绑定手机获得100经验值，第一次设置密保获得30经验值，第一次实名认证获得50经验。
            </van-collapse-item>
            <van-collapse-item title="视频播放异常（包括黑屏、音画不同步、没有声音、花屏、播放卡顿）" name="2">
                1.检查是否当前视频源问题，更换其他视频查看播放情况；
                2.检查是否解码问题，去设置中选择不同解码器，重复尝试；
                3.检查网络情况，切换WiFi/4G网络检查播放情况；
                4.如果以上方法还是解决不了问题，请联系客服并提交相应日志。
            </van-collapse-item>

            <van-collapse-item title="绑定的手机号和邮箱注销了怎么办？是否可以进行解绑呢？" name="3">
                您好，当前已绑定的手机号或邮箱是无法进行直接的解绑操作的呢。
                若您当前账号可以正常登陆且该账号有绑定的邮箱可用的情况下，您可以在个人中心-账号安全进行自助绑定或换绑;
                若您当前记得账号密码可登录，但未绑定，或当前账号绑定的邮箱不可用的情况下使用账号申述后台填写申述工单
            </van-collapse-item>
            <van-collapse-item title="Y币充值未到账怎么办？" name="4">
                您好，通过支付或者微信进行充值后若未即时到账，可能是存在延迟的情况，还请耐心等待一下哦。
                若您是IOS客户端通过app store充值后未能够到账，请您在收到app store的支付收据后将您的柚课
                昵称及邮件中的收据截图通过在线客服系统工单形式发送给我们，并附上您的具体问题内容，如Y币充值未到账，金额：XX元。
            </van-collapse-item>
            <van-collapse-item title="如何获得会员积分？获得的积分有效期是多久？？" name="5">您好，您可以通过承包番剧、官方纪录片等其他类视频获得会员积分，每成功承包1B币（不含B币券）可获得50点会员积分。会员积分是长期有效的哦~</van-collapse-item>
            <van-collapse-item title="视频无法播放问题（包括无限小电视、视频加载失败、崩溃）" name="6">问题排查：
                1.检查是否当前视频源问题，更换其他视频查看播放情况；
                2.检查是否网络劫持，播放设置中打开启用https播放开关；
                3.检查是否解码问题，去设置中选择不同解码器，重复尝试；
                4.检查网络情况，切换WiFi/4G网络检查播放情况； 5. 如果以上方法还是解决不了问题，请联系客服并提交相应日志。
            </van-collapse-item>

        </van-collapse>
        <div style="width: 3.75rem; text-align: center;font-size: 0.14rem;color: #969696">要有更多问题</div>
        <div style="width: 3.75rem;height: 0.2rem; text-align: center;font-size: 0.14rem;color: #969696">自行解决</div>
        <div style="width: 3.75rem;height: 0.2rem; text-align: center;font-size: 0.14rem;color: #969696">就是这么皮</div>
        <van-cell  @click="showPopup" style="width: 0.9rem;border: 0.01rem solid darkgray;border-radius: 0.1rem;margin-left: 1.5rem;position: fixed;bottom: 0; ">反馈意见</van-cell>

        <van-popup v-model="show" style="font-size: 0.14rem;width: 3.5rem;height: 1.2rem;border-radius: 0.1rem;text-align: center">
            <div style="font-size: 0.14rem;width: 3rem;height: 1rem;border-radius: 0.1rem;display: flex;align-items: center;color: #20d81f;margin-left: 0.2rem">请下载手机端app....算了,你下载也没用，因为我们没写.</div>
        </van-popup>


    </div>
</template>

<script>
    export default {
        name: "feedback",
        data() {
            return {
                activeNames: ['1'],
                show: false
            };
        },
        methods: {
            showPopup() {
                this.show = true;
            }
        }
    }
</script>

<style scoped>

</style>
