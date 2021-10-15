$(function () {

/*    //调整模块的高度
    var banner = $("#BannerBox2");
    //alert(banner);
    banner.css("height", "200px").empty();//.append("<div class='moduleBannerImage'><img src=" + url + " /></div>");
*/
});

function changeBanner(url) {
    var banner = $(".moduleBannerImage img");
    //alert('url('+ url +);')
    //banner.css("background-image", "url("+ url +");");
    //alert(banner+","+url);
    //调整模块的高度
    banner.attr("src", url);
    //alert(banner);
    var bannerbox2 = $("#BannerBox2");
    bannerbox2.parent().next().css("position", "absolute");

}

function changeBackground() {


}
function showModuleDetail(id) {
    location.href = "/Module/Details/" + id;
}

function showModuleList(id) {
    location.href = "/Module/List/" + id;
}