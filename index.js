const request = require('request-promise');


var vk_id = 123;
var api_token = 'apitoken';




/*
* Отправить рулоны
* id - кому 
* summa - целое число, сумма перевода
* cb - ответ сервера
*/
function send(id,summa,cb){

  request(
    'https://paper.12kot3k.ru/api.php',
    {   
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
       method: 'send_score',
       token: api_token,
       to: id,
       amount: summa
     },
     json: true,
     method: 'POST'
   }
   ).then((response)=>{
     console.log(response);
      cb(response['success']);

   });
 }

 // {"success":true,"amount":100,"to":"{ID кому}","current":56}

/*
* Получить баланс
* id - чей баланс узнать
* cb - ответ от сервера
*/
 function score(id,cb){
  request(
    'https://paper.12kot3k.ru/api.php',
    {   
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
       method: 'score',
       token: api_token,
       id: id
     },
     json: true,
     method: 'POST'
   }
   ).then((response)=>{
    cb(response.score);
  });
 }
 // {"success":true,"score":"10568"}


 /*
 * Получить список переводов
 * last_tx_id - номер последнего перевода после которого показать переводы
 *
 */
 function txList(last_tx_id){
    request(
            'https://paper.12kot3k.ru/api.php',
            {   
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
   method: 'tx_list',
   token: bot_merch_key,
   lastTx:last_tx_id
},
                json: true,
                method: 'POST'
            }
        ).then((response)=>{
          
          var txs = response['tx_list'];
          if(txs.length>0){
          console.log('получено %s транзакций',txs.length);
        }
      });
 }

//  {
// "success": true,
// "tx_list": [
// {
// "id": "39",
// "from": "422584481",
// "to": "294109637",
// "score": "2000",
// "time": "2020-02-12 21:27:09"
// },
// {
// "id": "38",
// "from": "422584481",
// "to": "294109637",
// "score": "1000",
// "time": "2020-02-12 21:27:09"
// }
// ]
// }

/*
* Получить ссылку на перевод
* id кому перевод
* summa - сумма
*/
function get_link(id,summa){
  return "https://m.vk.com/app7361871#t"+id+"_"+summa;
}
