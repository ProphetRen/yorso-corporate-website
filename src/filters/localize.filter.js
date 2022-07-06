import store from "../store";


export default function localizeFilter (key){
        let locales = store.state.locales
        let locale = store.state.locale
        return locales[locale][key]
}