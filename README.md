# GoogleMeet-Spammer
This is a script for spam in meet.google.com.

[English](#English)<br/>
├───[Launch](#Launch)<br/>
└───[Tips](#Tips)<br/>
<br/>
[Русский](#Русский)<br/>
├───[Запуск](#Запуск)<br/>
└───[Советы](#Советы)<br/>

# English
## Launch
1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser and click the "Create New Script" button.
2. In the window that appears, insert the Russian version of the script (they differ only in text).
3. Click "File" > "Save" on top of the editing window.
4. After that run the script through the icon in the extensions and go to [https://meet.google.com/](https://meet.google.com/).
5. Click on ~, it is at the bottom of the ESC key.
6. In the window that opens select the number of pages, the page the script will enter and spam, and the message the script will write.
7. After that the script will constantly request access and reload if the time has expired or it has been rejected. If access has been granted, the script will spam chat if possible and continually raise your hand. Just in case, it is better to click on the tab that is connected, so that everything is fully loaded.

## Tips
* If you need to spam from another account, either go to another browser or add it to Google and specify its id via the authuser parameter. It should look something like this `https://meet.google.com/abc-abcd-abc?authuser=1`.
* The browser may crash if you specify too many pages.
* Do not use chat spammer to send ads or abusive messages, preferably.
* You cannot hold me responsible for your actions. This tool was intended for educational purposes only. 

# Русский
## Запуск
1. Установите [Tampermonkey](https://www.tampermonkey.net/) в ваш браузер и нажмите на кнопку "Создать новый скрипт".
2. В появившемся окне вставьте русскую версию скрипта (отличаются они только текстом).
3. Нажмите сверху окна редактирования "Файл" > "Сохранить".
4. После этого запустите скрипт через иконку в расширениях и переходите на сайт [https://meet.google.com/](https://meet.google.com/).
5. Нажмите на ~, она находится снизу клавиши ESC.
6. В открывшемся окне выберите количество страниц, страницу на которую скрипт будет заходить и спамить, а также сообщение, которое скрипт будет писать.
7. После этого скрипт будет постоянно запрашивать доступ и перезагружать, если время истекло или его отклонили. Если же доступ был получен, то скрипт будет по возможности спамить в чат и постоянно поднимать руку. На всякий случай лучше нажать на вкладку, которая подключилась, чтобы полностью всё было прогруженно.

## Советы
* Если вам необходимо спамить с другого аккаунта, то либо перейдите в другой браузер, либо добавьте его в Google и укажите его id через параметр authuser. Должно это выглядеть примерно так `https://meet.google.com/abc-abcd-abc?authuser=1`.
* Браузер может крашнуть, если указать черезчур большое число в количестве страниц.
* Не используйте чат спаммер для рассылки рекламы или оскорбительных сообщений, желательно.
* Вы не можете возлагать на меня ответственность за свои действия. Этот инструмент был предназначен только в образовательных целях. 
