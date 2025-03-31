import { InlineKeyboard } from "grammy";

const firstRow = [['Create User', 'option_1'], ['Bot Deployment', 'option_2'], ['Console', 'option_3']]

const secondRow = [['Setting', 'option_4'], ['Purchase', 'option_5']]

const thirdRow = [['API List', 'option_6'], ['YouTube', 'option_6'], ['Google', 'option_6']]

const firstButtonRow = firstRow.map(([label, data]) => InlineKeyboard.text(label, data));
const secondButtonRow = secondRow.map(([label, data]) => InlineKeyboard.text(label, data));
const thirdButtonRow = thirdRow.map(([label, data]) => InlineKeyboard.text(label, data));

const mainMenu = InlineKeyboard.from([firstButtonRow, secondButtonRow, thirdButtonRow])

export default mainMenu;