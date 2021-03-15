import { CHANGE_LANGUAGE } from "../types"

export const changeLanguageAction = (payload) => {
    return {
        type: CHANGE_LANGUAGE,
        payload
    }
}