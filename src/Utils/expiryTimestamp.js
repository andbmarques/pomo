import { getTime } from "./getTime";

export const getExpiryTimestamp = (context) => {
    const time = new Date();

    return time.setSeconds(time.getSeconds() + getTime(context.data.focusMinutes, context.data.focusSeconds));
}