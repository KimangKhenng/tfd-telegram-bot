import { InlineKeyboard } from "grammy";

const settingKeyboard = new InlineKeyboard()
    .text("Set Color", 'set_color').text('Set Language', 'set_language')
    .row()
    .text("Set Timezone", 'set_timezone').text('Set Currency', 'set_currency')
    .row()
    .text("Set Notification", 'set_notification').text('Set Privacy', 'set_privacy')

export default settingKeyboard