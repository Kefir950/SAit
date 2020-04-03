# papergame-api-js
API для игры Бумага на javascript

Создать апи ключ - https://m.vk.com/app7361871#create_merchant

Установить

npm i node-papergame-api


Использование

const PaperApi = require ('node-papergame-api');
const api = new PaperApi('апи ключ','vk id бота');

Функции

# Получить ссылку на перевод
@summa - сумма

let transfer_link = api.get_link(summa);


# Получить список переводов
@last_tx_id - номер последнего перевода после которого показать переводы

api.txList(last_tx_id,(err,resp)=>{
if(err) return;
if(resp.length>0){
  console.log('Получено '+resp.length+' транзакций');
}
});

# Узнать баланс

@id - чей баланс узнать
@cb - ответ от сервера

  api.score(1234 ,(score)=>{
    console.log('Получен баланс: '+score);
  });

# Отправить рулоны

api.send(1234, 10000, (res)=>{
  console.log('Результат отправки: '+res['success']);
});
