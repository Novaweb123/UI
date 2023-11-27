import {translations as malay} from "../languages/malay.language";
import {translations as english} from "../languages/english.language";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setLanguageText} from "../store/reducers/app.reducer";

const useTranslations = () => {
    const dispatch = useDispatch()
    const [lang, setLang] = useState(window.localStorage.getItem('language'))

    const getDefaultLanguage = () => {
        const currentLang = window.localStorage.getItem('language')
        return currentLang
    }
    const setDefaultLanguage = (lang) => {
        setLang(lang)
        return window.localStorage.setItem('language', lang)
    }

    const getLanguageTranslations = () => {
        if (lang === 'malay') {
            dispatch(setLanguageText(malay))
        } else {
            dispatch(setLanguageText(english))
        }
    }
    useEffect(()=>{
        getLanguageTranslations()
    },[lang])

    return {
        getDefaultLanguage,
        setDefaultLanguage,
        getLanguageTranslations
    }

}
export default useTranslations


