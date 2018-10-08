var kbMoodleSubmit = document.getElementById("kb_moodle_submit");
var moodleLinkEle = document.getElementById("kb_moodle_link");
var moodleDescEle = document.getElementById("kb_moodle_desc");
var kbStatus = document.getElementById("kb_status");
var kbTextArea = document.getElementById("kb_textarea");
var Article = /** @class */ (function () {
    function Article(moodleLink, moodleDetail) {
        this.moodleLink = moodleLink;
        this.moodleDetail = moodleDetail;
        var link = document.createElement("a");
        link.href = moodleLink;
        link.innerText = moodleLink;
        this.htm =
            "\n        <!-- Start -->\n\n        <div style=\"font-family:Arial,Helvetica,sans-serif;background:#6F2050;border:1px solid #6F2050;padding:5px 10px;\">\n        <span style=\"color:#FFFFFF\"><strong>Article owned by team:</strong></span>\n            <span style=\"color:#fff\">Learning and Teaching Development</span>\n        </div>\n        <span>&nbsp;</span>\n        <div style=\"font-family:Arial,Helvetica,sans-serif;background:#6F2050;border:1px solid #6F2050;padding:5px 10px;\">\n            <span style=\"color:#FFFFFF\"><strong>Brief:</strong></span>\n        </div>\n        <p><span style=\"font-family:Arial,Helvetica,sans-serif;color:#000\">Learn how to: " + moodleDetail + "</span></p>\n\n        <div style=\"background:#6F2050;border:1px solid #6F2050;padding:5px 10px;\">\n            <span style=\"color:#fff\"><strong>Detail:</strong></span>\n        </div>\n        <p><span style=\"color:#000\">Click here to be taken the Moodle course on this topic: " + link + "</span></p>\n\n        <div style=\"font-family:Arial,Helvetica,sans-serif;background:#6F2050;border:1px solid #6F2050;padding:5px 10px;\">\n            <span style=\"color:#FFFFFF\"><strong>Further information:</strong></span>\n        </div>\n        <p>Contact: <span style=\"color:#000\">Learning and Teaching Development</span> through case creation<span style=\"font-family:arial,helvetica,sans-serif\">.</span></p>\n        \n        <!-- End -->\n        ";
    }
    return Article;
}());
function submitForm() {
    var moodleLink = moodleLinkEle.value;
    var moodleDesc = moodleDescEle.value;
    if (moodleLink == "" || moodleDesc == "") {
        kbStatus.innerText = "Please fill forms";
        return;
    }
    moodleLinkEle.value = "";
    moodleDescEle.value = "";
    var a = new Article(moodleLink, moodleDesc);
    kbTextArea.innerText = a.htm;
}
kbMoodleSubmit.onclick = function (e) { submitForm(); };
