import Vue from "vue";
import Vuex from "vuex";
import auth from './auth'
import info from './info'
import record from "./record";

Vue.use(Vuex);

let myHeaders = new Headers();
myHeaders.append("apikey", "usIFgDpKh28Jx9aF8KJcyA1G4kM4C4yD");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

export default new Vuex.Store({
    state: {
        error: null,
        locales: {
            ru: {
                'Bill': 'Счёт',
                'Currency_account': 'Счёт в валюте',
                'Exchange_rates': 'Курс валют',
                'News': 'Новости',
                'For_new_workers': 'Для новых сотрудников',
                'Activities': 'Активности',
                'Add_post': 'Добавить запись',
                'Company_details': 'Информация о компании',
                'For_new_workers_main_heading': 'Информация о компании Yorso для новых сотрудников',
                'first_question_heading': 'YORSO это онлайн платформа направленная на цифровую трансформацию международных B2B поставок рыбы и морепродуктов.',
                'first_question_first_paragraph': 'YORSO это веб-сервис для автоматизации маркетинга, продаж, закупок и логистики для крупнооптового рынка рыбы и морепродуктов. Он включает Маркетплейс, инструменты измеряемого маркетинга, специальную CRM, средства аналитики и автоматизации рутинных операций при продажах и закупках.',
                'first_question_second_paragraph': 'Наша команда постоянно совершенствует и предлагает нестандартные инструменты для упрощения ведения бизнеса нашими клиентами. Мы занимаемся бизнесом с 2011 года и сочетаем экспертизу построения сложных технологических платформ и международынх B2B продаж на рынке рыбы и морепродуктов. Занимаясь классическим офлайн трейдингом мы самостоятельно столкнулись с проблемами масштабирования продаж и правильной работы с клиентской базой и маркетингом, что и послужилось рождению идеи создания системы YORSO, которая как идея появилась в 2013 году.',
                'first_question_third_paragraph': ' YORSO сокращает количество посредников в цепочке продаж, что напрямую влияет на конечную прибыльность поставщиков и покупателей Мы создали систему специально ориентированную на B2B сектор рыбы и морепродуктов. Мы нацелены на простоту и надежность ведения бизнес операций в данной индустрии. Что мы предлагаем?',
                'second_question_heading': 'Для поставщиков рыбы и морепродуктов:',
                'second_question_first_item': 'Размещение товаров в онлайн каталоге и создание онлайн представительства компании',
                'second_question_second_item': 'Доступ к новым рынкам и географии покупателей',
                'second_question_third_item': 'Маркетинговые инструменты с измерением эффективности по различным каналам продвижения',
                'second_question_fourth_item': 'Блокчейн аукционы для продажи уникальных лотов продукции по заранее оговоренным правилам',
                'third_question_heading': ' Для крупнооптовых покупателей и дистрибьютеров:',
                'third_question_first_item': 'Онлайн каталог 24 / 7 с предложениями со всего мира',
                'third_question_second_item': 'Детальная спецификация по каждой из позиций',
                'third_question_third_item': 'Размещение заказов в удобное для вас время',
                'third_question_fourth_item': 'Поиск товаров и поставщиков в один клик',
                'third_question_fifth_item': 'Подписка на интересующие группы товаров или размещение запроса на поиск чего-то уникального',
                'third_question_sixth_item': 'Прямые поставки от производителей и рыбодобытчиков',
                'third_question_seventh_item': 'Решение вопросов логистики, растаможки и документооборота',
                'Delete': 'Удалить'
            },
            en: {
                'Bill': 'Bill',
                'Currency_account': 'Currency account',
                'Exchange_rates': 'Exchange rates',
                'News': 'News',
                'For_new_workers': 'For new workers',
                'Activities': 'Activities',
                'Add_post': 'Add post',
                'Company_details': 'Company Details',
                'For_new_workers_main_heading': 'Information about Yorso for new workers',
                'first_question_heading': 'Yorso is a technology product aimed to support the international B2B fish and seafood wholesale market to extend relationships online for sustainable growth.',
                'first_question_first_paragraph': 'Yorso delivers customer friendly online solutions for automation sales, marketing, purchases and logistics on fish and seafood B2B wholesale market. The services include Marketplace, performance marketing tools, industry focused CRM, analytics and automation of sales and purchases routines.',
                'first_question_second_paragraph': 'Our dedicated team always works together to implement new non-standard and efficient instruments to make business operations easier for our clients. We make business since 2011 and have more than 12 years of experience in B2B international trading. While doing things offline we realized which problems exist on this market and started implementing Yorso system from scratch since 2013. ',
                'first_question_third_paragraph': 'Using Yorso significantly improves the profitability for both producers and buyers and makes the time of sales business operations more efficient. We created the B2B system especially focused on fish and seafood market. Cooperation with us is a simple and reliable way to do business in this industry.',
                'second_question_heading': 'For fish and seafood producers:',
                'second_question_first_item': 'Place products in the system ',
                'second_question_second_item': 'Access new markets and clients ',
                'second_question_third_item': 'Solve logistics and document issues ',
                'second_question_fourth_item': 'Blockchain auctions for the sale of lots of products according to pre-agreed rules',
                'third_question_heading': ' For wholesale buyers and fish mongers:',
                'third_question_first_item': 'Online catalog with best offers worldwide 24 / 7 ',
                'third_question_second_item': 'Detailed product description ',
                'third_question_third_item': 'Place an order any time you want ',
                'third_question_fourth_item': 'Search for products in one click ',
                'third_question_fifth_item': 'Subscribe for product updates or request non-existing one ',
                'third_question_sixth_item': 'Direct supply from producers ',
                'third_question_seventh_item': 'Solve logistics, customs and paper work issues ',
                'Delete': 'Delete'
            }
        },
        locale: 'ru',
    },
    mutations: {
        setError(state, error) {
            state.error = error
        },
        clearError(state) {
            state.error = null
        }
    },
    actions: {
        async fetchCurrency() {
            var myHeaders = new Headers();
            myHeaders.append("apikey", "usIFgDpKh28Jx9aF8KJcyA1G4kM4C4yD");

            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };

            const res = await fetch("https://api.apilayer.com/fixer/latest?symbols=RUB,EUR,USD&base=USD", requestOptions)
            return await res.json()
        }
    },
    getters: {
        error: s => s.error
    },
    modules: {
        auth, info, record
    },
});
