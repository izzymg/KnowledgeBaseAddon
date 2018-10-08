let kbMoodleSubmit = document.getElementById("kb_moodle_submit");
let kbArticle = document.getElementById("kb_article");
let kbStatus = document.getElementById("kb_status");
let kbArticleBrief = document.getElementById("kb_brief");
let kbArticleDetail = document.getElementById("kb_detail");
let kbTextArea = document.getElementById("kb_textarea");

kbMoodleSubmit.onclick = function(e) {
    let moodleLink = document.getElementById("kb_moodle_link").value;
    let moodleDesc = document.getElementById("kb_moodle_desc").value;
    if(moodleLink == "" || moodleDesc == "") {
        kbStatus.innerText = "Please fill forms";
        return;
    }
    kbArticleBrief.innerHTML = "Learn how to: " + moodleDesc;
    kbArticleDetail.innerHTML = "Click here to go to the Moodle Training article: <a href='" + moodleLink + "'>" + moodleLink + "</a>";
    let articleHtml = kbArticle.outerHTML.replace("<div id=\"kb_article\" style=\"display: none\">", "");
    kbTextArea.innerText = articleHtml.substr(0, articleHtml.lastIndexOf("</div>") - 1);
};
