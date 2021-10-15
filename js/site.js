$(function () {
    // Bind the resize event. When the window size changes, update its corresponding
    // info div.
    $(window).resize(function () {


        if (document.body.clientHeight < 500) {
            //alert("��վ��֧�ֱַ���̫�͵��������\r\n������������������ٷ��ʱ�վ����л������⡣");
            window.resizeTo(document.body.clientHeight, 500);
        }
        else {

            var elem = $(this);
            var deheight = elem.height();
            var dewidth = elem.width();

            var bh = 330;//bannerheight
            var nh = 300;
            var lh = 160;
            if (deheight < 780)//768
            {
                //bh = 188;
                nh = 270;
                lh = 180;
            }
            else if (deheight > 895 && deheight < 905)//900
            {
                //bh = 270;
                lh = 180;
            }
            else if (deheight > 1075 && deheight < 1085) //1080
            {
                nh = 330;
                lh = 200;
            }
            else if (deheight > 1435 && deheight < 1445) //1440
            {
                nh = 330;
                lh = 250;
            }
            else {
                nh = 330;
                lh = 220;
            }

            $("#BannerBox").css("height", bh + "px");
            $(".NewsClass").css("height", nh + "px");
            $(".linkbox").css("height", lh + "px");
            //$('#txtResize').val('' + dewidth + ', ' + deheight);

        }
    });

    // Updates the info div immediately.
    $(window).resize();

    $(".siteLanguage li").on("click", function () {
        var id = $(this).children("input").val();
        //alert(id);
        $("#siteLanguageName").load("/Home/SetLanguage", { "id": id });
        //location.href = "/";
    });

    var indexNC = $(".NewsClass ul li");
    var len = indexNC.length;
    for (i = 0; i < len; i++) {
        indexNC.eq(i).attr("class", "news" + i + "UnActive");
    }

    
    indexNC.eq(0).attr("class", "news0Active");
    $("#indexNewsBox").load("/Home/IndexModuleBox", { "id": "1" });
    //indexNC.eq(0).click();

    //�޸ĳɹ�˾���
    indexNC.on("mouseover", function () {
        //��껮����ǰ����ʱ���¸÷����ͼ��
        var n = $(this).index();
        for (i = 0; i < len; i++) {
            indexNC.eq(i).attr("class", "news" + i + "UnActive");
        }
        $(this).attr("class", "news" + n + "Active");

    
        

/*
        $("#IndexNewsImageBox").load("/Home/IndexNewsTop", { "id": id }, function () {
            //alert("�ύ�ɹ�");
        });

        $("#IndexNewsListBox").load("/Home/IndexNewsList", { "id": id }, function () {
            //alert("�ύ�ɹ�");
        });

        $("#NewsListBox").load("/News/NewsList", { "id": id }, function () {
            //alert("�ύ�ɹ�");
        });*/

    });

    var indexNewsList = $(".NewsClass ul li");
    indexNewsList.on("mouseover", function () {
        var n = $(this).index();
        var id = $(this).children("input[type=hidden]").val();
        if (n > 0) {
            //��0ҳ���������б�
            $("#indexNewsBox").load("/Home/IndexNewsBox", { "id": id }, function () {
                //alert("indexNewsBox");
            });
        }
        else {
            //
            $("#indexNewsBox").load("/Home/IndexModuleBox", { "id": id }, function () {
                //alert("IndexModuleBox");
            });
        }
});

    indexNC.eq(0).mouseover();

    //��ҳ��������������б��¼���
    var nc2 = $("#indexNewsClass11 ul li");
    nc2.on("mouseover", function () {
        //alert("1111111");
        var id = $(this).children("input[type=hidden]").val();
        $("#IndexNewsImageBox").load("/Home/IndexNewsTop", { "id": id }, function () {
            //alert("��ҳ��������������б��¼���");
            //alert($(".newsTable .newsTitle").text());
            //$(".newsTable .newsTitle").text($(".newsTable .newsTitle").text().substr(0,15));
        });

    });


    //���Ŷ���ҳ����������������б��¼���
    var nc = $("#NewsClassList ul li");
    nc.on("mouseover", function () {
        var id = $(this).children("input[type=hidden]").val();
        var len = nc.length;
        for (i = 0; i < len; i++) {
            nc.eq(i).removeClass("newClassSelected");
        }
        $(this).addClass("newClassSelected");

        $("#NewsListBox").load("/News/NewsList", { "id": id }, function () {
            //alert("�ύ�ɹ�");
        });
    });
    $("#NewsListBox").load("/News/NewsList", { "id": "1" });
});

function newsTitleFormat(title,len) {
    return title.substr(0, len);
}

function changeBackground() {


}
function showNewsDetail(id) {
    location.href = "/News/Details/" + id;
}

function showNewsList(id) {
    location.href = "/News/Index/" + id;
}