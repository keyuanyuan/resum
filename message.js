var APP_ID = '1XK9xBAQSpTQP4SBsvwMw2pH-gzGzoHsz';
var APP_KEY = 'IfjvcPHijO0njvamzwhlIsdf';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function (e) {
    // 阻止默认事件刷新页面
    e.preventDefault()
    let guestName = myForm.querySelector('input[name=guestName]').value
    let content = myForm.querySelector('input[name=content]').value
    console.log(guestName)
    console.log(content)
    // 修改为保存Message数据到LeanCloud
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        guestName: guestName,
        content: content,
    }).then(function (object) {
        alert('存入成功!')
    })
})

var query = new AV.Query('Message')
query.find()
    .then(function (messages) {
        console.log(messages)
        console.log(messages[0].attributes)
        console.log(messages[1].attributes)
        let array = messages.map((item)=> item.attributes)
        array.forEach((item)=> {
            let li = document.createElement('li')
            li.innerText = item.content
            let messageList = docement.querySlector('#messageList')
            messageList.appendChild(li)
        });
    }, function (error) {
        // 异常处理
    }).then(()=>{},(error)=>{
        console.log(error)
    })


// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })