    if(document.querySelector('[name=author][content]')){
        var author=document.head.querySelector('[name=author][content]').content;//metaにauthor要素があった場合の処理
    }
    else{        
        var author= "E"//なかった場合の処理
    }

    var title = document.title;//タイトルを取得
    var today = new Date()//todayに日付を格納
        var year=today.getFullYear();//年を取得
        var month=today.getMonth()+1;//月を取得
        var date=today.getDate();//日を取得
    var url=location.href;//URLを取得

    if(author == "E"){
        author = "筆者情報は手動で入力してください";
        var result = author+"：”"+title+"”,"+url+",（"+year+","+month+","+date+" "+"閲覧）";
        var x = prompt('筆者情報がHTMLから取得できませんでした。手動で入力してください',result);
    }else{
        var result = author+"：”"+title+"”,"+url+",（"+year+","+month+","+date+" "+"閲覧）";
        var x = prompt('コピーしてください。',result);
    }
